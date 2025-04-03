"use client"
import { Blur } from "@repo/ui/blur";
import { CalculatorIcon } from "@repo/ui/calculatorIcon";
import { Cart } from "@repo/ui/cart";
import { Login } from "@repo/ui/login";
import { MobileNav } from "@repo/ui/mobilenav";
import { SearchBar } from "@repo/ui/searchbar";
import { Sidebar } from "@repo/ui/sidebar";
import { MinusIcon } from "../../../../packages/ui/icons/minusIcon";
import { PlusIcon } from "../../../../packages/ui/icons/plusIcon";
import { useEffect, useRef, useState } from "react";
import { ArrowIcon } from "../../../../packages/ui/icons/arrowIcon";


export default function ItemPage() {

    const [quantityNumber, setQuantityNumber] = useState(1);
    const [Description , setDescriptionOpen] = useState(false);
    const [Shipping , setShippingOpen] = useState(false);
    const [Return , setReturnOpen] = useState(false);

    function decreaseQuantity () {
        if(quantityNumber > 1 ) {
            setQuantityNumber(quantityNumber - 1);
        }
    }

    function increaseQuantity () {
        if(quantityNumber >= 1 ) {
            setQuantityNumber(quantityNumber + 1);
        }
    }

    const div1Ref = useRef(null);
    const div2Ref = useRef(null);
  
    useEffect(() => {
      const handleScroll = () => {
        const div1: any = div1Ref.current;
        const div2: any = div2Ref.current;
  
        // Get the scroll heights and positions
        const div1ScrollHeight = div1.scrollHeight;
        const div2ScrollHeight = div2.scrollHeight;
        const div1ScrollTop = div1.scrollTop;
        const div2ScrollTop = div2.scrollTop;
  
        // If div1 reaches the bottom, sync div2 with div1
        if (div1ScrollHeight - div1.scrollTop === div1.clientHeight) {
          div2.scrollTop = div1ScrollTop;
        }
      };
  
      const div1: any = div1Ref.current;
      const div2: any = div2Ref.current;
  
      div1.addEventListener('scroll', handleScroll);
      div2.addEventListener('scroll', handleScroll);
  
      return () => {
        div1.removeEventListener('scroll', handleScroll);
        div2.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <div className="w-full bg-white dark:bg-black min-h-screen">
            <Blur/>
            <Login/>
            <Cart/>
            <SearchBar />
            <Sidebar />
            <MobileNav />

            <div className="w-full h-[100vh] flex xl:flex-row flex-col xl:px-24 xl:translate-y-20 lg:translate-y-40 md:translate-y-32 translate-y-24">
                <div ref={div1Ref} className="xl:w-[50%] w-full xl:h-full min-h-[75vh] xl:grid grid-cols-2 flex overflow-x-auto gap-2 scrollbar-thin">
                    <div className="min-w-full xl:min-h-[60vh] min-h-full bg-yellow-200">

                    </div>
                    <div className="min-w-full xl:min-h-[60vh] min-h-full bg-yellow-200">

                    </div>
                    <div className="min-w-full xl:min-h-[60vh] min-h-full bg-yellow-200">

                    </div>
                    <div className="min-w-full xl:min-h-[60vh] min-h-full bg-yellow-200">

                    </div>
                    <div className="min-w-full xl:min-h-[60vh] min-h-full bg-yellow-200">

                    </div>
                </div>

                <div className="xl:w-[50%] w-full min-h-full py-5 xl:px-12 md:px-12 px-4 flex flex-col dark:text-white scrollbar-y-scroll">
                    <div ref={div2Ref} className="w-full text-3xl font-semibold xl:py-3 text-left">
                      Action Out Of Comics Oversized T-shirt 
                    </div>
                    <div className="w-full h-[10vh] text-left xl:text-2xl sm:text-3xl text-2xl font-semibold flex flex-col font-sans mt-2">
                        <div className="flex gap-2">
                          <s className="text-gray-400 font-light dark:text-gray-200">Rs.2000</s><div className="text-green-500 font-normal">Rs.1599</div>
                        </div>
                        <div className="text-sm font-mono text-gray-600 dark:text-gray-200">
                            shipping calculated at checkout
                        </div>
                    </div>

                    <div className="w-full xl:h-[15vh] sm:h-[10vh] h-[15vh] flex flex-col gap-3 mt-2">
                        <div className="justify-between flex w-full xl:text-sm sm:text-xl text-sm text-gray-600">
                            <div className="dark:text-gray-200">
                                Size: XXL
                            </div>

                            <div className="flex items-center text-gray-600 gap-1 dark:text-gray-200 cursor-pointer">
                              <CalculatorIcon size="sm"/>  Sizing Guide
                            </div>
                        </div>

                        <div className="sm:justify-start justify-center flex items-center xl:text-lg sm:text-2xl text-lg font-light xl:gap-1 gap-3">
                            <div className="border border-black py-1 dark:border-white cursor-pointer px-3">
                                XS
                            </div>
                            <div className="border border-black py-1 dark:border-white cursor-pointer px-3">
                                SM
                            </div>
                            <div className="border border-black py-1 dark:border-white cursor-pointer px-3">
                                MD
                            </div>
                            <div className="border border-black py-1 dark:border-white cursor-pointer px-3">
                                LG
                            </div>
                            <div className="border border-black py-1 dark:border-white cursor-pointer px-3">
                                XL
                            </div>
                            <div className="border border-black py-1 px-2 dark:border-white cursor-pointer">
                                XXL
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full gap-2 mt-2">
                        <div className="flex items-center gap-4 border w-max p-3 border-black dark:border-white">
                            <div className={`text-gray-600 dark:text-gray-100 ${quantityNumber === 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                            onClick={() => decreaseQuantity()}>
                                <MinusIcon size="sm" />
                            </div>
                            <div>{quantityNumber}</div>
                            <div className="text-gray-600 dark:text-gray-100 cursor-pointer"
                            onClick={() => increaseQuantity()}>
                                <PlusIcon size="sm" />
                            </div>
                        </div>

                        <div className="justify-center items-center flex w-full border border-black hover:bg-black hover:text-white transition-all duration-200 cursor-pointer dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black">
                            ADD TO CART
                        </div>
                    </div>

                    <div className="w-full flex justify-center items-center p-3 border border-black bg-black text-white cursor-pointer dark:bg-white dark:text-black dark:border-white mt-2">
                        BUY NOW
                    </div>

                    <div className="w-[40%] p-3 border border-black flex justify-center items-center hover:bg-black hover:text-white transition-all duration-200 cursor-pointer dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black mt-2">
                        SHARE
                    </div>

                    <hr className="mt-5"/>

                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <hr className="border border-gray-600"/>
                            <div className="flex justify-between px-2 py-4"
                            onClick={() => setDescriptionOpen(!Description)}>
                                <p className="text-black text-md font-semibold">DESCRIPTION</p>
                                <div className={`${Description ? 'transform rotate-180': ''}  flex items-center transition-all duration-300`}>
                                    <ArrowIcon size="md"/>
                                </div>
                            </div>
                            {Description && (
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
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <hr className="border border-gray-600"/>
                            <div className="flex justify-between px-2 py-4"
                            onClick={() => setShippingOpen(!Shipping)}>
                                <p className="text-black text-md font-semibold">SHIPPING</p>
                                <div className={`${Shipping ? 'transform rotate-180': ''}  flex items-center transition-all duration-300`}>
                                    <ArrowIcon size="md"/>
                                </div>
                            </div>
                            {Shipping && (
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
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <hr className="border border-gray-600"/>
                            <div className="flex justify-between px-2 py-4"
                            onClick={() => setReturnOpen(!Return)}>
                                <p className="text-black text-md font-semibold">RETURNS</p>
                                <div className={`${Description ? 'transform rotate-180': ''}  flex items-center transition-all duration-300`}>
                                    <ArrowIcon size="md"/>
                                </div>
                            </div>
                            {Return && (
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
                    </div>

                </div>
            </div>
        </div>
    )
}