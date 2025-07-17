"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

interface AnimatedUnderlineProps {
  className?: string;
}

const SplitLine = ({ className = "" }: AnimatedUnderlineProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="mt-6 w-full flex justify-center bg-clightgray">
      <motion.div
        ref={ref}
        className={`h-[1px] w-2/3 rounded-full ${className}`}
      />
    </div>
  );
};

export default SplitLine;
