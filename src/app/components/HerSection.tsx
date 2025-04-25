'use client';

import React, { useEffect, useState } from 'react'
import { FaCheckCircle, FaPhone } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HerSection() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [service, setService] = useState('');
    const [bestTime, setBestTime] = useState('');


    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = {
            name,
            phone,
            service,
            bestTime,
        };

        try {
            await fetch('https://script.google.com/macros/s/AKfycbxYADsssSqfkvwYd9oRjicCHMst-bePgLLNr4zY-avRd8uBmfaZwKFGWVQLDMY3UitWVw/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            alert('Request submitted successfully!');
            setName('');
            setPhone('');
            setService('');
            setBestTime('');
        }

        catch (error) {
            alert('Something went wrong!');
            console.error(error);
        }
    };



    return (
        <>
            <div className="w-full min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-25 md:pb-20 md:pt-50"
                style={{ backgroundImage: "url('/assets/images/Home/HeroSection.png')" }} data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
            >
                <div className="max-w-screen-xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="text-white">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight whitespace-pre-line font-instrument">
                            Reliable & Professional{"\n"}Septic Services
                        </h1>
                        <p className="mt-4 text-[24px] md:text-[24px] font-instrument font-normal leading-[100%] tracking-[0%]">
                            Fast, Affordable & Trusted Septic Pumping,{" "}
                            <span className="font-bold">
                                Inspections & Repairs in Walworth County
                            </span>.
                        </p>


                        <div className="text-white">
                            <div className="flex flex-wrap gap-4 my-6">
                                {["Licensed & Insured", "Trusted & Reliable", "Fast Response Time"].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 bg-white text-white px-3 py-2 rounded-lg shadow-md w-full md:w-auto"
                                        style={{ backgroundColor: "#3F503B66" }}
                                    >
                                        <FaCheckCircle className="text-[#A4D4AE] text-lg" />
                                        <span className="text-sm md:text-base font-instrument font-medium text-[18px] leading-[100%] md:text-[16px]">{item}</span>
                                    </div>
                                ))}
                            </div>


                            <div className="flex flex-col items-start gap-3">
                                <span className="text-white font-instrument font-semibold text-[24px] leading-[100%] tracking-[0%]">
                                    Get a Free Quote!
                                </span>


                                <button className="flex items-center bg-[#3F503B] hover:bg-[#2f462f] text-white font-instrument font-semibold text-[24px] leading-[100%] tracking-[0%] px-6 py-3 rounded-lg shadow-md">
                                    <FaPhone className="text-[18px]" />
                                    <span className="px-2">262-248-4711</span>
                                </button>

                            </div>


                        </div>
                    </div>

                    <div className="bg-white p-6 md:p-10 rounded-xl shadow-xl w-full md:w-[90%] lg:w-[80%] xl:w-[70%]">
                        <h2 className="font-instrument font-semibold text-[#3F503B] mb-3 whitespace-pre-line text-center leading-[45px] tracking-[0%] text-[30px] md:text-[36px] sm:text-[24px]">
                            Schedule a Call for Your Needs!
                        </h2>

                        <hr className="border-t-2 border-[#3F503B] mb-4" />

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <label className="font-instrument font-medium mb-1 text-[17px] leading-[32px] tracking-[0%]">
                                    Full Name <span className="text-red-500">*</span>
                                </label>

                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter your name"
                                    className="border border-gray-300 rounded-md px-4 py-2"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="font-instrument font-medium mb-1 text-[17px] leading-[32px] tracking-[0%]">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Enter your phone number"
                                    className="border border-gray-300 rounded-md px-4 py-2"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="font-instrument font-medium mb-1 text-[17px] leading-[32px] tracking-[0%]">
                                    Type of Service <span className="text-red-500">*</span>
                                </label>

                                <select
                                    value={service}
                                    onChange={(e) => setService(e.target.value)}
                                    className="border border-gray-300 rounded-md px-4 py-2 text-gray-700"
                                >
                                    <option value="">Select a service</option>
                                    <option value="Pumping">Septic Pumping</option>
                                    <option value="Inspection">Inspection</option>
                                    <option value="Repair">Repair</option>
                                    <option value="Installation">Installation</option>
                                </select>
                            </div>

                            <div className="flex flex-col">
                                <label className="font-instrument font-medium mb-1 text-[17px] leading-[32px] tracking-[0%]">
                                    Best Time for Call
                                    <span className="text-red-500">*</span>
                                </label>
                                <div className="flex flex-wrap gap-3 md:flex-row flex-col">
                                    {["Morning", "Afternoon", "Evening"].map((time) => (
                                        <label key={time} className="flex items-center gap-2 text-sm text-gray-700 mb-4 md:mb-0">
                                            <input
                                                type="radio"
                                                name="bestTime"
                                                value={time}
                                                checked={bestTime === time}
                                                onChange={() => setBestTime(time)}
                                                className="accent-[#3F503B]"
                                            />
                                            <span>{time}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#3F503B] hover:bg-[#2f462f] text-white font-roboto font-normal text-[17px] leading-[24px] tracking-[0%] px-6 py-3 rounded-md mt-2"
                            >
                                Request a Call
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </>
    );
}
