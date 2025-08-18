"use client";
import React, { JSX, useState, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
  defaultActiveId = 1, // ID par défaut de l'élément actif
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
    id: number;
  }[];
  className?: string;
  defaultActiveId?: number;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [activeItemId, setActiveItemId] = useState<number>(defaultActiveId);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const handleNavClick = useCallback((navItemId: number) => {
    setActiveItemId(navItemId);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-6 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem, idx) => {
          const isActive = activeItemId === navItem.id;
          
          return (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              onClick={(e) => {
                e.preventDefault(); // Empêche la navigation par défaut
                handleNavClick(navItem.id);
                // Vous pouvez ajouter votre logique de navigation ici
                window.location.href = navItem.link; // ou utiliser votre router
              }}
              className={cn(
                "relative dark:text-blue-100 items-center flex space-x-1 text-neutral-600 dark:hover:text-blue-300 hover:text-neutral-500 cursor-pointer"
              )}
            >
              {isActive ? (
                <span className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
                  <span className="text-sm px-1.5">{navItem.name}</span>
                  <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
                </span>
              ) : (
                <span className="text-sm px-1.5">{navItem.name}</span>
              )}
            </a>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};