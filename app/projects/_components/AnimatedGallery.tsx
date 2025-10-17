"use client"

import * as React from "react"
import { HTMLMotionProps, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { SPRING_CONFIG, blurVariants } from "./types"

// ============================================================================
// ANIMATED GALLERY COMPONENTS
// ============================================================================

export const ContainerStagger = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ className, viewport, transition, ...props }, ref) => {
    return (
      <motion.div
        className={cn("relative", className)}
        ref={ref}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, ...viewport }}
        transition={{
          staggerChildren: transition?.staggerChildren || 0.2,
          ...transition,
        }}
        {...props}
      />
    )
  }
)
ContainerStagger.displayName = "ContainerStagger"

export const ContainerAnimated = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ className, transition, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(className)}
        variants={blurVariants}
        transition={SPRING_CONFIG || transition}
        {...props}
      />
    )
  }
)
ContainerAnimated.displayName = "ContainerAnimated"
