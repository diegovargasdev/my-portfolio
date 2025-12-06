"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300",
                scrolled
                    ? "backdrop-blur-md bg-white/70 shadow-sm"
                    : "bg-transparent"
            )}
        >
            <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/logo/Logo_Ligth.png"
                            alt="Logo de Diego"
                            width={40}
                            height={40}
                        />
                    </Link>
                </motion.div>
                <motion.div
                    className="flex gap-6 text-sm font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    {[
                        { label: "Sobre mí", href: "/#about", color: "hover:text-green-500" },
                        { label: "Proyectos", href: "/#projects", color: "hover:text-pink-500" },
                        { label: "Contacto", href: "/#contact", color: "hover:text-pink-500" },
                    ].map((item) => (
                        <motion.div
                            key={item.href}
                            whileHover={{ scale: 1.08 }}
                            transition={{ type: "spring", stiffness: 250 }}
                        >
                            <Link
                                href={item.href}
                                className={cn("transition", item.color)}
                            >
                                {item.label}
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </nav>
        </motion.header>
    )
}
