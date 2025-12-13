"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { HeroLines } from "./hero-lines"
import { HeroAvatar } from "./hero-avatar"
import { useTranslations } from 'next-intl'
import { useAnchorNavigation } from "@/hooks/useAnchorNavigation"

export function Hero() {
    const t = useTranslations('Hero')
    const { handleAnchorClick, buildHref } = useAnchorNavigation()

    return (
        <section className="relative w-full overflow-hidden min-h-[65vh] flex items-center">
            <HeroLines />
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-6 md:px-12 py-12">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-6 w-full md:w-[55%] text-center md:text-left"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight dark:text-white">
                        {t('greeting')}
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground dark:text-gray-300">
                        {t('description')}
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                        {/* Botón "Ver proyectos" - redirige a la sección de proyectos */}
                        <Button
                            size="lg"
                            className="font-semibold w-full md:w-auto"
                            onClick={(e) => handleAnchorClick(e as any, buildHref('projects'))}
                            asChild
                        >
                            <a href={buildHref('projects')}>
                                {t('viewProjects')}
                            </a>
                        </Button>

                        {/* Botón "Sobre mí" - redirige a la sección about */}
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-green-400 text-green-400 font-semibold hover:bg-green-100/30 w-full md:w-auto"
                            onClick={(e) => handleAnchorClick(e as any, buildHref('about'))}
                            asChild
                        >
                            <a href={buildHref('about')}>
                                {t('aboutMe')}
                            </a>
                        </Button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    className="relative w-[180px] h-[180px] md:w-[260px] md:h-[260px]"
                >
                    <HeroAvatar />
                </motion.div>
            </div>
        </section>
    )
}