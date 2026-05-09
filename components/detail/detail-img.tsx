"use client"

import Image from "next/image"
import { useState } from "react"

type Props = {
    src: string
    alt: string
}

export function DetailImage({ src, alt }: Props) {
    const [imageSrc, setImageSrc] = useState(src)

    return (
        <Image
            src={imageSrc}
            alt={alt}
            loading="lazy"
            width={100}
            height={100}
            className="w-full max-h-96 object-cover rounded-md"
            unoptimized={true}
            onError={() => {
                setImageSrc("/assets/placeholder.jpg")
            }}
        />
    )
}