import HeroTop from '../components/HeroTop';
import Seo from '@/Seo';
import { Metadata } from 'next';
import FAQSection from './FAQSection';

export const metadata: Metadata = {
    title: 'Frequently Asked Questions | Evergreen Septic Service LLC',
    description: 'Find answers to common questions about septic system maintenance, pumping, inspections, and eco-friendly solutions with Evergreen Septic Service LLC in the Lake Geneva region.',
    keywords: [
        'Septic system FAQ',
        'Septic maintenance questions',
        'Evergreen Septic Services',
        'Lake Geneva septic',
        'Septic emergency services',
    ],
    openGraph: {
        title: 'Frequently Asked Questions | Evergreen Septic Service LLC',
        description: 'Find answers to common questions about septic system maintenance, pumping, inspections, and eco-friendly solutions with Evergreen Septic Service LLC in the Lake Geneva region.',
        url: 'https://www.evergreensepticsvc.com/faq',
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
        title: 'Frequently Asked Questions | Evergreen Septic Service LLC',
        description: 'Find answers to common questions about septic system maintenance, pumping, inspections, and eco-friendly solutions with Evergreen Septic Service LLC in the Lake Geneva region.',
        images: ['https://www.evergreensepticsvc.com/assets/images/HeroSection.png'],
    },
    alternates: {
        canonical: 'https://www.evergreensepticsvc.com/faq',
    },
};

export default function FAQPage() {
    return (
        <>
            <Seo
                title="Frequently Asked Questions"
                description="Find answers to common questions about septic system maintenance, pumping, inspections, and eco-friendly solutions with Evergreen Septic Service LLC in the Lake Geneva region."
                keywords={[
                    'Septic system FAQ',
                    'Septic maintenance questions',
                    'Evergreen Septic Services',
                    'Lake Geneva septic',
                    'Septic emergency services',
                ]}
                ogTitle="Frequently Asked Questions | Evergreen Septic Service LLC"
                ogDescription="Find answers to common questions about septic system maintenance, pumping, inspections, and eco-friendly solutions with Evergreen Septic Service LLC in the Lake Geneva region."
                ogUrl="https://www.evergreensepticsvc.com/faq"
                ogImage="https://www.evergreensepticsvc.com/assets/images/HeroSection.png"
                twitterCard="summary_large_image"
                twitterTitle="Frequently Asked Questions | Evergreen Septic Service LLC"
                twitterDescription="Find answers to common questions about septic system maintenance, pumping, inspections, and eco-friendly solutions with Evergreen Septic Service LLC in the Lake Geneva region."
                twitterImage="https://www.evergreensepticsvc.com/assets/images/HeroSection.png"
            />
            <HeroTop 
                title={'Frequently Asked Questions'} 
                description={'Find answers to common questions about septic system maintenance, pumping, inspections, and eco-friendly solutions with Evergreen Septic Service LLC in the Lake Geneva region.'}
            />
            <FAQSection />
        </>
    );
}