"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useTranslations } from 'next-intl'
import { useAnchorNavigation } from "@/hooks/useAnchorNavigation"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const t = useTranslations('Navbar')
    const { handleAnchorClick, buildHref } = useAnchorNavigation()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        handleAnchorClick(e, href)
        setIsMobileMenuOpen(false)
    }
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (isMobileMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
                setIsMobileMenuOpen(false)
            }
        }

        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [isMobileMenuOpen])

    const navItems = [
        {
            label: t('about'),
            anchor: "about",
            color: "hover:text-green-500",
        },
        {
            label: t('projects'),
            anchor: "projects",
            color: "hover:text-pink-500",
        },
        {
            label: t('contact'),
            anchor: "contact",
            color: "hover:text-pink-500",
        },
    ]

    return (
        <>
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={cn(
                    "fixed top-0 left-0 w-full z-50 transition-all duration-300",
                    scrolled
                        ? "backdrop-blur-md bg-white/70 shadow-sm dark:bg-gray-900/70"
                        : "bg-transparent"
                )}
            >
                <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex items-center"
                    >
                        <Link href={buildHref()} className="flex items-center">
                            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                                <Image
                                    src="/logo/Logo_Ligth.png"
                                    alt={t('logoAlt')}
                                    fill
                                    sizes="(max-width: 640px) 40px, 48px"
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </Link>
                    </motion.div>
                    <motion.div
                        className="hidden md:flex gap-4 lg:gap-6 items-center text-sm font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        {navItems.map((item) => (
                            <motion.div
                                key={item.anchor}
                                whileHover={{ scale: 1.08 }}
                                transition={{ type: "spring", stiffness: 250 }}
                            >
                                <Link
                                    href={buildHref(item.anchor)}
                                    onClick={(e) => handleAnchorClick(e, buildHref(item.anchor))}
                                    className={cn("transition px-3 py-2 rounded-lg hover:bg-white/10 dark:hover:bg-gray-800", item.color)}
                                >
                                    {item.label}
                                </Link>
                            </motion.div>
                        ))}
                        <div className="ml-2">
                            <LanguageSwitcher />
                        </div>
                    </motion.div>
                    <div className="flex items-center gap-2 md:hidden">
                        <div className="menu-button">
                            <LanguageSwitcher compact />
                        </div>

                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }}
                            className="menu-button p-2 rounded-lg hover:bg-white/10 dark:hover:bg-gray-800 transition"
                            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </nav>
            </motion.header>
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-2xl z-50 md:hidden mobile-menu"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-6 pt-20 h-full flex flex-col">
                                <div className="mb-10">
                                    <Link
                                        href={buildHref()}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center justify-center"
                                    >
                                        <div className="relative w-16 h-16">
                                            <Image
                                                src="/logo/Logo_Ligth.png"
                                                alt={t('logoAlt')}
                                                fill
                                                sizes="64px"
                                                className="object-contain"
                                            />
                                        </div>
                                    </Link>
                                </div>

                                <nav className="flex flex-col gap-3 flex-1">
                                    {navItems.map((item) => (
                                        <motion.div
                                            key={item.anchor}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Link
                                                href={buildHref(item.anchor)}
                                                onClick={(e) => handleMobileLinkClick(e, buildHref(item.anchor))}
                                                className={cn(
                                                    "block px-4 py-3 text-base font-medium rounded-lg transition",
                                                    "hover:bg-gray-100 dark:hover:bg-gray-800",
                                                    item.color
                                                )}
                                            >
                                                {item.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>
                                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                                    <p className="text-sm text-gray-500 dark:text-gray-400 px-4 text-center">
                                        © {new Date().getFullYear()} Diego Vargas
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}