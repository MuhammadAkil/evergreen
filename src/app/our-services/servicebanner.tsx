'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ServiceBanner() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <section data-aos="fade-up">
            <div className="relative w-full bg-[#3F503B] py-10">
                <div className="relative mx-auto max-w-4xl -mt-16 px-4">
                    <div className="bg-white rounded-lg shadow-[0_-20px_22px_rgba(0,0,0,0.1)] p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="flex flex-col">
                            <span className="text-3xl md:text-4xl font-bold text-gray-800">3400+</span>
                            <span className="text-sm text-gray-500 mt-1">Complete Projects</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl md:text-4xl font-bold text-gray-800">6,820</span>
                            <span className="text-sm text-gray-500 mt-1">Happy Clients</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl md:text-4xl font-bold text-gray-800">270+</span>
                            <span className="text-sm text-gray-500 mt-1">Dealer Equipments</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl md:text-4xl font-bold text-gray-800">15+</span>
                            <span className="text-sm text-gray-500 mt-1">Years of Experience</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-full bg-[#3F503B] py-10 text-white" data-aos="fade-up">
                <div className="max-w-2xl mx-auto px-4 text-center">
                    <h2 className="text-4xl my-2">Project Completed</h2>
                    <p className="text-sm mb-8">
                        We have successfully completed numerous septic projects, ensuring reliable and efficient systems for homeowners and businesses. Our team works with precision and dedication, delivering top-quality results that meet industry standards. Customer satisfaction and environmental responsibility remain our top priorities.
                    </p>
                </div>
            </div>
            <div className="relative w-full bg-[#3F503B] pb-10">
                <div className="px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <img
                        src="/assets/images/image 8.png"
                        alt="Project 2"
                        className="w-full md:w-[80%] h-auto md:h-[80%] object-cover ml-auto"
                    />
                    <img
                        src="/assets/images/Group.png"
                        alt="Project 1"
                        className="w-full h-auto md:h-[80%] object-cover mx-auto"
                    />
                    <img
                        src="/assets/images/Group (1).png"
                        alt="Project 3"
                        className="w-full md:w-[80%] h-auto md:h-[80%] object-cover mr-auto"
                    />
                </div>
                <div
                    className="px-4 mt-4 md:pl-[481px] md:-mt-[172px] flex justify-center md:justify-start"
                >
                    <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-lg inline-block text-green-600 max-w-md w-full text-center md:text-left">
                        <h3 className="text-lg font-bold">20,000 Gallons Septic System</h3>
                        <p className="text-sm">Evergreen Septic Service LLC's "20,000 Gallons Septic System" is a big, dependable septic setup for homes or businesses. It includes tanks, drain fields, and pipes, all installed with care to work well and be eco-friendly.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}