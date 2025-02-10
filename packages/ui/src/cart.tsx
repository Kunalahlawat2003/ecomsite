"use client"
import { CartAtom } from "@repo/atoms/cartAtom"
import { useAtom } from "jotai"


export function Cart () {
    const [isCartOpen, setCartOpen] = useAtom(CartAtom);

    return <div className={`fixed top-0 right-0 sm:h-full h-[92%] transition-transform duration-300 ease-in-out ${
            isCartOpen ? 'transform translate-x-full' : 'transform -translate-x-0'
          } xl:w-[30%] md:w-[60%] w-[85%] bg-white dark:bg-neutral-900 text-black dark:text-white z-50 flex flex-col py-2`}>
    </div>
}