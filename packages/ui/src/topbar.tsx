"use client"

import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { sidebarAtom } from "@repo/atoms/sidebarAtom";
import { SidebarIcon } from "../icons/sidebarIcon.js";
import { BeakerIcon } from "../icons/beakerIcon.js";
import { AccountIcon } from "../icons/accountIcon.js";
import { CartIcon } from "../icons/cartIcon.js";
import { SearchIcon } from "../icons/searchIcon.js";
import { MoonIcon } from "../icons/moonIcon.js";
import { SunIcon } from "../icons/sunIcon.js";
import { SearchbarAtom } from "@repo/atoms/searchbarAtom";


export function Topbar() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useAtom(sidebarAtom);
  const [isDarkModeOn, setDarkModeOn] = useState(false);
  const [searchbarOpen, setSearchbarOpen ] = useAtom(SearchbarAtom);

  useEffect(() => {

    const storedValue = localStorage.getItem("theme");
    const expectedValue = "light";

    if (typeof window !== 'undefined') {
      if (isDarkModeOn === true) {
        document.getElementById("html")?.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else if (storedValue === expectedValue) {
        document.getElementById("html")?.classList.remove("dark");
      } else {
        document.getElementById("html")?.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, [isDarkModeOn])


  const handleScroll = () => {
    if(window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return() => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

    return <div className={`z-50 drop-shadow-xl fixed w-full bg-transparent h-[12%] justify-between items-center flex p-5  xl:hover:bg-white xl:hover:text-black xl:dark:hover:bg-black xl:dark:hover:text-white duration-300 transition-all 
    ${isScrolled ? 'bg-white dark:bg-black dark:text-white text-black shadow-[0_4px_6px_rgba(0,0,0,0.1)]' : 'bg-transparent text-white'}`}>
    <div className="cursor-pointer" onClick={() => {
      setSidebarOpen(!sidebarOpen), setSearchbarOpen(true)
    }}>
      <SidebarIcon size="xl"/>
    </div>

    <div className="font-bold xl:text-4xl lg:text-5xl md:text-4xl text-3xl flex items-center gap-1 cursor-pointer">
      <div className={`${isScrolled ? 'text-green-500 ': ''} text-green-500 `}>
        <BeakerIcon size="custom"/>
      </div>
      FLEXLAB
    </div>

    <div className="flex gap-2 ">
      <div className="cursor-pointer sm:block hidden"
      onClick={() => setDarkModeOn(!isDarkModeOn)}>
        {isDarkModeOn ? 
          <SunIcon size="xl"/>
          : <MoonIcon size="xl"/>
        }
      </div>
      <div className="cursor-pointer sm:block hidden">
      <AccountIcon size="xl"/>
      </div>
      <div className="cursor-pointer">
      <CartIcon size="xl"/>
      </div>
      <div className="cursor-pointer"
      onClick={() => {setSearchbarOpen(!searchbarOpen), setSidebarOpen(false)}}>
      <SearchIcon size="xl"/>
      </div>
    </div>
  </div>
}