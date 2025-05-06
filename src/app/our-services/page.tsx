import Services from '../components/Services';
import ServiceBanner from './servicebanner';
import HeroTop from "../components/HeroTop";
import Subscribe from '../components/Subscribe';
import Seo from '@/Seo';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Services | Evergreen Septic Service LLC',
    description: 'Explore the septic pumping and certified inspection services offered by Evergreen Septic Service LLC in the foothills.',
    keywords: [
        'Septic pumping services',
        'Certified septic inspections',
        'Evergreen Septic services',
        'Foothills septic solutions',
    ],
    openGraph: {
        title: 'Services | Evergreen Septic Service LLC',
        description: 'Septic pumping and certified inspection services by Evergreen Septic Service LLC in the foothills.',
        url: 'https://www.evergreensepticsvc.com/our-services',
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
        title: 'Services | Evergreen Septic Service LLC',
        description: 'Septic pumping and certified inspection services by Evergreen Septic Service LLC in the foothills.',
        images: ['https://www.evergreensepticsvc.com/assets/images/HeroSection.png'],
    },
    alternates: {
        canonical: 'https://www.evergreensepticsvc.com/our-services',
    },
};

export default function ServicesPage() {
    return (
        <>
            <Seo
                title="Services"
                description="Explore the septic pumping and certified inspection services offered by Evergreen Septic Service LLC in the foothills."
                keywords={[
                    'Septic pumping services',
                    'Certified septic inspections',
                    'Evergreen Septic services',
                    'Foothills septic solutions',
                ]}
                ogTitle="Services | Evergreen Septic Service LLC"
                ogDescription="Septic pumping and certified inspection services by Evergreen Septic Service LLC in the foothills."
                ogUrl="https://www.evergreensepticsvc.com/our-services"
                ogImage="https://www.evergreensepticsvc.com/assets/images/HeroSection.png"
                twitterCard="summary_large_image"
                twitterTitle="Services | Evergreen Septic Service LLC"
                twitterDescription="Septic pumping and certified inspection services by Evergreen Septic Service LLC in the foothills."
                twitterImage="https://www.evergreensepticsvc.com/assets/images/HeroSection.png"
            />
            <HeroTop
                title={'Our Services'}
                description={'Explore the septic pumping and certified inspection services offered by Evergreen Septic Service LLC in the foothills.'}
            />
            <Services />
            <ServiceBanner />
            <Subscribe />
        </>
    );
}