"use client"

import { useParams, usePathname } from "next/navigation"

export function useAnchorNavigation() {
    const params = useParams()
    const pathname = usePathname()
    const locale = (params?.locale as string) || 'es'

    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()

        const url = new URL(href, window.location.origin)
        const targetId = url.hash.substring(1)
        const targetPath = url.pathname
        const isHomePage = pathname === `/${locale}` || pathname === '/' || pathname === ''

        const isTargetHome = targetPath === `/${locale}` || targetPath === '/' || targetPath === ''

        if (isHomePage && isTargetHome && targetId) {
            const element = document.getElementById(targetId)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                window.history.pushState(null, '', href)
            }
        } else if (isTargetHome && targetId) {
            window.location.href = href
        } else if (isTargetHome && !targetId) {
            window.location.href = href
        } else {
            window.location.href = href
        }
    }

    const buildHref = (anchor?: string) => {
        const base = locale ? `/${locale}` : '/'
        if (anchor) {
            return `${base}#${anchor}`
        }
        return base
    }

    return {
        handleAnchorClick,
        buildHref,
        locale
    }
}