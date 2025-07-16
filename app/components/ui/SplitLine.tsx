"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedUnderlineProps {
  className?: string;
}

const SplitLine = ({ className = "" }: AnimatedUnderlineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  return (
    <div className="mt-6 w-full flex justify-center">
      <motion.div
        ref={ref}
        className={`h-1 w-2/3 rounded-full ${className}`}
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-primary), transparent)",
        }}
        initial={{ width: 0, opacity: 0 }}
        animate={
          isInView ? { width: "66.67%", opacity: 1 } : { width: 0, opacity: 0 }
        }
        transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
      />
    </div>
  );
};

export default SplitLine;
