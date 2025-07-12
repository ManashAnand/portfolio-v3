"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronRight, Code, Clock, Map, BookOpen, Zap, Crown, Link, VideoIcon } from "lucide-react"
import { motion, AnimatePresence, scale } from "motion/react"
import { featureDetails, features } from '@/data/tags'
import Image from "next/image"
import { Badge } from "./ui/badge"
import { FaGithub } from "react-icons/fa6"





export default function ProjectsBox() {
    const [selectedFeature, setSelectedFeature] = useState("Tokenizer")
    console.log(featureDetails[selectedFeature])
    return (
        <div className=" bg-transparent text-white ">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="shadow-lg"
                        >
                            <Card
                                className={`cursor-pointer transition-all duration-300 ${selectedFeature === feature.id
                                    ? "dark:bg-gray-800 border-cyan-500 border-2 shadow-lg dark:shadow-cyan-500/20 "
                                    // : feature.highlighted
                                    //     ? "bg-gray-900 border-cyan-500 border-2 hover:bg-gray-800"
                                        : "dark:bg-gray-900 border-gray-800 dark:hover:bg-gray-800 dark:hover:border-gray-700 "
                                    }`}
                                onClick={() => setSelectedFeature(feature.id)}
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                {/* {feature.icon} */}
                                                <h3 className="text-lg font-semibold">{feature.title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="lg:col-span-2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Card className="dark:bg-gray-900 dark:border-gray-800 text-white shadow-lg">
                        <CardContent className="">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedFeature}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.h2
                                        className="text-2xl font-bold text-cyan-500 mb-2"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <img src={featureDetails[selectedFeature]?.imageUrl} alt={featureDetails[selectedFeature]?.descp} />

                                    </motion.h2>
                                    <motion.p
                                        className="text-gray-400 mb-4 p-6 "
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {featureDetails[selectedFeature]?.descp || ""}
                                    </motion.p>
                                    <div className="flex px-6 gap-4 items-center ">

                                        {
                                            featureDetails[selectedFeature]?.github && (
                                                <motion.div className=" mb-4 cursor-pointer" whileHover={{scale:1.5,transition:{duration:0.2}}} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                                                    <FaGithub />
                                                </motion.div>
                                            )
                                        }
                                        {
                                            featureDetails[selectedFeature].livelink && (
                                                <motion.div className=" mb-4 cursor-pointer" whileHover={{scale:1.5,transition:{duration:0.2}}} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                                                    <Link />
                                                </motion.div>
                                            )
                                        }
                                        {
                                            featureDetails[selectedFeature].liveVideo && (
                                                <motion.div className=" mb-4 cursor-pointer" whileHover={{scale:1.5,transition:{duration:0.2}}} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                                                    <VideoIcon />
                                                </motion.div>
                                            )
                                        }
                                    </div>
                                    <motion.div className="px-6 mb-4 flex gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>

                                        {featureDetails[selectedFeature].tags.map(item => {
                                            return (
                                                <Badge className="" key={item}>
                                                    {item} {" "}
                                                </Badge>
                                            )
                                        }) || ""}
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>
                        </CardContent>
                    </Card>
                    <motion.div
                        className="mt-6 p-4 dark:bg-gray-900 rounded-lg border dark:border-gray-800 border-cyan-400 font-bold text-white shadow-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <p className="text-gray-400 text-center">
                            {selectedFeature === "roadmap"
                                ? "Create a roadmap based on your time"
                                : featureDetails[selectedFeature].punchline}
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
