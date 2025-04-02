import { Blur } from "@repo/ui/blur";
import { Cart } from "@repo/ui/cart";
import { Footer } from "@repo/ui/footer";
import { Login } from "@repo/ui/login";
import { MobileFooter } from "@repo/ui/mobileFooter";
import { MobileNav } from "@repo/ui/mobilenav";
import { SearchBar } from "@repo/ui/searchbar";
import { SelectorSection } from "@repo/ui/selectorSection";
import { SelectorSectionMens } from "@repo/ui/selectorSectionMens";
import { Sidebar } from "@repo/ui/sidebar";
import { Slideshow } from "@repo/ui/slideshow";
import { Testimonials } from "@repo/ui/testimonials";


export default function Home() {
  return <div className="h-screen bg-white dark:bg-black ">
    <Blur/>
    <Login/>
    <Cart/>
    <SearchBar/>
    <Sidebar/>
    <MobileNav/>
    <Slideshow/>
    <div className=" bg-white dark:bg-black justify-center items-center w-full xl:h-screen h-[50%]  mt-10 flex gap-1 sm:overflow-hidden overflow-x-scroll ">

      <div className="bg-[url('/men.avif')] relative bg-center sm:bg-contain bg-cover h-full w-1/2">
        <div className="absolute bottom-0 left-0 sm:p-10 p-3">
          <p className="text-white lg:text-5xl md:text-4xl text-xl font-extrabold mb-3">SHOP MENS</p>
          <button className="text-white border border-white px-5 py-3 hover:text-white hover:bg-green-500 transition-all duration-300 sm:text-lg text-xs font-semibold">EXPLORE</button>
        </div>
      </div>

      <div className="bg-[url('/women.jpg')] relative bg-center sm:bg-contain  bg-cover h-full w-1/2">
        <div className="absolute bottom-0 left-0 sm:p-10 p-3">
          <p className="text-white lg:text-5xl md:text-4xl text-xl font-extrabold mb-3">SHOP WOMENS</p>
          <button className="text-white border border-white px-5 py-3 hover:text-white hover:bg-green-500  transition-all duration-300 sm:text-lg text-xs font-semibold">EXPLORE</button>
        </div>
      </div>

    </div>
    <div className=" relative bg-white dark:bg-black justify-center items-center xl:h-[80%] md:h-[40%] h-[78%] w-full bg-cover mt-10 text-center text-4xl tracking-widest text-black dark:text-white flex flex-col">
      <div className="absolute top-0 ">TRENDING NOW<br/>WOMENS</div>
      <div className="grid sm:grid-cols-4 grid-cols-2 xl:h-[90%] md:h-[80%] h-[90%] min-h-max w-full gap-5 px-6 py-10 mt-16">
        <div className="relative h-full col-span-1 bg-[url('/lehenga.avif')] bg-cover bg-center rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer">
          <p className="absolute bottom-0 left-0 xl:text-4xl md:text-2xl text-lg text-left xl:p-5 p-2 text-white font-bold">LEHENGA</p>
        </div>

        <div className="relative h-full col-span-1 bg-[url('/sarees.avif')] bg-cover bg-center rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer">
          <p className="absolute bottom-0 left-0 xl:text-4xl md:text-2xl text-lg text-left xl:p-5 p-2 text-white font-bold">SAREES</p>
        </div>

        <div className="relative h-full col-span-1 bg-[url('/indo_western.avif')] bg-cover bg-center rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer">
          <p className="absolute bottom-0 left-0 xl:text-4xl md:text-2xl text-lg text-left xl:p-5 p-2 text-white font-bold">INDO<br/>WESTERN</p>
        </div>

        <div className=" relative h-full col-span-1 bg-[url('/bridal.avif')] bg-cover bg-center rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer">
          <p className="absolute bottom-0 left-0 xl:text-4xl md:text-2xl text-lg text-left xl:p-5 p-2 text-white font-bold">BRIDAL</p>
        </div>
      </div>
    </div>

    <hr className="border mb-5 mx-10 border-gray-200 dark:border-gray-500"/>

    <SelectorSection/>
    <hr className="border-gray-200 mx-10 mt-5 dark:border-gray-500"/>

    <div className=" relative bg-white dark:bg-black justify-center items-center xl:h-[80%] md:h-[40%] h-[78%] w-full bg-cover mt-10 text-center text-4xl tracking-widest text-black dark:text-white flex flex-col">
      <div className="absolute top-0 ">TRENDING NOW<br/>MENS</div>
      <div className="grid sm:grid-cols-4 grid-cols-2 xl:h-[90%] md:h-[80%] h-[90%] min-h-max w-full gap-5 px-6 py-10 mt-16">
        <div className="relative h-full col-span-1 bg-[url('/sherwani.avif')] bg-cover bg-center rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer">
          <p className="absolute bottom-0 left-0 xl:text-4xl md:text-2xl text-lg text-left xl:p-5 p-2 text-white font-bold">SHERWANI</p>
        </div>

        <div className="relative h-full col-span-1 bg-[url('/kurta_pajama.avif')] bg-cover bg-center rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer">
          <p className="absolute bottom-0 left-0 xl:text-4xl md:text-2xl text-lg text-left xl:p-5 p-2 text-white font-bold">KURTA<br/>PAJAMA</p>
        </div>

        <div className="relative h-full col-span-1 bg-[url('/indo_western_mens.avif')] bg-cover bg-center rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer">
          <p className="absolute bottom-0 left-0 xl:text-4xl md:text-2xl text-lg text-left xl:p-5 p-2 text-white font-bold">INDO<br/>WESTERN</p>
        </div>

        <div className=" relative h-full col-span-1 bg-[url('/nehru_jacket.avif')] bg-cover bg-center rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer">
          <p className="absolute bottom-0 left-0 xl:text-4xl md:text-2xl text-lg text-left xl:p-5 p-2 text-white font-bold">NEHRU<br/>JACKET</p>
        </div>
      </div>
    </div>

    <hr className="border border-white dark:border-gray-500 mt-10"/>

    <SelectorSectionMens/>

    <hr className="border border-white dark:border-gray-500 mt-10"/>

    <Testimonials/>
    <hr className="border border-white dark:border-gray-500 mt-10"/>
    <Footer/>
    <MobileFooter/>
  </div>
}
