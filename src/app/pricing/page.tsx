"use client";
import HeroTop from '../components/HeroTop';
import PricingPage from '../components/PeiceDetail';
import Pricing from '../components/Pricing';
export default function pricing() {
  return (
      <>
        <HeroTop title={'OUR PRICING'} description={'Reliable, Professional, and Environmentally Responsible Septic Solutions'}/>
        <Pricing/>
        <PricingPage/>
    </>
  );
}
