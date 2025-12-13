export const getProjects = (locale: string = 'es') => {
    const projectsData = {
        es: [
            {
                id: 1,
                slug: "blog-empresarial",
                type: "blog",
                title: "Blog Empresarial",
                description:
                    "Módulo corporativo desarrollado para que el equipo de marketing pueda gestionar publicaciones de forma autónoma, usando Hygraph como CMS y GraphQL para la extracción de contenido.",

                objective:
                    "Centralizar la comunicación corporativa y mejorar la velocidad de publicación sin intervención técnica.",

                challenges: [
                    "Implementar rutas dinámicas para artículos individuales.",
                    "Optimizar cargas usando ISR y manejo de imágenes responsivas.",
                    "Diseñar un sistema editorial flexible y escalable."
                ],

                myRole:
                    "Desarrollo completo del módulo: integración con Hygraph, consumo de GraphQL, diseño de UI y optimización de rendimiento.",

                results:
                    "La empresa logró reducir el tiempo de publicación en un 70% y unificó el estilo editorial corporativo.",

                tech: ["Next.js", "Hygraph", "GraphQL", "next/navigation", "Tailwind CSS"],

                thumbnail: "/projects/blog-empresarial/thumb.png",

                images: [
                    {
                        title: "Panel Principal",
                        src: "/projects/blog-empresarial/1.png",
                        text: "Vista principal del blog mostrando tarjetas corporativas con contenido cargado dinámicamente desde Hygraph."
                    },
                    {
                        title: "Publicación Detallada",
                        src: "/projects/blog-empresarial/2.png",
                        text: "Detalle de una entrada con contenido enriquecido obtenido mediante consultas GraphQL."
                    },
                    {
                        title: "Panel Hygraph",
                        src: "/projects/blog-empresarial/3.png",
                        text: "Panel administrativo donde el equipo gestiona publicaciones, imágenes y contenido estructurado."
                    }
                ]
            },
            {
                id: 2,
                slug: "cookie-consent",
                type: "feature",
                title: "Consentimiento de Cookies",
                description:
                    "Implementación completa de un sistema de consentimiento de cookies (cookie banner + cookie modal) totalmente modular, compatible con Google Tag Manager, Analytics, Pixel y cookies personalizadas, integrado en un proyecto Gatsby ya existente.",

                objective:
                    "Garantizar cumplimiento de privacidad (GDPR/CCPA), permitir control granular de cookies y scripts, y mejorar la transparencia para los usuarios.",

                challenges: [
                    "Integrar un sistema de consentimiento en un proyecto Gatsby con estructura previa y sin romper el SSR.",
                    "Crear un modal accesible, personalizable y reutilizable en cualquier parte del sitio.",
                    "Construir un sistema de categorías: Necesarias, Analíticas, Marketing y Preferencias.",
                    "Sincronizar el estado del consentimiento entre localStorage y carga condicional de scripts.",
                    "Permitir reabrir el modal desde cualquier lugar del sitio."
                ],

                myRole:
                    "Desarrollo completo: arquitectura del sistema, diseño del modal, control de categorías, carga condicional de scripts, eventos personalizados para abrir/cerrar, integración con GTM y creación del banner inicial.",

                results:
                    "Se logró un sistema totalmente dinámico que evita cargar scripts sin consentimiento, mejora la conformidad legal del sitio y permite al usuario gestionar su privacidad en cualquier momento.",

                tech: ["Gatsby.js", "React", "localStorage API", "Event Dispatching", "CSS Modules"],

                thumbnail: "/projects/cookie-consent/thumb.png",

                images: [
                    {
                        title: "Cookie Banner",
                        src: "/projects/cookie-consent/1.png",
                        text: "Vista del banner inicial donde el usuario puede aceptar todo, rechazar o abrir la configuración avanzada."
                    },
                    {
                        title: "Modal de Configuración",
                        src: "/projects/cookie-consent/2.png",
                        text: "Interfaz del modal que muestra categorías independientes y permite personalizar el consentimiento."
                    },
                    {
                        title: "Estructura del Sistema",
                        src: "/projects/cookie-consent/3.png",
                        text: "Diagrama del flujo de carga condicional de scripts según las preferencias del usuario almacenadas en localStorage."
                    }
                ]
            },
            {
                id: 3,
                slug: "transparencia-financiera",
                type: "web",
                title: "Visor Dinámico de Documentos",

                description:
                    "Implementación de una nueva sección de Transparencia dentro de una landing corporativa hecha en Gatsby, permitiendo consultar documentos financieros y regulatorios mediante acordeones, filtros por año y un visor de PDFs integrado.",

                objective:
                    "Permitir que la empresa publique, gestione y muestre documentos oficiales y financieros de forma clara, ordenada y accesible para los usuarios, cumpliendo con requisitos de transparencia y normativas Fintech.",

                challenges: [
                    "Desarrollar una arquitectura modular compatible con Gatsby 4.9.3 utilizando Material UI y componentes personalizados.",
                    "Consumir múltiples APIs internas para obtener años, tipos de documentos y archivos PDF, asegurando el orden correcto por mes.",
                    "Implementar un visor dinámico con filtros por año, previsualización por mes y navegación por categorías dentro de un sistema de acordeones."
                ],

                myRole:
                    "Diseñé e implementé completamente la sección de Transparencia, incluyendo la estructura UI/UX, los acordeones por categoría, los módulos Anexo 17, Estados Financieros y Estados Auditados. Integré múltiples APIs, generé lógica de filtrado por año y ordenamiento por mes, y programé el visor PDF dinámico. También desarrollé la sección interna (operativa) para gestionar documentos (crear, editar, eliminar tipos, años y meses).",

                results:
                    "Se creó una sección totalmente dinámica y administrable, que permite a la empresa actualizar su información pública sin intervención del equipo técnico. Se mejoró la claridad en la publicación de documentos oficiales y se optimizó el acceso del usuario mediante un sistema de consulta rápido, ordenado y confiable.",

                tech: [
                    "Gatsby.js",
                    "React",
                    "Material UI",
                    "Custom APIs",
                ],

                thumbnail: "/projects/transparencia/thumb.png",

                images: [
                    {
                        title: "Vista general de la sección Transparencia",
                        src: "/projects/transparencia/1.png",
                        text: "Módulo principal con acordeones para cada categoría de documentos financieros."
                    },
                    {
                        title: "Selector de año y previsualización",
                        src: "/projects/transparencia/2.png",
                        text: "Interfaz para seleccionar año, cargar documentos vía API y mostrar previsualizaciones ordenadas por mes."
                    },
                    {
                        title: "Visor dinámico de PDFs",
                        src: "/projects/transparencia/3.png",
                        text: "Módulo de lectura dentro de la misma página, permitiendo visualizar documentos sin salir de la landing."
                    }
                ]
            }
        ],
        en: [
            {
                id: 1,
                slug: "blog-empresarial",
                type: "blog",
                title: "Corporate Blog",
                description: "Corporate module developed for the marketing team to manage publications autonomously, using Hygraph as CMS and GraphQL for content extraction.",
                objective: "Centralize corporate communication and improve publishing speed without technical intervention.",
                challenges: [
                    "Implement dynamic routes for individual articles.",
                    "Optimize loading using ISR and responsive image handling.",
                    "Design a flexible and scalable editorial system."
                ],
                myRole: "Complete module development: Hygraph integration, GraphQL consumption, UI design and performance optimization.",
                results: "The company reduced publishing time by 70% and unified the corporate editorial style.",
                tech: ["Next.js", "Hygraph", "GraphQL", "next/navigation", "Tailwind CSS"],
                thumbnail: "/projects/blog-empresarial/thumb.png",
                images: [
                    {
                        title: "Main Panel",
                        src: "/projects/blog-empresarial/1.png",
                        text: "Main blog view showing corporate cards with content dynamically loaded from Hygraph."
                    },
                    {
                        title: "Detailed Publication",
                        src: "/projects/blog-empresarial/2.png",
                        text: "Detail of an entry with enriched content obtained through GraphQL queries."
                    },
                    {
                        title: "Hygraph Panel",
                        src: "/projects/blog-empresarial/3.png",
                        text: "Administrative panel where the team manages publications, images and structured content."
                    }
                ]
            },
            {
                id: 2,
                slug: "cookie-consent",
                type: "feature",
                title: "Cookie Consent",
                description: "Complete implementation of a cookie consent system (cookie banner + cookie modal) fully modular, compatible with Google Tag Manager, Analytics, Pixel and custom cookies, integrated into an existing Gatsby project.",
                objective: "Ensure privacy compliance (GDPR/CCPA), allow granular control of cookies and scripts, and improve transparency for users.",
                challenges: [
                    "Integrate a consent system into a Gatsby project with existing structure without breaking SSR.",
                    "Create an accessible, customizable and reusable modal anywhere on the site.",
                    "Build a category system: Necessary, Analytics, Marketing and Preferences.",
                    "Synchronize consent status between localStorage and conditional script loading.",
                    "Allow reopening the modal from anywhere on the site."
                ],
                myRole: "Complete development: system architecture, modal design, category control, conditional script loading, custom events for open/close, GTM integration and initial banner creation.",
                results: "A fully dynamic system was achieved that avoids loading scripts without consent, improves the site's legal compliance and allows users to manage their privacy at any time.",
                tech: ["Gatsby.js", "React", "localStorage API", "Event Dispatching", "CSS Modules"],
                thumbnail: "/projects/cookie-consent/thumb.png",
                images: [
                    {
                        title: "Cookie Banner",
                        src: "/projects/cookie-consent/1.png",
                        text: "Initial banner view where users can accept all, reject or open advanced settings."
                    },
                    {
                        title: "Settings Modal",
                        src: "/projects/cookie-consent/2.png",
                        text: "Modal interface showing independent categories and allowing consent customization."
                    },
                    {
                        title: "System Structure",
                        src: "/projects/cookie-consent/3.png",
                        text: "Diagram of conditional script loading flow based on user preferences stored in localStorage."
                    }
                ]
            },
            {
                id: 3,
                slug: "transparencia-financiera",
                type: "web",
                title: "Dynamic Document Viewer",
                description: "Implementation of a new Transparency section within a corporate landing page made in Gatsby, allowing consultation of financial and regulatory documents through accordions, year filters and an integrated PDF viewer.",
                objective: "Allow the company to publish, manage and display official and financial documents clearly, organized and accessible to users, complying with transparency requirements and Fintech regulations.",
                challenges: [
                    "Develop a modular architecture compatible with Gatsby 4.9.3 using Material UI and custom components.",
                    "Consume multiple internal APIs to get years, document types and PDF files, ensuring correct ordering by month.",
                    "Implement a dynamic viewer with year filters, month preview and category navigation within an accordion system."
                ],
                myRole: "I completely designed and implemented the Transparency section, including the UI/UX structure, category accordions, Annex 17 modules, Financial Statements and Audited Statements. I integrated multiple APIs, generated year filtering and month sorting logic, and programmed the dynamic PDF viewer. I also developed the internal (operational) section to manage documents (create, edit, delete types, years and months).",
                results: "A fully dynamic and manageable section was created, allowing the company to update its public information without technical team intervention. Clarity in publishing official documents was improved and user access was optimized through a fast, organized and reliable query system.",
                tech: ["Gatsby.js", "React", "Material UI", "Custom APIs"],
                thumbnail: "/projects/transparencia/thumb.png",
                images: [
                    {
                        title: "Overview of the Transparency section",
                        src: "/projects/transparencia/1.png",
                        text: "Main module with accordions for each category of financial documents."
                    },
                    {
                        title: "Year selector and preview",
                        src: "/projects/transparencia/2.png",
                        text: "Interface to select year, load documents via API and show previews ordered by month."
                    },
                    {
                        title: "Dynamic PDF viewer",
                        src: "/projects/transparencia/3.png",
                        text: "In-page reading module allowing document viewing without leaving the landing page."
                    }
                ]
            }
        ]
    };

    return projectsData[locale as 'es' | 'en'] || projectsData.es;
};

export const projects = getProjects('es');
