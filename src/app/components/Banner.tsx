import React, { useEffect, useState, useCallback } from 'react';
import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react";
import CountUp from 'react-countup';
import { Metadata } from 'next';
import Seo from '@/Seo';

export const metadata: Metadata = {
    title: 'Success Banner | Evergreen Septic Services',
    description: 'Maintain your septic system with our reliable and efficient solutions. Learn about our completed projects, happy clients, dealer equipments, and years of experience.',
    keywords: [
        'Evergreen Septic Services',
        'Septic system maintenance',
        'Reliable septic solutions',
        'Septic service success',
        'Septic company achievements',
    ],
    openGraph: {
        title: 'Success Banner | Evergreen Septic Services',
        description: 'Maintain your septic system with our reliable and efficient solutions. Learn about our completed projects, happy clients, dealer equipments, and years of experience.',
        url: 'https://www.evergreensepticsvc.com/success',
        images: [
            {
                url: 'https://www.evergreensepticsvc.com/assets/images/Banner/bgImage.png',
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Success Banner | Evergreen Septic Services',
        description: 'Maintain your septic system with our reliable and efficient solutions. Learn about our completed projects, happy clients, dealer equipments, and years of experience.',
        images: ['https://www.evergreensepticsvc.com/assets/images/Banner/bgImage.png'],
    },
};

export default function SuccessBanner() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [progress, setProgress] = useState(0);

    const onScroll = useCallback(() => {
        if (!emblaApi) return;
        const scrollProgress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
        setProgress(scrollProgress);
    }, [emblaApi]);

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });

        const intervalId = setInterval(() => {
            if (emblaApi) {
                emblaApi.scrollNext();
            }
        }, 3000);

        if (emblaApi) {
            emblaApi.on("scroll", onScroll);
            emblaApi.on("reInit", onScroll);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [emblaApi, onScroll]);

    return (
        <>
            <Seo
                title="Success Banner"
                description="Maintain your septic system with our reliable and efficient solutions. Learn about our completed projects, happy clients, dealer equipments, and years of experience."
                keywords={[
                    'Evergreen Septic Services',
                    'Septic system maintenance',
                    'Reliable septic solutions',
                    'Septic service success',
                    'Septic company achievements',
                ]}
                ogTitle="Success Banner | Evergreen Septic Services"
                ogDescription="Maintain your septic system with our reliable and efficient solutions. Learn about our completed projects, happy clients, dealer equipments, and years of experience."
                ogUrl="https://www.evergreensepticsvc.com/success"
                ogImage="https://www.evergreensepticsvc.com/assets/images/Banner/bgImage.png"
                twitterCard="summary_large_image"
                twitterTitle="Success Banner | Evergreen Septic Services"
                twitterDescription="Maintain your septic system with our reliable and efficient solutions. Learn about our completed projects, happy clients, dealer equipments, and years of experience."
                twitterImage="https://www.evergreensepticsvc.com/assets/images/Banner/bgImage.png"
            />
            <section>
                <div className="relative" data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <div className="relative h-[500px] w-full">
                        <Image
                            src="/assets/images/Banner/bgImage.png"
                            alt="Septic system maintenance"
                            fill
                            className="object-cover brightness-[0.85]"
                            priority
                        />

                        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 hidden md:block">
                            <svg width="200" height="200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M15.6947 13.7H15.7037M15.6947 16.7H15.7037M11.9955 13.7H12.0045M11.9955 16.7H12.0045M8.29431 13.7H8.30329M8.29431 16.7H8.30329"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-16">
                            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl max-w-3xl leading-tight font-instrument font-medium">
                                Maintain your septic system with our reliable and efficient solutions.
                            </h1>

                            <Link href="/contact-us">
                                <div className="mt-8">
                                    <Button className="bg-red-500 cursor-pointer hover:bg-red-600 text-white px-6 py-6 rounded-md text-[24px] font-instrument font-bold leading-[100%] md:text-[24px]">
                                        <Rocket className="mr-2 h-5 w-5" />
                                        GET A FREE QUOTE
                                    </Button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="relative mx-auto max-w-4xl -mt-16 px-4">
                        <div className="bg-white rounded-lg shadow-lg p-8 border mb-14 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div className="flex flex-col" data-aos="fade-up" data-aos-delay="100">
                                <span className="text-3xl md:text-4xl font-bold text-gray-800">
                                    <CountUp end={3400} duration={2.5} separator="," />+
                                </span>
                                <span className="text-sm text-gray-500 mt-1 font-instrument">Complete Projects</span>
                            </div>

                            <div className="flex flex-col" data-aos="fade-up" data-aos-delay="200">
                                <span className="text-3xl md:text-4xl font-bold text-gray-800">
                                    <CountUp end={6820} duration={2.5} separator="," />
                                </span>
                                <span className="text-sm text-gray-500 mt-1 font-instrument">Happy Clients</span>
                            </div>

                            <div className="flex flex-col" data-aos="fade-up" data-aos-delay="300">
                                <span className="text-3xl md:text-4xl font-bold text-gray-800">
                                    <CountUp end={270} duration={2.5} />
                                </span>
                                <span className="text-sm text-gray-500 mt-1 font-instrument">Dealer Equipments</span>
                            </div>

                            <div className="flex flex-col" data-aos="fade-up" data-aos-delay="400">
                                <span className="text-3xl md:text-4xl font-bold text-gray-800">
                                    <CountUp end={15} duration={2.5} />+
                                </span>
                                <span className="text-sm text-gray-500 mt-1 font-instrument">Years of Experience</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}