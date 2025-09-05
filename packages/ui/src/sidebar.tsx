"use client"

import { sidebarAtom } from "@repo/atoms/sidebarAtom"
import { useAtom } from "jotai"
import { SidebarTab } from "./sidebarTab.js"
import { DropDownTab } from "./dropDownTab.js"
import { LoginIcon } from "../icons/loginIcon.js"
import { CloseIcon } from "../icons/closeIcon.js"
import { InstaIcon } from "../icons/instaIcon.js"
import { FacebookIcon } from "../icons/facebookIcon.js"
import { GithubIcon } from "../icons/githubIcon.js"
import { TwitterIcon } from "../icons/twitterIcon.js"
import { WebsiteIcon } from "../icons/websiteIcon.js"
import { PinterestIcon } from "../icons/pinterestIcon.js"
import { DarkmodeTab } from "./darkmodeTab.js"
import { BlurAtom } from "@repo/atoms/blurAtom"



export function Sidebar () {
    const [sidebarOpen, setSidebarOpen] = useAtom(sidebarAtom)
    const [isBlurOpen, setBlurOpen] = useAtom(BlurAtom);

    return <div className={`fixed top-0 left-0 sm:h-screen h-[92%] transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
      } xl:w-[30%] md:w-[40%] w-[70%] bg-white dark:bg-neutral-900 text-black dark:text-white z-50 flex flex-col pt-[77.6px]`}>
         <div className="fixed flex justify-between p-5 top-0 left-0 bg-white dark:bg-neutral-900 w-full border-b-2">
           <div className="flex gap-3 items-center cursor-pointer">
             <LoginIcon size="3xl"/>
             <p className=" text-lg">LOG IN</p>
           </div>
           <div onClick={() => {setSidebarOpen(!sidebarOpen), setBlurOpen(false)}} className="justify-self-end self-center cursor-pointer">
               <CloseIcon size="xl"/>
           </div>
         </div>
         <div className="overflow-y-auto scrollbar-thin" >
          <SidebarTab text="NEW ARRIVALS"/>
          <SidebarTab text="BEST SELLER"/>
          <SidebarTab text="SALE"/>
          <DropDownTab/>
          <SidebarTab text="DEAL OF THE DAY"/>
          <SidebarTab text="ORDERS"/>
          <DarkmodeTab/>
          <div className="w-full grid grid-cols-3 place-items-center p-5 border-y mt-5 divide-x-2 ">
            <div className="  cursor-pointer col-span-1 w-full flex justify-center "><InstaIcon size="3xl"/></div>
            <div className="  cursor-pointer col-span-1 w-full flex justify-center"><FacebookIcon size="3xl"/></div>
            <div className="  cursor-pointer col-span-1 w-full flex justify-center"><GithubIcon size="3xl"/></div>
          </div>
          <div className="w-full grid grid-cols-3  p-5 border-b place-items-center divide-x-2">
            <div className=" cursor-pointer col-span-1 w-full flex justify-center"><TwitterIcon size="3xl"/></div>
            <div className=" cursor-pointer col-span-1 w-full flex justify-center"><WebsiteIcon size="3xl"/></div>
            <div className=" cursor-pointer col-span-1 w-full flex justify-center"><PinterestIcon size="3xl"/></div>
          </div>
        </div>

    </div>
}