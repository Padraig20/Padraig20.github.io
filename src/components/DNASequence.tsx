import { useEffect, useState, useMemo } from "react";

interface DNASequenceProps {
  className?: string;
}

const NUCLEOTIDES = ["A", "T", "C", "G"] as const;
type Nucleotide = typeof NUCLEOTIDES[number];

const nucleotideClass: Record<Nucleotide, string> = {
  A: "text-nucleotide-a",
  T: "text-nucleotide-t",
  C: "text-nucleotide-c",
  G: "text-nucleotide-g",
};

// Generate a random DNA sequence
const generateSequence = (length: number): Nucleotide[] => {
  return Array.from({ length }, () => 
    NUCLEOTIDES[Math.floor(Math.random() * NUCLEOTIDES.length)]
  );
};

const DNASequence = ({ className = "" }: DNASequenceProps) => {
  const [offset, setOffset] = useState(0);
  
  // Generate enough sequence to scroll seamlessly
  const sequence = useMemo(() => generateSequence(200), []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % sequence.length);
    }, 150);
    return () => clearInterval(interval);
  }, [sequence.length]);

  // Get visible window of sequence
  const visibleSequence = useMemo(() => {
    const visible: Nucleotide[] = [];
    for (let i = 0; i < 60; i++) {
      visible.push(sequence[(offset + i) % sequence.length]);
    }
    return visible;
  }, [offset, sequence]);

  return (
    <div className={`font-mono text-xs tracking-widest opacity-30 overflow-hidden whitespace-nowrap select-none ${className}`}>
      {visibleSequence.map((nucleotide, i) => (
        <span key={i} className={nucleotideClass[nucleotide]}>
          {nucleotide}
        </span>
      ))}
    </div>
  );
};

export default DNASequence;
