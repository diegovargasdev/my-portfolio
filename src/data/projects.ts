export const getProjects = (locale: string = 'es') => {
    const projectsData = {
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
    };

    return projectsData[locale as 'es' | 'en'] || projectsData.es;
};

export const projects = getProjects('es');
