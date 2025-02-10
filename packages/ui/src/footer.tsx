import { BeakerIcon } from "../icons/beakerIcon.js";
import { FacebookIcon } from "../icons/facebookIcon.js";
import { GithubIcon } from "../icons/githubIcon.js";
import { InstaIcon } from "../icons/instaIcon.js";
import { PinterestIcon } from "../icons/pinterestIcon.js";
import { TwitterIcon } from "../icons/twitterIcon.js";
import { WebsiteIcon } from "../icons/websiteIcon.js";


export function Footer () {
    return <div className=" bg-black flex flex-col xl:h-[75%] md:h-[52%] w-full sm:block hidden py-12 xl:pl-12 xl:pr-[15%] md:pl-8 md:pr-4 pl-4 pr-4 ">
        <div className="flex justify-between">
          <div className="flex flex-col text-white gap-2 ">
              <div className="flex items-center gap-2 cursor-pointer">
                <BeakerIcon size="4xl"/>
                <p className="text-[2.75rem] font-bold">FLEXLAB</p>
              </div>
              <div className="flex gap-4 pl-1">
                  <div className="cursor-pointer">
                    <InstaIcon size="lg"/>
                  </div>
                  <div className="cursor-pointer">
                    <GithubIcon size="lg"/>
                  </div>
                  <div className="cursor-pointer">
                    <TwitterIcon size="lg"/>
                  </div>
                  <div className="cursor-pointer">
                    <FacebookIcon size="lg"/>
                  </div>
                  <div className="cursor-pointer">
                    <WebsiteIcon size="lg"/>
                  </div>
                  <div className="cursor-pointer">
                    <PinterestIcon size="lg"/>
                  </div>
              </div>
          </div>

          <div className="flex flex-col text-white text-left">
            <p className="text-left font-extrabold cursor-pointer font-mono text-lg">INFO</p>
            <ul className="">
                <li className="cursor-pointer">About Us</li>
                <li className="cursor-pointer">Orders</li>
                <li className="cursor-pointer">FAQs</li>
                <li className="cursor-pointer">Support</li>
                <li className="cursor-pointer">Privacy Policy</li>
                <li className="cursor-pointer">Terms & Conditions</li>
                <li className="cursor-pointer">Sale T&C</li>
                <li className="cursor-pointer">Return & Exchange Policy</li>
            </ul>
          </div>

          <div className="flex flex-col text-white text-left">
            <p className="text-left font-extrabold cursor-pointer font-mono text-lg">SHOP</p>
            <ul className="">
                <li className="cursor-pointer">New Arrivals</li>
                <li className="cursor-pointer">Best Sellers</li>
                <li className="cursor-pointer">New Arrivals</li>
                <li className="cursor-pointer">Deal of the day</li>
                <li className="cursor-pointer">Sale</li>
                <li className="cursor-pointer">New Arrivals</li>
            </ul>
          </div>

          <div className="flex flex-col text-white text-left">
            <p className="text-left font-extrabold cursor-pointer font-mono text-lg">TRENDING</p>
            <ul className="">
                <li className="cursor-pointer">Printed Shirts</li>
                <li className="cursor-pointer">Baggy Fit</li>
                <li className="cursor-pointer">Trousers</li>
                <li className="cursor-pointer">Oversized Tees</li>
                <li className="cursor-pointer">Jacket</li>
                <li className="cursor-pointer">Bottoms for men</li>
                <li className="cursor-pointer">Bottoms for women</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col pt-4 gap-3 bg-black w-full">
            <div className="text-white font-mono font-extrabold text-lg">
                NEWSLETTER
            </div>
            <div className="text-white ">
            Beyond the Outfit: Be the first to know about<br/> new arrivals, sales & exclusive events.
            </div>
            <div>
                <input type="text" placeholder="Email" className="px-2 py-2 bg-transparent border border-gray-500 w-1/4 text-white transition-all duration-300" />
            </div>

            <div className=" text-gray-500 w-full bg-black">
              &copy;2025 FLEXLAB
            </div>
        </div>
    </div>
}