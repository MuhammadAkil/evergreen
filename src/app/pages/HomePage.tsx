"use client";
import Banner from '../components/Banner'
import React from 'react';
import FAQ from '../components/Faq'
import HeroSection from '../components/HerSection'
import Services from '../components/Services'
import Industries from '../components/Industries'
import About from '../components/About'
import Pricing from '../components/Pricing'
import PricingPage from '../components/PeiceDetail';
import Slider from '../components/Slider';

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <Services />
            <About />
            <Industries />
            <Pricing />
            <PricingPage />
            <Banner />
            <Slider />
            <FAQ />
        </>
    )
}
