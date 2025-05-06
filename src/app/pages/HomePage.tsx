'use client';

import Banner from '../components/Banner';
import React from 'react';
import FAQ from '../components/Faq';
import HeroSection from '../components/HerSection';
import Services from '../components/Services';
import Industries from '../components/Industries';
import About from '../components/About';
import Pricing from '../components/Pricing';
import PricingPage from '../components/PriceDetail';
import Slider from '../components/Slider';
import Subscribe from '../components/Subscribe';
import CallToAction from '../components/CallToAction';
import Seo from '@/Seo';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Evergreen Septic Service LLC | Septic Solutions in Lake Geneva',
    description: 'Evergreen Septic Service LLC provides expert septic services in Lake Geneva, including pumping, inspections, maintenance, and eco-friendly solutions for residential and commercial properties.',
    keywords: [
        'Septic services Lake Geneva',
        'Septic tank pumping',
        'Septic system maintenance',
        'Eco-friendly septic solutions',
        'Evergreen Septic Service',
    ],
    openGraph: {
        title: 'Evergreen Septic Service LLC | Septic Solutions in Lake Geneva',
        description: 'Evergreen Septic Service LLC provides expert septic services in Lake Geneva, including pumping, inspections, maintenance, and eco-friendly solutions for residential and commercial properties.',
        url: 'https://www.evergreensepticsvc.com',
        images: [
            {
                url: 'https://www.evergreensepticsvc.com/assets/images/HeroSection.png',
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Evergreen Septic Service LLC | Septic Solutions in Lake Geneva',
        description: 'Evergreen Septic Service LLC provides expert septic services in Lake Geneva, including pumping, inspections, maintenance, and eco-friendly solutions for residential and commercial properties.',
        images: ['https://www.evergreensepticsvc.com/assets/images/HeroSection.png'],
    },
};

export default function HomePage() {
    return (
        <>
            <Seo
                title="Evergreen Septic Service LLC | Septic Solutions in Lake Geneva"
                description="Evergreen Septic Service LLC provides expert septic services in Lake Geneva, including pumping, inspections, maintenance, and eco-friendly solutions for residential and commercial properties."
                keywords={[
                    'Septic services Lake Geneva',
                    'Septic tank pumping',
                    'Septic system maintenance',
                    'Eco-friendly septic solutions',
                    'Evergreen Septic Service',
                ]}
                ogTitle="Evergreen Septic Service LLC | Septic Solutions in Lake Geneva"
                ogDescription="Evergreen Septic Service LLC provides expert septic services in Lake Geneva, including pumping, inspections, maintenance, and eco-friendly solutions for residential and commercial properties."
                ogUrl="https://www.evergreensepticsvc.com"
                ogImage="https://www.evergreensepticsvc.com/assets/images/HeroSection.png"
                twitterCard="summary_large_image"
                twitterTitle="Evergreen Septic Service LLC | Septic Solutions in Lake Geneva"
                twitterDescription="Evergreen Septic Service LLC provides expert septic services in Lake Geneva, including pumping, inspections, maintenance, and eco-friendly solutions for residential and commercial properties."
                twitterImage="https://www.evergreensepticsvc.com/assets/images/HeroSection.png"
            />
            <HeroSection />
            <Services />
            <About />
            <Industries />
            <Pricing />
            <PricingPage />
            <Banner />
            <Slider />
            <Subscribe />
            <CallToAction />
        </>
    );
}