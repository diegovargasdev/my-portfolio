"use client";

import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";
import { useParams, usePathname } from "next/navigation";
import { useTranslations } from 'next-intl';

export default function Footer() {
    const params = useParams();
    const pathname = usePathname();
    const locale = (params?.locale as string) || 'es';
    const t = useTranslations('Footer');
    const getBasePath = () => {
        if (pathname && pathname.startsWith(`/${locale}`)) {
            return `/${locale}`;
        }
        return locale ? `/${locale}` : '';
    };

    const basePath = getBasePath();

    return (
        <footer className="border-t mt-28 bg-black text-neutral-300">
            <div className="container mx-auto px-6 md:px-12 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                        {t('title')}
                    </h2>

                    <p className="text-neutral-400 mb-6">
                        {t('subtitle')}
                    </p>

                    <a
                        href="mailto:diegovargas.devweb@gmail.com"
                        className="inline-block px-10 py-3 rounded-xl border border-neutral-700 text-sm tracking-wider transition-all duration-300 relative hover:border-pink-500 hover:text-pink-500 group"
                    >
                        <span className="absolute inset-0 rounded-xl bg-pink-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                        <span className="relative z-10">{t('contactButton')}</span>
                    </a>
                </div>
                <div className="flex justify-center gap-10 mb-14">
                    <SocialIcon
                        href="https://github.com/diegovargasdev"
                        Icon={Github}
                        color="pink"
                        label={t('github')}
                    />
                    <SocialIcon
                        href="https://linkedin.com/in/TU_USUARIO"
                        Icon={Linkedin}
                        color="green"
                        label={t('linkedin')}
                    />
                    <SocialIcon
                        href="mailto:diegovargas.devweb@gmail.com"
                        Icon={Mail}
                        color="pink"
                        label={t('email')}
                    />
                </div>

                <div className="flex flex-wrap justify-center gap-8 text-sm text-neutral-400 mb-14">
                    <FooterLink href={`${basePath}`}>
                        {t('home')}
                    </FooterLink>
                    <FooterLink href={`${basePath}#about`}>
                        {t('about')}
                    </FooterLink>
                    <FooterLink href={`${basePath}#projects`}>
                        {t('projects')}
                    </FooterLink>
                    <FooterLink href={`${basePath}#contact`}>
                        {t('contact')}
                    </FooterLink>
                </div>

                <div className="border-t border-neutral-800 pt-6 text-center text-xs text-neutral-500">
                    {t('copyright', { year: new Date().getFullYear() })}
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({
    href,
    Icon,
    color,
    label
}: {
    href: string;
    Icon: any;
    color: "pink" | "green";
    label: string;
}) {
    const hoverColor = color === "pink" ? "hover:text-pink-500" : "hover:text-green-500";
    const underlineColor = color === "pink" ? "bg-pink-500" : "bg-green-500";

    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`group text-neutral-500 transition-all duration-300 relative ${hoverColor}`}
        >
            <Icon size={22} />
            <span
                className={`absolute bottom-[-4px] left-0 w-full h-[1px] ${underlineColor} scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`}
            />
        </Link>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const hash = href.split('#')[1];
        if (hash) {
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            window.location.href = href;
        }
    };

    return (
        <Link
            href={href}
            onClick={(e) => handleAnchorClick(e, href)}
            className="relative text-neutral-400 hover:text-white transition-all duration-300 px-1"
        >
            {children}
            <span
                className="absolute bottom-[-3px] left-0 w-full h-[1px] bg-neutral-600 scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"
            ></span>
        </Link>
    );
}