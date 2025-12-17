import React from "react";

interface FormStatusProps {
    status: { ok: boolean; msg: string } | null;
    loading: boolean;
}

export const LoadingSpinner: React.FC = () => (
    <svg
        className="animate-spin h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
    >
        <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
        ></circle>
        <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
    </svg>
);

export const SuccessIcon: React.FC = () => (
    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

export const ErrorIcon: React.FC = () => (
    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
);

export const StatusMessage: React.FC<FormStatusProps> = ({ status }) => {
    if (!status) return null;

    return (
        <div className={`mt-4 p-4 rounded-lg ${status.ok ? ' border border-green-500/50' : 'bg-red-900/20 border border-red-500/50'}`}>
            <div className="flex items-center gap-2">
                {status.ok ? <SuccessIcon /> : <ErrorIcon />}
                <p className={status.ok ? "text-green-400" : "text-red-400"}>
                    {status.msg}
                </p>
            </div>
        </div>
    );
};

export const SubmitButton: React.FC<FormStatusProps & {
    disabled: boolean;
    onClick?: () => void;
    t?: (key: string) => string;
}> = ({ loading, disabled, onClick, t }) => (
    <button
        type="submit"
        onClick={onClick}
        disabled={disabled}
        className="cursor-pointer inline-flex items-center justify-center gap-3 px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-green-400 text-white disabled:cursor-not-allowed font-medium shadow-md min-w-[180px]"
    >
        {loading ? (
            <>
                <LoadingSpinner />
                {t ? t('sendingButton') : 'Enviando...'}
            </>
        ) : (
            t ? t('sendButton') : "Enviar mensaje"
        )}
    </button>
);