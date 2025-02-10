

export function SelectorSection () {
    return <div className="flex flex-col w-full xl:h-[100%] md:h-[50%] h-[60%] min-h-max bg-white dark:bg-black gap-2 ">
        <div className="flex gap-3 w-full h-max justify-center mt-5 mb-2">
            <button className="text-md border border-black rounded-3xl py-2 px-3 bg-white">JEANS</button>
            <button className="text-md border border-black rounded-3xl py-2 px-3 bg-white">T-SHIRTS</button>
            <button className="text-md border border-black rounded-3xl py-2 px-3 bg-white">SHIRTS</button>
        </div>
        

        <div className="flex w-full xl:h-[80%] h-[70%] sm:gap-5 gap-3 px-2 min-h-max overflow-x-auto scrollbar-thin scroll-container">

            <div className="h-full w-[25%] xl:min-w-0 md:min-w-[35%] min-w-[45%] cursor-pointer overflow-hidden">
                <div className="w-full xl:h-[90%] md:h-[88%] h-[83%] hover:scale-95 transition-all duration-300">
                    <img src="https://www.snitch.co.in/cdn/shop/files/4MSW9069-02-M16.jpg?v=1736399763" className=" object-cover w-full h-full object-center" />
                </div>
                <div className="flex flex-col w-full xl:pt-2 sm:text-base dark:text-white text-xs">
                    <div className="">Beige Omber light weight sweater</div>
                    <div className="flex gap-2">
                      <div className="text-gray-400"><s>2000</s></div>
                      <div className="flex">
                        <div className="text-green-500">Rs.</div>
                        <div className="text-green-500">1700</div>
                      </div>
                    </div>
                </div>
            </div>

            <div className="h-full w-[25%] xl:min-w-0 md:min-w-[35%] min-w-[45%] cursor-pointer overflow-hidden">
                <div className="w-full xl:h-[90%] md:h-[88%] h-[83%] hover:scale-95 transition-all duration-300">
                    <img src="https://www.snitch.co.in/cdn/shop/files/4MSW9069-02-M16.jpg?v=1736399763" className=" object-cover w-full h-full object-center" />
                </div>
                <div className="flex flex-col h-full w-full xl:pt-2 sm:text-base dark:text-white text-xs">
                    <div className="">Beige Omber light weight sweater</div>
                    <div className="flex gap-2">
                      <div className="text-gray-400"><s>2000</s></div>
                      <div className="flex">
                        <div className="text-green-500">Rs.</div>
                        <div className="text-green-500">1700</div>
                      </div>
                    </div>
                </div>
            </div>

            <div className="h-full w-[25%] xl:min-w-0 md:min-w-[35%] min-w-[45%] cursor-pointer overflow-hidden">
                <div className="w-full xl:h-[90%] md:h-[88%] h-[83%] hover:scale-95 transition-all duration-300">
                    <img src="https://www.snitch.co.in/cdn/shop/files/4MSW9069-02-M16.jpg?v=1736399763" className=" object-cover w-full h-full object-center" />
                </div>
                <div className="flex flex-col w-full xl:pt-2 sm:text-base dark:text-white text-xs">
                    <div className="">Beige Omber light weight sweater</div>
                    <div className="flex gap-2">
                      <div className="text-gray-400"><s>2000</s></div>
                      <div className="flex">
                        <div className="text-green-500">Rs.</div>
                        <div className="text-green-500">1700</div>
                      </div>
                    </div>
                </div>
            </div>

            <div className="h-full w-[25%] xl:min-w-0 md:min-w-[35%] min-w-[45%] cursor-pointer overflow-hidden">
                <div className="w-full xl:h-[90%] md:h-[88%] h-[83%] hover:scale-95 transition-all duration-300">
                    <img src="https://www.snitch.co.in/cdn/shop/files/4MSW9069-02-M16.jpg?v=1736399763" className=" object-cover w-full h-full object-center" />
                </div>
                <div className="flex flex-col w-full xl:pt-2 sm:text-base dark:text-white text-xs">
                    <div className="">Beige Omber light weight sweater</div>
                    <div className="flex gap-2">
                      <div className="text-gray-400"><s>2000</s></div>
                      <div className="flex">
                        <div className="text-green-500">Rs.</div>
                        <div className="text-green-500">1700</div>
                      </div>
                    </div>
                </div>
            </div>
            
        </div>

        <div className="justify-center items-center flex">
            <button className="border border-gray-300 dark:bg-black dark:border-gray-300 dark:hover:bg-white dark:text-white dark:hover:text-black hover:border-black px-3 py-2 transition-all">View All</button>
        </div>
    </div>
}