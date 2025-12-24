"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

const MenuIconOnly = ({ className }: { className?: string }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      onClick={() => setToggle((x) => !x)}
      className={cn(
        "group flex cursor-pointer items-center justify-center",
        className
      )}
    >
      <div className="relative grid h-5 w-5 cursor-pointer items-center justify-center">
        <motion.div
          animate={{ y: toggle ? 0 : "-5px", rotate: toggle ? 45 : 0 }}
          className="absolute h-0.5 w-full rounded-full bg-current"
        />
        <motion.div
          animate={{ opacity: toggle ? 0 : 1 }}
          transition={{ duration: 0.1 }}
          className="absolute h-0.5 w-full rounded-full bg-current"
        />
        <motion.div
          animate={{ y: toggle ? 0 : "5px", rotate: toggle ? -45 : 0 }}
          className="absolute h-0.5 w-full rounded-full bg-current"
        />
      </div>
    </div>
  );
};

export { MenuIconOnly };
