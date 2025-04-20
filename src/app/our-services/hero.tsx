import React from 'react';

export default function Hero() {
    return (
        <>
            <div className="relative w-full h-[400px] overflow-hidden">
                <img 
                    src="/assets/PNG/Rectangle 30139.png" 
                    alt="Background Image" 
                    className="w-full h-full object-cover" 
                />
                <img 
                    src="/assets/PNG/Mask group.png" 
                    alt="Mask Overlay" 
                    className="w-[50%] h-[161%] object-cover absolute top-4 left-0 z-10" 
                />
                <div className="absolute inset-0 flex flex-col items-start justify-center ml-10 text-white text-center z-20">
                    <h1 className="text-6xl font-bold uppercase tracking-wide">OUR SERVICES</h1>
                    <p className="text-sm mt-2">Reliable, Professional, and Environmentally Responsible Septic Solutions</p>
                </div>
            </div>
        </>
    );
}