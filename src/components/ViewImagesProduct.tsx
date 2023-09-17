"use client"

import Image from "next/image";
import { useState } from "react";

type ImageProps = {
    url: string,
    active: boolean
}

export default function ViewImagesProduct({ images }: { images: string[] }) {

    const [viewImage, setViewImage] = useState({
        image: images[0],
        isSelect: true
    })

    const handleImage = ({ url, active }: ImageProps) => {
        setViewImage({
            image: url,
            isSelect: active
        })
    }
    return (
        <>
            <Image
                src={viewImage.image}
                width={700}
                height={700}
                alt={viewImage.image}
            />
            <div className="flex items-center justify-center w-full gap-3 py-4">
                {images.map((image) => (
                    <Image className={viewImage.image === image ? 'rounded-md border-4' : ''} onClick={() => handleImage({ url: image, active: true })} key={image} src={image} width={100} height={100} alt={image} />
                ))}
            </div>
        </>
    );
}
