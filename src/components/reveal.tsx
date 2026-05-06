"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const ENTER_DURATION = 0.6;
const ENTER_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const ENTER_DISTANCE = 8;
const STAGGER_PER_INDEX = 0.08;

type RevealProps = {
  children: ReactNode;
  index?: number;
  className?: string;
  inView?: boolean;
};

export function Reveal({
  children,
  index = 0,
  className,
  inView = false,
}: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  const transition = {
    duration: ENTER_DURATION,
    ease: ENTER_EASE,
    delay: index * STAGGER_PER_INDEX,
  };

  if (inView) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y: ENTER_DISTANCE }}
        transition={transition}
        viewport={{ once: true, amount: 0.2 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className={className}
      initial={{ opacity: 0, y: ENTER_DISTANCE }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
