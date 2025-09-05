"use client"
import { SearchbarAtom } from "@repo/atoms/searchbarAtom";
import { useAtom } from "jotai";
import { CloseIcon } from "../icons/closeIcon.js";
import { ProductSearchBar } from "./productSearchBar.js";
import { BlurAtom } from "@repo/atoms/blurAtom";

export function SearchBar () {
    const [searchBarOpen, setSeachBarOpen] = useAtom(SearchbarAtom);
    const [isBlurOpen, setBlurOpen] = useAtom(BlurAtom);

    return <div className={`fixed top-0 right-0 sm:h-full h-[92%] transition-transform duration-300 ease-in-out ${
        searchBarOpen ? 'transform translate-x-full' : 'transform -translate-x-0'
      } xl:w-[30%] md:w-[60%] w-[85%] bg-white dark:bg-neutral-900 text-black dark:text-white z-50 flex flex-col py-2`}>
        <div className="z-10 fixed w-full xl:h-[10%] lg:h-[6%] md:h-[8%] h-[10%] top-0 right-0 flex flex-col">
          <div className="absolute right-0 px-4 z-10 flex cursor-pointer bottom-1/3" onClick={() => {setSeachBarOpen(!searchBarOpen), setBlurOpen(false)}}>
            <CloseIcon size="xl"/>
          </div>
          <input type="text" placeholder="Search for anything" className="bg-white dark:bg-neutral-900 w-full bg-transparent h-full pl-4 focus:outline-none"/>
          <hr className=" border dark:border-gray-600"/>
        </div>

        <div className="xl:mt-[90px] md:mt-[90px] mt-[90px] flex flex-col w-full px-4">
          <div className="text-md text-gray-500 dark:text-white">Popular Searches</div>
          <div className="flex w-full gap-3 pt-3 sm:text-base text-sm flex-wrap">
            <button className="border border-gray-600 p-1 rounded-2xl focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black transition-all">New Arrival</button>
            <button className="border border-gray-600 p-1 rounded-2xl focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black transition-all">New Arrival</button>
            <button className="border border-gray-600 p-1 rounded-2xl focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black transition-all">New Arrival</button>
            <button className="border border-gray-600 p-1 rounded-2xl focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black transition-all">New Arrival</button>
          </div>
        </div>

        <ProductSearchBar/>
  
    </div>
}