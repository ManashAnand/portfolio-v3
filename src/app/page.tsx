'use client'

import { ModeToggle } from "@/components/theme-toggle"
import Footer from "@/components/Footer"
import OnekoCat from "@/components/OnekoCat"
import Reach from "@/components/Reach"
import Experience from "@/components/Experience"
import Link from "next/link"
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/ProjectCard'
import { Geist } from "next/font/google"
import { tags, resume_link, email_addr, blogPosts } from '@/data/tags'
import { easeOut, motion } from "motion/react"
import { LinkPreview } from "@/components/ui/link-preview"
import ProjectsBox from "@/components/Project-Box"
import { AnimatedBlogs } from "@/components/AnimatedBlogCard"


const geistMono = Geist({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-geist-mono',
})


export default function Home() {

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.4,
        ease: easeOut
      }
    }
  };
  const fadeInLeft = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 0.4,
        ease: easeOut
      }
    }
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: easeOut,
      },
    },
  };

  return (
    <div className="min-h-screen">
      <OnekoCat />
      <div className="flex flex-col items-start px-6 md:px-12 pt-4 md:pt-6 space-y-8 md:space-y-12 max-w-3xl w-full mx-auto">
        <div className="w-full flex justify-end items-center gap-4">
          <ModeToggle />
        </div>
        <div>
          <div className="flex items-center gap-6 mb-4">

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="show"
            >
              <h1 className={`text-3xl md:text-4xl font-medium gap-2 dark:text-neutral-200 ${geistMono.className}`}>Manash Anand</h1>
              <div className="flex items-center gap-2 mt-2">
                <p className="text-sm md:text-md text-neutral-600 dark:text-neutral-400">
                  engineer <span className="mx-1">• developer</span>
                </p>
              </div>
            </motion.div>
          </div>
          <div className="mt-5 space-y-4">
            <motion.p

              variants={fadeInUp}
              initial="hidden"
              animate="show"
              className="text-base md:text-lg text-neutral-800 dark:text-neutral-200">
              <span className="text-cyan-500 dark:text-cyan-400">*
              </span> I love building

              <LinkPreview isStatic={true} imageSrc="/products.png" url="">
                {" "}
                <span className="text-cyan-500 dark:text-cyan-400">products</span>
                {" "}
              </LinkPreview>
              that solve real problems. crafting
              <LinkPreview isStatic={true} imageSrc="/harry.png" url="">
                <span className="text-cyan-500 dark:text-cyan-400">
                  {" "}
                  websites
                  {" "}
                </span>
              </LinkPreview>
              for the past year, with a focus on <LinkPreview isStatic={true} imageSrc="/user_exp.png" url="">
                <span className="text-cyan-500 dark:text-cyan-400">
                  {" "}
                  user experiences
                  {" "}
                </span>
              </LinkPreview> and clean code.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-2 mt-2"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {tags.map((item: { id: string; title: string }) => (
                <motion.span
                  key={item.id}
                  variants={itemVariants}
                  className="px-4 py-2 border-2 border-cyan-400 dark:border-cyan-900 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-md text-sm md:text-base"
                >
                  {item.title}
                </motion.span>
              ))}
            </motion.div>

            <motion.a

              variants={fadeInUp}
              initial="hidden"
              animate="show"
              href={resume_link || "https://drive.google.com/file/d/1w5FIrtbSffRxgjW8iWVqYMyX5KOiDA-c/view?usp=sharing"}
              className="inline-flex items-center justify-center px-3 py-2  dark:bg-neutral-800/30 text-neutral-800 dark:text-neutral-200 rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700/50 transition-colors font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`flex items-center text-sm lg:text-base`}>
                <span>View CV</span>
              </div>
            </motion.a>


            <motion.a
              variants={fadeInUp}
              initial="hidden"
              animate="show"
              href={`mailto:anandmanash321@gmail.com`} className={`pl-4 text-lg md:text-xl hover:underline ${geistMono.className}`} >
              Mail me
            </motion.a>
          </div>
        </div>

        <div className="w-full">
          <motion.h2 variants={fadeInUp}
            initial="hidden"
            animate="show" className="text-xl md:text-2xl font-medium mb-4">Experience</motion.h2>
          <Experience />
        </div>

        <div className="w-full">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="text-xl md:text-2xl font-medium mb-4">Projects</motion.h2>
          <ProjectsBox/>
          <a
            href="https://github.com/ManashAnand?tab=repositories"
            target="_blank"
            className="inline-flex items-center mt-6 text-base md:text-lg hover:underline"
          >
            View all projects →
          </a>
        </div>

          <div className="w-full">
          <motion.h2 variants={fadeInUp}
            initial="hidden"
            animate="show" className="text-xl md:text-2xl font-medium mb-4">Experience</motion.h2>
          <Experience />
        </div>
          <div className="w-full">
          <motion.h2 variants={fadeInUp}
            initial="hidden"
            animate="show" className="text-xl md:text-2xl font-medium mb-4">Blogs</motion.h2>
          <AnimatedBlogs Blogs={blogPosts}/>
        </div>

        
 
        <div className="w-full">
          <h2 className="text-xl md:text-2xl font-medium mb-4">Contact</h2>
          <Reach />
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}
