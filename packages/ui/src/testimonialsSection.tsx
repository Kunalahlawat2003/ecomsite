import { StarIcon } from "../icons/starIcon.js";


export function Testimonials() {

    const StarRating = ({ rating }: any) => {
        // Loop through 5 stars, and check if each star should be filled or empty
        const stars = [];
      
        for (let i = 1; i <= 5; i++) {
          const filled = i <= rating;  // If the current star index is less than or equal to rating, it will be filled
          stars.push(<StarIcon key={i} filled={filled} size="md"/>);
        }
      
        return <div className="flex space-x-1">{stars}</div>; // Tailwind classes for horizontal spacing between stars
      };

    return <div className="flex flex-col w-full xl:h-[50%] lg:h-[30%] md:h-[45%] h-[60%] min-h-max bg-white dark:bg-black gap-2 ">
        <div className="flex w-full h-max justify-center mt-5 mb-2 text-4xl dark:text-white">
            TESTIMONIALS
        </div>
    
         <div className="flex w-full h-full sm:gap-5 gap-3 px-2 min-h-max overflow-x-auto scrollbar-thin mb-5">
    
           <div className=" relative bg-white dark:bg-black text-black dark:text-white h-full w-[25%] xl:min-w-0 md:min-w-[35%] min-w-[70%] cursor-pointer overflow-hidden border-2 border-gray-300 rounded-xl p-4 flex flex-col gap-2">
                <div className="flex w-full h-max">
                    <StarRating rating={4}/>
                </div>
                <div className="text-lg h-max w-full">
                    Kunal Ahlawat
                </div>
                <div className="text-justify max-h-[70%] w-full overflow-hidden sm:text-base text-sm">
                  bought this product on a recommendation, and it has not disappointed. The build quality is solid, and it works flawlessly. The only reason I didn't give it 5 stars is that the instructions were a bit unclear at first. Once I figured it out, everything worked perfectly. Highly recommend it if you're looking for something reliable and efficient!
                </div>
                <div className="text-gray-400 absolute bottom-0 left-0 p-4">
                    12/01/25 5:01 PM
                </div>
            </div>
    
            <div className=" relative bg-white dark:bg-black text-black dark:text-white h-full w-[25%] xl:min-w-0 md:min-w-[35%] min-w-[70%] cursor-pointer overflow-hidden border-2 border-gray-300 rounded-xl p-4 flex flex-col gap-2">
                <div className="flex w-full h-max">
                    <StarRating rating={4}/>
                </div>
                <div className="text-lg h-max w-full">
                    Kunal Ahlawat
                </div>
                <div className="text-justify max-h-[70%] w-full overflow-hidden sm:text-base text-sm">
                  bought this product on a recommendation, and it has not disappointed. The build quality is solid, and it works flawlessly. The only reason I didn't give it 5 stars is that the instructions were a bit unclear at first. Once I figured it out, everything worked perfectly. Highly recommend it if you're looking for something reliable and efficient!
                </div>
                <div className="text-gray-400 absolute bottom-0 left-0 p-4">
                    12/01/25 5:01 PM
                </div>
            </div>
    
            <div className=" relative bg-white dark:bg-black text-black dark:text-white h-full w-[25%] xl:min-w-0 md:min-w-[35%] min-w-[70%] cursor-pointer overflow-hidden border-2 border-gray-300 rounded-xl p-4 flex flex-col gap-2">
                <div className="flex w-full h-max">
                    <StarRating rating={3}/>
                </div>
                <div className="text-lg h-max w-full">
                    Kunal Ahlawat
                </div>
                <div className="text-justify max-h-[70%] w-full overflow-hidden sm:text-base text-sm">
                  bought this product on a recommendation, and it has not disappointed. The build quality is solid, and it works flawlessly. The only reason I didn't give it 5 stars is that the instructions were a bit unclear at first. Once I figured it out, everything worked perfectly. Highly recommend it if you're looking for something reliable and efficient!
                </div>
                <div className="text-gray-400 absolute bottom-0 left-0 p-4">
                    12/01/25 5:01 PM
                </div>
            </div>
    
            <div className=" relative bg-white dark:bg-black text-black dark:text-white h-full w-[25%] xl:min-w-0 md:min-w-[35%] min-w-[70%] cursor-pointer overflow-hidden border-2 border-gray-300 rounded-xl p-4 flex flex-col gap-2">
                <div className="flex w-full h-max">
                    <StarRating rating={1}/>
                </div>
                <div className="text-lg h-max w-full">
                    Kunal Ahlawat
                </div>
                <div className="text-justify max-h-[70%] w-full overflow-hidden sm:text-base text-sm">
                  bought this product on a recommendation, and it has not disappointed. The build quality is solid, and it works flawlessly. The only reason I didn't give it 5 stars is that the instructions were a bit unclear at first. Once I figured it out, everything worked perfectly. Highly recommend it if you're looking for something reliable and efficient!
                </div>
                <div className="text-gray-400 absolute bottom-0 left-0 p-4">
                    12/01/25 5:01 PM
                </div>
            </div>
            
        </div>
    </div>
}