import React from "react";
import {
  type Transition,
  type VariantLabels,
  type Target,
  type AnimationControls,
  type TargetAndTransition,
  type Variants,
} from "framer-motion";

// ============================================================================
// ROTATING TEXT TYPES
// ============================================================================

export interface RotatingTextRef {
  next: () => void;
  previous: () => void;
  jumpTo: (index: number) => void;
  reset: () => void;
}

export interface RotatingTextProps
  extends Omit<
    React.ComponentPropsWithoutRef<"span">,
    "children" | "transition" | "initial" | "animate" | "exit"
  > {
  texts: string[];
  transition?: Transition;
  initial?: boolean | Target | VariantLabels;
  animate?: boolean | VariantLabels | AnimationControls | TargetAndTransition;
  exit?: Target | VariantLabels;
  animatePresenceMode?: "sync" | "wait";
  animatePresenceInitial?: boolean;
  rotationInterval?: number;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | "random" | number;
  loop?: boolean;
  auto?: boolean;
  splitBy?: "characters" | "words" | "lines" | string;
  onNext?: (index: number) => void;
  mainClassName?: string;
  splitLevelClassName?: string;
  elementLevelClassName?: string;
}

// ============================================================================
// INTERACTIVE DOTS TYPES
// ============================================================================

export interface Dot {
  x: number;
  y: number;
  baseColor: string;
  targetOpacity: number;
  currentOpacity: number;
  opacitySpeed: number;
  baseRadius: number;
  currentRadius: number;
}

// ============================================================================
// COPY BUTTON TYPES
// ============================================================================

export interface CopyButtonProps {
  text: string;
  className?: string;
}

// ============================================================================
// SOCIAL LINK TYPES
// ============================================================================

export interface SocialLink {
  icon: React.ComponentType<any>;
  href: string;
  label: string;
}

// ============================================================================
// CONTACT INFO TYPES
// ============================================================================

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}
