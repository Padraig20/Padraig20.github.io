import React, { useRef, useState, useEffect } from "react";

interface FaceLookerProps {
  /** Fallback image when gaze images aren't available */
  fallbackImage?: string;
  alt: string;
  className?: string;
  /** Base path for gaze images (default: /faces/) */
  basePath?: string;
  /** Show debug overlay with coordinates */
  debug?: boolean;
}

// Grid configuration (must match generated images)
const P_MIN = -15;
const P_MAX = 15;
const STEP = 3;
const SIZE = 256;
const TOTAL_IMAGES = 121; // 11x11 grid

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function quantizeToGrid(val: number): number {
  // [-1,1] -> [-15,15]
  const raw = P_MIN + (val + 1) * (P_MAX - P_MIN) / 2;
  const snapped = Math.round(raw / STEP) * STEP;
  return clamp(snapped, P_MIN, P_MAX);
}

function sanitize(val: number): string {
  const str = Number(val).toFixed(1); // force one decimal, e.g. 0 -> 0.0
  return str.replace('-', 'm').replace('.', 'p');
}

function gridToFilename(px: number, py: number): string {
  return `gaze_px${sanitize(px)}_py${sanitize(py)}_${SIZE}.webp`;
}

// Detect if device has touch as primary input (actual mobile/tablet)
function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);
  
  useEffect(() => {
    // Check if device has coarse pointer (touch) as primary input
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(isTouchDevice);
  }, []);
  
  return isTouch;
}

const FaceLooker = ({ 
  fallbackImage, 
  alt, 
  className = "",
  basePath = "/faces/",
  debug = false
}: FaceLookerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayedImage, setDisplayedImage] = useState<string>("");
  const [targetImage, setTargetImage] = useState<string>("");
  const [imagesAvailable, setImagesAvailable] = useState<boolean | null>(null);
  const [loadedCount, setLoadedCount] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);
  const [debugInfo, setDebugInfo] = useState({ x: 0, y: 0, filename: "" });
  const isTouchDevice = useIsTouchDevice();
  const loadedImages = useRef<Map<string, HTMLImageElement>>(new Map());

  // Preload ALL gaze images on mount and track progress
  useEffect(() => {
    let mounted = true;
    let loaded = 0;

    const loadImage = (px: number, py: number): Promise<void> => {
      return new Promise((resolve) => {
        const filename = gridToFilename(px, py);
        const imagePath = `${basePath}${filename}`;
        
        if (loadedImages.current.has(imagePath)) {
          resolve();
          return;
        }

        const img = new Image();
        img.onload = () => {
          if (mounted) {
            loadedImages.current.set(imagePath, img);
            loaded++;
            setLoadedCount(loaded);
            if (loaded === TOTAL_IMAGES) {
              setAllLoaded(true);
            }
          }
          resolve();
        };
        img.onerror = () => resolve();
        img.src = imagePath;
      });
    };

    // Load all images
    const promises: Promise<void>[] = [];
    for (let px = P_MIN; px <= P_MAX; px += STEP) {
      for (let py = P_MIN; py <= P_MAX; py += STEP) {
        promises.push(loadImage(px, py));
      }
    }

    // Check if center image loads successfully
    const centerPath = `${basePath}${gridToFilename(0, 0)}`;
    const testImg = new Image();
    testImg.onload = () => {
      if (mounted) {
        setImagesAvailable(true);
        setDisplayedImage(centerPath);
        setTargetImage(centerPath);
      }
    };
    testImg.onerror = () => {
      if (mounted) setImagesAvailable(false);
    };
    testImg.src = centerPath;

    return () => { mounted = false; };
  }, [basePath]);

  // Update displayed image only when target image is loaded
  useEffect(() => {
    if (targetImage && loadedImages.current.has(targetImage)) {
      setDisplayedImage(targetImage);
    }
  }, [targetImage, loadedCount]);

  // Update gaze based on cursor position relative to viewport
  const updateGaze = React.useCallback((clientX: number, clientY: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    
    // Calculate relative to entire viewport for smoother tracking
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const imageCenterX = rect.left + rect.width / 2;
    const imageCenterY = rect.top + rect.height / 2;

    // Normalize cursor position relative to image center, scaled by viewport
    const nx = (clientX - imageCenterX) / (viewportWidth / 2);
    const ny = (imageCenterY - clientY) / (viewportHeight / 2); // Y: up is positive

    const clampedX = clamp(nx, -1, 1);
    const clampedY = clamp(ny, -1, 1);

    const px = quantizeToGrid(clampedX);
    const py = quantizeToGrid(clampedY);

    const filename = gridToFilename(px, py);
    const imagePath = `${basePath}${filename}`;
    
    setTargetImage(imagePath);
    setDebugInfo({ x: px, y: py, filename });
  }, [basePath]);

  useEffect(() => {
    // Don't set up mouse tracking on touch devices
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      updateGaze(e.clientX, e.clientY);
    };

    // Track pointer anywhere on the page
    window.addEventListener("mousemove", handleMouseMove);

    // Initialize at center
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      updateGaze(rect.left + rect.width / 2, rect.top + rect.height / 2);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [updateGaze, isTouchDevice]);

  // Show fallback on touch devices or if images aren't available
  if (isTouchDevice || (imagesAvailable === false && fallbackImage)) {
    return (
      <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
        <img
          src={fallbackImage}
          alt={alt}
          className="w-full h-full object-cover rounded-sm border"
        />
      </div>
    );
  }

  const loadingPercent = Math.round((loadedCount / TOTAL_IMAGES) * 100);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-sm ${className}`}
    >
      {/* Always show a stable image - fallback or current gaze */}
      <img
        src={displayedImage || fallbackImage}
        alt={alt}
        className="w-full h-full object-cover rounded-sm border"
      />
      
      {/* Loading overlay with pulsating indicator */}
      {!allLoaded && imagesAvailable !== false && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/40 backdrop-blur-[1px] rounded-sm">
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
            <span className="text-[10px] font-mono text-primary animate-pulse">
              {loadingPercent}%
            </span>
          </div>
        </div>
      )}
      
      {/* Debug overlay */}
      {debug && (
        <div className="absolute top-2 left-2 bg-background/90 text-foreground px-2 py-1 rounded text-[10px] font-mono">
          <div>Mouse: ({Math.round(debugInfo.x)}, {Math.round(debugInfo.y)})</div>
          <div>Image: {debugInfo.filename}</div>
          <div>Loaded: {loadedCount}/{TOTAL_IMAGES}</div>
        </div>
      )}
    </div>
  );
};

export default FaceLooker;
