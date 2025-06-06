"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
}

export function StaggerContainer({ children, className }: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1 
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}