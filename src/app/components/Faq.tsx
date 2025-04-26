import React, { useState, useEffect } from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';


const FAQSection = () => {
    const [open, setOpen] = useState(null);

    const toggleAccordion = (index: any) => {
        setOpen(open === index ? null : index);
    };

    const faqData = [
        {
            question: "What is the full form of FAQ?",
            answer: "FAQ stands for Frequently Asked Questions.",
        },
        {
            question: "How do I use the service?",
            answer: "You can use our service by following the easy steps provided on the website.",
        },
        {
            question: "Is the service available 24/7?",
            answer: "Yes, our service is available 24/7.",
        },
        {
            question: "How can I contact customer support?",
            answer: "You can contact customer support via the contact form on our website or by phone.",
        },
    ];

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);


    return (
        <>
            <section className="w-full bg-[#F2F2F2] py-16 px-4" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                <div className="max-w-screen-xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#3F503B] mb-6">FAQ</h2>

                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md text-left">
                                <div
                                    onClick={() => toggleAccordion(index)}
                                    className="flex justify-between items-center p-6 cursor-pointer"
                                >
                                    <h3 className="text-xl font-instrument text-black">{item.question}</h3>
                                    <span className={`p-2 rounded-full transition-colors duration-300 ${open === index ? 'bg-[#3F503B] text-white' : 'bg-transparent'}`}>
                                        {open === index ? (
                                            <FaChevronUp />
                                        ) : (
                                            <FaChevronDown className="text-[#3F503B]" />
                                        )}
                                    </span>
                                </div>

                                {open === index && (
                                    <div className="p-6 pt-0 text-gray-700 text-left">
                                        <p>{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className=" flex items-center justify-center  bg-[#F2F2F2]  p-4">
                    <div className="w-full max-w-7xl bg-white rounded-lg shadow-sm p-6 md:p-8">
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
                                    <Link
                                        href="mailto:info@evergreenseptics.com"
                                        className="font-instrument font-semibold text-[16px] text-[#3F503B] hover:underline"
                                    >
                                        info@evergreenseptics.com
                                    </Link>
                                </p>

                            </div>
                            <Link href='/contact-us'>
                                <Button
                                    className="bg-red-500 cursor-pointer hover:bg-red-600 text-white font-medium px-6 py-2 rounded w-full md:w-auto text-sm md:text-base lg:text-lg"
                                    style={{
                                        fontFamily: "'Lorin', sans-serif",
                                        fontWeight: '500',
                                        fontSize: '14px',
                                    }}
                                >
                                    CONTACT CUSTOMER CARE
                                </Button>


                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );


}

export default FAQSection;