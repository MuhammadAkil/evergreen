import React, { useEffect } from 'react';
import { MdAccessTime } from "react-icons/md";
import { FaPumpSoap, FaTools, FaSearch, FaHardHat, FaLeaf, FaBell } from 'react-icons/fa';
import { Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link"

export default function Hero() {

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);


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
                <div className="absolute inset-0 flex flex-col items-start justify-center ml-4 md:ml-10 text-white z-20 pt-0 lg:pt-10 xl:pt-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide leading-tight">
                        ABOUT US
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base mt-2 max-w-xs sm:max-w-md">
                        Reliable, Professional, and Environmentally Responsible Septic Solutions
                    </p>
                </div>
            </div>

            <section className="bg-white py-12" data-aos="zoom-in">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-stretch">
                        <div className="w-full md:w-2/3 flex flex-col">
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold mb-4">Keeping Systems Flowing Your Septic Needs, Our Expertise</h1>
                            </div>
                            <img src="/assets/PNG/thirdsectionleftimage.png" alt="Worker with pipe" className="rounded-lg h-[300px] object-cover w-full" />
                        </div>
                        <div className="w-full md:w-1/3 flex items-end">
                            <img src="/assets/PNG/thirdsectionrightimage.png" alt="Worker inspecting tank" className="rounded-lg h-[300px] object-cover w-full" />
                        </div>
                    </div>
                    <p className="mt-6 text-lg text-gray-600  mx-auto">
                        At Evergreen Septics, we take pride in delivering top-notch septic system services with reliability, efficiency, and environmental responsibility. With years of experience in the industry, we have built a reputation for providing exceptional septic solutions tailored to the needs of homeowners, businesses, and communities.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8 text-sm text-center">
                        <div className="flex items-center">
                            <div className="bg-[#4CAF50] p-2 rounded-l-md shadow-md">
                                <MdAccessTime className="text-[#3F503B] text-lg" />
                            </div>
                            <div className="bg-[#E7F2E5] text-dark text-sm px-4 py-2 rounded-r-md shadow w-full text-left h-[33px]">
                                Eco-Friendly Solutions
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-[#4CAF50] p-2 rounded-l-md shadow-md">
                                <MdAccessTime className="text-[#3F503B] text-lg" />
                            </div>
                            <div className="bg-[#E7F2E5] text-dark text-sm px-4 py-2 rounded-r-md shadow w-full text-left h-[33px]">
                                Affordable Pricing
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-[#4CAF50] p-2 rounded-l-md shadow-md">
                                <MdAccessTime className="text-[#3F503B] text-lg" />
                            </div>
                            <div className="bg-[#E7F2E5] text-dark text-sm px-4 py-2 rounded-r-md shadow w-full text-left h-[33px]">
                                Reliable Service
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-[#4CAF50] p-2 rounded-l-md shadow-md">
                                <MdAccessTime className="text-[#3F503B] text-lg" />
                            </div>
                            <div className="bg-[#E7F2E5] text-dark text-sm px-4 py-2 rounded-r-md shadow w-full text-left h-[33px]">
                                Expert Team
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-[#4CAF50] p-2 rounded-l-md shadow-md">
                                <MdAccessTime className="text-[#3F503B] text-lg" />
                            </div>
                            <div className="bg-[#E7F2E5] text-dark text-sm px-4 py-2 rounded-r-md shadow w-full text-left h-[33px]">
                                Advanced Technology
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-[#4CAF50] p-2 rounded-l-md shadow-md">
                                <MdAccessTime className="text-[#3F503B] text-lg" />
                            </div>
                            <div className="bg-[#E7F2E5] text-dark text-sm px-4 py-2 rounded-r-md shadow w-full text-left">
                                Customer Satisfaction
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-[#4CAF50] p-2 rounded-l-md shadow-md">
                                <MdAccessTime className="text-[#3F503B] text-lg" />
                            </div>
                            <div className="bg-[#E7F2E5] text-dark text-sm px-4 py-2 rounded-r-md shadow w-full text-left h-[33px]">
                                24/7 Support
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-[#4CAF50] p-2 rounded-l-md shadow-md">
                                <MdAccessTime className="text-[#3F503B] text-lg" />
                            </div>
                            <div className="bg-[#E7F2E5] text-dark text-sm px-4 py-2 rounded-r-md shadow w-full text-left h-[33px]">
                                Quality Workmanship
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative bg-[#374932] text-white py-16 md:pb-[120px] overflow-hidden" data-aos="zoom-in-up">
                <img
                    src="/assets/PNG/3rdsection.png"
                    alt="Layout Background"
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[300px] md:w-[600px] z-0 pointer-events-none"
                />

                <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-5xl text-black">3400+</h2>
                        <p className="mt-2 text-[#4CAF50] font-bold">Septic Systems Serviced</p>
                        <span className="block mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg md:relative md:top-[96px]">
                        <h2 className="text-5xl text-black">6820</h2>
                        <p className="mt-2 text-[#4CAF50] font-bold">Satisfied Customers</p>
                        <span className="block mt-2 text-gray-500">Fusce nec urna sit amet nisi bibendum fringilla.</span>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-5xl text-black">270+</h2>
                        <p className="mt-2 text-[#4CAF50] font-bold">Advanced Equipment</p>
                        <span className="block mt-2 text-gray-500">Phasellus egestas ipsum non quam malesuada, et facilisis nisl vestibulum.</span>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg md:relative md:top-[96px]">
                        <h2 className="text-5xl text-black">3568</h2>
                        <p className="mt-2 text-[#4CAF50] font-bold">System Inspections</p>
                        <span className="block mt-2 text-gray-500">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                    </div>
                </div>
            </section>

            <section className="bg-white py-16" data-aos="zoom-in-down">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    <img src="/assets/PNG/AboutUSImage.png" alt="Team working" className="rounded-lg" />

                    <div>
                        <h2 className="text-3xl mb-4">Who We Are</h2>

                        <p className="text-gray-600 mb-4 flex items-center gap-2">
                            <img src="/assets/PNG/Whoweare.png" alt="" />
                            <span className='text-xl ms-4 text-gray-800 font-semibold'>We're in this business since 2011 and we provide the best services.</span>
                        </p>

                        <p className="text-gray-600 mb-4 text-cxl">
                            Evergreen Septics is a team of highly skilled professionals dedicated to ensuring the health and efficiency of your septic system. We understand that proper maintenance and timely service are crucial to keeping your property safe and environmentally friendly. Our mission is to offer affordable, high-quality, and sustainable septic services while maintaining the highest industry standards.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                            <div>
                                <div className="flex items-center gap-2 text-green-600 font-semibold text-lg">
                                    <span><MdAccessTime className="text-xl" /></span> Expert Septic Professionals
                                </div>
                                <p className="text-gray-600 mt-1 text-sm">
                                    Our team consists of experienced and certified septic specialists who ensure efficient and reliable service. We provide top-tier septic solutions across residential and commercial properties.
                                </p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 text-green-600 font-semibold text-lg">
                                    <span><MdAccessTime className="text-xl" /></span> Maintenance & Repairs
                                </div>
                                <p className="text-gray-600 mt-1 text-sm">
                                    We specialize in the inspection, maintenance, and repair of septic systems. Whether it's routine upkeep or emergency fixes, our experts handle it all with precision and care.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#3F503B] py-16" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl text-center text-white mb-10">What We Do</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center text-center">
                        <div className="bg-[#E8F3E6] hover:bg-white transition-colors shadow-md p-6 rounded-lg w-full max-w-[320px]">
                            <FaPumpSoap className="text-3xl text-green-700 mb-2 mx-auto" />
                            <h3 className="font-bold mb-2">Septic Tank Pumping</h3>
                            <p className="text-gray-600">Prevent overflows with routine maintenance.</p>
                        </div>

                        <div className="bg-[#E8F3E6] hover:bg-white transition-colors shadow-md p-6 rounded-lg w-full max-w-[320px]">
                            <FaHardHat className="text-3xl text-green-700 mb-2 mx-auto" />
                            <h3 className="font-bold mb-2">Septic System Installation</h3>
                            <p className="text-gray-600">Professional new & replacement system setup.</p>
                        </div>

                        <div className="bg-[#E8F3E6] hover:bg-white transition-colors shadow-md p-6 rounded-lg w-full max-w-[320px]">
                            <FaSearch className="text-3xl text-green-700 mb-2 mx-auto" />
                            <h3 className="font-bold mb-2">Septic System Inspections</h3>
                            <p className="text-gray-600">Ensure compliance & efficiency.</p>
                        </div>

                        <div className="bg-[#E8F3E6] hover:bg-white transition-colors shadow-md p-6 rounded-lg w-full max-w-[320px]">
                            <FaTools className="text-3xl text-green-700 mb-2 mx-auto" />
                            <h3 className="font-bold mb-2">Septic Repairs</h3>
                            <p className="text-gray-600">Quick fixes for long-term performance.</p>
                        </div>

                        <div className="bg-[#E8F3E6] hover:bg-white transition-colors shadow-md p-6 rounded-lg w-full max-w-[320px]">
                            <FaLeaf className="text-3xl text-green-700 mb-2 mx-auto" />
                            <h3 className="font-bold mb-2">Drain Field Restoration</h3>
                            <p className="text-gray-600">Keep your drainage effective.</p>
                        </div>

                        <div className="bg-[#E8F3E6] hover:bg-white transition-colors shadow-md p-6 rounded-lg w-full max-w-[320px]">
                            <FaBell className="text-3xl text-green-700 mb-2 mx-auto" />
                            <h3 className="font-bold mb-2">Emergency Services</h3>
                            <p className="text-gray-600">24/7 support for urgent issues.</p>
                        </div>
                    </div>

                </div>
            </section>

            <section className="bg-white py-16" data-aos="fade-up"
                data-aos-duration="3000">
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

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                            <div className="transform rotate-2 bg-white shadow-lg overflow-hidden">
                                <img src="/assets/PNG/Image1AboutSection.png" alt="Card 1" className="w-full h-48 object-cover shadow-md" />
                            </div>
                            <div className="transform rotate-2 bg-white shadow-lg overflow-hidden">
                                <img src="/assets/PNG/Image2AboutSection.png" alt="Card 2" className="w-full h-48 object-cover shadow-md" />
                            </div>
                            <div className="transform rotate-2 bg-white shadow-lg overflow-hidden">
                                <img src="assets/PNG/Image3AboutSection.png" alt="Card 3" className="w-full h-48 object-cover shadow-md" />
                            </div>
                        </div>
                    </div>

                    <img src="/assets/PNG/AboutUSImage.png" alt="Team working" className="rounded-lg" />
                </div>


            </section>

            <section className='max-w-4xl mx-auto p-6 mt-10 mb-10 font-sans' data-aos="fade-up"
                data-aos-duration="3000">
                <div className="bg-[#F0F0F0] rounded-lg p-4 mb-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center p-3 rounded-md">
                            <div className="bg-[#e9f3e6] p-2 rounded-md mr-3">
                                <Mail className="h-7 w-7 text-[#3F503B]" />
                            </div>
                            <div>
                                <div className="font-semibold">Mail Us</div>
                                <div className="text-gray-700">evergreensepticservicellc@gmail.com</div>
                            </div>
                        </div>


                        <div className="flex items-center p-3 rounded-md">
                            <div className="bg-[#e9f3e6] p-2 rounded-md mr-3">
                                <Phone className="h-7 w-7 text-[#3F503B]" />
                            </div>
                            <div>
                                <div className="font-semibold">Call Us</div>
                                <div className="text-gray-700">+1 262-248-4711</div>
                            </div>
                        </div>

                        <Link href='/contact-us'>
                            <Button className="bg-red-500 cursor-pointer hover:bg-red-600 text-white px-4 py-2 rounded-md">
                                <Rocket className="mr-2 h-5 w-5" />GET A FREE QUOTE</Button>
                        </Link>
                    </div>
                </div>
                <div className="text-center text-sm font-semibold">
                    <p>Phone: 262-248-4711 (during normal business hours, Monday-Friday, 8 AM to 4 PM)</p>
                    <p>Emergency Number: 262-949-3555</p>
                </div>
            </section>

            <section data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0" className="relative bg-cover bg-center bg-no-repeat h-[400px] flex items-center justify-center text-center mb-5"
                style={{ backgroundImage: "url('/assets/PNG/thirdsectionleftimage.png')" }}
            >
                <div className=" p-6 rounded-md">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Maintain your septic system <br />
                        with our reliable and efficient solutions.
                    </h2>

                    <Link href='/contact-us'>
                        <Button className="bg-red-500 cursor-pointer hover:bg-red-600 text-white px-4 py-2 rounded-md">
                            <Rocket className="mr-2 h-5 w-5" />
                            GET A FREE QUOTE</Button>
                    </Link>
                </div>
            </section>

            <section className="relative bg-white py-16" data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom">
                <div className="absolute top-0 right-0 z-0">
                    <img src="/assets/PNG/Union.png" alt="Design" className="w-[300px] md:h-[165px]" />
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <p className="text-sm font-semibold text-[#3F503B] uppercase mb-2">Testimonials</p>
                    <h2 className="text-4xl font-semibold text-black mb-12">What Our Clients Say</h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="group bg-white border border-transparent p-6 rounded-lg shadow-sm hover:bg-[#e8f3e6] hover:border-[#3F503B] hover:shadow-md transition-all duration-300">
                            <h3 className="font-semibold text-black group-hover:text-[#3F503B] mb-3">The Best Septic Services</h3>
                            <p className="text-[#696969] text-sm mb-6">
                                "I highly recommend this company. Jon and his crew provided outstanding service when they came
                                out to help my parents with their septic tank. They were very honest and open to work with! Thank
                                you for your help!"
                            </p>
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://randomuser.me/api/portraits/women/65.jpg"
                                    className="w-10 h-10 rounded-full"
                                    alt="Giovanni C"
                                />
                                <div>
                                    <p className="font-semibold text-sm text-black group-hover:text-[#3F503B]">Giovanni C</p>
                                    <p className="text-xs text-gray-500">Brooklyns NY</p>
                                </div>
                            </div>
                        </div>

                        <div className="group bg-white border border-transparent p-6 rounded-lg shadow-sm hover:bg-[#e8f3e6] hover:border-[#3F503B] hover:shadow-md transition-all duration-300">
                            <h3 className="font-semibold text-black group-hover:text-[#3F503B] mb-3">The Best Septic Services</h3>
                            <p className="text-[#696969] text-sm mb-6">
                                "I highly recommend this company. Jon and his crew provided outstanding service when they came
                                out to help my parents with their septic tank. They were very honest and open to work with! Thank
                                you for your help!"
                            </p>
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://randomuser.me/api/portraits/women/65.jpg"
                                    className="w-10 h-10 rounded-full"
                                    alt="Giovanni C"
                                />
                                <div>
                                    <p className="font-semibold text-sm text-black group-hover:text-[#3F503B]">Giovanni C</p>
                                    <p className="text-xs text-gray-500">Brooklyns NY</p>
                                </div>
                            </div>
                        </div>

                        <div className="group bg-white border border-transparent p-6 rounded-lg shadow-sm hover:bg-[#e8f3e6] hover:border-[#3F503B] hover:shadow-md transition-all duration-300">
                            <h3 className="font-semibold text-black group-hover:text-[#3F503B] mb-3">The Best Septic Services</h3>
                            <p className="text-[#696969] text-sm mb-6">
                                "I highly recommend this company. Jon and his crew provided outstanding service when they came
                                out to help my parents with their septic tank. They were very honest and open to work with! Thank
                                you for your help!"
                            </p>
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://randomuser.me/api/portraits/women/65.jpg"
                                    className="w-10 h-10 rounded-full"
                                    alt="Giovanni C"
                                />
                                <div>
                                    <p className="font-semibold text-sm text-black group-hover:text-[#3F503B]">Giovanni C</p>
                                    <p className="text-xs text-gray-500">Brooklyns NY</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 w-full max-w-[40em] h-2 bg-gray-200 rounded-full overflow-hidden border mx-auto" style={{ borderColor: '#AEAEAE' }}>
                            <div className="w-1/3 h-full rounded-full" style={{ backgroundColor: '#484848' }}></div>
                        </div>



                    </div>

                </div>


            </section >

        </>
    );
}