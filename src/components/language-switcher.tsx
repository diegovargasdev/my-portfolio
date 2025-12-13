"use client"

import { useParams, usePathname, useRouter } from 'next/navigation'
import { locales } from '@/i18n'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { motion } from 'framer-motion'
import { Languages } from 'lucide-react'
import { cn } from '@/lib/utils'

const localeNames: Record<string, string> = {
    es: 'Español',
    en: 'English',
}

export function LanguageSwitcher() {
    const params = useParams()
    const router = useRouter()
    const pathname = usePathname()
    
    // Obtener el locale de los params o del pathname
    const locale = (params?.locale as string) || pathname.split('/')[1] || 'es'

    const switchLocale = (newLocale: string) => {
        // El pathname incluye el locale (ej: /es o /es/projects/...)
        // Remover el locale actual de la ruta
        const segments = pathname.split('/').filter(Boolean)
        const currentLocale = segments[0]
        
        // Si el primer segmento es un locale válido, lo removemos
        const pathWithoutLocale = locales.includes(currentLocale as any)
            ? '/' + segments.slice(1).join('/')
            : pathname
        
        // Construir la nueva ruta con el nuevo locale
        const newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
        router.push(newPath)
        router.refresh()
    }

    return (
        <DropdownMenu>
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors outline-none">
                    <Languages className="h-4 w-4" />
                    <span className="text-sm font-medium">
                        {localeNames[locale] || locale.toUpperCase()}
                    </span>
                </DropdownMenuTrigger>
            </motion.div>
            <DropdownMenuContent align="end" className="min-w-[120px]">
                {locales.map((loc) => (
                    <DropdownMenuItem
                        key={loc}
                        onClick={() => switchLocale(loc)}
                        className={cn(
                            "cursor-pointer",
                            locale === loc && "bg-accent font-semibold"
                        )}
                    >
                        {localeNames[loc]}
                        {locale === loc && (
                            <span className="ml-auto text-xs">✓</span>
                        )}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

