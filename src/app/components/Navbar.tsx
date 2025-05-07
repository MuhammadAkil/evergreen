'use client';

import React, { useState } from "react";
import { FaTree, FaInstagram, FaFacebookF, FaTwitter, FaYelp, FaPhone, FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { usePathname } from 'next/navigation';
import Link from 'next/link';


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about-us' },
        { name: 'Our Services', path: '/our-services' },
        { name: 'Testimonials', path: '/testimonial' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'FAQ', path: '/frequently-asked-questions' },
        { name: 'Contact', path: '/contact-us' }
    ];

    return (
        <>
            <div
                className="w-full bg-white z-50 shadow-sm"
                style={{ position: 'fixed', top: 0, left: 0, width: '100%' }}
            >
                <div className="top-0 z-50 bg-white max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center text-sm text-gray-800">
                    <Link href='/'>
                        <div className="flex items-center gap-3">
                            <FaTree className="w-10 h-10 text-[#3F503B]" />
                            <div className="leading-tight">
                                <div className="text-xl font-bold text-[#3F503B]">EVERGREEN</div>
                                <div className="text-[13px] text-gray-700">Septic Services LLC</div>
                            </div>
                        </div>
                    </Link>

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
                                <div className="font-medium text-sm"><a href="mailto:info@evergreenseptic.com">info@evergreenseptic.com</a></div>
                                <div className="text-gray-500 text-xs">Lake Geneva, Wisconsin.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden md:flex max-w-screen-xl mx-auto justify-between items-center h-[36px] bg-[#3F503B] rounded-md relative top-[13px] border border-[#5D7757]">
                    <div className="flex text-white text-[14px] font-medium divide-x divide-[#5D7757]">
                        {navLinks.map(({ name, path }, i) => (
                            <Link
                                key={i}
                                href={path}
                                className={`px-6 py-2 ${pathname === path ? 'bg-[#2f462f] rounded-sm' : 'hover:bg-[#5D7757]'}`}
                            >
                                {name}
                            </Link>
                        ))}
                    </div>

                    <div>
                        <div className="cursor-pointer bg-[#EF4444] text-white px-5 py-2.5 rounded-md font-bold text-[20px] flex items-center gap-2 shadow-md">
                            <FaPhone className="text-[20px]" />
                            <a href="tel:262-248-4711">262-248-4711</a>
                        </div>
                    </div>
                </div>

                {menuOpen && (
                    <div className="md:hidden bg-[#3F503B] text-white w-full">
                        <div className="flex flex-col divide-y divide-[#5D7757] font-medium text-[14px]">
                            {navLinks.map(({ name, path }, i) => (
                                <Link
                                    key={i}
                                    href={path}
                                    onClick={() => setMenuOpen(false)}
                                    className={`px-6 py-2 ${pathname === path ? 'bg-[#2f462f] rounded-sm' : 'hover:bg-[#5D7757]'}`}
                                >
                                    {name}
                                </Link>
                            ))}
                        </div>

                        <Link href="/about-us">
                            <div className="flex justify-center py-4">
                                <div className="bg-[#EF4444] text-white px-5 py-3 rounded-md font-bold text-[16px] flex items-center gap-2 shadow-md">
                                    <FaPhone className="text-[18px]" />
                                    <a href="tel:262-248-4711">262-248-4711</a>
                                </div>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}