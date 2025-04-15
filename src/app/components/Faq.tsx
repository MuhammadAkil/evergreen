import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

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


    return (
        <>
            <section className="w-full bg-[#F2F2F2] py-16 px-4">
                <div className="max-w-screen-xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#3F503B] mb-6">FAQ</h2>

                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md text-left">
                                <div
                                    onClick={() => toggleAccordion(index)}
                                    className="flex justify-between items-center p-6 cursor-pointer"
                                >
                                    <h3 className="text-xl  text-[#3F503B]">{item.question}</h3>
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
            </section>
        </>
    );


}

export default FAQSection;