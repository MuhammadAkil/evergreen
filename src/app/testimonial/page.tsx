import CallToAction from "../components/CallToAction";
import HeroTop from "../components/HeroTop";
import Hero from "./hero";
import Seo from '@/Seo';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Testimonials | Evergreen Septic Service LLC',
    description: 'Read what our clients say about Evergreen Septic Service LLC’s reliable and professional septic services in Lake Geneva. Discover why we’re trusted for septic tank pumping, maintenance, and eco-friendly solutions.',
    keywords: [
        'Septic service testimonials',
        'Evergreen Septic reviews',
        'Lake Geneva septic services',
        'Client feedback septic',
        'Trusted septic company',
    ],
    openGraph: {
        title: 'Testimonials | Evergreen Septic Service LLC',
        description: 'Read what our clients say about Evergreen Septic Service LLC’s reliable and professional septic services in Lake Geneva. Discover why we’re trusted for septic tank pumping, maintenance, and eco-friendly solutions.',
        url: 'https://www.evergreensepticsvc.com/testimonial',
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
        title: 'Testimonials | Evergreen Septic Service LLC',
        description: 'Read what our clients say about Evergreen Septic Service LLC’s reliable and professional septic services in Lake Geneva. Discover why we’re trusted for septic tank pumping, maintenance, and eco-friendly solutions.',
        images: ['https://www.evergreensepticsvc.com/assets/images/HeroSection.png'],
    },
    alternates: {
        canonical: 'https://www.evergreensepticsvc.com/testimonial',
    },
};

export default function TestimonialsPage() {
    return (
        <>
            <Seo
                title="Testimonials"
                description="Read what our clients say about Evergreen Septic Service LLC’s reliable and professional septic services in Lake Geneva. Discover why we’re trusted for septic tank pumping, maintenance, and eco-friendly solutions."
                keywords={[
                    'Septic service testimonials',
                    'Evergreen Septic reviews',
                    'Lake Geneva septic services',
                    'Client feedback septic',
                    'Trusted septic company',
                ]}
                ogTitle="Testimonials | Evergreen Septic Service LLC"
                ogDescription="Read what our clients say about Evergreen Septic Service LLC’s reliable and professional septic services in Lake Geneva. Discover why we’re trusted for septic tank pumping, maintenance, and eco-friendly solutions."
                ogUrl="https://www.evergreensepticsvc.com/testimonial"
                ogImage="https://www.evergreensepticsvc.com/assets/images/HeroSection.png"
                twitterCard="summary_large_image"
                twitterTitle="Testimonials | Evergreen Septic Service LLC"
                twitterDescription="Read what our clients say about Evergreen Septic Service LLC’s reliable and professional septic services in Lake Geneva. Discover why we’re trusted for septic tank pumping, maintenance, and eco-friendly solutions."
                twitterImage="https://www.evergreensepticsvc.com/assets/images/HeroSection.png"
            />
            <HeroTop
                title={'TESTIMONIALS'}
                description="Read what our clients say about Evergreen Septic Service LLC’s reliable and professional septic services in Lake Geneva. Discover why we’re trusted for septic tank pumping, maintenance, and eco-friendly solutions."
            />
            <Hero />
            <CallToAction />
        </>
    );
}