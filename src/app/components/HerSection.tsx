'use client';

import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaPhone } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast } from 'react-toastify'; // Removed ToastContainer import
import 'react-toastify/dist/ReactToastify.css';

export default function HerSection() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [service, setService] = useState('');
    const [bestTime, setBestTime] = useState('');
    const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    const validateForm = () => {
        const newErrors: { name?: string; phone?: string } = {};
        if (!name.trim()) newErrors.name = 'Name is required.';
        if (!phone.trim()) newErrors.phone = 'Phone number is required.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submit initiated');

        if (!validateForm()) {
            console.log('Validation failed:', errors);
            toast.error('Please fill all required fields!');
            return;
        }

        const formData = { name, phone, service, bestTime };
        console.log('Form data to send:', formData);
        setLoading(true);

        try {
            await fetch('https://script.google.com/a/macros/superior.edu.pk/s/AKfycbwPK-cGgI8fAWucdy9onAteY73NGAR8iaGdJ8dwMuCTyoOcY5Oa3eS3tH81MLc3joKY/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                mode: 'no-cors',
            });

            const response = await fetch(
                'https://script.google.com/macros/s/AKfycbxYADsssSqfkvwYd9oRjicCHMst-bePgLLNr4zY-avRd8uBmfaZwKFGWVQLDMY3UitWVw/exec',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                    mode: 'no-cors',
                }
            );

            console.log('Submission successful:', formData);
            console.log('Sent fields - name:', name, 'phone:', phone, 'service:', service, 'bestTime:', bestTime);
            toast.success('Request submitted successfully!');
            setName('');
            setPhone('');
            setService('');
            setBestTime('');
            setErrors({});
        } catch (error) {
            console.error('Submission error:', error);
            toast.error('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
            console.log('Submission completed');
        }
    };

    return (
        <div
            className="w-full min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-25 md:pb-20 md:pt-50"
            style={{ backgroundImage: "url('/assets/images/Home/HeroSection.png')" }}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
        >
            <div className="max-w-screen-xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Section */}
                <div className="text-white">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight whitespace-pre-line font-instrument">
                        Reliable & Professional{"\n"}Septic Services
                    </h1>
                    <p className="mt-4 text-[24px] font-instrument font-normal leading-[100%] tracking-[0%]">
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
                                    <span className="text-sm md:text-base font-instrument font-medium text-[18px] leading-[100%]">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col items-start gap-3">
                            <span className="text-white font-instrument font-semibold text-[24px] leading-[100%]">
                                Get a Free Quote!
                            </span>

                            <button className="flex items-center bg-[#3F503B] hover:bg-[#2f462f] text-white font-instrument font-semibold text-[24px] px-6 py-3 rounded-lg shadow-md">
                                <FaPhone className="text-[18px]" />
                                <span className="px-2">262-248-4711</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Section - Form */}
                <div className="bg-white p-6 md:p-10 rounded-xl shadow-xl w-full md:w-[90%] lg:w-[80%] xl:w-[70%]">
                    <h2 className="font-instrument font-semibold text-[#3F503B] mb-3 text-center leading-[45px] text-[30px] md:text-[36px]">Need Service? Let's Talk</h2>

                    <hr className="border-t-2 border-[#3F503B] mb-4" />

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        {/* Name Input */}
                        <div className="flex flex-col">
                            <label className="font-instrument font-medium mb-1 text-[17px] leading-[32px]">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                                className={`border rounded-md px-4 py-2 ${errors.name ? 'border-red-500' : 'border-gray-300'
                                    } focus:outline-none focus:ring-2 ${errors.name ? 'focus:ring-red-500' : 'focus:ring-[#3F503B]'}`}
                            />
                            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                        </div>

                        {/* Phone Input */}
                        <div className="flex flex-col">
                            <label className="font-instrument font-medium mb-1 text-[17px] leading-[32px]">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Enter your phone number"
                                className={`border rounded-md px-4 py-2 ${errors.phone ? 'border-red-500' : 'border-gray-300'
                                    } focus:outline-none focus:ring-2 ${errors.phone ? 'focus:ring-red-500' : 'focus:ring-[#3F503B]'}`}
                            />
                            {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
                        </div>

                        {/* Service Dropdown */}
                        <div className="flex flex-col">
                            <label className="font-instrument font-medium mb-1 text-[17px] leading-[32px]">
                                Type of Service
                            </label>
                            <select
                                value={service}
                                onChange={(e) => setService(e.target.value)}
                                className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3F503B]"
                            >
                                <option value="">Select a service</option>
                                <option value="Pumping">Septic Pumping</option>
                                <option value="Inspection">Inspection</option>
                                <option value="Repair">Repair</option>
                                <option value="Installation">Installation</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {/* Best Time Radio Buttons */}
                        <div className="flex flex-col">
                            <label className="font-instrument font-medium mb-1 text-[17px] leading-[32px]">
                                Best Time for Call
                            </label>
                            <div className="flex flex-wrap gap-3 md:flex-row flex-col">
                                {["Morning", "Afternoon", "Evening"].map((time) => (
                                    <label key={time} className="flex items-center gap-2 text-sm text-gray-700">
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

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full bg-[#3F503B] text-white font-roboto font-normal text-[17px] leading-[24px] px-6 py-3 rounded-md mt-2 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#2f462f]'
                                }`}
                        >
                            {loading ? 'Submitting...' : 'Request a Call'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}