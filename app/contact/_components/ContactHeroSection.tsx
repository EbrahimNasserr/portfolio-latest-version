"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { RotatingText } from "./RotatingText";
import { HERO_ROTATING_TEXTS } from "./data";

// ============================================================================
// CONTACT HERO SECTION COMPONENT
// ============================================================================

export const ContactHeroSection: React.FC = () => {
    const contentDelay = 0.3;
    const itemDelayIncrement = 0.1;

    const bannerVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, delay: contentDelay },
        },
    };

    const headlineVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.5, delay: contentDelay + itemDelayIncrement },
        },
    };

    const subHeadlineVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: contentDelay + itemDelayIncrement * 2,
            },
        },
    };

    const ctaVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: contentDelay + itemDelayIncrement * 3,
            },
        },
    };

    return (
        <section
            id="hero"
            className="w-full flex flex-col items-center justify-center text-center px-4 pt-28"
        >
            <div className="max-w-6xl mx-auto">
                <motion.div
                    variants={bannerVariants}
                    initial="hidden"
                    animate="visible"
                    className="mb-6"
                >
                    <div className="text-primary text-sm font-semibold uppercase mb-6 flex items-center justify-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Contact Me
                    </div>
                </motion.div>

                <motion.h1
                    variants={headlineVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-4xl sm:text-5xl lg:text-[64px] font-semibold leading-tight max-w-4xl mb-4 inline-block text-transparent bg-clip-text 
                      bg-gradient-to-r from-foreground to-foreground/80"
                >
                    Building{" "}
                    <span className="inline-block h-[1.2em] sm:h-[1.2em] lg:h-[1.2em] overflow-hidden align-bottom">
                        <RotatingText
                            texts={HERO_ROTATING_TEXTS}
                            mainClassName="text-primary mx-1"
                            staggerFrom={"last"}
                            initial={{ y: "-100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "110%", opacity: 0 }}
                            staggerDuration={0.01}
                            transition={{ type: "spring", damping: 18, stiffness: 250 }}
                            rotationInterval={2200}
                            splitBy="characters"
                            auto={true}
                            loop={true}
                        />
                    </span>
                    <br />
                    Web Applications
                </motion.h1>

                <motion.p
                    variants={subHeadlineVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-8 inline-block text-transparent bg-clip-text 
                      bg-gradient-to-r from-muted-foreground to-muted-foreground/80"
                >
                    I craft exceptional digital experiences with cutting-edge
                    technologies. Specializing in React, Node.js, and modern web
                    development to bring your ideas to life.
                </motion.p>

                <motion.div
                    variants={ctaVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                >
                    <motion.a
                        href="#contact"
                        className=" bg-primary dark:bg-primary/50 dark:hover:bg-primary/70 cursor-pointer text-primary-foreground shadow-xs hover:bg-primary/90 px-6 py-3 rounded-md text-sm font-semibold transition-colors duration-200 whitespace-nowrap flex items-center min-w-[160px] justify-center"
                        whileHover={{ scale: 1.03, y: -1 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                        Contact Me
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </motion.a>
                    <motion.a
                        href="#proof"
                        className="border border-border text-foreground px-6 py-3 rounded-md text-sm font-semibold hover:bg-muted/30 transition-colors duration-200 whitespace-nowrap min-w-[160px] text-center"
                        whileHover={{ scale: 1.03, y: -1 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                        View My Work
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};
