"use client"

import { useState, useEffect } from "react"
import { useParams, usePathname } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useTranslations } from 'next-intl'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const params = useParams()
    const pathname = usePathname()
    const locale = (params?.locale as string) || 'es'
    const t = useTranslations('Navbar')

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        const hash = href.split('#')[1]
        const element = document.getElementById(hash)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    const getBasePath = () => {
        if (pathname.startsWith(`/${locale}`)) {
            return `/${locale}`
        }
        return locale ? `/${locale}` : ''
    }

    const basePath = getBasePath()

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
                    <Link href={`/${locale}`} className="flex items-center gap-2">
                        <Image
                            src="/logo/Logo_Ligth.png"
                            alt={t('logoAlt')}
                            width={40}
                            height={40}
                        />
                    </Link>
                </motion.div>
                <motion.div
                    className="flex gap-6 items-center text-sm font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    {[
                        {
                            label: t('about'),
                            href: `${basePath}#about`,
                            color: "hover:text-green-500"
                        },
                        {
                            label: t('projects'),
                            href: `${basePath}#projects`,
                            color: "hover:text-pink-500"
                        },
                        {
                            label: t('contact'),
                            href: `${basePath}#contact`,
                            color: "hover:text-pink-500"
                        },
                    ].map((item) => (
                        <motion.div
                            key={item.href}
                            whileHover={{ scale: 1.08 }}
                            transition={{ type: "spring", stiffness: 250 }}
                        >
                            <Link
                                href={item.href}
                                onClick={(e) => handleAnchorClick(e, item.href)}
                                className={cn("transition", item.color)}
                            >
                                {item.label}
                            </Link>
                        </motion.div>
                    ))}
                    <LanguageSwitcher />
                </motion.div>
            </nav>
        </motion.header>
    )
}