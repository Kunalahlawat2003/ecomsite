"use client"
import { BlurAtom } from "@repo/atoms/blurAtom"
import { useAtom } from "jotai"


export function Blur() {

    const [isBlurOpen, setBlurOpen] = useAtom(BlurAtom);

    return <div className={`fixed bg-neutral-900/30 h-full w-full z-50 backdrop-blur-sm top-0 justify-center items-center ${isBlurOpen ? 'flex' : 'hidden'}`}>

    </div>
}