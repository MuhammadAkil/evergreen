import CallToAction from '../components/CallToAction';
import HeroTop from '../components/HeroTop';
import PricingPage from '../components/PriceDetail';
import PricingComponent from '../components/Pricing';
import Seo from '@/Seo';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pricing | Evergreen Septic Service LLC',
    description: 'View detailed pricing for septic and holding tank services from Evergreen Septic Service LLC in Lake Geneva. Get accurate estimates for pumping and maintenance with our transparent pricing guide.',
    keywords: [
        'Septic service pricing',
        'Septic tank pumping cost',
        'Lake Geneva septic pricing',
        'Evergreen Septic Service',
        'Transparent septic pricing',
    ],
    openGraph: {
        title: 'Pricing | Evergreen Septic Service LLC',
        description: 'View detailed pricing for septic and holding tank services from Evergreen Septic Service LLC in Lake Geneva. Get accurate estimates for pumping and maintenance with our transparent pricing guide.',
        url: 'https://www.evergreensepticsvc.com/pricing',
        images: [
            {
                url: 'https://www.evergreensepticsvc.com/assets/images/HeroSection.png',
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Pricing | Evergreen Septic Service LLC',
        description: 'View detailed pricing for septic and holding tank services from Evergreen Septic Service LLC in Lake Geneva. Get accurate estimates for pumping and maintenance with our transparent pricing guide.',
        images: ['https://www.evergreensepticsvc.com/assets/images/HeroSection.png'],
    },
    alternates: {
        canonical: 'https://www.evergreensepticsvc.com/pricing',
    },
};

export default function Pricing() {
  return (
      <>
        <Seo
            title="Pricing"
            description="View detailed pricing for septic and holding tank services from Evergreen Septic Service LLC in Lake Geneva. Get accurate estimates for pumping and maintenance with our transparent pricing guide."
            keywords={[
                'Septic service pricing',
                'Septic tank pumping cost',
                'Lake Geneva septic pricing',
                'Evergreen Septic Service',
                'Transparent septic pricing',
            ]}
            ogTitle="Pricing | Evergreen Septic Service LLC"
            ogDescription="View detailed pricing for septic and holding tank services from Evergreen Septic Service LLC in Lake Geneva. Get accurate estimates for pumping and maintenance with our transparent pricing guide."
            ogUrl="https://www.evergreensepticsvc.com/pricing"
            ogImage="https://www.evergreensepticsvc.com/assets/images/HeroSection.png"
            twitterCard="summary_large_image"
            twitterTitle="Pricing | Evergreen Septic Service LLC"
            twitterDescription="View detailed pricing for septic and holding tank services from Evergreen Septic Service LLC in Lake Geneva. Get accurate estimates for pumping and maintenance with our transparent pricing guide."
            twitterImage="https://www.evergreensepticsvc.com/assets/images/HeroSection.png"
        />
        <HeroTop 
            title={'Our Pricing'} 
            description="View detailed pricing for septic and holding tank services from Evergreen Septic Service LLC in Lake Geneva. Get accurate estimates for pumping and maintenance with our transparent pricing guide."
        />
        <PricingComponent />
        <PricingPage />
        <CallToAction />
      </>
  );
}