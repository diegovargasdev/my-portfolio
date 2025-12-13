"use client";

import React, { useEffect } from "react";
import { useTranslations } from 'next-intl';
import { HoneypotField, TextInput, TextAreaInput } from "./FormFields";
import { FormState, FieldErrors, TouchedFields, FormStatus } from "./FormSchema";
import { validateField, validateForm } from "./FormValidation";
import { getFieldValue, isFormValid, shouldLimitCharacters } from "./FormUtils";
import { StatusMessage, SubmitButton } from "./FormStatus";

export default function ContactForm() {
    const t = useTranslations('ContactForm');
    
    const [form, setForm] = React.useState<FormState>({
        name: "",
        email: "",
        subject: "",
        message: "",
        website: "",
    });

    const [errors, setErrors] = React.useState<FieldErrors>({});
    const [touched, setTouched] = React.useState<TouchedFields>({});
    const [loading, setLoading] = React.useState(false);
    const [status, setStatus] = React.useState<FormStatus>(null);
    const [characterCount, setCharacterCount] = React.useState(0);

    useEffect(() => {
        setCharacterCount(form.message.length);
    }, [form.message]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (shouldLimitCharacters(name, value)) return;

        setForm((prev) => ({ ...prev, [name]: value }));
        if (touched[name as keyof FormState]) {
            validateField(name as keyof FormState, value, setErrors, t);
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name } = e.target;
        const fieldValue = getFieldValue(form, name as keyof FormState);
        setTouched((prev) => ({ ...prev, [name]: true }));
        validateField(name as keyof FormState, fieldValue, setErrors, t);
    };

    const getInputClass = (fieldName: keyof FormState) => {
        const baseClass = "bg-transparent border rounded-lg px-4 py-3 focus:outline-none transition-all duration-200 w-full";
        const fieldValue = getFieldValue(form, fieldName);

        if (errors[fieldName] && touched[fieldName]) {
            return `${baseClass} border-red-500 focus:ring-2 focus:ring-red-500 focus:border-red-500`;
        }

        if (touched[fieldName] && !errors[fieldName] && fieldValue) {
            return `${baseClass} border-green-500 focus:ring-2 focus:ring-green-500 focus:border-green-500`;
        }

        return `${baseClass} border-neutral-700 focus:border-pink-400 focus:ring-2 focus:ring-pink-400`;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const allTouched: TouchedFields = {
            name: true,
            email: true,
            subject: true,
            message: true,
            website: true,
        };
        setTouched(allTouched);

        if (!validateForm(form, setErrors, t)) {
            setStatus({ ok: false, msg: t('formValidationError') });
            return;
        }

        if (getFieldValue(form, "website").trim() !== "") {
            setStatus({ ok: false, msg: t('honeypotError') });
            return;
        }

        setLoading(true);
        setStatus(null);

        try {
            const formData = {
                name: getFieldValue(form, "name").trim(),
                email: getFieldValue(form, "email").trim(),
                subject: getFieldValue(form, "subject").trim(),
                message: getFieldValue(form, "message").trim(),
            };

            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok || data.error) {
                throw new Error(data.error || t('sendError'));
            }

            setStatus({
                ok: true,
                msg: t('successMessage')
            });

            setForm({ name: "", email: "", subject: "", message: "", website: "" });
            setTouched({});
            setErrors({});
            setCharacterCount(0);

        } catch (error) {
            console.error("Error en el envío:", error);
            setStatus({
                ok: false,
                msg: error instanceof Error ? error.message : t('networkError'),
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto relative" noValidate>
            <HoneypotField
                form={form}
                errors={errors}
                touched={touched}
                onChange={handleChange}
                onBlur={handleBlur}
                getInputClass={getInputClass}
                t={t}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <TextInput
                    form={form}
                    errors={errors}
                    touched={touched}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    getInputClass={getInputClass}
                    name="name"
                    placeholder={t('namePlaceholder')}
                    required
                />

                <TextInput
                    form={form}
                    errors={errors}
                    touched={touched}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    getInputClass={getInputClass}
                    name="email"
                    type="email"
                    placeholder={t('emailPlaceholder')}
                    required
                />
            </div>

            <div className="mb-6">
                <TextInput
                    form={form}
                    errors={errors}
                    touched={touched}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    getInputClass={getInputClass}
                    name="subject"
                    placeholder={t('subjectPlaceholder')}
                />
            </div>

            <div className="mb-4">
                <TextAreaInput
                    form={form}
                    errors={errors}
                    touched={touched}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    getInputClass={getInputClass}
                    name="message"
                    placeholder={t('messagePlaceholder')}
                    characterCount={characterCount}
                    required
                    t={t}
                />
            </div>

            <div className="mt-8">
                <SubmitButton
                    loading={loading}
                    status={status}
                    disabled={loading || !isFormValid(form, errors)}
                    t={t}
                />

                <StatusMessage status={status} loading={loading} />
            </div>
        </form>
    );
}