import { Blur } from "@repo/ui/blur";
import { Cart } from "@repo/ui/cart";
import { FilterIcon } from "@repo/ui/filterIcon";
import { Footer } from "@repo/ui/footer";
import { Login } from "@repo/ui/login";
import { MobileFooter } from "@repo/ui/mobileFooter";
import { MobileNav } from "@repo/ui/mobilenav";
import { SearchBar } from "@repo/ui/searchbar";
import { Sidebar } from "@repo/ui/sidebar";


export default function Product () {

    return (
        <div className="w-full bg-white dark:bg-black min-h-screen">
          <Blur />
          <Login />
          <Cart />
          <SearchBar />
          <Sidebar />
          <MobileNav />
          {/* Top Section (40% Height) */}
          <div className="bg-[url('/background.jpg')] h-[40vh] w-full flex items-center justify-center">
            <h1 className="text-3xl font-serif font-bold text-center translate-y-10 text-white dark:text-white">
              Welcome to Our Product Collection
            </h1>
          </div>
    
          {/* Product Grid Section */}
          <div className="w-full flex flex-col">
            {/* Small Top Section (15% Height) */}
            <div className="xl:h-[15vh] h-[10vh] w-full flex items-center justify-between bg-gray-200 dark:bg-neutral-900 dark:text-white xl:px-16 px-4 text-gray-500">
                <div className="flex gap-2 text-base items-center cursor-pointer">
                    <FilterIcon size="lg"/>
                    Sort
                </div>

                <div>
                    1081 Products
                </div>
            </div>
    
            {/* Product Grid (Auto-growing) */}
            <div className="grid md:grid-cols-4 grid-cols-2 xl:gap-16 lg:gap-12 gap-4 xl:px-16 xl:py-4 p-4 w-full">
              {/* Sample Product Items (Fixed Height) */}
              {Array.from({ length: 16 }).map((_, index) => (
                <div
                  key={index}
                  className="xl:h-[480px] h-[300px] hover:scale-95 transition-all duration-500 cursor-pointer"
                >
                  <div className="h-[80%] w-full bg-red-200">
                    <img src="https://manyavar.scene7.com/is/image/manyavar/MOIW221_439-INDIGO+BLUE_444.1761_27-07-2024-21-50:650x900?&dpr=on,2" className=" object-cover w-full h-full object-fill" />
                  </div>
                  <div className="py-2 px-0 md:text-sm xl:text-base text-xs dark:text-white">
                    <div className="">Indigo Blue Imperial Print with Sequin Work</div>
                    <div className="flex gap-2">
                      <div className="text-gray-400"><s>Rs. </s><s>2000</s></div>
                      <div className="flex">
                        <div className="text-green-500">Rs.</div>
                        <div className="text-green-500">1700</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
    
          {/* Additional Components */}
    
          <hr className="border border-white dark:border-gray-500 mt-10" />
          <Footer />
          <MobileFooter />
        </div>
      );
}