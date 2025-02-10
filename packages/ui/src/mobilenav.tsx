import { AccountIcon } from "../icons/accountIcon.js";
import { CategoryIcon } from "../icons/categoryIcon.js";
import { ContactIcon } from "../icons/contactIcon.js";
import { HomeIcon } from "../icons/homeIcon.js";



export function MobileNav() {
    return <div className="z-50 sm:hidden flex fixed w-full bottom-0 left-0 p-5 text-black dark:text-white dark:bg-black bg-white h-[8%] justify-between items-center shadow-[0_-4px_6px_-2px_rgba(0,0,0,0.1)]">
        <div className="cursor-pointer">
            <HomeIcon size="xl"/>
        </div>

        <div className="cursor-pointer">
            <CategoryIcon size="xl"/>
        </div> 

        <div className="cursor-pointer">
            <AccountIcon size="xl"/>
        </div>

        <div className="cursor-pointer">
            <ContactIcon size="xl"/>
        </div>
    </div>
}