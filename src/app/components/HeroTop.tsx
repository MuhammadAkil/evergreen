import React from 'react';

interface HeroProps {
    title: string;
    description: string;
}

export default function HeroTop({ title, description }: HeroProps) {
    return (
        <div className="relative w-full  h-[400px] overflow-hidden">
            <img
                src="/assets/images/ContactUs/bgImage.png"
                alt="Background Image"
                className="w-full h-full object-cover"
            />
            <img
                src="/assets/images/ContactUs/WhiteBg.png"
                alt="Mask Overlay"
                className="w-[50%] h-[161%] object-cover absolute top-4 left-0 z-10"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-center ml-4 md:ml-10 text-white z-20 pt-0 lg:pt-10 xl:pt-16">
                <h1 className="text-2xl sm:text-4xl font-bold capitalize tracking-wide leading-tight">
                    {title}
                </h1>
                <p className="text-xs sm:text-sm md:text-base mt-2 w-[50%]">
                    {description}
                </p>
            </div>
        </div>
    );
}
