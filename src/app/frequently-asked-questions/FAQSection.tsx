'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQSection = () => {
    const [open, setOpen] = useState<number | null>(null);
    const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

    const toggleAccordion = (index: number) => {
        setOpen(prev => (prev === index ? null : index));
    };

    const faqData = [
        {
            question: "Where is Evergreen Septic Services located?",
            answer:
                "We are based in Lake Geneva, Wisconsin, serving residential, commercial, and community properties throughout the region.",
        },
        {
            question: "What services do you offer?",
            answer:
                "Our services include septic tank pumping, system inspections, repairs, drain field maintenance, grease trap cleaning, and 24/7 emergency response.",
        },
        {
            question: "What is a septic system and how does it work?",
            answer:
                "A septic system is an underground wastewater treatment setup with a tank and drain field. It processes and disposes of household wastewater safely on-site.",
        },
        {
            question: "What are common signs my septic system needs service?",
            answer:
                "Watch for slow drains, sewage backups, foul odors, gurgling pipes, or soggy spots near the drain field. These are signs your system needs attention.",
        },
        {
            question: "Do you offer emergency septic services?",
            answer:
                "Yes, we offer 24/7 emergency services for septic backups, overflows, and urgent repairs. Our team responds promptly to protect your property.",
        },
        {
            question: "How quickly can you respond to emergencies?",
            answer:
                "In most cases, we respond within a few hours of your call, with a team on standby around the clock for emergency situations.",
        },
        {
            question: "Is there an extra cost for emergency services?",
            answer:
                "Yes. Emergency fees are $50 for same-day service, $75 for nights/weekends, and $150 on holidays to support after-hours availability.",
        },
        {
            question: "How much does septic pumping cost?",
            answer:
                "Pricing depends on tank size and access. Our pumping services are competitively priced and include clear, upfront estimates.",
        },
        {
            question: "How can I avoid emergency issues and extra fees?",
            answer:
                "Routine pumping, water conservation, and system inspections can help prevent problems and reduce the need for emergency service calls.",
        },
        {
            question: "How do I schedule a service?",
            answer:
                "You can call us directly or use the request form on our website. We’re available 24/7 to answer questions or dispatch a technician.",
        },
    ];

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <section className="w-full bg-[#F2F2F2] py-16 px-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="max-w-screen-xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#3F503B] mb-10">
                    <span className='border-black border-b'>FAQ's</span>
                </h2>

                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div
                        key={index}
                        className={`bg-white rounded-lg shadow-md text-left transition-all duration-500 border ${
                          open === index ? 'border-[#3F503B]' : 'border-transparent'
                        }`}
                      >
                      
                            <div
                                onClick={() => toggleAccordion(index)}
                                className="flex justify-between items-center p-4 cursor-pointer"
                            >
                                <h3 className="text-xl font-instrument text-black">{item.question}</h3>
                                <span className={`p-2 rounded-full transition-colors duration-300 ${open === index ? 'bg-[#3F503B] text-white' : 'bg-transparent'}`}>
                                    {open === index ? <FaChevronUp /> : <FaChevronDown className="text-[#3F503B]" />}
                                </span>
                            </div>

                            <div
                                ref={(el) => {
                                    contentRefs.current[index] = el;
                                }}
                                className=" overflow-hidden transition-all duration-500 px-6 pt-0 text-gray-700 text-left"
                                style={{
                                    maxHeight: open === index
                                        ? `${contentRefs.current[index]?.scrollHeight}px`
                                        : '0px',
                                    opacity: open === index ? 1 : 0,
                                    paddingBottom: open === index ? '6px' : '0px',
                                }}
                            >
                                <p className='pb-7'>{item.answer}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            {/* Contact prompt */}
            <div className="flex items-center justify-center bg-[#F2F2F2] mt-10 p-4">
                <div className="w-full max-w-7xl bg-white rounded-lg shadow-lg border p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-left">
                            <h2 className="font-instrument font-semibold text-gray-800 text-[24px] sm:text-[20px] md:text-[24px] lg:text-[28px]">
                                Didn't find your answer?
                            </h2>
                            <p className="font-instrument text-gray-600 text-[14px] sm:text-[16px] md:text-[14px] mt-1">
                                We are here to help!
                            </p>
                            <p className="text-black mt-2">
                                email us at{" "}
                                <Link href="mailto:info@evergreenseptics.com" className="font-instrument font-semibold text-[16px] text-[#3F503B] hover:underline">
                                    info@evergreenseptic.com
                                </Link>
                            </p>
                        </div>
                        <Link href='/contact-us'>
                            <Button className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2 rounded w-full md:w-auto text-sm md:text-base lg:text-lg"
                                style={{ fontFamily: "'Lorin', sans-serif", fontWeight: '500', fontSize: '14px' }}
                            >
                                CONTACT CUSTOMER CARE
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default FAQSection;