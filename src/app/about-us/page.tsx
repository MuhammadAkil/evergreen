"use client";
import SuccessBanner from "../components/Banner";
import CallToAction from "../components/CallToAction";
import HeroTop from "../components/HeroTop";
import Subscribe from "../components/Subscribe";
import Hero from "./hero";


export default function UseCasesPage() {
  return (
      <>
      <HeroTop title={'About Us'} description={'At Evergreen Septic Services, we’re committed to providing top-quality septic solutions with honesty, efficiency, and care. From routine maintenance to emergency response, our expert team delivers dependable service you can trust any time, any day.'}/>
      <Hero />
      <SuccessBanner/>
      <Subscribe/>
      <CallToAction/>
      </>
  );
}
