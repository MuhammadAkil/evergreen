'use client';

import React, { useState } from "react";
import {
    FaTree, FaInstagram, FaFacebookF, FaTwitter, FaYelp,
    FaPhone, FaBars, FaTimes
} from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="w-full bg-white relative z-10 shadow-sm">
            <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center text-sm text-gray-800">
                <div className="flex items-center gap-3">
                    <FaTree className="w-10 h-10 text-[#3F503B]" />
                    <div className="leading-tight">
                        <div className="text-xl font-bold text-[#3F503B]">EVERGREEN</div>
                        <div className="text-[13px] text-gray-700">Septic Services LLC</div>
                    </div>
                </div>

                <div className="md:hidden flex items-center">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#3F503B] text-2xl">
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                <div className="hidden md:flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="bg-[#E9F4E6] w-[36px] h-[36px] flex items-center justify-center rounded-[8px]">
                            <HiOutlineLocationMarker className="text-[#3F503B] text-xl" />
                        </div>
                        <div>
                            <div className="font-medium text-sm">Lake Geneva, Wisconsin.</div>
                            <div className="text-gray-500 text-xs">Lake Geneva, Wisconsin.</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="bg-[#E9F4E6] w-[36px] h-[36px] flex items-center justify-center rounded-[8px]">
                            <HiOutlineMail className="text-[#3F503B] text-xl" />
                        </div>

                        <div>
                            <div className="font-medium text-sm">info@evergreenseptic.com</div>
                            <div className="text-gray-500 text-xs">Lake Geneva, Wisconsin.</div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        {[FaInstagram, FaFacebookF, FaTwitter, FaYelp].map((Icon, i) => (
                            <div key={i} className="bg-[#E9F4E6] w-[36px] h-[36px] flex items-center justify-center rounded-[8px]">
                                <Icon className="text-[#3F503B]" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="hidden md:flex max-w-screen-xl mx-auto justify-between items-center h-[36px] bg-[#3F503B] rounded-md relative top-[13px]">
                <div className="flex text-white text-[14px] font-medium divide-x divide-[#5D7757]">
                    <a href="/" className="px-6 py-2 hover:bg-[#5D7757]">Home</a>
                    <a href="/about-us" className="px-6 py-2 bg-[#2f462f]">About Us</a>
                    <a href="/our-services" className="px-6 py-2 hover:bg-[#5D7757]">Our Services</a>
                    <a href="/testimonial" className="px-6 py-2 hover:bg-[#5D7757]">Testimonials</a>
                    <a href="/contact-us" className="px-6 py-2 hover:bg-[#5D7757]">Contact</a>
                </div>

                <div className="bg-[#EF4444] text-white px-5 py-2.5 rounded-md font-bold text-[20px] flex items-center gap-2 shadow-md">
                    <FaPhone className="text-[20px]" />
                    <span>262-248-4711</span>
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-[#3F503B] text-white w-full">
                    <div className="flex flex-col divide-y divide-[#5D7757] font-medium text-[14px]">
                        {['Home', 'About Us', 'Our Services', 'Testimonials', 'Contact'].map((item, i) => (
                            <a key={i} href="#" className="px-6 py-4 hover:bg-[#5D7757]">{item}</a>
                        ))}
                    </div>

                    <div className="flex items-center justify-center gap-3 py-4">
                        {[FaInstagram, FaFacebookF, FaTwitter, FaYelp].map((Icon, i) => (
                            <div key={i} className="bg-[#E9F4E6] w-[38px] h-[38px] flex items-center justify-center rounded-[8px]">
                                <Icon className="text-[#3F503B]" />
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center py-4">
                        <div className="bg-[#EF4444] text-white px-5 py-3 rounded-md font-bold text-[16px] flex items-center gap-2 shadow-md">
                            <FaPhone className="text-[18px]" />
                            <span>262-248-4711</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}