"use client";
import CallToAction from '../components/CallToAction';
import HeroTop from '../components/HeroTop';
import PricingPage from '../components/PriceDetail';
import Pricing from '../components/Pricing';
export default function pricing() {
  return (
      <>
        <HeroTop title={'OUR PRICING'} description="View detailed pricing for septic and holding tank services from Evergreen Septic Service LLC in Lake Geneva. Get accurate estimates for pumping and maintenance with our transparent pricing guide."/>
        <Pricing/>
        <PricingPage/>
        <CallToAction/>
    </>
  );
}
