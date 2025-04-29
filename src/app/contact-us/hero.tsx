'use client';

import React, { useEffect, useState } from 'react';
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link"
import { Metadata } from 'next';
import { toast } from 'react-toastify';


export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Get in touch with Evergreen Septic Service LLC for septic pumping and inspection inquiries in the foothills.",
    keywords: [
        "Contact Evergreen Septic",
        "Septic service inquiries",
        "Foothills septic contact",
        "Evergreen Septic support",
    ],
    openGraph: {
        title: "Contact Us | Evergreen Septic Service LLC",
        description:
            "Contact Evergreen Septic Service LLC for septic pumping and inspection inquiries.",
        url: "https://www.evergreensepticsvc.com/contact",
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
        title: "Contact Us | Evergreen Septic Service LLC",
        description:
            "Contact Evergreen Septic Service LLC for septic pumping and inspection inquiries.",
        images: ["https://www.evergreensepticsvc.com/assets/images/HeroSection.png"],
    },
};

export default function Hero() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');



    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = {
            name,
            email,
            subject,
            message,
        };

        try {
            await fetch('https://script.google.com/macros/s/AKfycbxYADsssSqfkvwYd9oRjicCHMst-bePgLLNr4zY-avRd8uBmfaZwKFGWVQLDMY3UitWVw/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                mode: 'no-cors',
            });

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    access_key: '5393f9e5-8577-4a6e-a7a2-0e3f100ca8fc',
                }),
            });

            const result = await response.json();

            toast.success('Data submitted successfully!');


            setName('');
            setEmail('');
            setSubject('');
            setMessage('');

        } catch (error) {
            console.error(error);
            toast.error('Something went wrong.');
        }
    };


    return (
        <>


            <section className="py-16 bg-white relative overflow-hidden" data-aos="fade-up">
                <img
                    src="/assets/images/Union.png"
                    alt="Background Graphic"
                    className="absolute top-0 left-0 w-40 h-auto object-contain z-0"
                />

                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 relative z-10">
                    <div className="bg-[#F7FAFF] border border-[#E5EAF1] rounded-lg p-6 shadow-sm">
                        <div className="mb-4 text-[#3F503B] text-3xl">
                            <HiOutlineLocationMarker />
                        </div>
                        <h4 className="font-normal text-2xl sm:text-3xl md:text-[32px] font-gilroy-semibold mb-1">
                            Head Office
                        </h4>
                        <p className="font-instrument font-medium text-base sm:text-lg md:text-[22px] text-gray-600">
                            Lake Geneva, Wisconsin.,
                        </p>
                    </div>

                    <div className="bg-[#F7FAFF] border border-[#E5EAF1] rounded-lg p-6 shadow-sm">
                        <div className="mb-4 text-[#3F503B] text-3xl">
                            <FiPhone />
                        </div>
                        <h4 className="font-normal text-2xl sm:text-3xl md:text-[32px] font-gilroy-semibold mb-1">
                            Phones
                        </h4>
                        <p className="text-sm text-gray-600"></p>
                        <p className="font-instrument font-medium text-base sm:text-lg md:text-[22px] text-gray-600">
                            +1 262-248-4711
                        </p>

                    </div>

                    <div className="bg-[#F7FAFF] border border-[#E5EAF1] rounded-lg p-6 shadow-sm">
                        <div className="mb-4 text-[#3F503B] text-3xl">
                            <HiOutlineMail />
                        </div>
                        <h4 className="font-normal text-2xl sm:text-3xl md:text-[32px] font-gilroy-semibold mb-1">
                            Head Office
                        </h4>
                        <p className="font-instrument font-medium text-base sm:text-lg md:text-[22px] text-gray-600">
                            info@evergreenseptic.com
                        </p>

                    </div>
                </div>
            </section>

            <section className='pt-13 mt-13' data-aos="fade-up">
                <div className="md:w-1/2">
                    <div className="text-black mb-4 px-9">
                        <p className="font-instrument font-semibold text-base sm:text-lg md:text-[20px] leading-tight text-[#3F503B] mb-2 md:relative md:top-0 relative top-[-10em]">
                            GET IN TOUCH
                        </p>

                        <h2 className="font-gilroy-medium font-normal text-2xl sm:text-4xl md:text-[54px] leading-tight md:relative md:top-0 relative top-[-4em]">
                            Quality & Passion With Contact Form
                        </h2>
                    </div>

                </div>

                <div className="relative h-[500px] w-full mt-10">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18..."
                        className="absolute inset-0 w-full h-full border-0"
                        loading="lazy"
                    ></iframe>

                    <div className="absolute inset-0 bg-black opacity-30 z-[5]"></div>

                    <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-center md:justify-end">

                        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-xl relative -top-[180px]">
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block text-sm mb-1 font-medium">Full Name</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full border border-gray-300 rounded-md p-2 bg-[#EDF7E8]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm mb-1 font-medium">Your E-mail</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full border border-gray-300 rounded-md p-2 bg-[#EDF7E8]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm mb-1 font-medium">Subject</label>
                                    <input
                                        type="text"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        className="w-full border border-gray-300 rounded-md p-2 bg-[#EDF7E8]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm mb-1 font-medium">Your Message</label>
                                    <textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full border border-gray-300 rounded-md p-2 bg-[#EDF7E8]"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-[#3F503B] text-white py-2 px-6 rounded-md mt-2"
                                >
                                    Send Now
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            <section className="relative w-full overflow-hidden h-[500px]" data-aos="fade-up">
                <img
                    src="/assets/images/ContactUs/bgImage.png"
                    alt="Background Image"
                    className="w-full h-full object-cover"
                />
                <img
                    src="/assets/images/ContactUs/WhiteBg.png"
                    alt="Mask Overlay"
                    className="w-[50%] h-[161%] object-cover absolute top-15 left-0 z-10"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-center md:ml-10 text-white z-20 px-4 md:px-0 py-20 w-full">
                    <h1 className="font-instrumenttext-3xl md:text-6xl font-bold uppercase tracking-wide text-center md:text-left">Live Clean and Worry-Free</h1>

                    <p className=" font-instrument text-base md:text-xl mt-4 max-w-lg text-center md:text-left">
                        Experience peace of mind with our professional services. Your satisfaction is our priority, ensuring a cleaner, safer home for you and your family.
                    </p>

                    <div className="w-full mt-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                            <div className="flex justify-center md:justify-start">
                                <Link href='/contact-us'>
                                    <Button className="bg-red-500 cursor-pointer hover:bg-red-600 text-white px-4 py-2 rounded-md flex items-center">
                                        <Rocket className="mr-2 h-5 w-5 font-instrument" />GET A FREE QUOTE
                                    </Button>
                                </Link>
                            </div>

                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <img src="/assets/images/Person.png" className="w-10 h-10 rounded-full" alt="Sophia Moore" />
                                <div className="flex flex-col justify-start">
                                    <p className="font-semibold text-sm text-white group-hover:text-[#3F503B]">Sophia Moore</p>
                                    <p className="text-xs text-gray-300 font-instrument">Home Owner New Orleans</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <p className="text-2xl md:text-4xl text-white font-semibold font-instrument">+1 262-248-4711</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#4CAF50] py-16 px-4" data-aos="fade-up">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="md:w-1/2 text-white text-center md:text-left">
                        <h2 className="text-3xl sm:text-4xl mb-2 font-instrument">Subscribe Our Newsletter</h2>
                        <p className="text-sm sm:text-base font-instrument">
                            Stay in touch with us to get latest news. Maximus mattis est facilisi. In sed pretium Proin pretium id urna sit amet tincidunt.
                        </p>
                    </div>

                    <div className="md:w-1/2 w-full">
                        <form className="flex flex-col sm:flex-row w-full max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="your mail address here"
                                className="flex-1 p-3 border border-white focus:outline-none placeholder-white text-white bg-transparent mb-4 sm:mb-0 sm:mr-2"
                            />
                            <button
                                type="submit"
                                className="bg-white text-[#3F503B] font-semibold px-6 py-3 rounded-md border border-white hover:bg-gray-100 transition w-full sm:w-auto"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}