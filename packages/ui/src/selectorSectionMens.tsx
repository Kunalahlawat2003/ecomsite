"use client"
import { useState } from "react";


export function SelectorSectionMens() {
    const [selectedCategory, setSelectedCategory] = useState('sherwani');
  
    // Define product data for each category
    const products: any = {
      sherwani: [
        {
          title: "Black Achkan Style Sherwani Set",
          price: { original: 2500, discounted: 2000 },
          image: "https://manyavar.scene7.com/is/image/manyavar/SHOS076D-310-Black.13721_21-03-2024-16-01:650x900?&dpr=on,2"
        },
        {
          title: "Pink Patterned Sherwani Set",
          price: { original: 2300, discounted: 1900 },
          image: "https://manyavar.scene7.com/is/image/manyavar/SHOS357D_315-Pink.3452_21-02-2024-14-58:650x900"
        },
        {
          title: "Warm White Patterned Sherwani Set",
          price: { original: 2200, discounted: 1800 },
          image: "https://manyavar.scene7.com/is/image/manyavar/CPSH223D_340-Warm+White_101.0145_29-07-2024-19-27:650x900?&dpr=on,2"
        },
        {
          title: "Graceful Light Grey Sherwani",
          price: { original: 2400, discounted: 2000 },
          image: "https://manyavar.scene7.com/is/image/manyavar/SHOS388_312-Light+Grey.9350_30-09-2024-12-37:650x900?&dpr=on,2"
        }
      ],
      kurta: [
        {
          title: "Mustard Charm Cotton Kurta",
          price: { original: 1200, discounted: 1000 },
          image: "https://manyavar.scene7.com/is/image/manyavar/ML12146_328-Mustard_101.5833_25-09-2024-13-04:650x900?&dpr=on,2"
        },
        {
          title: "Teal Green and Patterned Kurta",
          price: { original: 1000, discounted: 850 },
          image: "https://manyavar.scene7.com/is/image/manyavar/ML12122_327-Teal+Green_101.22118_29-05-2024-17-54:650x900?&dpr=on,2"
        },
        {
          title: "Delicate White Bel Buti Printed Kurta",
          price: { original: 1100, discounted: 950 },
          image: "https://manyavar.scene7.com/is/image/manyavar/MLOSK031_340-Warm+White.4921_11-01-2024-16-25:650x900?&dpr=on,2"
        },
        {
          title: "Black Striped Patterned Kurta",
          price: { original: 1300, discounted: 1100 },
          image: "https://manyavar.scene7.com/is/image/manyavar/KOS035_310-Black_101.22700_30-05-2024-11-22:650x900?&dpr=on,2"
        }
      ],
      jacket: [
        {
          title: "Black Fish Scale Nehru Jacket",
          price: { original: 1500, discounted: 1200 },
          image: "https://manyavar.scene7.com/is/image/manyavar/JAC422V_310-Black_101.0997_25-11-2024-18-41:650x900?&dpr=on,2"
        },
        {
          title: "Emerald Elegance Nehru Jacket",
          price: { original: 1800, discounted: 1500 },
          image: "https://manyavar.scene7.com/is/image/manyavar/JAC434_316-Dark+Green_101.19593_19-02-2025-14-10:650x900?&dpr=on,2"
        },
        {
          title: "Navy Blue Printed Jacket",
          price: { original: 1600, discounted: 1400 },
          image: "https://manyavar.scene7.com/is/image/manyavar/JAC246_FEROZE.3307_20-05-2023-12-40:650x900?&dpr=on,2"
        },
        {
          title: "Marigold Yellow Shankh Motif Jacket",
          price: { original: 1700, discounted: 1400 },
          image: "https://manyavar.scene7.com/is/image/manyavar/JAC356_324-F-YELLOW.5197_14-10-2023-16-43:650x900?&dpr=on,2"
        }
      ]
    };
  
    const handleCategoryClick = (category: any) => {
      setSelectedCategory(category);
    };
  
    return (
      <div className="flex flex-col w-full xl:h-[100%] md:h-[50%] h-[60%] min-h-max bg-white dark:bg-black gap-2 ">
        <div className="flex gap-3 w-full h-max justify-center mt-5 mb-2">
          <button
            className="text-md border border-black rounded-3xl py-2 px-3 bg-white"
            onClick={() => handleCategoryClick('sherwani')}
          >
            SHERWANI
          </button>
          <button
            className="text-md border border-black rounded-3xl py-2 px-3 bg-white"
            onClick={() => handleCategoryClick('kurta')}
          >
            KURTA
          </button>
          <button
            className="text-md border border-black rounded-3xl py-2 px-3 bg-white"
            onClick={() => handleCategoryClick('jacket')}
          >
            JACKET
          </button>
        </div>
  
        <div className="flex w-full xl:h-[80%] h-[70%] sm:gap-5 gap-3 px-2 min-h-max overflow-x-auto scrollbar-thin scroll-container">
          {products[selectedCategory].map((product: any, index: any) => (
            <div key={index} className="h-full w-[25%] xl:min-w-0 md:min-w-[35%] min-w-[45%] cursor-pointer overflow-hidden">
              <div className="w-full xl:h-[90%] md:h-[88%] h-[83%] hover:scale-95 transition-all duration-300">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover w-full h-full object-center"
                />
              </div>
              <div className="h-full flex flex-col w-full xl:pt-2 md:text-base dark:text-white text-xs">
                <div>{product.title}</div>
                <div className="flex gap-2">
                  <div className="text-gray-400"><s>Rs. {product.price.original}</s></div>
                  <div className="flex">
                    <div className="text-green-500">Rs.</div>
                    <div className="text-green-500">{product.price.discounted}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        <div className="justify-center items-center flex">
          <button className="border border-gray-300 dark:bg-black dark:border-gray-300 dark:hover:bg-white dark:text-white dark:hover:text-black hover:border-black px-3 py-2 transition-all">
            View All
          </button>
        </div>
      </div>
    );
}