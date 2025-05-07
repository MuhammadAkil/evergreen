'use client';
import { FaBuilding, FaHotel, FaSchool, FaHome } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { Metadata } from 'next';
import Seo from '@/Seo';

const industryData = [
    { title: "Residential", icon: <FaHome /> },
    { title: "Commercial", icon: <FaBuilding /> },
    { title: "Hospitality", icon: <FaHotel /> },
    { title: "Education", icon: <FaSchool /> },
];

export const metadata: Metadata = {
    title: 'Industries We Serve | Evergreen Septic Services',
    description: 'Evergreen Septic Services provides expert septic solutions for residential, commercial, hospitality, and education sectors in the Lake Geneva region.',
    keywords: [
        'Evergreen Septic Industries',
        'Septic services residential',
        'Septic services commercial',
        'Septic services hospitality',
        'Septic services education',
    ],
    openGraph: {
        title: 'Industries We Serve | Evergreen Septic Services',
        description: 'Evergreen Septic Services provides expert septic solutions for residential, commercial, hospitality, and education sectors in the Lake Geneva region.',
        url: 'https://www.evergreensepticsvc.com/industries',
        images: [
            {
                url: 'https://www.evergreensepticsvc.com/assets/images/Industries/BgSVG.svg',
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Industries We Serve | Evergreen Septic Services',
        description: 'Evergreen Septic Services provides expert septic solutions for residential, commercial, hospitality, and education sectors in the Lake Geneva region.',
        images: ['https://www.evergreensepticsvc.com/assets/images/Industries/BgSVG.svg'],
    },
};

export default function Industries() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);
    return (
        <>
            <Seo
                title="Industries We Serve"
                description="Evergreen Septic Services provides expert septic solutions for residential, commercial, hospitality, and education sectors in the Lake Geneva region."
                keywords={[
                    'Evergreen Septic Industries',
                    'Septic services residential',
                    'Septic services commercial',
                    'Septic services hospitality',
                    'Septic services education',
                ]}
                ogTitle="Industries We Serve | Evergreen Septic Services"
                ogDescription="Evergreen Septic Services provides expert septic solutions for residential, commercial, hospitality, and education sectors in the Lake Geneva region."
                ogUrl="https://www.evergreensepticsvc.com/industries"
                ogImage="https://www.evergreensepticsvc.com/assets/images/Industries/BgSVG.svg"
                twitterCard="summary_large_image"
                twitterTitle="Industries We Serve | Evergreen Septic Services"
                twitterDescription="Evergreen Septic Services provides expert septic solutions for residential, commercial, hospitality, and education sectors in the Lake Geneva region."
                twitterImage="https://www.evergreensepticsvc.com/assets/images/Industries/BgSVG.svg"
            />
            <section className="relative bg-white py-16 px-4" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                <img
                    src="/assets/images/Industries/BgSVG.svg"
                    alt="Industry Illustration"
                    className="absolute -top-24 md:-top-36 left-0 w-[80px] md:w-[120px] object-contain hidden"
                />

                <div className="max-w-screen-xl mx-auto text-center">
                    <h4 className="font-instrument font-extrabold text-[#3F503B] text-[20px] leading-[100%] tracking-[0%] mb-2 sm:text-[16px] md:text-[18px] lg:text-[20px] uppercase">
                        What We Do
                    </h4>

                    <h2 className="font-instrument font-normal text-black text-[54px] leading-[100%] tracking-[0%] mb-10 sm:text-[36px] md:text-[44px] lg:text-[54px]">
                        Industries We Serve
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {industryData.map((item, index) => (
                            <div
                                key={index}
                                className="relative bg-white rounded-lg shadow-md group hover:bg-[#3F503B] transition-all duration-300 p-6 text-center border-t-6 cursor-pointer"
                                style={{ borderTopColor: "#3F503B" }}
                            >
                                <div className="flex justify-center items-center text-[#3F503B] text-6xl mb-6 group-hover:text-white transition-all duration-300">
                                    {item.icon}
                                </div>

                                <h3 className="font-zoho-puvi font-semibold text-[#3F503B] text-[24px] leading-[140%] tracking-[0%] mb-2 group-hover:text-white transition-all duration-300">
                                    {item.title}
                                </h3>

                                <p className="font-zoho-puvi font-medium text-sm text-gray-600 leading-[140%] tracking-[0%] group-hover:text-white transition-all duration-300">
                                    Just tell us what you need and we’ll take care of the rest.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}