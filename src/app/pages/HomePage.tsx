"use client";

import React from 'react';
import FAQ from '../components/Faq'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HerSection'
import Services from '../components/Services'
import Industries from '../components/Industries'
import About from '../components/About'
import Pricing from '../components/Pricing'
export default function HomePage() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Services />
            <About />
            <Industries />
              <Pricing />
            <FAQ />

        </>
    )
}
