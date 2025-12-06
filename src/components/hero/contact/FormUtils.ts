import { FormState, FieldErrors } from "./FormSchema";

export const getFieldValue = (form: FormState, field: keyof FormState): string => {
    return form[field] || "";
};

export const isFormValid = (form: FormState, errors: FieldErrors): boolean => {
    const requiredFields = ["name", "email", "message"] as const;

    for (const field of requiredFields) {
        const value = getFieldValue(form, field);
        if (!value.trim()) return false;

        if (errors[field]) return false;
    }
    const fieldsWithErrors = Object.keys(errors) as (keyof FormState)[];
    for (const field of fieldsWithErrors) {
        if (errors[field]) return false;
    }

    return true;
};

export const shouldLimitCharacters = (fieldName: string, value: string): boolean => {
    const limits: Record<string, number> = {
        name: 50,
        email: 100,
        subject: 100,
        message: 1000,
    };

    return value.length > (limits[fieldName] || Infinity);
};