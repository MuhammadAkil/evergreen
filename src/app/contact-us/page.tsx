"use client";
import HeroTop from "../components/HeroTop";
import Subscribe from "../components/Subscribe";
import Hero from "./hero";
export default function UseCasesPage() {
  return (
      <>
      <HeroTop title={'Contact Us'} description="Ready to schedule a septic service or have questions? Contact Evergreen Septic Service LLC in Lake Geneva for prompt, professional assistance."/>
      <Hero />
      <Subscribe/>
    </>
  );
}
