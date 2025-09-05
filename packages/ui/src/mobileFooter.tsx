"use client"
import { useState } from "react";
import { BeakerIcon } from "../icons/beakerIcon.js";
import { FacebookIcon } from "../icons/facebookIcon.js";
import { GithubIcon } from "../icons/githubIcon.js";
import { InstaIcon } from "../icons/instaIcon.js";
import { PinterestIcon } from "../icons/pinterestIcon.js";
import { TwitterIcon } from "../icons/twitterIcon.js";
import { WebsiteIcon } from "../icons/websiteIcon.js";
import { ArrowIcon } from "../icons/arrowIcon.js";


export function MobileFooter() {

    const[isShopOpen, setShopOpen] = useState(false);
    const[isInfoOpen, setInfoOpen] = useState(false);
    const[isTrendOpen, setTrendOpen] = useState(false);


     return <div className="bg-black min-h-max gap-10 w-full flex flex-col text-white px-3 pt-10 pb-[20%] sm:hidden">
        <div className="flex flex-col">
            <div className="text-white flex gap-2 items-center cursor-pointer">
                <BeakerIcon size="4xl"/>
                <p className="text-4xl font-bold">FLEXLAB</p>
            </div>
            <div className="text-white mt-2 flex gap-4">
                <InstaIcon size="md"/>
                <GithubIcon size="md"/>
                <TwitterIcon size="md"/>
                <FacebookIcon size="md"/>
                <WebsiteIcon size="md"/>
                <PinterestIcon size="md"/>
            </div>
        </div>

        <div className="flex flex-col">
            <div className="flex flex-col">
              <hr className="border border-gray-600"/>
              <div className="flex justify-between px-2 py-4"
              onClick={() => setInfoOpen(!isInfoOpen)}>
                <p className="text-white text-lg font-semibold">INFO</p>
                <div className={`${isInfoOpen ? 'transform rotate-180': ''}  flex items-center transition-all duration-300`}>
                    <ArrowIcon size="md"/>
                </div>
              </div>
              {isInfoOpen && (
                   <div className=" w-full tracking-wider text-md px-2 pb-4 cursor-pointer transition-all duration-500 flex flex-col">
                       <ul className="">
                           <li className="p-1 rounded-md transition-all cursor-pointer">About Us</li>
                           <li className="p-1 rounded-md transition-all cursor-pointer">Orders</li>
                           <li className="p-1 rounded-md transition-all cursor-pointer">FAQs</li>
                           <li className="p-1 rounded-md transition-all cursor-pointer">Support</li>
                           <li className="p-1 rounded-md transition-all cursor-pointer">Privacy Policy</li>
                           <li className="p-1 rounded-md transition-all cursor-pointer">Terms & Conditions</li>
                           <li className="p-1 rounded-md transition-all cursor-pointer">Sale T&C</li>
                           <li className="p-1 rounded-md transition-all cursor-pointer">Return & Exchange Policy</li>
                       </ul>
                   </div>
               )}
              <hr className="border border-gray-600"/>
            </div>

            <div className="flex flex-col">

              <div className="flex justify-between px-2 py-4"
              onClick={() => setShopOpen(!isShopOpen)}>
                <p className="text-white text-lg font-semibold">SHOP</p>
                <div className={`${isShopOpen ? 'transform rotate-180': ''}  flex items-center transition-all duration-300`}>
                    <ArrowIcon size="md"/>
                </div>
              </div>
              {isShopOpen && (
                   <div className=" w-full tracking-wider text-md px-2 pb-4 cursor-pointer transition-all duration-500 flex flex-col">
                       <ul className="">
                           <li className="p-1  rounded-md transition-all cursor-pointer">New Arrivals</li>
                           <li className="p-1  rounded-md transition-all cursor-pointer">Best Sellers</li>
                           <li className="p-1  rounded-md transition-all cursor-pointer">Deal of the Day</li>
                           <li className="p-1  rounded-md transition-all cursor-pointer">sale</li>
                           <li className="p-1  rounded-md transition-all cursor-pointer">New Arrivals</li>
                           <li className="p-1  rounded-md transition-all cursor-pointer">Special Prices</li>
                       </ul>
                   </div>
               )}
              <hr className="border border-gray-600"/>
            </div>

            <div className="flex flex-col">

              <div className="flex justify-between px-2 py-4"
              onClick={() => setTrendOpen(!isTrendOpen)}>
                <p className="text-white text-lg font-semibold">TRENDING</p>
                <div className={`${isTrendOpen ? 'transform rotate-180': ''}  flex items-center transition-all duration-300`}>
                    <ArrowIcon size="md"/>
                </div>
              </div>
              {isTrendOpen && (
                   <div className=" w-full tracking-wider text-md px-2 pb-4 cursor-pointer transition-all duration-500 flex flex-col">
                       <ul className="">
                           <li className="p-1  rounded-md transition-all cursor-pointer">Printed Shirts</li>
                           <li className="p-1  rounded-md transition-all cursor-pointer">Baggy Fit</li>
                           <li className="p-1  rounded-md transition-all cursor-pointer">Trousers</li>
                           <li className="p-1  rounded-md transition-all cursor-pointer">Oversized Tees</li>
                           <li className="p-1  rounded-md transition-all cursor-pointer">Jacket</li>
                           <li className="p-1  rounded-md transition-all cursor-pointer">Bottoms for men</li>
                           <li className="p-1  rounded-md transition-all cursor-pointer">Bottoms for women</li>
                       </ul>
                   </div>
               )}
              <hr className="border border-gray-600"/>
            </div>
        </div>

        <div className="flex flex-col gap-4">
            <div className="text-lg font-semibold">NEWSLETTER</div>
            <div>Beyond the Outfit: Be the first to know about new arrivals, sales & exclusive events.</div>
            <div>
            <input type="text" placeholder="Email" className="p-2 bg-transparent border border-gray-500 w-full text-white transition-all duration-300" />
            </div>
            <div className=" text-gray-500 w-full">
              &copy;2025 FLEXLAB
            </div>
        </div>
    </div>
}