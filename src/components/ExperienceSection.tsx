"use client"

import { motion } from "framer-motion"
import { useLocale, useTranslations } from "next-intl"
import { getExperience } from "@/data/experience"

export function ExperienceSection() {
    const locale = useLocale()
    const t = useTranslations("Experience")
    const experience = getExperience(locale)

    return (
        <section id="experience" className="py-24">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        {t("title")}
                    </h2>
                    <p className="text-muted-foreground mt-2">
                        {t("subtitle")}
                    </p>
                </motion.div>
                {experience.map((exp, i) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative p-8 rounded-xl border border-white/10 bg-card shadow-lg hover:border-pink-500/40 hover:shadow-pink-500/20 transition-all duration-500"
                    >
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold">{exp.role}</h3>
                            <p className="text-sm text-muted-foreground">
                                {exp.company} — {exp.location}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                                {exp.period}
                            </p>
                        </div>

                        <p className="mb-6 text-sm leading-relaxed">
                            {exp.description}
                        </p>
                        <ul className="space-y-2 mb-6 text-sm">
                            {exp.responsibilities.map((item, idx) => (
                                <li key={idx} className="flex gap-2">
                                    <span className="text-pink-400">▸</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                            {exp.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs px-3 py-1 rounded-full border border-green-500/30 text-green-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
