"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export function ProjectCard({ project }: any) {
    return (
        <Link href={`/projects/${project.slug}`}>
            <motion.div
                whileHover={{ scale: 1.03 }}
                className="group rounded-xl border p-4 shadow-md transition-all h-full flex flex-col"
            >
                <div className="overflow-hidden rounded-lg h-48 mb-4 flex items-center justify-center bg-muted/20">
                    <Image
                        src={project.thumbnail}
                        alt={project.title}
                        width={400}
                        height={200}
                        className="rounded-lg group-hover:opacity-90 transition object-cover w-full h-full"
                    />
                </div>
                <div className="flex-1 flex flex-col min-h-0">
                    <h3 className="text-xl font-bold mb-2 line-clamp-1">{project.title}</h3>

                    <div className="flex gap-2 flex-wrap mb-3">
                        {project.tech?.map((technology: string) => (
                            <Badge
                                key={technology}
                                variant="secondary"
                                className="text-xs"
                            >
                                {technology}
                            </Badge>
                        ))}
                    </div>
                    <div className="relative flex-1 min-h-0">
                        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                            {project.description}
                        </p>
                        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-background to-transparent pointer-events-none" />
                    </div>
                </div>
            </motion.div>
        </Link>
    )
}