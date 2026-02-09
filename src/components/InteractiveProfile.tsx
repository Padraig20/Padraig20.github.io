import { useRef, useState } from "react";

interface InteractiveProfileProps {
  src: string;
  alt: string;
  className?: string;
}

const InteractiveProfile = ({ src, alt, className = "" }: InteractiveProfileProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, scale: 1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate rotation based on cursor position relative to center
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 8; // max 8deg
    const rotateX = ((centerY - e.clientY) / (rect.height / 2)) * 8; // max 8deg
    
    setTransform({ rotateX, rotateY, scale: 1.02 });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0, scale: 1 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative cursor-pointer ${className}`}
      style={{ perspective: "600px" }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-sm border transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
          transformStyle: "preserve-3d",
        }}
      />
      {/* Subtle lighting effect */}
      <div
        className="absolute inset-0 rounded-sm pointer-events-none transition-opacity duration-200"
        style={{
          background: `radial-gradient(circle at ${50 + transform.rotateY * 3}% ${50 - transform.rotateX * 3}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
          opacity: transform.scale > 1 ? 1 : 0,
        }}
      />
    </div>
  );
};

export default InteractiveProfile;
