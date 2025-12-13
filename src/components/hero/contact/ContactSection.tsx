"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import { useTranslations } from 'next-intl';

export default function ContactSection() {
    const t = useTranslations('Contact');

    return (
        <section id="contact" className="py-28 relative overflow-hidden">

            <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
                <div className="absolute top-10 left-6 w-40 h-[1px] bg-pink-400"></div>
                <div className="absolute top-10 left-6 h-40 w-[1px] bg-green-400"></div>

                <div className="absolute bottom-16 right-10 w-56 h-[1px] bg-green-300"></div>
                <div className="absolute bottom-16 right-10 h-56 w-[1px] bg-pink-300"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-semibold text-center mb-6"
                >
                    {t('title')}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-center text-muted-foreground mb-12 max-w-xl mx-auto"
                >
                    {t('subtitle')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <ContactForm />
                </motion.div>
            </div>
        </section>
    );
}