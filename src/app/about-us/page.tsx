"use client";
import SuccessBanner from "../components/Banner";
import CallToAction from "../components/CallToAction";
import HeroTop from "../components/HeroTop";
import Subscribe from "../components/Subscribe";
import Hero from "./hero";
import Seo from '@/Seo';

export default function UseCasesPage() {
  return (
      <>
      <Seo
          title="About Us"
          description="At Evergreen Septic Services, we’re committed to providing top-quality septic solutions with honesty, efficiency, and care. From routine maintenance to emergency response, our expert team delivers dependable service you can trust any time, any day."
          keywords={[
              'About Evergreen Septic',
              'Septic system experts',
              'Septic services',
              'Septic company background',
              'Evergreen Septic team',
          ]}
          ogTitle="About Us | Evergreen Septic Services"
          ogDescription="At Evergreen Septic Services, we’re committed to providing top-quality septic solutions with honesty, efficiency, and care. From routine maintenance to emergency response, our expert team delivers dependable service you can trust any time, any day."
          ogUrl="https://www.evergreensepticsvc.com/about"
          ogImage="https://www.evergreensepticsvc.com/assets/images/AboutHeroSection.png"
          twitterCard="summary_large_image"
          twitterTitle="About Us | Evergreen Septic Services"
          twitterDescription="At Evergreen Septic Services, we’re committed to providing top-quality septic solutions with honesty, efficiency, and care. From routine maintenance to emergency response, our expert team delivers dependable service you can trust any time, any day."
          twitterImage="https://www.evergreensepticsvc.com/assets/images/AboutHeroSection.png"
      />
      <HeroTop title={'About Us'} description={'At Evergreen Septic Services, we’re committed to providing top-quality septic solutions with honesty, efficiency, and care. From routine maintenance to emergency response, our expert team delivers dependable service you can trust any time, any day.'}/>
      <Hero />
      <SuccessBanner/>
      <Subscribe/>
      <CallToAction/>
      </>
  );
}