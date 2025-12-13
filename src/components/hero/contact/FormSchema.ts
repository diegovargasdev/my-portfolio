import { z } from "zod";

export const getFormSchema = (t: (key: string) => string) => z.object({
    name: z
        .string()
        .min(2, { message: t('nameMinLength') })
        .max(50, { message: t('nameMaxLength') })
        .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
            message: t('nameOnlyLetters'),
        }),
    email: z
        .string()
        .email({ message: t('invalidEmail') })
        .max(100, { message: t('emailMaxLength') }),
    subject: z
        .string()
        .max(100, { message: t('subjectMaxLength') })
        .optional()
        .default(""),
    message: z
        .string()
        .min(10, { message: t('messageMinLength') })
        .max(1000, { message: t('messageMaxLength') }),
    website: z
        .string()
        .max(0, { message: t('honeypotFieldError') })
        .optional()
        .default(""),
});

export type FormState = z.infer<ReturnType<typeof getFormSchema>>;
export type FieldErrors = Partial<Record<keyof FormState, string>>;
export type TouchedFields = Partial<Record<keyof FormState, boolean>>;
export type FormStatus = { ok: boolean; msg: string } | null;