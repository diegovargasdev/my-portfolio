import { z } from "zod";

export const formSchema = z.object({
    name: z
        .string()
        .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
        .max(50, { message: "El nombre no puede exceder 50 caracteres" })
        .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
            message: "El nombre solo puede contener letras",
        }),
    email: z
        .string()
        .email({ message: "Correo electrónico inválido" })
        .max(100, { message: "El email no puede exceder 100 caracteres" }),
    subject: z
        .string()
        .max(100, { message: "El asunto no puede exceder 100 caracteres" })
        .optional()
        .default(""),
    message: z
        .string()
        .min(10, { message: "El mensaje debe tener al menos 10 caracteres" })
        .max(1000, { message: "El mensaje no puede exceder 1000 caracteres" }),
    website: z
        .string()
        .max(0, { message: "Este campo debe estar vacío" })
        .optional()
        .default(""),
});

export type FormState = z.infer<typeof formSchema>;
export type FieldErrors = Partial<Record<keyof FormState, string>>;
export type TouchedFields = Partial<Record<keyof FormState, boolean>>;
export type FormStatus = { ok: boolean; msg: string } | null;