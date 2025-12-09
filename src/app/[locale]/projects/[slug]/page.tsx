import { projects } from "@/data/projects"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { BreadcrumbProjectPage } from "@/components/breadcrumb"
import { IconChallenges, IconMyRole, IconObjective, IconResults } from "@/components/icons"

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params

    const project = projects.find((p) => p.slug === slug)

    if (!project) return notFound()

    return (
        <>
            <section className="py-20 container mx-auto px-6 md:px-12">
                <BreadcrumbProjectPage slug={project.title} />
                <h1 className="text-4xl font-bold mt-4 mb-6">{project.title}</h1>
                <p className="text-muted-foreground mb-8">{project.description}</p>
                <div className="flex gap-3 flex-wrap mb-16">
                    {project.tech?.map((t) => (
                        <Badge key={t} variant="secondary">
                            {t}
                        </Badge>
                    ))}
                </div>

                {project.objective && (
                    <div className="mb-16">
                        <h2 className="flex text-2xl font-semibold mb-3">
                            <IconObjective />
                            <p className="ml-2" >Objetivo del Proyecto</p>
                        </h2>
                        <p className="text-muted-foreground">{project.objective}</p>
                    </div>
                )}

                {project.myRole && (
                    <div className="mb-16">
                        <h2 className="flex text-2xl font-semibold mb-3">
                            <IconMyRole />
                            <p className="ml-2">Mi Rol</p>
                        </h2>
                        <p className="text-muted-foreground">{project.myRole}</p>
                    </div>
                )}

                {project.challenges && (
                    <div className="mb-16">
                        <h2 className="flex text-2xl font-semibold mb-3">
                            <IconChallenges />
                            <p className="ml-2">Retos del Desarrollo</p>
                        </h2>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                            {project.challenges.map((c, i) => (
                                <li key={i}>{c}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {project.results && (
                    <div className="mb-20">
                        <h2 className="flex text-2xl font-semibold mb-3">
                            <IconResults />
                            <p className="ml-2">Resultados</p>
                        </h2>
                        <p className="text-muted-foreground">{project.results}</p>
                    </div>
                )}

                <div className="space-y-20">
                    {project.images?.map((item, i) => {
                        const isReversed = i % 2 === 1

                        const borderColor =
                            i % 2 === 0
                                ? "hover:border-pink-500"
                                : "hover:border-green-500"

                        return (
                            <div
                                key={i}
                                className={`group p-6 border border-transparent rounded-2xl transition-all duration-300
                                    hover:shadow-xl hover:-translate-y-1 ${borderColor}
                                    grid md:grid-cols-2 gap-10 items-center
                                    ${isReversed ? "md:[&>*:first-child]:order-2" : ""}`}
                            >
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-semibold">
                                        {item.title || `Vista ${i + 1}`}
                                    </h3>

                                    <p className="text-muted-foreground">{item.text}</p>
                                </div>

                                <div className="relative w-full h-[350px] md:h-[420px] rounded-xl overflow-hidden">
                                    <Image
                                        src={item.src}
                                        alt={`${project.title} screenshot ${i + 1}`}
                                        fill
                                        className="transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>

                <p className="text-xs text-muted-foreground mt-16">
                    Disclaimer: Este módulo fue desarrollado para una empresa del sector financiero.
                    Todo el contenido visual pertenece a dicha empresa y se usa únicamente
                    con fines demostrativos dentro de este portafolio.
                </p>
            </section>
        </>
    )
}
