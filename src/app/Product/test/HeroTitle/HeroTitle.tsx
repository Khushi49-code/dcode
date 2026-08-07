"use client";
import { useEffect, useState } from "react";

const HeroTitle = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Simple fade in on mount
        setIsVisible(true);
    }, []);

    return (
        <>
            <div className="absolute inset-0 z-[5] flex flex-col items-center text-center justify-center">
                {/* Main Title */}
                <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h1 className="text-white text-center font-light tracking-tight drop-shadow-[0_0_20px_rgba(59,130,246,0.35)] 
      text-3xl sm:text-4xl md:text-7xl lg:text-9xl xl:text-[95px] w-full px-4 ">
                        Optimizing CNG Kit Business with
                    </h1>
                </div>

                {/* Subtitle */}
                <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className=" inline-block">
                        <span className="text-blue-400 text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[120px]">
                            Planning
                        </span>
                        <span className=" text-white text-center font-light tracking-tight drop-shadow-[0_0_20px_rgba(59,130,246,0.35)] 
      text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[90px] w-full px-4 mb-2">
                            Solutions
                        </span>
                    </div>
                </div>

                {/* Tagline & Buttons in ONE container */}
                <div className={`transition-all duration-1000 delay-700 mt-4 md:mt-6 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Tagline */}
                    <p className=" text-white/80 text-lg sm:text-xl md:text-2xl lg:text-3xl text-center px-4  mb-6 md:mb-8">
                        Streamlining sales, customer management, inventory, and services for CNG conversion businesses
                    </p>

                    {/* Buttons */}
                    {/* <div className="flex flex-col gap-4 items-center sm:flex-row sm:justify-center sm:gap-6">
                        <button className="p-3 w-48 md:w-56 lg:w-64 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold rounded-full hover:opacity-90 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                            View Case Study
                        </button>

                        <button className="p-3 w-48 md:w-56 lg:w-64 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30 hover:border-white hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95">
                            See Live Demo
                        </button>
                    </div> */}
                </div>
            </div>

        </>
    );
};

export default HeroTitle;