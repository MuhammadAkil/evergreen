import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { Metadata } from 'next';
import { usePathname } from 'next/navigation';

export const metadata: Metadata = {
    title: "Services",
    description:
        "Explore the septic pumping and certified inspection services offered by Evergreen Septic Service LLC in the foothills.",
    keywords: [
        "Septic pumping services",
        "Certified septic inspections",
        "Evergreen Septic services",
        "Foothills septic solutions",
    ],
    openGraph: {
        title: "Services | Evergreen Septic Service LLC",
        description:
            "Septic pumping and certified inspection services by Evergreen Septic Service LLC in the foothills.",
        url: "https://www.evergreensepticsvc.com/services",
        images: [
            {
                url: "https://www.evergreensepticsvc.com/assets/images/HeroSection.png",
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Services | Evergreen Septic Service LLC",
        description:
            "Septic pumping and certified inspection services by Evergreen Septic Service LLC in the foothills.",
        images: ["https://www.evergreensepticsvc.com/assets/images/HeroSection.png"],
    },
};

const services = [
    {
        title: "Septic Tank Pumping",
        description: "Efficient and timely septic tank pumping to keep your system clean and operational.",
        image: "/assets/images/Services/Card1.png",
    },
    {
        title: "Septic System Inspections",
        description: "Thorough inspections to ensure your septic system meets local regulations and safety standards.",
        image: "/assets/images/Services/Card2.png",
    },
    {
        title: "Emergency Septic Services",
        description: "Professional repairs to address any issues and extend the life of your septic system.",
        image: "/assets/images/Services/Card3.png",
    },
    {
        title: "Drain Field Repair",
        description: "Quick and efficient drain cleaning to prevent backups and system failures.",
        image: "/assets/images/Services/Card4.png",
    },
    {
        title: "Grease Trap Services",
        description: "Cleaning and maintenance of grease traps for commercial kitchens.",
        image: "/assets/images/Services/Card5.png",
    },
    {
        title: "Emergency Services",
        description: "24/7 emergency response for urgent septic issues.",
        image: "/assets/images/Services/Card6.png",
    },
];

export default function Services() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    const pathname = usePathname();
    return (
        <section className="w-full px-4 py-16 bg-gray-50" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="max-w-screen-xl mx-auto text-center">
                <h3 className="font-instrument font-extrabold text-[#3F503B] text-[20px] leading-[100%] tracking-[0%] mb-2 uppercase sm:text-[18px] md:text-[20px] lg:text-[24px]">
                    What We Do
                </h3>


                <h2 className="font-instrument font-normal text-[36px] leading-[100%] tracking-[0%] mb-10 sm:text-[54px] md:text-[44px] lg:text-[54px]">
                    OUR SERVICES
                </h2>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 group hover:bg-[#3F503B]"
                        >
                            <div className="relative w-full h-48">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover rounded-t-lg"
                                    onError={() => console.log(`Failed to load image: ${service.image}`)}
                                />
                            </div>
                            <div className="p-6 text-left group-hover:text-white">
                                <h3 className="font-instrument font-medium text-black text-[24px] leading-[100%] tracking-[0%] group-hover:text-white mb-2">
                                    {service.title}
                                </h3>

                                <p className="font-instrument font-normal text-gray-600 text-[16px] leading-[100%] tracking-[0%] mb-4 group-hover:text-gray-200 sm:text-[14px] md:text-[16px] lg:text-[18px]">
                                    {service.description}
                                </p>

                                {/* <div className="flex items-center gap-2 sm:text-[14px] md:text-[16px] lg:text-[18px] font-instrument font-medium text-[#3F503B] leading-[100%] tracking-[0%] group-hover:text-white">
                                    <FaPlusCircle className="text-[#3F503B] text-[16px] group-hover:text-white" />
                                    <span className='font-bold'>More About Septic System Inspection</span>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>

                {pathname !== '/our-services' && (
                    <div className="mt-12">
                        <Link
                            className="bg-[#3F503B] hover:bg-[#2f462f] text-white font-semibold px-8 py-3 rounded-lg shadow-md text-[24px] leading-[100%] tracking-[0%] sm:text-[18px] md:text-[20px] lg:text-[24px]"
                            href='/our-services'
                        >
                            View More
                        </Link>

                    </div>
                )}
            </div>
        </section>
    );
}