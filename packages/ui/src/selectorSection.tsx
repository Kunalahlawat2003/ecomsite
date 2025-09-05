"use client"
import { useState } from "react";


export function SelectorSection() {
    const [selectedCategory, setSelectedCategory] = useState('saree');
  
    // Define product data for each category
    const products: any = {
      saree: [
        {
          title: "Indigo Blue Leaf Patterned Saree",
          price: { original: 2500, discounted: 2000 },
          image: "https://manyavar.scene7.com/is/image/manyavar/SB16556_439-INDIGO+BLUE_101.16369_27-05-2024-13-30:650x900?&dpr=on,2"
        },
        {
          title: "Pink Saree with Floral Borders",
          price: { original: 2300, discounted: 1900 },
          image: "https://manyavar.scene7.com/is/image/manyavar/SB16202-415-LIGHT+PINK_0188_29-06-2023-18-08:650x900?&dpr=on,2"
        },
        {
          title: "Dark Pink Zari Weaved Saree",
          price: { original: 2200, discounted: 1800 },
          image: "https://manyavar.scene7.com/is/image/manyavar/SB15862_425-RANI_101.6135_25-12-2024-17-00:650x900?&dpr=on,2"
        },
        {
          title: "Ruby Red Floral Zari Work Saree",
          price: { original: 2400, discounted: 2000 },
          image: "https://manyavar.scene7.com/is/image/manyavar/SB16047_422-WINE_101.5864_25-12-2024-16-14:650x900?&dpr=on,2"
        }
      ],
      lehenga: [
        {
          title: "Ethereal Blue Net Lehenga",
          price: { original: 1200, discounted: 1000 },
          image: "https://manyavar.scene7.com/is/image/manyavar/JK-blue+(1)_19-11-2024-05-45:650x900?&dpr=on,2"
        },
        {
          title: "Red and Mustard Bridal Lehenga",
          price: { original: 1000, discounted: 850 },
          image: "https://manyavar.scene7.com/is/image/manyavar/UL5099-420-425-YELLOW-RANI_401.23454_13-09-2024-14-30:650x900"
        },
        {
          title: "Rama Green Lehenga with Dupatta",
          price: { original: 1100, discounted: 950 },
          image: "https://manyavar.scene7.com/is/image/manyavar/UL5016_433-RAMA+GREEN+_101.3934_23-12-2024-13-53:650x900?&dpr=on,2"
        },
        {
          title: "Elegant Beige Art Silk Lehenga",
          price: { original: 1300, discounted: 1100 },
          image: "https://manyavar.scene7.com/is/image/manyavar/SKTD4693_421-BEIGE_101.35883_23-10-2024-22-18:650x900?&dpr=on,2"
        }
      ],
      kurta: [
        {
          title: "Teal Blue Suit with Linear Kurta ",
          price: { original: 1500, discounted: 1200 },
          image: "https://manyavar.scene7.com/is/image/manyavar/NMSAS6795_426-T.BLUE_101.18377_03-09-2024-17-27:650x900?&dpr=on,2"
        },
        {
          title: "Elegant Pink Chinon Palazzo Suit",
          price: { original: 1800, discounted: 1500 },
          image: "https://manyavar.scene7.com/is/image/manyavar/NMSAS6624_414-PINK_101.35514_23-10-2024-21-08:650x900?&dpr=on,2"
        },
        {
          title: "Cream Elegance Palazzo Suit",
          price: { original: 1600, discounted: 1400 },
          image: "https://manyavar.scene7.com/is/image/manyavar/SAS8150_402-CREAM_444.4994_24-12-2024-12-04:650x900?&dpr=on,2"
        },
        {
          title: "Pink Enchantment Palazzo Suit",
          price: { original: 1700, discounted: 1400 },
          image: "https://manyavar.scene7.com/is/image/manyavar/SAS8150_414-PINK_444.5066_24-12-2024-12-24:650x900?&dpr=on,2"
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
            onClick={() => handleCategoryClick('saree')}
          >
            SAREE
          </button>
          <button
            className="text-md border border-black rounded-3xl py-2 px-3 bg-white"
            onClick={() => handleCategoryClick('lehenga')}
          >
            LEHENGA
          </button>
          <button
            className="text-md border border-black rounded-3xl py-2 px-3 bg-white"
            onClick={() => handleCategoryClick('kurta')}
          >
            KURTA
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