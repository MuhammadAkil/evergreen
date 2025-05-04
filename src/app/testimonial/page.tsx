"use client";
import CallToAction from "../components/CallToAction";
import HeroTop from "../components/HeroTop";
import Hero from "./hero";
export default function UseCasesPage() {
  return (
      <>
      <HeroTop title={'TESTIMONIALS'} description="Hear from our satisfied customers about their experiences with Evergreen Septic Service LLC’s reliable and eco-friendly septic solutions in Lake Geneva."/>
      <Hero /> 
      <CallToAction/>
    </>
  );
}
