"use client";

import { motion } from "framer-motion";
import { PinkCoding, PinkGear, PinkLayer, PinkNetwork, PinkPointer, PinkRocket } from "./icons";

export default function SkillsSection() {
    const skills = [
        {
            icon: <PinkLayer className="w-8 h-8" />,
            title: "Desarrollo Front‑End Moderno",
            text: "Creo interfaces con React, Next.js y componentes reutilizables, siguiendo buenas prácticas y cuidando la experiencia del usuario.",
        },
        {
            icon: <PinkNetwork className="w-8 h-8" />,
            title: "Integración de APIs y CMS",
            text: "Consumo APIs REST y sistemas headless como Hygraph, creando flujos de datos limpios, eficientes y totalmente dinámicos.",
        },
        {
            icon: <PinkGear className="w-8 h-8" />,
            title: "Arquitectura y Modularidad",
            text: "Desarrollo módulos completos dentro de proyectos existentes sin romper la estructura, integrando lógica, vistas y configuraciones internas.",
        },
        {
            icon: <PinkPointer className="w-8 h-8" />,
            title: "UI/UX y Componentización",
            text: "Uso shadcn/ui, Material UI y Tailwind para crear interfaces coherentes, pulidas y enfocadas en la accesibilidad.",
        },
        {
            icon: <PinkCoding className="w-8 h-8" />,
            title: "Optimización y Buenas Prácticas",
            text: "Me enfoco en rendimiento, orden, legibilidad y patrones modernos para asegurar código sólido y escalable.",
        },
        {
            icon: <PinkRocket className="w-8 h-8" />,
            title: "Mentalidad de Crecimiento",
            text: "Aprendo rápido, me adapto y disfruto construir soluciones completas con tecnologías modernas.",
        },
    ];

    return (
        <section id="skills" className="relative max-w-6xl mx-auto px-6 py-20">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-16"
            >
                Lo que aporto como desarrollador
                <span className="block h-1 w-24 mt-2 bg-pink-500 rounded-full"></span>
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {skills.map((skill, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-lg transition group cursor-default relative overflow-hidden"
                    >
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
                            <div className="absolute top-0 left-0 w-16 h-[2px] bg-pink-500"></div>
                            <div className="absolute bottom-0 right-0 w-20 h-[2px] bg-green-500"></div>
                            <div className="absolute left-0 top-0 h-20 w-[2px] bg-green-500"></div>
                            <div className="absolute right-0 bottom-0 h-24 w-[2px] bg-pink-500"></div>
                        </div>

                        <div className="text-pink-400 mb-4 group-hover:scale-110 transition-transform">
                            {skill.icon}
                        </div>

                        <h3 className="font-bold text-lg mb-2">{skill.title}</h3>
                        <p className="text-sm leading-relaxed">{skill.text}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
