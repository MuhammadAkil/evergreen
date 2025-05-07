'use client';

import React, { useEffect } from 'react';
import { MdAccessTime } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Hero() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <>
            {/* <section className="py-16 bg-white relative overflow-hidden" data-aos="fade-right">
                <img
                    src="/assets/images/Union.png"
                    alt="Background Graphic"
                    className="absolute top-0 right-0 w-50 h-50 object-contain z-0"
                />
                <div className="flex flex-col items-center justify-center ml-10 text-black text-center z-20">
                    <p className="text-sm mt-2 text-[#3F503B]">TESTIMONIALS</p>
                    <h1 className="text-5xl uppercase tracking-wide">What Our Clients Say</h1>
                </div>
            </section>

            <section className="pt-10 bg-white" data-aos="fade-right">
                <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-6">
                    <div className="rounded-lg overflow-hidden border shadow-sm">
                        <div className="relative">
                            <img
                                src="/assets/images/Testominal/card1T.png"
                                alt="Septic Service"
                                className="w-full h-56 object-cover rounded-t-lg"
                            />
                        </div>
                        <div className="p-4 text-center">
                            <h3 className="font-[700] text-[22px] text-[#3F503B] mb-2 font-instrument font-medium md:text-[20px] sm:text-[18px] xs:text-[16px]">
                                The Best Septic Services
                            </h3>
                            <p className="font-instrument font-[400] text-[18px] leading-[30px] text-[#696969] mb-4 md:text-[16px] sm:text-[14px] xs:text-[13px]">
                                "I highly recommend this company. Jon and his crew provided outstanding service when they came out to help my parents with their septic tank. They were very honest and open to work with! Thank you for your help!!"
                            </p>
                            <div className="flex flex-col items-center">
                                <img
                                    src="https://randomuser.me/api/portraits/women/65.jpg"
                                    alt="Giovanni C"
                                    className="w-10 h-10 rounded-full mb-2"
                                />
                                <p className="font-semibold text-sm text-[#3F503B]">Giovanni C</p>
                                <p className="text-xs text-gray-500">Brooklyns NY</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg overflow-hidden border shadow-sm">
                        <div className="relative">
                            <img
                                src="/assets/images/Testominal/card2T.png"
                                alt="Septic Service"
                                className="w-full h-56 object-cover rounded-t-lg"
                            />
                        </div>
                        <div className="p-4 text-center">
                            <h3 className="font-[700] text-[22px] text-[#3F503B] mb-2 font-instrument font-medium md:text-[20px] sm:text-[18px] xs:text-[16px]">
                                Outstanding Experience
                            </h3>
                            <p className="font-instrument font-[400] text-[18px] leading-[30px] text-[#696969] mb-4 md:text-[16px] sm:text-[14px] xs:text-[13px]">
                                "I highly recommend this company. Jon and his crew provided outstanding service when they came out to help my parents with their septic tank. They were very honest and open to work with! Thank you for your help!!"
                            </p>
                            <div className="flex flex-col items-center">
                                <img
                                    src="https://randomuser.me/api/portraits/men/45.jpg"
                                    alt="Daniel W"
                                    className="w-10 h-10 rounded-full mb-2"
                                />
                                <p className="font-semibold text-sm text-[#3F503B]">Daniel W</p>
                                <p className="text-xs text-gray-500">Madison WI</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-white" data-aos="fade-right">
                <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-6">
                    <div className="rounded-lg overflow-hidden border shadow-sm">
                        <div className="relative">
                            <img
                                src="/assets/images/Testominal/card3T.png"
                                alt="Septic Service"
                                className="w-full h-56 object-cover rounded-t-lg"
                            />
                        </div>
                        <div className="p-4 text-center">
                            <h3 className="font-[700] text-[22px] text-[#3F503B] mb-2 font-instrument font-medium md:text-[20px] sm:text-[18px] xs:text-[16px]">
                                The Best Septic Services
                            </h3>
                            <p className="font-instrument font-[400] text-[18px] leading-[30px] text-[#696969] mb-4 md:text-[16px] sm:text-[14px] xs:text-[13px]">
                                "I highly recommend this company. Jon and his crew provided outstanding service when they came out to help my parents with their septic tank. They were very honest and open to work with! Thank you for your help!!"
                            </p>
                            <div className="flex flex-col items-center">
                                <img
                                    src="https://randomuser.me/api/portraits/women/65.jpg"
                                    alt="Giovanni C"
                                    className="w-10 h-10 rounded-full mb-2"
                                />
                                <p className="font-semibold text-sm text-[#3F503B]">Giovanni C</p>
                                <p className="text-xs text-gray-500">Brooklyns NY</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg overflow-hidden border shadow-sm">
                        <div className="relative">
                            <img
                                src="/assets/images/Testominal/card4T.png"
                                alt="Septic Service"
                                className="w-full h-56 object-cover rounded-t-lg"
                            />
                        </div>
                        <div className="p-4 text-center">
                            <h3 className="font-[700] text-[22px] text-[#3F503B] mb-2 font-instrument font-medium md:text-[20px] sm:text-[18px] xs:text-[16px]">
                                Outstanding Experience
                            </h3>
                            <p className="font-instrument font-[400] text-[18px] leading-[30px] text-[#696969] mb-4 md:text-[16px] sm:text-[14px] xs:text-[13px]">
                                "I highly recommend this company. Jon and his crew provided outstanding service when they came out to help my parents with their septic tank. They were very honest and open to work with! Thank you for your help!!"
                            </p>
                            <div className="flex flex-col items-center">
                                <img
                                    src="https://randomuser.me/api/portraits/men/45.jpg"
                                    alt="Daniel W"
                                    className="w-10 h-10 rounded-full mb-2"
                                />
                                <p className="font-semibold text-sm text-[#3F503B]">Daniel W</p>
                                <p className="text-xs text-gray-500">Madison WI</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
*/}
            <section data-aos="fade-up" className='pt-10'>
                <div className="relative w-full bg-[#3F503B] py-10">
                    <div className="relative mx-auto max-w-4xl -mt-16 px-4">
                        <div className="bg-white rounded-lg shadow-[0_-20px_22px_rgba(0,0,0,0.1)] p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
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
                        <img src="/assets/images/image 8.png" alt="Project 2" className="w-full md:w-[80%] h-auto md:h-[80%] object-cover ml-auto" />
                        <img src="/assets/images/Group.png" alt="Project 1" className="w-full h-auto md:h-[80%] object-cover mx-auto" />
                        <img src="/assets/images/Group (1).png" alt="Project 3" className="w-full md:w-[80%] h-auto md:h-[80%] object-cover mr-auto" />
                    </div>

                    <div className="px-4 mt-4 flex justify-center md:justify-start md:pl-[200px] lg:pl-[481px] md:-mt-[100px] lg:-mt-[172px]">
                        <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-lg inline-block text-green-600 max-w-md w-full text-center md:text-left">
                            <h3 className="text-lg font-bold">20,000 Gallons Septic System</h3>
                            <p className="text-sm">Evergreen Septic Service LLC's "20,000 Gallons Septic System" is a big, dependable septic setup for homes or businesses. It includes tanks, drain fields, and pipes, all installed with care to work well and be eco-friendly.</p>
                        </div>
                    </div>
                </div>
            </section> 

            <section className="bg-white py-16" data-aos="zoom-in-up">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-3xl mb-4">Why Choose Us</h2>
                        <p className="text-gray-600 mb-4 text-cxl">
                            At Evergreen Septics, we take pride in offering reliable, efficient, and environmentally responsible septic solutions. Our commitment to quality and customer satisfaction sets us apart. Here’s why homeowners and businesses trust us:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-8 text-sm text-center">
                            <div className="flex items-center">
                                <div className="bg-[#E8F3E6] p-2 rounded-l-md shadow-md">
                                    <MdAccessTime className="text-[#3F503B] text-lg" />
                                </div>
                                <div className="bg-[#5D7757] text-white text-sm px-4 py-2 rounded-r-md shadow w-full text-left h-[33px]">
                                    Eco-Friendly Solutions
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="bg-[#E8F3E6] p-2 rounded-l-md shadow-md">
                                    <MdAccessTime className="text-[#3F503B] text-lg" />
                                </div>
                                <div className="bg-[#5D7757] text-white text-sm px-4 py-2 rounded-r-md shadow w-full text-left h-[33px]">
                                    Affordable Pricing
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="bg-[#E8F3E6] p-2 rounded-l-md shadow-md">
                                    <MdAccessTime className="text-[#3F503B] text-lg" />
                                </div>
                                <div className="bg-[#5D7757] text-white text-sm px-4 py-2 rounded-r-md shadow w-full text-left h-[33px]">
                                    Advanced Technology
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="bg-[#E8F3E6] p-2 rounded-l-md shadow-md">
                                    <MdAccessTime className="text-[#3F503B] text-lg" />
                                </div>
                                <div className="bg-[#5D7757] text-white text-sm px-4 py-2 rounded-r-md shadow w-full text-left">
                                    Customer Satisfaction
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="/assets/images/About/AboutUSImage.png" alt="Team working" className="rounded-lg" />
                </div>
            </section>
        </>
    );
}