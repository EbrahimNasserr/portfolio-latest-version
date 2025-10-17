import { HTMLMotionProps, MotionValue, Variants } from "framer-motion";

// ============================================================================
// ANIMATED GALLERY TYPES
// ============================================================================

export interface ContainerScrollContextValue {
  scrollYProgress: MotionValue<number>;
}

export const SPRING_CONFIG = {
  type: "spring",
  stiffness: 100,
  damping: 16,
  mass: 0.75,
  restDelta: 0.005,
  duration: 0.3,
} as const;

export const blurVariants: Variants = {
  hidden: {
    filter: "blur(10px)",
    opacity: 0,
  },
  visible: {
    filter: "blur(0px)",
    opacity: 1,
  },
};

// ============================================================================
// CARDS STACK TYPES
// ============================================================================

export interface CardStickyProps extends Omit<HTMLMotionProps<"div">, "style"> {
  index: number;
  incrementY?: number;
  incrementZ?: number;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

// ============================================================================
// PROJECT DATA TYPES
// ============================================================================

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  services: string[];
  imageUrl: string;
  color: string;
}
