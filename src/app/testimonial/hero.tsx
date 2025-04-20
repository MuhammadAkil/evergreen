import React from 'react';
import { MdAccessTime } from "react-icons/md";

export default function Hero() {
    return (
        <>
            <div className="relative w-full h-[400px] overflow-hidden">
                <img
                    src="/assets/PNG/Rectangle 30139.png"
                    alt="Background Image"
                    className="w-full h-full object-cover"
                />
                <img
                    src="/assets/PNG/Mask group.png"
                    alt="Mask Overlay"
                    className="w-[50%] h-[161%] object-cover absolute top-4 left-0 z-10"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-center ml-10 text-white text-center z-20">
                    <h1 className="text-6xl font-bold uppercase tracking-wide">TESTIMONIAL</h1>
                    <p className="text-sm mt-2">Reliable, Professional, and Environmentally Responsible Septic Solutions</p>
                </div>
            </div>

            <section className="py-16 bg-white relative overflow-hidden">
                <img
                    src="/assets/PNG/Union.png"
                    alt="Background Graphic"
                    className="absolute top-0 right-0 w-50 h-50 object-contain z-0"
                />

                <div className="flex flex-col items-center justify-center ml-10 text-black text-center z-20">
                    <p className="text-sm mt-2 text-[#3F503B">TESTIMONIALS</p>
                    <h1 className="text-5xl uppercase tracking-wide">What Our Clients Say</h1>
                </div>
            </section>

            <section className="pt-10 bg-white">
                <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-6">

                    <div className="rounded-lg overflow-hidden border shadow-sm">
                        <div className="relative">
                            <img
                                src="/assets/PNG/card1T.png"
                                alt="Septic Service"
                                className="w-full h-56 object-cover rounded-t-lg"
                            />
                            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                                <button className="bg-[#4CAF50] text-white px-4 py-2 rounded-md shadow-md">
                                    View More Photos
                                </button>
                            </div>
                        </div>
                        <div className="p-4 text-center">
                            <h3 className="text-base font-semibold text-[#3F503B] mb-2">The Best Septic Services</h3>
                            <p className="text-[#696969] text-sm mb-4">
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
                                src="/assets/PNG/card2T.png"
                                alt="Septic Service"
                                className="w-full h-56 object-cover rounded-t-lg"
                            />
                            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                                <button className="bg-[#4CAF50] text-white px-4 py-2 rounded-md shadow-md">
                                    View More Photos
                                </button>
                            </div>
                        </div>
                        <div className="p-4 text-center">
                            <h3 className="text-base font-semibold text-[#3F503B] mb-2">Outstanding Experience</h3>
                            <p className="text-[#696969] text-sm mb-4">
                                "Amazing service! Very friendly and knowledgeable team. They cleaned our tank quickly and explained everything clearly. Highly satisfied!"
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

            <section className="py-10 bg-white">
                <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-6">

                    <div className="rounded-lg overflow-hidden border shadow-sm">
                        <div className="relative">
                            <img
                                src="/assets/PNG/card3T.png"
                                alt="Septic Service"
                                className="w-full h-56 object-cover rounded-t-lg"
                            />
                            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                                <button className="bg-[#4CAF50] text-white px-4 py-2 rounded-md shadow-md">
                                    View More Photos
                                </button>
                            </div>
                        </div>
                        <div className="p-4 text-center">
                            <h3 className="text-base font-semibold text-[#3F503B] mb-2">The Best Septic Services</h3>
                            <p className="text-[#696969] text-sm mb-4">
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
                                src="/assets/PNG/card4T.png"
                                alt="Septic Service"
                                className="w-full h-56 object-cover rounded-t-lg"
                            />
                            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                                <button className="bg-[#4CAF50] text-white px-4 py-2 rounded-md shadow-md">
                                    View More Photos
                                </button>
                            </div>
                        </div>
                        <div className="p-4 text-center">
                            <h3 className="text-base font-semibold text-[#3F503B] mb-2">Outstanding Experience</h3>
                            <p className="text-[#696969] text-sm mb-4">
                                "Amazing service! Very friendly and knowledgeable team. They cleaned our tank quickly and explained everything clearly. Highly satisfied!"
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

                <div className="flex justify-center items-center my-10">
                    <div className="flex items-center">
                        <button className="bg-[#3F503B] text-white px-4 py-2 rounded-md shadow-md">
                            View More Photos
                        </button>
                    </div>
                </div>

            </section>

            <section>
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
                <div className="relative w-full bg-[#3F503B] py-10 text-white">
                    <div className="max-w-2xl mx-auto px-4 text-center">
                        <h2 className="text-4xl my-2">Project Completed</h2>
                        <p className="text-sm mb-8">
                            We have successfully completed numerous septic projects, ensuring reliable and efficient systems for homeowners and businesses. Our team works with precision and dedication, delivering top-quality results that meet industry standards. Customer satisfaction and environmental responsibility remain our top priorities.
                        </p>
                    </div>
                </div>

                <div className="relative w-full bg-[#3F503B] pb-10">
                    <div className="px-4 grid grid-cols-3 gap-4">
                        <img src="/assets/PNG/image 8.png" alt="Project 2" className="w-[80%] h-[80%] object-cover ml-auto" />
                        <img src="/assets/PNG/Group.png" alt="Project 1" className="w-full h-[80%] object-cover mx-auto" />
                        <img src="/assets/PNG/Group (1).png" alt="Project 3" className="w-[80%] h-[80%] object-cover mr-auto" />
                    </div>
                    <div className="pl-[462px] mt-[-172px] px-4 mt-4">
                        <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-lg inline-block text-green-600">
                            <h3 className="text-lg font-bold">20,000 Gallons Septic System</h3>
                            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonum-</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-16">

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

                    <img src="/assets/PNG/AboutUSImage.png" alt="Team working" className="rounded-lg" />
                </div>


            </section>


        </>
    );
}