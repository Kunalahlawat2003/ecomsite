"use client"

import { useEffect, useState } from "react";


export function Slideshow() {
    const images = [
        {
            src: 'https://ninetheme.com/themes/anarkali/wp-content/uploads/2023/11/slideshow-1920-24.png',
            text: "Welcome to the Culture"
        }
        ,{
            src: 'https://ninetheme.com/themes/anarkali/wp-content/uploads/2023/11/slideshow-1920-31.png',
            text: "Explore New Horizons"
        },
        {
            src: 'https://images7.alphacoders.com/109/1095697.jpg',
            text: "Discover the Magic"
        },
        {
            src: 'https://images5.alphacoders.com/105/thumb-1920-1056562.jpg',
            text: "Experience Adventure"
        }
    ];

    // const images = [
    //     'https://www.bonkerscorner.com/cdn/shop/files/20241217_082711559_iOS_1600x_crop_center.png?v=1734427156',
    //     'https://www.bonkerscorner.com/cdn/shop/files/1_1600x_crop_center.jpg?v=1731932636',
    //     'https://www.bonkerscorner.com/cdn/shop/files/3_1600x_crop_center.png?v=1731932637',
    //     'https://www.bonkerscorner.com/cdn/shop/files/20241010_042252797_iOS_c10a14ef-6418-4fe1-b0d5-0ce7324983c6_1600x_crop_center.png?v=1728904764'
    // ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000);

        return() => clearInterval(interval);
    }, [images.length]);

    return <div className="h-screen w-full ">
        {images.map((image, index) => (
          <div key={index} className="h-screen absolute top-0 left-0 w-full"
          style={{
            opacity: index === currentImageIndex ? 1 : 0,
            transform: index === currentImageIndex ? 'scale(1)' : 'scale(1)',
            transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
          }}>
            <img
              src={image?.src}
              alt={`Image ${index + 1}`}
              className={`filter brightness-75 absolute top-0 left-0 w-full h-screen sm:object-cover object-cover object-center transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100 scale-100 animate-zoomInOut' : 'opacity-0 scale-100'
              }`}
            />
            <div className={`w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-serif font-extrabold sm:text-4xl text-3xl transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}>
                {image?.text}
            </div>
          </div>
        ))}
    </div>
}