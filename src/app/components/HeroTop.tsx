import React from 'react';

interface HeroProps {
  title: string;
  description: string;
}

export default function HeroTop({ title, description }: HeroProps) {
  return (
    <div className="relative w-full  h-[400px] overflow-hidden">
      <img
        src="/assets/images/Rectangle 30139.png"
        alt="Background"
        className="w-full h-full object-cover"
      />
      <img
        src="/assets/images/Mask group.png"
        alt="Overlay"
        className="w-[50%] h-[161%] object-cover absolute top-4 left-0 z-10"
      />
      <div className="absolute inset-0 flex flex-col items-start justify-center ml-4 md:ml-10 text-white z-20 pt-0 lg:pt-10 xl:pt-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide leading-tight">
          {title}
        </h1>
        <p className="text-xs sm:text-sm md:text-base mt-2 max-w-xs sm:max-w-md">
          {description}
        </p>
      </div>
    </div>
  );
}
