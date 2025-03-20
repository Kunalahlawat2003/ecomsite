import { Blur } from "@repo/ui/blur";
import { Cart } from "@repo/ui/cart";
import { FilterIcon } from "@repo/ui/filterIcon";
import { Footer } from "@repo/ui/footer";
import { Login } from "@repo/ui/login";
import { MobileFooter } from "@repo/ui/mobileFooter";
import { MobileNav } from "@repo/ui/mobilenav";
import { SearchBar } from "@repo/ui/searchbar";
import { Sidebar } from "@repo/ui/sidebar";


export default function Orders () {

    return <div className="w-full bg-white dark:bg-black min-h-screen">
        <Blur/>
        <Login />
        <Cart />
        <SearchBar />
        <Sidebar />
        <MobileNav />
        <div className="h-[40vh] w-full flex justify-center items-center">
            <h1 className="text-3xl font-bold text-center translate-y-10 dark:text-white">
              All your orders at one place
            </h1>
        </div>

        <div className="w-full flex flex-col">
            <div className="xl:h-[15vh] h-[10vh] w-full flex items-center justify-between bg-gray-200 dark:bg-gray-900 dark:text-white xl:px-16 px-4 text-gray-500">
                <div className="flex gap-2 text-base items-center cursor-pointer">
                    <FilterIcon size="lg"/>
                    Sort
                </div>
                
                <div>
                    1081 Products
                </div>
            </div>

            <div className="flex flex-col w-full sm:px-5 sm:py-10 px-2 py-5 gap-2">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="lg:h-[250px] sm:h-[200px] h-[160px] w-full bg-gray-100 dark:bg-neutral-800 sm:rounded-xl rounded-lg flex sm:p-2 p-1 xl:gap-5 lg:gap-5 sm:gap-2 gap-1">
                      <div className="h-full xl:w-[15%] sm:w-[25%] w-[37%] sm:rounded-xl rounded-lg">
                        <img src="https://www.snitch.co.in/cdn/shop/files/4MSW9069-02-M16.jpg?v=1736399763" className="w-full h-full object-fill rounded-lg object-center" />
                      </div>
  
                      <div className="h-full w-full sm:rounded-xl rounded-lg flex flex-col p-2 dark:text-white sm:gap-3 gap-1">
                          <h1 className="sm:text-xl font-semibold">Beige Omber light weight sweater</h1>
  
                          <div className="flex gap-2 sm:text-base text-sm">
                            <div className="text-gray-400"><s>Rs. </s><s>2000</s></div>
                            <div className="flex">
                              <div className="text-green-500">Rs.</div>
                              <div className="text-green-500">1700</div>
                            </div>
                          </div>
  
                          <div className="gap-2 flex sm:text-base text-sm">
                              <div>Quantity:</div>
                              <div>4</div>
                          </div>
  
                          <div className="gap-2 flex sm:text-base text-sm">
                              <div>Ordered on:</div>
                              <div>12.02.25, 15:00 PM</div>
                          </div>
                      </div>
                    </div>
                ))}
                
            </div>
        </div>
        <hr className="border border-white dark:border-gray-500" />
        <Footer />
        <MobileFooter />
    </div>
}