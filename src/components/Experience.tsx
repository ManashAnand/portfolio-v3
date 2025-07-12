"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { experiences } from '@/data/tags'
import { easeOut, motion } from 'motion/react'

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";


export default function Experience() {

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  }

  const expVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: easeOut,
      },
    }
  }

  return (
    
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-2 ">
      {experiences.map((exp) => (
        <motion.div
          variants={expVariants}
          key={exp.company} className="flex items-center gap-4 mb-4  rounded-md p-2">
             
          {exp.logoUrl && (
            <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
              <AvatarImage
                src={exp.logoUrl}
                alt={exp.company}
                className="object-contain"
              />
              <AvatarFallback>{exp.company[0]}</AvatarFallback>
            </Avatar>
          )}
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div className="max-w-[70%]">
                {exp.href ? (
                  <a
                    href={exp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-200 hover:underline"
                  >
                    {exp.company}
                  </a>
                ) : (
                  <h3 className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-200">
                    {exp.company}
                  </h3>
                )}
                <p className="text-sm md:text-lg text-neutral-800 dark:text-neutral-400">
                  {exp.position}
                </p>
              </div>
              <div className="text-sm md:text-base text-neutral-800 dark:text-neutral-400 whitespace-nowrap flex flex-col">
                <div>

                  {exp.duration}
                </div>

                <div>{exp.location}</div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
