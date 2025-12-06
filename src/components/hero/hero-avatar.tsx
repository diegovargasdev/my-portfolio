import Image from "next/image";

export function HeroAvatar() {
    return (
        <Image
            src="/avatar/avatar-pixel.png"
            alt="Avatar pixel art"
            fill
            className="image-render-pixel object-cover"
        />
    )
}
