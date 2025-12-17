import React from "react";
import { FormState, FieldErrors, TouchedFields } from "./FormSchema";
import { getFieldValue } from "./FormUtils";

interface FieldProps {
    form: FormState;
    errors: FieldErrors;
    touched: TouchedFields;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    getInputClass: (fieldName: keyof FormState) => string;
    t?: (key: string) => string;
}

export const HoneypotField: React.FC<FieldProps> = ({ form, onChange, onBlur, t }) => (
    <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">{t ? t('honeypotLabel') : 'No llenar este campo'}</label>
        <input
            id="website"
            name="website"
            type="text"
            value={getFieldValue(form, "website")}
            onChange={onChange}
            onBlur={onBlur}
            tabIndex={-1}
            autoComplete="off"
            className="sr-only"
        />
    </div>
);

export const ErrorMessage: React.FC<{ error: string }> = ({ error }) => (
    <div className="flex items-center gap-1 mt-1">
        <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        <p className="text-red-500 text-sm">{error}</p>
    </div>
);

export const TextInput: React.FC<
    FieldProps & {
        name: keyof FormState;
        type?: string;
        placeholder: string;
        required?: boolean;
    }
> = ({ form, errors, touched, onChange, onBlur, getInputClass, name, type = "text", placeholder, required = false }) => (
    <div className="relative">
        <input
            name={name}
            type={type}
            value={getFieldValue(form, name)}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            className={getInputClass(name)}
            required={required}
            aria-describedby={errors[name] && touched[name] ? `${name}-error` : undefined}
            aria-invalid={!!(errors[name] && touched[name])}
        />
        {errors[name] && touched[name] && (
            <ErrorMessage error={errors[name]!} />
        )}
    </div>
);

export const TextAreaInput: React.FC<
    FieldProps & {
        name: keyof FormState;
        placeholder: string;
        rows?: number;
        characterCount: number;
        required?: boolean;
    }
> = ({ form, errors, touched, onChange, onBlur, getInputClass, name, placeholder, rows = 6, characterCount, required = false, t }) => (
    <div className="relative">
        <textarea
            name={name}
            value={getFieldValue(form, name)}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            rows={rows}
            className={getInputClass(name)}
            required={required}
            aria-describedby={errors[name] && touched[name] ? `${name}-error` : undefined}
            aria-invalid={!!(errors[name] && touched[name])}
        />
        {errors[name] && touched[name] && (
            <ErrorMessage error={errors[name]!} />
        )}
        <div className="flex justify-between items-center mt-2 px-1">
            <p className="text-sm text-neutral-400">
                {t ? t('requiredFields') : '* Campos obligatorios'}
            </p>
            <p className={`text-sm ${characterCount > 1000 ? 'text-red-500' : characterCount >= 10 ? 'text-green-500' : 'text-neutral-400'}`}>
                {characterCount}/1000
            </p>
        </div>
    </div>
);