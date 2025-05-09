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
import { CartAtom } from "@repo/atoms/cartAtom";
import { LoginAtom } from "@repo/atoms/loginAtom";
import { BlurAtom } from "@repo/atoms/blurAtom";


export function Topbar() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useAtom(sidebarAtom);
  const [isDarkModeOn, setDarkModeOn] = useState(false);
  const [searchbarOpen, setSearchbarOpen ] = useAtom(SearchbarAtom);
  const [isCartOpen, setCartOpen] = useAtom(CartAtom);
  const [isLoginTabOpen, setLoginTabOpen] = useAtom(LoginAtom);
  const [isBlurOpen, setBlurOpen] = useAtom(BlurAtom);

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

  function handleLogin () {
    const token = localStorage.getItem("token");

    if(!token) {
      setLoginTabOpen(true);
    } else {
      //nothing for now
    }
  }


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
      setSidebarOpen(!sidebarOpen), setBlurOpen(true), setSearchbarOpen(true), setCartOpen(true)
    }}>
      <SidebarIcon size="xl"/>
    </div>

    <div className="font-bold xl:text-4xl lg:text-5xl md:text-4xl text-3xl flex items-center gap-1 cursor-pointer">
      {/* <div className={`${isScrolled ? 'text-green-500 ': ''} text-green-500 `}>
        <BeakerIcon size="custom"/>
      </div>
      FLEXLAB */}
      <img src="https://ninetheme.com/themes/anarkali/wp-content/uploads/2023/11/240-logo.png" className="xl:w-48 sm:w-auto w-40 object-center dark:bg-gray-200 dark:rounded-3xl"/>
    </div>

    <div className="flex gap-2 ">
      <div className="cursor-pointer sm:block hidden"
      onClick={() => setDarkModeOn(!isDarkModeOn)}>
        {isDarkModeOn ? 
          <SunIcon size="xl"/>
          : <MoonIcon size="xl"/>
        }
      </div>
      <div className="cursor-pointer sm:block hidden"
      onClick={handleLogin}>
        <AccountIcon size="xl"/>
      </div>
      <div className="cursor-pointer"
      onClick={() => {setCartOpen(!isCartOpen), setBlurOpen(true), setSidebarOpen(false), setSearchbarOpen(true)}}>
        <CartIcon size="xl"/>
      </div>
      <div className="cursor-pointer"
      onClick={() => {setSearchbarOpen(!searchbarOpen), setBlurOpen(true), setSidebarOpen(false)}}>
        <SearchIcon size="xl"/>
      </div>
    </div>
  </div>
}