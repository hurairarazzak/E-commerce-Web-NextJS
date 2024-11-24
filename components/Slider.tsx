"use client";

import { useEffect, useState } from "react";

export default function ImageSlider() {
  const images = [
    { src: "/1.jpg", alt: "Image 1", text: "Welcome to ShopSavvy" },
    { src: "/2.jpg", alt: "Image 2", text: "Shop Smart, Save Big" },
    { src: "/3.jpg", alt: "Image 3", text: "Exclusive Deals Just for You" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <div
        className="w-full h-full transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url(${images[currentIndex].src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <h2 className="text-white text-5xl font-bold transition-opacity duration-700 ">
            {images[currentIndex].text}
          </h2>
        </div>
      </div>
    </div>
  );
}