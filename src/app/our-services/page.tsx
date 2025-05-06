'use client';

import Services from '../components/Services';
import ServiceBanner from './servicebanner';
import HeroTop from "../components/HeroTop";
import Subscribe from '../components/Subscribe';
import Seo from '@/Seo';
export default function UseCasesPage() {
  return (
      <>
      <Seo
          title="Our Services"
          description="Discover expert septic services from Evergreen Septic Service LLC in Lake Geneva, including pumping, inspections, maintenance, and eco-friendly solutions for your septic system."
          keywords={[
              'Septic services Lake Geneva',
              'Septic tank pumping',
              'Septic system inspections',
              'Eco-friendly septic solutions',
              'Evergreen Septic Services',
          ]}
          ogTitle="Our Services | Evergreen Septic Service LLC"
          ogDescription="Discover expert septic services from Evergreen Septic Service LLC in Lake Geneva, including pumping, inspections, maintenance, and eco-friendly solutions for your septic system."
          ogUrl="https://www.evergreensepticsvc.com/services"
          ogImage="https://www.evergreensepticsvc.com/assets/images/HeroSection.png"
          twitterCard="summary_large_image"
          twitterTitle="Our Services | Evergreen Septic Service LLC"
          twitterDescription="Discover expert septic services from Evergreen Septic Service LLC in Lake Geneva, including pumping, inspections, maintenance, and eco-friendly solutions for your septic system."
          twitterImage="https://www.evergreensepticsvc.com/assets/images/HeroSection.png"
      />
      <HeroTop title={'Our Services'} description={'Discover expert septic services from Evergreen Septic Service LLC in Lake Geneva, including pumping, inspections, maintenance, and eco-friendly solutions for your septic system.'} />
      <Services />
      <ServiceBanner />
      <Subscribe />
      </>
  );
}