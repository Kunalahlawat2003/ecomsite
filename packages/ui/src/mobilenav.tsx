"use client"
import { useAtom } from "jotai";
import { AccountIcon } from "../icons/accountIcon.js";
import { CategoryIcon } from "../icons/categoryIcon.js";
import { ContactIcon } from "../icons/contactIcon.js";
import { HomeIcon } from "../icons/homeIcon.js";
import { LoginAtom } from "@repo/atoms/loginAtom";



export function MobileNav() {
    const [isLoginTabOpen, setLoginTabOpen] = useAtom(LoginAtom);

    function handleLogin () {
        const token = localStorage.getItem("token");
    
        if(!token) {
          setLoginTabOpen(true);
        } else {
          //nothing for now
        }
      }

    return <div className="z-50 sm:hidden flex fixed w-full bottom-0 left-0 p-5 text-black dark:text-white dark:bg-black bg-white h-[8%] justify-between items-center shadow-[0_-4px_6px_-2px_rgba(0,0,0,0.1)]">
        <div className="cursor-pointer">
            <HomeIcon size="xl"/>
        </div>

        <div className="cursor-pointer">
            <CategoryIcon size="xl"/>
        </div> 

        <div className="cursor-pointer"
        onClick={handleLogin}>
            <AccountIcon size="xl"/>
        </div>

        <div className="cursor-pointer">
            <ContactIcon size="xl"/>
        </div>
    </div>
}