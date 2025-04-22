import React,{useEffect} from 'react';
import { FaPlus } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

const services = [
    {
        title: "Septic Tank Pumping",
        description: "Efficient and timely septic tank pumping to keep your system clean and operational.",
        image: "/assets/PNG/image-3.png",
    },
    {
        title: "Septic System Inspections",
        description: "Thorough inspections to ensure your septic system meets local regulations and safety standards.",
        image: "/assets/PNG/image-4.png",
    },
    {
        title: "Emergency Septic Services",
        description: "Professional repairs to address any issues and extend the life of your septic system.",
        image: "/assets/PNG/image-5.png",
    },
    {
        title: "Drain Field Repair",
        description: "Quick and efficient drain cleaning to prevent backups and system failures.",
        image: "/assets/PNG/image-6.png",
    },
    {
        title: "Grease Trap Services",
        description: "Cleaning and maintenance of grease traps for commercial kitchens.",
        image: "/assets/PNG/image-7.png",
    },
    {
        title: "Emergency Services",
        description: "24/7 emergency response for urgent septic issues.",
        image: "/assets/PNG/image-8.png",
    },
];

export default function Services() {
     useEffect(() => {
            AOS.init({ duration: 1000, once: false });
        }, []);

    return (
        <section className="w-full px-4 py-16 bg-gray-50" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
            <div className="max-w-screen-xl mx-auto text-center">
                <h3 className="text-[#3F503B] text-sm font-semibold uppercase tracking-wider mb-2">
                    What We Do
                </h3>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
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
                                <h3 className="text-xl font-bold text-[#3F503B] group-hover:text-white mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-200">
                                    {service.description}
                                </p>
                                {/* <div className="flex items-center gap-2 text-[#3F503B] font-medium cursor-pointer hover:underline group-hover:text-white">
                                    <FaPlus className="text-sm" />
                                    <span>More About</span>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                    <Link className="bg-[#3F503B] hover:bg-[#2f462f] text-white font-semibold px-8 py-3 rounded-lg shadow-md" href='/our-services'>
                        View More
                    </Link>
                </div>
            </div>
        </section>
    );
}