"use client"

import { Slider } from "./ui/slider"
import { useState } from "react"
import { SliderProps } from "@radix-ui/react-slider"

type Props = {
    defaultValue: SliderProps["defaultValue"]
}
export default function SliderPrice({ defaultValue }: Props) {

    const [value, setValue] = useState(defaultValue)
    return (
        <>
            <Slider onValueChange={setValue} defaultValue={value} max={2000} step={100} />
            <div className="flex items-center justify-between w-full py-2">
                <span className="text-lg">Precio Apartir de :</span>
                <span className="text-lg">{value}</span>
            </div>
        </>
    )
}