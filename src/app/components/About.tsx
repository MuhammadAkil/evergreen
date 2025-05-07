"use client"
import React, { useEffect } from 'react'
import { FaCheckCircle } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Evergreen Septic Service',
    description: 'For over 15 years, Evergreen Septic Service has been providing top-notch septic solutions to homeowners and businesses in the Lake Geneva region. We are a licensed, insured, and certified septic service provider dedicated to keeping your system running efficiently.',
    keywords: [
        'About Evergreen Septic',
        'Septic system experts',
        'Lake Geneva septic services',
        'Septic company background',
        'Evergreen Septic team',
    ],
    openGraph: {
        title: 'About Evergreen Septic Service',
        description: 'For over 15 years, Evergreen Septic Service has been providing top-notch septic solutions to homeowners and businesses in the Lake Geneva region. We are a licensed, insured, and certified septic service provider dedicated to keeping your system running efficiently.',
        url: 'https://www.evergreensepticsvc.com/about',
        images: [
            {
                url: 'https://www.evergreensepticsvc.com/assets/images/AboutHeroSection.png',
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Evergreen Septic Service',
        description: 'For over 15 years, Evergreen Septic Service has been providing top-notch septic solutions to homeowners and businesses in the Lake Geneva region. We are a licensed, insured, and certified septic service provider dedicated to keeping your system running efficiently.',
        images: ['https://www.evergreensepticsvc.com/assets/images/AboutHeroSection.png'],
    },
};

export default function About() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <>
          <section className="w-full bg-[#3F503B] py-16 relative overflow-hidden" data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10 mx-auto px-4">

                    <div className="flex flex-row gap-4">
                        <img
                            src="/assets/images/About/LeftImage.png"
                            alt="History 1"
                            className="object-cover h-100 w-[75%]"
                        />
                        <img
                            src="/assets/images/About/RightImage.png"
                            alt="History 2"
                            className="shadow-lg object-cover h-100 w-[25%]"
                        />

                        <div className="absolute top-[72%] right-[54%] bg-[#E8F3E6] px-4 py-2 text-black text-center rounded-md z-10 transform -translate-x-1/4 hidden md:block">
                            <div className="flex flex-col items-center leading-tight">
                                <span className='text-xs'>Over</span>
                                <span className='font-bold text-2xl'>15+</span>
                                <span className='text-xs'>Years of Experienced</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-white pl-10 relative z-10">
                        <h4 className="text-sm font-instrument font-normal uppercase mb-2 text-[20px] leading-[100%] tracking-[0%] mb-2 sm:text-[16px] md:text-[18px] lg:text-[20px]">
                            Our History
                        </h4>
                        <h2 className="font-instrument text-[34px] sm:text-[32px] md:text-[36px] lg:text-[54px] leading-[100%] tracking-[0%] mb-4">
                            About Evergreen Septic Service
                        </h2>

                        <h2 className="font-instrument text-[34px] sm:text-[32px] md:text-[36px] leading-[100%] tracking-[0%] mb-4 sm:text-[24px] md:text-[32px] lg:text-[32px]">
                            Who We Are
                        </h2>

                        <p className="font-instrument font-normal text-gray-200 text-[18px] leading-[160%] tracking-[0%] mb-4">
                            For over 15 years, Evergreen Septic Service has been providing top-notch septic solutions to homeowners and businesses in the Lake Geneva region. We are a licensed, insured, and certified septic service provider dedicated to keeping your system running efficiently.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-4">
                            <div className="flex items-center">
                                <div className="bg-[#E8F3E6] p-2 rounded-l-md shadow-md">
                                    <FaCheckCircle className="text-[#3F503B] text-lg" />
                                </div>
                                <div className="bg-[#5D7757] text-white font-semibold text-sm px-4 py-2 rounded-r-md shadow h-[33px]">
                                    Experienced & Trusted Team
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="bg-[#E8F3E6] p-2 rounded-l-md shadow-md">
                                    <FaCheckCircle className="text-[#3F503B] text-lg" />
                                </div>
                                <div className="bg-[#5D7757] text-white font-semibold text-sm px-4 py-2 rounded-r-md shadow h-[33px]">
                                    24/7 Assistance
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-7">
                            <div className="flex items-center">
                                <div className="bg-[#E8F3E6] p-2 rounded-l-md shadow-md">
                                    <FaCheckCircle className="text-[#3F503B] text-lg" />
                                </div>
                                <div className="bg-[#5D7757] text-white font-semibold text-sm px-4 py-2 rounded-r-md shadow h-[33px]">
                                    Fast & Affordable Services
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="bg-[#E8F3E6] p-2 rounded-l-md shadow-md">
                                    <FaCheckCircle className="text-[#3F503B] text-lg" />
                                </div>
                                <div className="bg-[#5D7757] h-[33px] text-white font-semibold text-sm px-4 py-2 rounded-r-md shadow">
                                    Brilliant Ideas
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <img
                    src="/assets/images/About/BgImage.png"
                    alt="Layout Background"
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[300px] md:w-[600px] z-0 pointer-events-none"
                />
            </section>
        </>
    )
}