import { z } from "zod";
import { formSchema, FormState, FieldErrors } from "./FormSchema";

// Validar campo individual
export const validateField = (
    name: keyof FormState,
    value: string,
    setErrors: (errors: FieldErrors | ((prev: FieldErrors) => FieldErrors)) => void
): boolean => {
    const stringValue = value || "";

    // Para el campo website (honeypot)
    if (name === "website") {
        if (stringValue.trim() !== "") {
            setErrors((prev) => ({ ...prev, [name]: "Este campo debe estar vacío" }));
            return false;
        }
        setErrors((prev) => ({ ...prev, [name]: undefined }));
        return true;
    }

    try {
        // Validar usando el esquema parcialmente
        if (name === "name") {
            formSchema.shape.name.parse(stringValue);
        } else if (name === "email") {
            formSchema.shape.email.parse(stringValue);
        } else if (name === "subject") {
            formSchema.shape.subject.parse(stringValue);
        } else if (name === "message") {
            formSchema.shape.message.parse(stringValue);
        }

        setErrors((prev) => ({ ...prev, [name]: undefined }));
        return true;
    } catch (error) {
        if (error instanceof z.ZodError) {
            const fieldError = error.issues[0]?.message || "Error de validación";
            setErrors((prev) => ({ ...prev, [name]: fieldError }));
        } else {
            setErrors((prev) => ({ ...prev, [name]: "Error de validación" }));
        }
        return false;
    }
};

// Validar todo el formulario
export const validateForm = (
    form: FormState,
    setErrors: (errors: FieldErrors | ((prev: FieldErrors) => FieldErrors)) => void
): boolean => {
    try {
        formSchema.parse(form);
        setErrors({});
        return true;
    } catch (error) {
        if (error instanceof z.ZodError) {
            const newErrors: FieldErrors = {};
            error.issues.forEach((issue) => {
                const fieldName = issue.path[0] as keyof FormState;
                newErrors[fieldName] = issue.message;
            });
            setErrors(newErrors);
        }
        return false;
    }
};