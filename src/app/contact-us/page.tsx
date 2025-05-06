import HeroTop from "../components/HeroTop";
import Subscribe from "../components/Subscribe";
import Hero from "./hero";
import Seo from '@/Seo';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Ready to schedule a septic service or have questions? Contact Evergreen Septic Service LLC in Lake Geneva for prompt, professional assistance.',
    keywords: [
        'Contact Evergreen Septic',
        'Septic service inquiries',
        'Lake Geneva septic contact',
        'Evergreen Septic support',
    ],
    openGraph: {
        title: 'Contact Us | Evergreen Septic Service LLC',
        description: 'Ready to schedule a septic service or have questions? Contact Evergreen Septic Service LLC in Lake Geneva for prompt, professional assistance.',
        url: 'https://www.evergreensepticsvc.com/contact',
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
        title: 'Contact Us | Evergreen Septic Service LLC',
        description: 'Ready to schedule a septic service or have questions? Contact Evergreen Septic Service LLC in Lake Geneva for prompt, professional assistance.',
        images: ['https://www.evergreensepticsvc.com/assets/images/HeroSection.png'],
    },
        alternates: {
        canonical: 'https://www.evergreensepticsvc.com/contact-us',
    },
};

export default function ContactUsPage() {
  return (
      <>
      <Seo
          title="Contact Us"
          description="Ready to schedule a septic service or have questions? Contact Evergreen Septic Service LLC in Lake Geneva for prompt, professional assistance."
          keywords={[
              'Contact Evergreen Septic',
              'Septic service inquiries',
              'Lake Geneva septic contact',
              'Evergreen Septic support',
          ]}
          ogTitle="Contact Us | Evergreen Septic Service LLC"
          ogDescription="Ready to schedule a septic service or have questions? Contact Evergreen Septic Service LLC in Lake Geneva for prompt, professional assistance."
          ogUrl="https://www.evergreensepticsvc.com/contact"
          ogImage="https://www.evergreensepticsvc.com/assets/images/HeroSection.png"
          twitterCard="summary_large_image"
          twitterTitle="Contact Us | Evergreen Septic Service LLC"
          twitterDescription="Ready to schedule a septic service or have questions? Contact Evergreen Septic Service LLC in Lake Geneva for prompt, professional assistance."
          twitterImage="https://www.evergreensepticsvc.com/assets/images/HeroSection.png"
      />
      <HeroTop title={'Contact Us'} description="Ready to schedule a septic service or have questions? Contact Evergreen Septic Service LLC in Lake Geneva for prompt, professional assistance."/>
      <Hero />
      <Subscribe/>
      </>
  );
}