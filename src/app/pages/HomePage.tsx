"use client";
import Banner from '../components/Banner'
import React from 'react';
import FAQ from '../components/Faq'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HerSection'
import Services from '../components/Services'
import Industries from '../components/Industries'
import About from '../components/About'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'
import PricingPage from '../components/PeiceDetail';
export default function HomePage() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Services />
            <About />
            <Industries />
            <Pricing />
            <PricingPage />
            <Banner />
            <FAQ />
<Footer />
        </>
    )
}
