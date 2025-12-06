"use client";

import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t mt-28 bg-black text-neutral-300">
            <div className="container mx-auto px-6 md:px-12 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                        ¿Listo para trabajar conmigo?
                    </h2>

                    <p className="text-neutral-400 mb-6">
                        Me encantaría colaborar contigo y construir algo increíble.
                    </p>

                    <a
                        href="mailto:diegovargas.devweb@gmail.com"
                        className="inline-block px-10 py-3 rounded-xl border border-neutral-700 text-sm tracking-wider transition-all duration-300 relative hover:border-pink-500 hover:text-pink-500"
                    >
                        <span className="absolute inset-0 rounded-xl bg-pink-500/10 opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
                        <span className="relative z-10">CONTACTAR</span>
                    </a>
                </div>
                <div className="flex justify-center gap-10 mb-14">
                    <SocialIcon
                        href="https://github.com/diegovargasdev"
                        Icon={Github}
                        color="pink"
                    />
                    <SocialIcon
                        href="https://linkedin.com/in/TU_USUARIO"
                        Icon={Linkedin}
                        color="green"
                    />
                    <SocialIcon
                        href="mailto:diegovargas.devweb@gmail.com"
                        Icon={Mail}
                        color="pink"
                    />
                </div>

                <div className="flex flex-wrap justify-center gap-8 text-sm text-neutral-400 mb-14">
                    <FooterLink href="/">Inicio</FooterLink>
                    <FooterLink href="/#about">Sobre mí</FooterLink>
                    <FooterLink href="/#projects">Proyectos</FooterLink>
                    <FooterLink href="/#contact">Contacto</FooterLink>
                </div>

                <div className="border-t border-neutral-800 pt-6 text-center text-xs text-neutral-500">
                    © {new Date().getFullYear()} Diego — Desarrollado con Next.js, Tailwind y shadcn/ui.
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ href, Icon, color }: { href: string; Icon: any; color: "pink" | "green" }) {
    const hoverColor = color === "pink" ? "hover:text-pink-500" : "hover:text-green-500";
    const underlineColor = color === "pink" ? "bg-pink-500" : "bg-green-500";

    return (
        <Link
            href={href}
            target="_blank"
            className={`text-neutral-500 transition-all duration-300 relative ${hoverColor}`}
        >
            <Icon size={22} />
            <span
                className={`absolute bottom-[-4px] left-0 w-full h-[1px] ${underlineColor} scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`}
            />
        </Link>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="relative text-neutral-400 hover:text-white transition-all duration-300 px-1"
        >
            {children}
            <span
                className="absolute bottom-[-3px] left-0 w-full h-[1px] bg-neutral-600 scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"
            ></span>
        </Link>
    );
}