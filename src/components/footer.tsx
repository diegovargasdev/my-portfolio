"use client";

import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";
import { useTranslations } from 'next-intl';
import { useAnchorNavigation } from "@/hooks/useAnchorNavigation";

export default function Footer() {
    const t = useTranslations('Footer');
    const { handleAnchorClick, buildHref } = useAnchorNavigation();

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
                        href={buildHref('contact')}
                        onClick={(e) => handleAnchorClick(e, buildHref('contact'))}
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
                        href="https://www.linkedin.com/in/luis-diego-vargas-alaniz-660b95263"
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
                    <FooterLink
                        href={buildHref()}
                        onClick={(e) => handleAnchorClick(e, buildHref())}
                    >
                        {t('home')}
                    </FooterLink>
                    <FooterLink
                        href={buildHref('about')}
                        onClick={(e) => handleAnchorClick(e, buildHref('about'))}
                    >
                        {t('about')}
                    </FooterLink>
                    <FooterLink
                        href={buildHref('experience')}
                        onClick={(e) => handleAnchorClick(e, buildHref('experience'))}
                    >
                        {t('experience')}
                    </FooterLink>
                    <FooterLink
                        href={buildHref('contact')}
                        onClick={(e) => handleAnchorClick(e, buildHref('contact'))}
                    >
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

interface FooterLinkProps {
    href: string;
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    children: React.ReactNode;
}

function FooterLink({ href, onClick, children }: FooterLinkProps) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="relative text-neutral-400 hover:text-white transition-all duration-300 px-1"
        >
            {children}
            <span
                className="absolute bottom-[-3px] left-0 w-full h-[1px] bg-neutral-600 scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"
            ></span>
        </Link>
    );
}