export interface ProjectImage {
    src: string
    title?: string
    text?: string
}

export interface Project {
    id: number
    slug: string
    type: string
    title: string
    description: string
    objective?: string
    challenges?: string[]
    myRole?: string
    results?: string
    tech?: string[]
    thumbnail?: string | null
    images?: ProjectImage[]
}

const projectsData: Record<'es' | 'en', Project[]> = {
    es: [
        {
            id: 1,
            slug: "concept-content-platform",
            type: "concept",
            title: "Content Management Platform (Concept)",
            description:
                "Conceptual frontend module designed to explore dynamic content rendering, routing strategies, and data-driven UI patterns in a modern web application.",

            objective:
                "Demonstrate scalable frontend architecture for handling dynamic content and reusable UI components.",

            challenges: [
                "Designing dynamic routes for content-driven pages.",
                "Handling loading, error, and empty states in asynchronous data fetching.",
                "Optimizing rendering strategies for performance and scalability."
            ],

            myRole:
                "Frontend architecture design, component implementation, data consumption patterns, and UI optimization.",

            results:
                "Conceptual implementation focused on maintainability, performance, and clean code structure.",

            tech: [
                "Next.js",
                "React",
                "TypeScript",
                "REST / GraphQL (conceptual)",
                "Tailwind CSS"
            ],

            thumbnail: null,

            images: []
        }
    ],
    en: [
        {
            id: 1,
            slug: "concept-content-platform",
            type: "concept",
            title: "Content Management Platform (Concept)",
            description:
                "Conceptual frontend module designed to explore dynamic content rendering, routing strategies, and data-driven UI patterns in a modern web application.",

            objective:
                "Demonstrate scalable frontend architecture for handling dynamic content and reusable UI components.",

            challenges: [
                "Designing dynamic routes for content-driven pages.",
                "Handling loading, error, and empty states in asynchronous data fetching.",
                "Optimizing rendering strategies for performance and scalability."
            ],

            myRole:
                "Frontend architecture design, component implementation, data consumption patterns, and UI optimization.",

            results:
                "Conceptual implementation focused on maintainability, performance, and clean code structure.",

            tech: [
                "Next.js",
                "React",
                "TypeScript",
                "REST / GraphQL (conceptual)",
                "Tailwind CSS"
            ],

            thumbnail: null,

            images: []
        }
    ]
}

export const getProjects = (locale: string = 'es'): Project[] => {
    return projectsData[locale as 'es' | 'en'] ?? projectsData.es
}

