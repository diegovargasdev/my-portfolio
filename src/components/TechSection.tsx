"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
    { name: "React", src: "/tech/react.png" },
    { name: "Next.js", src: "/tech/nextjs.png" },
    { name: "TypeScript", src: "/tech/typescript.png" },
    { name: "Tailwind", src: "/tech/tailwind.png" },
    { name: "Node.js", src: "/tech/node.png" },
    { name: "Git", src: "/tech/git.png" },
    { name: "GraphQL", src: "/tech/graphql.png" },
    { name: "Gatsby.js", src: "/tech/gatsby.png" },
];

export default function TechCarousel() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <div className="w-full py-16 bg-white/50 backdrop-blur-sm mb-14 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            className="flex flex-col items-center"
                        >
                            <motion.div
                                className="relative p-5 rounded-2xl border border-gray-200 shadow-md bg-white hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
                                whileHover={{
                                    scale: 1.1,
                                    borderColor: "#ff75b5",
                                    backgroundColor: "#f0fff7"
                                }}
                                animate={{
                                    y: [0, -10, 0],
                                    boxShadow: [
                                        "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                                        "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                                        "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                                    ]
                                }}
                                transition={{
                                    y: {
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.1
                                    },
                                    boxShadow: {
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.1
                                    }
                                }}
                            >
                                <div className="relative w-12 h-12">
                                    <Image
                                        src={tech.src}
                                        fill
                                        alt={tech.name}
                                        className="object-contain opacity-85 group-hover:opacity-100 transition-opacity"
                                        sizes="48px"
                                    />
                                </div>
                                <motion.div
                                    className="absolute inset-0 rounded-2xl border-2 border-[#ff75b5]"
                                    initial={{ opacity: 0, scale: 1 }}
                                    whileHover={{
                                        opacity: [0, 0.3, 0],
                                        scale: [1, 1.2, 1]
                                    }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        repeatDelay: 2
                                    }}
                                />
                            </motion.div>

                            <motion.p
                                className="text-sm font-medium text-center mt-3 text-gray-600 group-hover:text-gray-900"
                                whileHover={{ scale: 1.05 }}
                            >
                                {tech.name}
                            </motion.p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}