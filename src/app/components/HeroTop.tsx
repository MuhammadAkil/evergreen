'use client';
import React from 'react';
import { Metadata } from 'next';
import Seo from '@/Seo';

interface HeroProps {
    title: string;
    description: string;
}

export const metadata: Metadata = {
    title: 'Hero Section | Evergreen Septic Services',
    description: 'Learn more about Evergreen Septic Services. We provide top-quality septic solutions with honesty, efficiency, and care in the Lake Geneva region.',
    keywords: [
        'Evergreen Septic Services',
        'Septic solutions',
        'Lake Geneva septic',
        'Septic maintenance',
        'Septic repairs',
    ],
    openGraph: {
        title: 'Hero Section | Evergreen Septic Services',
        description: 'Learn more about Evergreen Septic Services. We provide top-quality septic solutions with honesty, efficiency, and care in the Lake Geneva region.',
        url: 'https://www.evergreensepticsvc.com',
        images: [
            {
                url: 'https://www.evergreensepticsvc.com/assets/images/ContactUs/bgImage.png',
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Hero Section | Evergreen Septic Services',
        description: 'Learn more about Evergreen Septic Services. We provide top-quality septic solutions with honesty, efficiency, and care in the Lake Geneva region.',
        images: ['https://www.evergreensepticsvc.com/assets/images/ContactUs/bgImage.png'],
    },
};

export default function HeroTop({ title, description }: HeroProps) {
    return (
        <>
            <Seo
                title="Hero Section"
                description="Learn more about Evergreen Septic Services. We provide top-quality septic solutions with honesty, efficiency, and care in the Lake Geneva region."
                keywords={[
                    'Evergreen Septic Services',
                    'Septic solutions',
                    'Lake Geneva septic',
                    'Septic maintenance',
                    'Septic repairs',
                ]}
                ogTitle="Hero Section | Evergreen Septic Services"
                ogDescription="Learn more about Evergreen Septic Services. We provide top-quality septic solutions with honesty, efficiency, and care in the Lake Geneva region."
                ogUrl="https://www.evergreensepticsvc.com"
                ogImage="https://www.evergreensepticsvc.com/assets/images/ContactUs/bgImage.png"
                twitterCard="summary_large_image"
                twitterTitle="Hero Section | Evergreen Septic Services"
                twitterDescription="Learn more about Evergreen Septic Services. We provide top-quality septic solutions with honesty, efficiency, and care in the Lake Geneva region."
                twitterImage="https://www.evergreensepticsvc.com/assets/images/ContactUs/bgImage.png"
            />
            <div className="relative w-full h-[400px] overflow-hidden">
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
                    <p className="text-xs sm:text-sm md:text-base mt-2 w-full md:w-[50%]">
                        {description}
                    </p>
                </div>
            </div>
        </>
    );
}