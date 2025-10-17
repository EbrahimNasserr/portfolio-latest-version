import {
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
} from "lucide-react";
import { SocialLink, ContactInfo } from "./types";

// ============================================================================
// CONTACT INFORMATION
// ============================================================================

export const CONTACT_INFO: ContactInfo = {
  email: "ebrahim.nasser.dev@gmail.com",
  phone: "+20 123 456 7890",
  location: "Cairo, Egypt",
};

// ============================================================================
// SOCIAL LINKS
// ============================================================================

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: GithubIcon,
    href: "https://github.com/ebrahimnasser",
    label: "GitHub",
  },
  {
    icon: TwitterIcon,
    href: "https://twitter.com/ebrahimnasser",
    label: "Twitter",
  },
  {
    icon: LinkedinIcon,
    href: "https://linkedin.com/in/ebrahimnasser",
    label: "LinkedIn",
  },
  {
    icon: InstagramIcon,
    href: "https://instagram.com/ebrahimnasser",
    label: "Instagram",
  },
];

// ============================================================================
// ROTATING TEXT DATA
// ============================================================================

export const HERO_ROTATING_TEXTS = [
  "Scalable",
  "Modern",
  "Innovative",
  "Robust",
  "Beautiful",
];

// ============================================================================
// STATS DATA
// ============================================================================

export const STATS = [
  {
    value: "50+",
    label: "Projects Completed",
  },
  {
    value: "3+",
    label: "Years Experience",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
];
