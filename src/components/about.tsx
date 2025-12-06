"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section
            id="about"
            className="relative max-w-6xl mx-auto px-6 pb-20 pt-10"
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-16"
            >
                Sobre mí
                <span className="block h-[3px] w-16 mt-2 bg-gradient-to-r from-pink-500 to-green-400 rounded-full"></span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-6 text-base md:text-lg leading-relaxed"
                >
                    <p>
                        Soy Diego, desarrollador enfocado en Front-End con formación en Ingeniería en
                        Sistemas Computacionales. Me apasiona crear interfaces limpias, rápidas y
                        funcionales, combinando diseño y tecnología para construir experiencias
                        web modernas.
                    </p>

                    <p>
                        Trabajo principalmente con React, Next.js, shadcn/ui, Tailwind y APIs REST.
                        Me especializo en transformar ideas en interfaces usables, manteniendo buenas
                        prácticas, arquitectura clara y rendimiento óptimo.
                    </p>

                    <p>
                        Cada proyecto ha sido una oportunidad para profundizar en temas como
                        accesibilidad, diseño responsivo, animaciones, patrones de componentes,
                        consumo de APIs y construcción de sistemas visuales escalables.
                    </p>

                    <p>
                        Actualmente busco seguir creciendo como Full-Stack, ampliando mis habilidades
                        en backend y cloud mientras desarrollo proyectos con calidad profesional y
                        atención al detalle.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative flex justify-center"
                >
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: [0, -6, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="relative w-[220px] h-[220px] md:w-[260px] md:h-[260px]"
                    >
                        <Image
                            src="/avatar/avatar-about.png"
                            alt="Avatar pixel art"
                            fill
                            className="image-render-pixel object-cover rounded-xl shadow-md"
                        />
                        <div className="absolute -left-6 -top-3 h-[3px] w-20 bg-pink-500/90 rounded-full"></div>
                        <div className="absolute -right-6 -bottom-3 h-[3px] w-24 bg-green-400/90 rounded-full"></div>
                        <div className="absolute inset-0 rounded-xl shadow-[0_0_50px_-15px_rgba(255,115,180,0.3)]"></div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
