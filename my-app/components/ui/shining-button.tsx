"use client";

import React from "react";
import { motion, type MotionProps } from "motion/react";
import { cn } from "@/lib/utils";

const animationProps: MotionProps = {
  initial: { "--x": "100%" },
  animate: { "--x": "-100%" },
  whileTap: { scale: 0.98 }, // Subtle tap for minimalist feel
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 2,
    duration: 3,
    ease: "easeInOut",
  },
};

interface ShinyButtonProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>,
    MotionProps {
  children: React.ReactNode;
  className?: string;
}

export const ShinyButton = React.forwardRef<
  HTMLButtonElement,
  ShinyButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <motion.button
      ref={ref}
      className={cn(
        "relative px-6 py-2 transition-all duration-300 ease-in-out",
        "bg-transparent backdrop-blur-xl",
        "uppercase tracking-[0.2em] text-sm font-light",
        className
      )}
      {...animationProps}
      {...props}
    >
      <span
        className="relative inline-flex items-center gap-2 text-white dark:text-black"
        style={{
          maskImage:
            "linear-gradient(-75deg, white calc(var(--x) + 20%), transparent calc(var(--x) + 30%), white calc(var(--x) + 100%))",
          WebkitMaskImage:
            "linear-gradient(-75deg, white calc(var(--x) + 20%), transparent calc(var(--x) + 30%), white calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>

      {/* The Animated Border (Shine) */}
      <span
        style={{
          mask: "linear-gradient(#000, #000) content-box exclude, linear-gradient(#000, #000)",
          WebkitMask:
            "linear-gradient(#000, #000) content-box exclude, linear-gradient(#000, #000)",
          backgroundImage:
            "linear-gradient(-75deg, transparent calc(var(--x) + 20%), #FF2D55 calc(var(--x) + 25%), transparent calc(var(--x) + 100%))",
        }}
        className="absolute inset-0 z-10 block p-[1px]" // Sharp edges (no rounded-full)
      />
    </motion.button>
  );
});

ShinyButton.displayName = "ShinyButton";
