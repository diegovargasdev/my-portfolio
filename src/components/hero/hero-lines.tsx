"use client"

import { motion } from "framer-motion"

export function HeroLines() {
    return (
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <motion.svg
                width="100%"
                height="100%"
                viewBox="0 0 1440 800"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 1 }}
            >
                {/* Línea rosa */}
                <motion.path
                    d="M-50 200 C 300 100, 600 300, 1100 150"
                    stroke="#FF3CAC"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Línea verde */}
                <motion.path
                    d="M0 500 C 350 450, 700 600, 1500 400"
                    stroke="#3BF6A8"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.svg>
        </div>
    )
}
