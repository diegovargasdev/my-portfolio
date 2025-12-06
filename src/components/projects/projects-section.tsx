"use client"

import { motion } from "framer-motion"
import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/projects/project-card"
import { IconRocket } from "../icons"

export function ProjectsSection() {
    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="flex flex-col sm:flex-row justify-center items-center text-2xl sm:text-4xl font-bold gap-2">
                        <IconRocket className="text-3xl sm:text-4xl" />
                        <span>Proyectos Destacados</span>
                    </h2>
                    <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                        Soluciones reales, interfaces intuitivas y código mantenible.
                    </p>
                </motion.div>
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((proj, i) => (
                        <motion.div
                            key={proj.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className={`
                                        bg-card border border-white/10 rounded-xl overflow-hidden 
                                        shadow-lg 
                                        transition-all duration-500
                                        ${i % 2 === 0
                                    ? "hover:shadow-pink-500/30 hover:border-pink-500/40"
                                    : "hover:shadow-green-500/30 hover:border-green-500/40"}
                                `}
                        >
                            <ProjectCard project={proj} />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
