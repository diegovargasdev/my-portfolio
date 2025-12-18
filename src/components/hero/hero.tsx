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

    const handleDownloadCV = async () => {
        try {
            const res = await fetch('/documents/cv.pdf')
            if (!res.ok) throw new Error('Network response was not ok')
            const blob = await res.blob()
            const url = URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.download = 'Diego_Vargas_Frontend_Developer.pdf'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            URL.revokeObjectURL(url)
        } catch (err) {
            const link = document.createElement('a')
            link.href = '/documents/cv.pdf'
            link.download = 'Diego_Vargas_Frontend_Developer.pdf'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        }
    }

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
                        <Button
                            size="lg"
                            className="font-semibold w-full md:w-auto"
                            onClick={(e) => handleAnchorClick(e as any, buildHref('experience'))}
                            asChild
                        >
                            <a href={buildHref('experience')}>
                                {t('viewExperience')}
                            </a>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-green-400 text-green-400 font-semibold hover:bg-green-100/30 w-full md:w-auto"
                            onClick={handleDownloadCV}
                        >
                            {t('downloadCV')}
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