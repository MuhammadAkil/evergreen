import React from 'react'
import { FaCheckCircle, FaPhone } from "react-icons/fa";

export default function HerSection() {
    return (
        <>
            <div className="w-full min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-10 md:py-20"
                style={{ backgroundImage: "url('/assets/PNG/HeroSection.png')" }}
            >
                <div className="max-w-screen-xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="text-white">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight whitespace-pre-line">
                            Reliable & Professional{"\n"}Septic Services
                        </h1>
                        <p className="mt-4 text-lg md:text-xl">
                            Fast, Affordable & Trusted Septic Pumping, Inspections & Repairs in Walworth County.
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
                                        <span className="text-sm md:text-base">{item}</span>
                                    </div>
                                ))}
                            </div>


                            <div className="flex flex-col items-start gap-3">
                                <span className="text-white font-semibold text-xl">Get a Free Quote!</span>

                                <button className="flex items-center bg-[#3F503B] hover:bg-[#2f462f] text-white font-semibold px-6 py-3 rounded-lg shadow-md">
                                    <FaPhone className="text-[18px]" />
                                    <span className="px-2">262-248-4711</span>
                                </button>
                            </div>


                        </div>
                    </div>

                    <div className="bg-white p-6 md:p-10 rounded-xl shadow-xl w-full md:w-[90%] lg:w-[80%] xl:w-[70%]">
                        <h2 className="text-4xl font-bold text-[#3F503B] mb-2 whitespace-pre-line text-center">
                            Schedule a call for your need
                        </h2>
                        <hr className="border-t-2 border-[#3F503B] mb-4" />

                        <form className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <label className="text-sm font-bold text-gray-800 mb-1">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="border border-gray-300 rounded-md px-4 py-2"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-sm font-bold text-gray-800 mb-1">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    className="border border-gray-300 rounded-md px-4 py-2"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-sm font-bold text-gray-800 mb-1">
                                    Type of Service <span className="text-red-500">*</span>
                                </label>
                                <select className="border border-gray-300 rounded-md px-4 py-2 text-gray-700">
                                    <option value="">Select a service</option>
                                    <option value="Pumping">Septic Pumping</option>
                                    <option value="Inspection">Inspection</option>
                                    <option value="Repair">Repair</option>
                                    <option value="Installation">Installation</option>
                                </select>
                            </div>

                            <div className="flex flex-col">
                                <label className="text-sm font-bold text-gray-800 mb-1">
                                    Best Time for Call <span className="text-red-500">*</span>
                                </label>
                                <div className="flex flex-wrap gap-3 md:flex-row flex-col">
                                    {["Morning", "Afternoon", "Evening"].map((time) => (
                                        <label key={time} className="flex items-center gap-2 text-sm text-gray-700 mb-4 md:mb-0">
                                            <input type="radio" name="bestTime" value={time} className="accent-[#3F503B]" />
                                            <span>{time}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>


                            <button
                                type="submit"
                                className="w-full bg-[#3F503B] hover:bg-[#2f462f] text-white font-semibold px-6 py-3 rounded-md mt-2"
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
