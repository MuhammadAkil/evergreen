"use client";
import Services from '../components/Services'
import ServiceBanner from './servicebanner'
import HeroTop from "../components/HeroTop";
import Subscribe from '../components/Subscribe';
export default function UseCasesPage() {
  return (
      <>
      <HeroTop title={'OUR SERVIC'} description={'Discover expert septic services from Evergreen Septic Service LLC in Lake Geneva, including pumping, inspections, maintenance, and eco-friendly solutions for your septic system.'} />
      <Services />
      <ServiceBanner />
      <Subscribe/>
    </>
  );
}
