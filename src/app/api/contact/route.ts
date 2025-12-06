import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

declare global {
    var __contactIpMap: Map<string, number> | undefined;
}

const resend = new Resend(process.env.RESEND_API_KEY);

const contactIpMap =
    globalThis.__contactIpMap ?? new Map<string, number>();
globalThis.__contactIpMap = contactIpMap;

export async function POST(req: NextRequest) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Todos los campos son obligatorios." },
                { status: 400 }
            );
        }
        const ip = req.headers.get("x-forwarded-for") || "unknown";
        const count = contactIpMap.get(ip) || 0;

        if (count > 5) {
            return NextResponse.json(
                { error: "Has enviado demasiados mensajes. Intenta más tarde." },
                { status: 429 }
            );
        }

        contactIpMap.set(ip, count + 1);

        await resend.emails.send({
            from: "Formulario Web <onboarding@resend.dev>",
            to: "diegovargas.devweb@gmail.com",
            subject: `Nuevo mensaje de ${name}`,
            html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error enviando email:", error);
        return NextResponse.json(
            { error: "Error en el servidor." },
            { status: 500 }
        );
    }
}
