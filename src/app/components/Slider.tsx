import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import useEmblaCarousel from "embla-carousel-react";

export default function Slider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });

        const intervalId = setInterval(() => {
            if (emblaApi) {
                emblaApi.scrollNext();
            }
        }, 3000);

        return () => clearInterval(intervalId);


    }, [emblaApi]);
    return (
        <>
            <section className="relative bg-white py-16" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                <div className="absolute top-0 right-0 z-0">
                    <img src="/assets/images/Union.png" alt="Design" className="w-[300px] md:h-[165px]" />
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <p className="text-sm font-instrument font-bold text-[#3F503B] uppercase mb-2 text-[20px] md:text-[20px]">
                        Testimonials
                    </p>

                    <h2 className="font-instrument font-normal text-[32px] text-black mb-12 md:text-[48px] lg:text-[54px]">
                        What Our Clients Say
                    </h2>

                    <div className="w-full">
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className="flex">

                                {/* Card 1 */}
                                <div className="flex-[0_0_100%] md:flex-[0_0_33.3333%] p-3">
                                    <div className="group bg-white border border-transparent p-6 rounded-lg shadow-sm hover:bg-[#e8f3e6] hover:border-[#3F503B] hover:shadow-md transition-all duration-300 h-full">
                                        <h3 className="font-gilroy font-bold text-[#000000] text-[20.38px] sm:text-[18px] leading-[25.94px] group-hover:text-[#3F503B] mb-3">
                                            The Best Septic Services
                                        </h3>
                                        <p className="font-instrument text-[#696969] text-[16.67px] leading-[27.79px] mb-6 sm:text-[14px] sm:leading-[22px]">
                                            "I highly recommend this company. Jon and his crew provided outstanding service when they came
                                            out to help my parents with their septic tank. They were very honest and open to work with! Thank
                                            you for your help!"
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <img
                                                src="https://randomuser.me/api/portraits/women/65.jpg"
                                                className="w-10 h-10 rounded-full"
                                                alt="Giovanni C"
                                            />
                                            <div>
                                                <p className="font-semibold text-sm text-black group-hover:text-[#3F503B]">Giovanni C</p>
                                                <p className="text-xs text-gray-500">Brooklyns NY</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="flex-[0_0_100%] md:flex-[0_0_33.3333%] p-3">
                                    <div className="group bg-white border border-transparent p-6 rounded-lg shadow-sm hover:bg-[#e8f3e6] hover:border-[#3F503B] hover:shadow-md transition-all duration-300 h-full">
                                        <h3 className="font-gilroy font-bold text-[#000000] text-[20.38px] sm:text-[18px] leading-[25.94px] group-hover:text-[#3F503B] mb-3">
                                            The Best Septic Services
                                        </h3>
                                        <p className="font-instrument text-[#696969] text-[16.67px] leading-[27.79px] mb-6 sm:text-[14px] sm:leading-[22px]">
                                            "I highly recommend this company. Jon and his crew provided outstanding service when they came
                                            out to help my parents with their septic tank. They were very honest and open to work with! Thank
                                            you for your help!"
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <img
                                                src="https://randomuser.me/api/portraits/women/65.jpg"
                                                className="w-10 h-10 rounded-full"
                                                alt="Giovanni C"
                                            />
                                            <div>
                                                <p className="font-semibold text-sm text-black group-hover:text-[#3F503B]">Giovanni C</p>
                                                <p className="text-xs text-gray-500">Brooklyns NY</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 3 */}
                                <div className="flex-[0_0_100%] md:flex-[0_0_33.3333%] p-3">
                                    <div className="group bg-white border border-transparent p-6 rounded-lg shadow-sm hover:bg-[#e8f3e6] hover:border-[#3F503B] hover:shadow-md transition-all duration-300 h-full">
                                        <h3 className="font-gilroy font-bold text-[#000000] text-[20.38px] sm:text-[18px] leading-[25.94px] group-hover:text-[#3F503B] mb-3">
                                            The Best Septic Services
                                        </h3>
                                        <p className="font-instrument text-[#696969] text-[16.67px] leading-[27.79px] mb-6 sm:text-[14px] sm:leading-[22px]">
                                            "I highly recommend this company. Jon and his crew provided outstanding service when they came
                                            out to help my parents with their septic tank. They were very honest and open to work with! Thank
                                            you for your help!"
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <img
                                                src="https://randomuser.me/api/portraits/women/65.jpg"
                                                className="w-10 h-10 rounded-full"
                                                alt="Giovanni C"
                                            />
                                            <div>
                                                <p className="font-semibold text-sm text-black group-hover:text-[#3F503B]">Giovanni C</p>
                                                <p className="text-xs text-gray-500">Brooklyns NY</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 1 */}
                                <div className="flex-[0_0_100%] md:flex-[0_0_33.3333%] p-3">
                                    <div className="group bg-white border border-transparent p-6 rounded-lg shadow-sm hover:bg-[#e8f3e6] hover:border-[#3F503B] hover:shadow-md transition-all duration-300 h-full">
                                        <h3 className="font-gilroy font-bold text-[#000000] text-[20.38px] sm:text-[18px] leading-[25.94px] group-hover:text-[#3F503B] mb-3">
                                            The Best Septic Services
                                        </h3>
                                        <p className="font-instrument text-[#696969] text-[16.67px] leading-[27.79px] mb-6 sm:text-[14px] sm:leading-[22px]">
                                            "I highly recommend this company. Jon and his crew provided outstanding service when they came
                                            out to help my parents with their septic tank. They were very honest and open to work with! Thank
                                            you for your help!"
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <img
                                                src="https://randomuser.me/api/portraits/women/65.jpg"
                                                className="w-10 h-10 rounded-full"
                                                alt="Giovanni C"
                                            />
                                            <div>
                                                <p className="font-semibold text-sm text-black group-hover:text-[#3F503B]">Giovanni C</p>
                                                <p className="text-xs text-gray-500">Brooklyns NY</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="flex-[0_0_100%] md:flex-[0_0_33.3333%] p-3">
                                    <div className="group bg-white border border-transparent p-6 rounded-lg shadow-sm hover:bg-[#e8f3e6] hover:border-[#3F503B] hover:shadow-md transition-all duration-300 h-full">
                                        <h3 className="font-gilroy font-bold text-[#000000] text-[20.38px] sm:text-[18px] leading-[25.94px] group-hover:text-[#3F503B] mb-3">
                                            The Best Septic Services
                                        </h3>
                                        <p className="font-instrument text-[#696969] text-[16.67px] leading-[27.79px] mb-6 sm:text-[14px] sm:leading-[22px]">
                                            "I highly recommend this company. Jon and his crew provided outstanding service when they came
                                            out to help my parents with their septic tank. They were very honest and open to work with! Thank
                                            you for your help!"
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <img
                                                src="https://randomuser.me/api/portraits/women/65.jpg"
                                                className="w-10 h-10 rounded-full"
                                                alt="Giovanni C"
                                            />
                                            <div>
                                                <p className="font-semibold text-sm text-black group-hover:text-[#3F503B]">Giovanni C</p>
                                                <p className="text-xs text-gray-500">Brooklyns NY</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 3 */}
                                <div className="flex-[0_0_100%] md:flex-[0_0_33.3333%] p-3">
                                    <div className="group bg-white border border-transparent p-6 rounded-lg shadow-sm hover:bg-[#e8f3e6] hover:border-[#3F503B] hover:shadow-md transition-all duration-300 h-full">
                                        <h3 className="font-gilroy font-bold text-[#000000] text-[20.38px] sm:text-[18px] leading-[25.94px] group-hover:text-[#3F503B] mb-3">
                                            The Best Septic Services
                                        </h3>
                                        <p className="font-instrument text-[#696969] text-[16.67px] leading-[27.79px] mb-6 sm:text-[14px] sm:leading-[22px]">
                                            "I highly recommend this company. Jon and his crew provided outstanding service when they came
                                            out to help my parents with their septic tank. They were very honest and open to work with! Thank
                                            you for your help!"
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <img
                                                src="https://randomuser.me/api/portraits/women/65.jpg"
                                                className="w-10 h-10 rounded-full"
                                                alt="Giovanni C"
                                            />
                                            <div>
                                                <p className="font-semibold text-sm text-black group-hover:text-[#3F503B]">Giovanni C</p>
                                                <p className="text-xs text-gray-500">Brooklyns NY</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="mt-10 w-full max-w-[40em] h-2 bg-gray-200 rounded-full overflow-hidden border" style={{ borderColor: '#AEAEAE' }}>
                            <div className="w-1/3 h-full rounded-full" style={{ backgroundColor: '#484848' }}></div>
                        </div>
                    </div>

                </div>
            </section >
        </>
    )
}
