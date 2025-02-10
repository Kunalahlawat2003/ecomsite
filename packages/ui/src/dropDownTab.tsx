import { useState } from "react";
import { ArrowIcon } from "../icons/arrowIcon.js";


export function DropDownTab () {
    const [isShopOpen, setShopOpen] = useState(false);

    return <>
    <div className="w-full tracking-wider sm:text-xl text-xl px-7 py-3 hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer transition-all flex justify-between">
        <div className="border-r-2 w-[80%]">
          SHOP
        </div>
        <div onClick={() => {setShopOpen(!isShopOpen)}}
            className={`${isShopOpen ? 'transform rotate-180': ''} self-center pl-2 duration-300`}>
          <ArrowIcon size="lg"/>
        </div>
    </div>
    {isShopOpen && (
        <div className=" w-full tracking-wider text-md px-7 py-3 cursor-pointer transition-all flex flex-col">
            <ul className="">
                <li className="p-1 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-md transition-all">Shirts</li>
                <li className="p-1 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-md transition-all">Trousers</li>
                <li className="p-1 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-md transition-all">Cargo Pants</li>
                <li className="p-1 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-md transition-all">Jeans</li>
                <li className="p-1 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-md transition-all">Winterwear</li>
                <li className="p-1 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-md transition-all">Shorts</li>
                <li className="p-1 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-md transition-all">Joggers</li>
                <li className="p-1 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-md transition-all">Accessories</li>
            </ul>
        </div>
    )}
    <hr className="mx-7"/>
    </>
}