import { z } from "zod";
import { getFormSchema, FormState, FieldErrors } from "./FormSchema";

export const validateField = (
    name: keyof FormState,
    value: string,
    setErrors: (errors: FieldErrors | ((prev: FieldErrors) => FieldErrors)) => void,
    t: (key: string) => string
): boolean => {
    const stringValue = value || "";
    const formSchema = getFormSchema(t);

    if (name === "website") {
        if (stringValue.trim() !== "") {
            setErrors((prev) => ({ ...prev, [name]: t('honeypotFieldError') }));
            return false;
        }
        setErrors((prev) => ({ ...prev, [name]: undefined }));
        return true;
    }

    try {
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
            const fieldError = error.issues[0]?.message || t('validationError');
            setErrors((prev) => ({ ...prev, [name]: fieldError }));
        } else {
            setErrors((prev) => ({ ...prev, [name]: t('validationError') }));
        }
        return false;
    }
};

export const validateForm = (
    form: FormState,
    setErrors: (errors: FieldErrors | ((prev: FieldErrors) => FieldErrors)) => void,
    t: (key: string) => string
): boolean => {
    const formSchema = getFormSchema(t);
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