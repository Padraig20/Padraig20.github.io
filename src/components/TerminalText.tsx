import { useEffect, useState } from "react";

interface TerminalTextProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  showCursor?: boolean;
}

const TerminalText = ({ 
  text, 
  className = "", 
  typingSpeed = 80,
  showCursor = true 
}: TerminalTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursorBlink, setShowCursorBlink] = useState(true);

  useEffect(() => {
    setDisplayedText("");
    let index = 0;
    
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typeInterval);
  }, [text, typingSpeed]);

  useEffect(() => {
    if (!showCursor) return;
    
    const blinkInterval = setInterval(() => {
      setShowCursorBlink((prev) => !prev);
    }, 530);

    return () => clearInterval(blinkInterval);
  }, [showCursor]);

  return (
    <span className={`font-mono ${className}`}>
      <span className="text-muted-foreground opacity-60">$ </span>
      <span>{displayedText}</span>
      {showCursor && (
        <span 
          className={`inline-block w-2.5 h-[1.1em] bg-primary ml-0.5 align-middle transition-opacity duration-100 ${
            showCursorBlink ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </span>
  );
};

export default TerminalText;
