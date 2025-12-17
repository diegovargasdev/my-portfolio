"use client";

import { motion } from "framer-motion";
import { PinkCoding, PinkGear, PinkLayer, PinkNetwork, PinkPointer, PinkRocket } from "./icons";
import { useTranslations } from 'next-intl';

export default function SkillsSection() {
    const t = useTranslations('Skills');
    
    const skills = [
        {
            icon: <PinkLayer className="w-8 h-8" />,
            key: "frontend"
        },
        {
            icon: <PinkNetwork className="w-8 h-8" />,
            key: "apis"
        },
        {
            icon: <PinkGear className="w-8 h-8" />,
            key: "architecture"
        },
        {
            icon: <PinkPointer className="w-8 h-8" />,
            key: "uiux"
        },
        {
            icon: <PinkCoding className="w-8 h-8" />,
            key: "optimization"
        },
        {
            icon: <PinkRocket className="w-8 h-8" />,
            key: "growth"
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
                {t('title')}
                <span className="block h-1 w-24 mt-2 bg-pink-500 rounded-full"></span>
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {skills.map((skill, i) => (
                    <motion.div
                        key={skill.key}
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

                        <h3 className="font-bold text-lg mb-2">
                            {t(`skills.${skill.key}.title`)}
                        </h3>
                        <p className="text-sm leading-relaxed">
                            {t(`skills.${skill.key}.text`)}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}