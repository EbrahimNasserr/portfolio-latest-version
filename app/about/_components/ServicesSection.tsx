"use client"
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Sparkles,
  Zap,
  ArrowRight,
  CheckCircle,  
  Star,
  Code,
  Database,
  Layout,
  Settings,
  Brush,
  Globe,
} from "lucide-react";
import { ServiceItemProps } from "./types";

function ServiceItem({ icon, secondaryIcon, title, description, variants, delay, direction }: ServiceItemProps) {
  return (
    <motion.div
      className="flex flex-col group"
      variants={variants}
      transition={{ delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="flex items-center gap-3 mb-3"
        initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <motion.div
          className="text-primary bg-primary/10 p-3 rounded-lg transition-colors duration-300 group-hover:bg-primary/20 relative"
          whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
        >
          {icon}
          {secondaryIcon}
        </motion.div>
        <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
      </motion.div>
      <motion.p
        className="text-sm text-muted-foreground leading-relaxed pl-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        {description}
      </motion.p>
      <motion.div
        className="mt-3 pl-12 flex items-center text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
      >
        <span className="flex items-center gap-1">
          Learn more <ArrowRight className="w-3 h-3" />
        </span>
      </motion.div>
    </motion.div>
  );
}

export const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-primary" />,
      title: "Frontend Development",
      description:
        "Crafting responsive, user-friendly interfaces with React, Next.js, and Vue.js. I focus on performance, accessibility, and modern UI/UX to deliver seamless user experiences.",
      position: "left",
    },
    {
      icon: <Database className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-primary" />,
      title: "Backend Development",
      description:
        "Building scalable and secure backends with Node.js, Express.js, and MongoDB. From REST APIs to authentication, I ensure reliability and performance.",
      position: "left",
    },
    {
      icon: <Layout className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-primary" />,
      title: "Full Stack Solutions",
      description:
        "End-to-end development of modern web applications using the MERN stack. I handle everything from database design to frontend polish for complete solutions.",
      position: "left",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-primary" />,
      title: "State Management",
      description:
        "Implementing scalable state management with Redux Toolkit, RTK Query, and Context API to keep apps performant and maintainable.",
      position: "right",
    },
    {
      icon: <Brush className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-primary" />,
      title: "UI/UX & Animations",
      description:
        "Designing engaging user interfaces with Tailwind CSS, Framer Motion, and GSAP animations. I ensure every interaction feels smooth and modern.",
      position: "right",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-primary" />,
      title: "Deployment & Optimization",
      description:
        "Delivering production-ready apps with Vercel, CI/CD pipelines, and performance tuning to ensure fast, secure, and scalable deployments.",
      position: "right",
    },
  ];
  

  return (
    <section
      ref={sectionRef}
      className="w-full py-10 px-4 bg-gradient-to-b from-muted/30 to-background text-foreground overflow-hidden relative"
    >
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
        style={{ y: y2, rotate: rotate2 }}
      />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="flex flex-col items-center mb-6" variants={itemVariants}>
          <motion.span
            className="text-primary font-medium mb-2 flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-4 h-4" />
            WHAT I DO
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-center">My Services</h2>
          <motion.div
            className="w-24 h-1 bg-primary"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
        </motion.div>

        <motion.p className="text-center max-w-2xl mx-auto mb-16 text-muted-foreground" variants={itemVariants}>
        From concept to deployment, I craft web experiences that are fast, functional, and built to grow with your vision.

        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="space-y-16">
            {services
              .filter((service) => service.position === "left")
              .map((service, index) => (
                <ServiceItem
                  key={`left-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="left"
                />
              ))}
          </div>

          <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
            <motion.div className="relative w-full max-w-xs" variants={itemVariants}>
              <motion.div
                className="rounded-md overflow-hidden shadow-xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
               <img
  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop"
  alt="Web Development Workspace"
  className="w-full h-full object-cover"
/>

              </motion.div>
            </motion.div>
          </div>

          <div className="space-y-16">
            {services
              .filter((service) => service.position === "right")
              .map((service, index) => (
                <ServiceItem
                  key={`right-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="right"
                />
              ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
