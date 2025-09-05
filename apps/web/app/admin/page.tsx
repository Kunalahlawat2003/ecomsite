import { AddProductModal } from "@repo/ui/addProductModal";
import { Blur } from "@repo/ui/blur";
import { Cart } from "@repo/ui/cart";
import { Login } from "@repo/ui/login";
import { MobileNav } from "@repo/ui/mobilenav";
import { SearchBar } from "@repo/ui/searchbar";
import { Sidebar } from "@repo/ui/sidebar";

export default function Admin () {

    return <div className="w-full bg-white dark:bg-black min-h-screen">
        <Blur/>
        <Login />
        <AddProductModal/>
        <Cart />
        <SearchBar />
        <Sidebar />
        <MobileNav />
        <div className="bg-[url('/admin_bg.avif')] h-[40vh] w-full flex items-center justify-center bg-red-200">
          <h1 className=" text-3xl font-serif font-bold text-center translate-y-10 text-white dark:text-white">
            Welcome Admin!
          </h1>
        </div>

        <div className="h-[60vh] w-full dark:text-white">
            <div className="h-[13%] w-full items-center xl:text-xl sm:text-2xl text-xl flex px-3 dark:bg-black">Recent Orders</div>
            <div className="h-full w-full p-3 bg-gray-100 dark:bg-neutral-800">
                <div className="h-full w-full bg-gray-100 rounded-lg dark:bg-black p-2 overflow-y-auto scrollbar-thin flex flex-col gap-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="w-full xl:min-h-[50%] min-h-[40%] rounded-lg flex p-1 sm:gap-2 bg-white dark:bg-neutral-800">
                            <div className="bg-yellow-200 h-full xl:w-[10%] sm:w-[30%] w-[45%] rounded-md">
                              <img src="https://www.snitch.co.in/cdn/shop/files/4MSW9069-02-M16.jpg?v=1736399763" className=" object-cover w-full h-full rounded-md" />
                            </div>

                            <div className="w-full h-full bg-white dark:bg-neutral-800 rounded-md flex flex-col p-2 sm:text-base text-xs">
                                <div className="w-full">Kunal Ahlawat</div>
                                <div className="w-full">Ordered on: 12/03/25, 5:00 PM</div>
                                <div className="w-full">Address: 844/12 dwarka, New Delhi</div>
                                <div className="w-full">Payment: <span className="text-green-500">Pending</span></div>
                                <div className="w-full">Product: <span className="text-blue-500">3 items</span></div>
                                <div className="w-full">7982585828</div>
                                <div className="w-full">ahlawatkunal21@gmail.com</div>
                            </div> 
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
}