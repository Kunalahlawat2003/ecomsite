import { useEffect, useState } from "react";
import { SunIcon } from "../icons/sunIcon.js";
import { MoonIcon } from "../icons/moonIcon.js";


export function DarkmodeTab () {
    const [isDarkModeOn, setDarkModeOn] = useState(false);
    
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


    return <>
    <div className="w-full tracking-wider justify-between sm:text-xl text-xl px-7 py-3 cursor-pointer transition-all sm:hidden flex"
    onClick={() => setDarkModeOn(!isDarkModeOn)}>
        {isDarkModeOn ? (<> <div>Light Mode</div> <SunIcon size="xl"/> </>):(<> <div>Dark Mode</div> <MoonIcon size="xl"/> </>)}
    </div>
    <hr className="mx-7 "/>
    </>
}