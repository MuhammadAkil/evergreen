import React from 'react';
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
    return (
        <>
            <div className="relative w-full h-[300px] overflow-hidden">
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
                    <h1 className="text-6xl font-bold uppercase tracking-wide">CONTACT US</h1>
                    <p className="text-sm mt-2">Reliable, Professional, and Environmentally Responsible Septic Solutions</p>
                </div>
            </div>



            <section className="py-16 bg-white relative">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
                    <div className="bg-[#F7FAFF] border border-[#E5EAF1] rounded-lg p-6 shadow-sm">
                        <div className="mb-4 text-[#3F503B] text-3xl">
                            <HiOutlineLocationMarker />
                        </div>
                        <h4 className="text-lg font-semibold mb-1">Head Office</h4>
                        <p className="text-sm text-gray-600">Lake Geneva, Wisconsin.,</p>
                    </div>

                    <div className="bg-[#F7FAFF] border border-[#E5EAF1] rounded-lg p-6 shadow-sm">
                        <div className="mb-4 text-[#3F503B] text-3xl">
                            <FiPhone />
                        </div>
                        <h4 className="text-lg font-semibold mb-1">Phones</h4>
                        <p className="text-sm text-gray-600">+1 262-248-4711</p>
                    </div>

                    <div className="bg-[#F7FAFF] border border-[#E5EAF1] rounded-lg p-6 shadow-sm">
                        <div className="mb-4 text-[#3F503B] text-3xl">
                            <HiOutlineMail />
                        </div>
                        <h4 className="text-lg font-semibold mb-1">Head Office</h4>
                        <p className="text-sm text-gray-600">info@evergreenseptic.com</p>
                    </div>
                </div>
            </section>

            <section className='pt-13 mt-13'>
                <div className="md:w-1/2">
                    <div className="text-black mb-4 px-9">
                        <p className="text-xs mb-2 text-[#3F503B] md:relative md:top-0 relative top-[-10em]">
                            GET IN TOUCH
                        </p>
                        <h2 className="text-3xl md:text-5xl md:relative md:top-0 relative top-[-4em]">
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
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm mb-1 font-medium">Full Name</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-md p-2 bg-[#EDF7E8]" />
                                </div>
                                <div>
                                    <label className="block text-sm mb-1 font-medium">Your E-mail</label>
                                    <input type="email" className="w-full border border-gray-300 rounded-md p-2 bg-[#EDF7E8]" />
                                </div>
                                <div>
                                    <label className="block text-sm mb-1 font-medium">Subject</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-md p-2 bg-[#EDF7E8]" />
                                </div>
                                <div>
                                    <label className="block text-sm mb-1 font-medium">Your Message</label>
                                    <textarea className="w-full border border-gray-300 rounded-md p-2 bg-[#EDF7E8]"></textarea>
                                </div>
                                <button type="submit" className="bg-[#3F503B] text-white py-2 px-6 rounded-md mt-2">
                                    Send Now
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>


            <section className="relative w-full overflow-hidden">
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
                <div className="absolute inset-0 flex flex-col items-start justify-center md:ml-10 text-white z-20 px-4 md:px-0 py-20 w-full">
                    <h1 className="text-3xl md:text-6xl font-bold uppercase tracking-wide text-center md:text-left">Live Clean and Worry-Free</h1>

                    <p className="text-base md:text-xl mt-4 max-w-lg text-center md:text-left">
                        Experience peace of mind with our professional services. Your satisfaction is our priority, ensuring a cleaner, safer home for you and your family.
                    </p>

                    <div className="w-full mt-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                            {/* Column 1: Button */}
                            <div className="flex justify-center md:justify-start">
                                <Button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md flex items-center">
                                    <Rocket className="mr-2 h-5 w-5" />GET A FREE QUOTE
                                </Button>
                            </div>

                            {/* Column 2: User Info */}
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <img src="/assets/PNG/Person.png" className="w-10 h-10 rounded-full" alt="Sophia Moore" />
                                <div className="flex flex-col justify-start">
                                    <p className="font-semibold text-sm text-white group-hover:text-[#3F503B]">Sophia Moore</p>
                                    <p className="text-xs text-gray-300">Home Owner New Orleans</p>
                                </div>
                            </div>

                            {/* Column 3: Phone */}
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <p className="text-2xl md:text-4xl text-white font-semibold">+1 262-248-4711</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </>
    );
}