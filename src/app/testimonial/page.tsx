'use client';

import CallToAction from "../components/CallToAction";
import HeroTop from "../components/HeroTop";
import Hero from "./hero";
import Seo from '@/Seo';

export default function UseCasesPage() {
  return (
      <>
      <Seo
          title="Testimonials"
          description="Hear from our satisfied customers about their experiences with Evergreen Septic Service LLC’s reliable and eco-friendly septic solutions in Lake Geneva."
          keywords={[
              'Septic service testimonials',
              'Evergreen Septic reviews',
              'Lake Geneva septic services',
              'Client feedback septic',
              'Eco-friendly septic solutions',
          ]}
          ogTitle="Testimonials | Evergreen Septic Service LLC"
          ogDescription="Hear from our satisfied customers about their experiences with Evergreen Septic Service LLC’s reliable and eco-friendly septic solutions in Lake Geneva."
          ogUrl="https://www.evergreensepticsvc.com/testimonials"
          ogImage="https://www.evergreensepticsvc.com/assets/images/HeroSection.png"
          twitterCard="summary_large_image"
          twitterTitle="Testimonials | Evergreen Septic Service LLC"
          twitterDescription="Hear from our satisfied customers about their experiences with Evergreen Septic Service LLC’s reliable and eco-friendly septic solutions in Lake Geneva."
          twitterImage="https://www.evergreensepticsvc.com/assets/images/HeroSection.png"
      />
      <HeroTop title={'TESTIMONIALS'} description="Hear from our satisfied customers about their experiences with Evergreen Septic Service LLC’s reliable and eco-friendly septic solutions in Lake Geneva."/>
      <Hero /> 
      <CallToAction/>
      </>
  );
}