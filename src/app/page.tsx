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
import { tags,resume_link,email_addr } from '@/data/tags'


const geistMono = Geist({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-geist-mono',
})


export default function Home() {
  return (
    <div className="min-h-screen">
      <OnekoCat />
      <div className="flex flex-col items-start px-6 md:px-12 pt-4 md:pt-6 space-y-8 md:space-y-12 max-w-3xl w-full mx-auto">
        <div className="w-full flex justify-end items-center gap-4">
          <Link href={"/projects"} className="text-md md:text-lg hover:underline">
            projects
          </Link>
          <Link href={"/blogs"} className="text-md md:text-lg hover:underline">
            blogs
          </Link>
          <ModeToggle />
        </div>
        <div>
          <div className="flex items-center gap-6 mb-4">

            <div>
              <h1 className={`text-3xl md:text-4xl font-medium gap-2 dark:text-neutral-200 ${geistMono.className}`}>Manash Anand</h1>
              <div className="flex items-center gap-2 mt-2">
                <p className="text-sm md:text-md text-neutral-600 dark:text-neutral-400">
                  engineer <span className="mx-1">• developer</span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 space-y-4">
            <p className="text-base md:text-lg text-neutral-800 dark:text-neutral-200">
              <span className="text-cyan-500 dark:text-cyan-400">*</span> i love building <span className="text-cyan-500 dark:text-cyan-400">products</span> that solve real problems. crafting <span className="text-cyan-500 dark:text-cyan-400">websites</span> for the past year, with a focus on <span className="text-cyan-500 dark:text-cyan-400">user experience</span> and clean code.
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              {
                tags.map((item: { id: string, title: string }) => {
                  return (
                    <span key={item.id} className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-md text-sm md:text-base">
                      {item.title}
                    </span>
                  )
                })
              }
            </div>

            <a
              href={resume_link || "https://drive.google.com/file/d/1w5FIrtbSffRxgjW8iWVqYMyX5KOiDA-c/view?usp=sharing"}
              className="inline-flex items-center justify-center px-3 py-2 bg-neutral-100 dark:bg-neutral-800/30 text-neutral-800 dark:text-neutral-200 rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700/50 transition-colors font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`flex items-center text-sm lg:text-base`}>
                <span>View CV</span>
              </div>
            </a>


            <a href={`mailto:anandmanash321@gmail.com`}  className={`pl-4 text-lg md:text-xl hover:underline ${geistMono.className}`} >
              Mail me
            </a>
          </div>
        </div>

        <div className="w-full">
          <h2 className="text-xl md:text-2xl font-medium mb-4">Experience</h2>
          <Experience />
        </div>

        <div className="w-full">
          <h2 className="text-xl md:text-2xl font-medium mb-4">Work</h2>
          <div className="space-y-2">
            {projects.slice(0, 3).map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center mt-6 text-base md:text-lg hover:underline"
          >
            View all projects →
          </Link>
        </div>

        {/* <div className="w-full">
          <h2 className="text-xl md:text-2xl font-medium mb-4">Blog</h2>
          <div className="mb-4">
            <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 mb-4">
              I occasionally write about web development, AI, and other technical topics.
            </p>
            <Link 
              href="/blogs"
              className="inline-flex items-center text-base md:text-lg hover:underline"
            >
              View all posts →
            </Link>
          </div>
        </div> */}

        {/* <div className="w-full">
          <h2 className="text-lg font-medium mb-2">Skills</h2>
          <p className="text-xs md:text-sm font-light">
            List your technical skills and expertise
          </p>
        </div>
        <div className="w-full">
          <h2 className="text-lg font-medium mb-2">Moments</h2>
          <p className="text-xs md:text-sm font-light">
            Share significant achievements or milestones
          </p>
        </div> */}
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
