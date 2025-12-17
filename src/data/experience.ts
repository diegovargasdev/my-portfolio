export const getExperience = (locale: string = "es") => {
    const experienceData = {
        es: [
            {
                id: 1,
                role: "Frontend Developer",
                company: "Kapitalizer",
                location: "México",
                period: "2024 – Presente",
                description:
                    "Desarrollador Frontend responsable del ownership completo de aplicaciones web internas y de cara al cliente.",

                responsibilities: [
                    "Desarrollo de features productivas end-to-end (análisis, implementación, testing y preparación para despliegue).",
                    "Diseño de soluciones técnicas cuando no existe diseño previo o definición clara.",
                    "Integración con APIs REST y coordinación con backend y QA.",
                    "Resolución de incidencias en producción y soporte frontend.",
                    "Documentación técnica para pases a producción y reducción de riesgo operativo."
                ],

                tech: [
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "APIs REST",
                    "Git"
                ]
            }
        ],
        en: [
            {
                id: 1,
                role: "Frontend Developer",
                company: "Kapitalizer",
                location: "Mexico",
                period: "2024 – Present",
                description:
                    "Frontend Developer responsible for owning and maintaining internal and customer-facing web applications.",

                responsibilities: [
                    "End-to-end development of production-ready features.",
                    "Technical solution design in the absence of predefined UI/UX.",
                    "API integration and collaboration with backend and QA teams.",
                    "Frontend incident resolution in production environments.",
                    "Technical documentation for deployment processes."
                ],

                tech: [
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "REST APIs",
                    "Git"
                ]
            }
        ]
    }

    return experienceData[locale as "es" | "en"] || experienceData.es
}
