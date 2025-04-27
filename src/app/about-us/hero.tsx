import React, { useEffect } from 'react';
import { MdAccessTime } from "react-icons/md";
import { FaPumpSoap, FaTools, FaSearch, FaHardHat, FaLeaf, FaBell } from 'react-icons/fa';
import { Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link"
import Image from "next/image"

export default function Hero() {

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);


    return (
        <>
           <section className="bg-white py-12" data-aos="zoom-in">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-stretch">
                        <div className="w-full md:w-2/3 flex flex-col">
                            <div>
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-instrument font-medium mb-4">
                                    Keeping Systems Flowing Your Septic Needs, Our Expertise
                                </h1>
                            </div>

                            <img src="/assets/images/About/LeftImage.png" alt="Worker with pipe" className="rounded-lg h-[300px] object-cover w-full" />
                        </div>
                        <div className="w-full md:w-1/3 flex items-end">
                            <img src="/assets/images/About/RightImage.png" alt="Worker inspecting tank" className="rounded-lg h-[300px] object-cover w-full" />
                        </div>
                    </div>
                    <p className="mt-6 text-lg text-gray-600  mx-auto">
                        At Evergreen Septics, we take pride in delivering top-notch septic system services with reliability, efficiency, and environmental responsibility. With years of experience in the industry, we have built a reputation for providing exceptional septic solutions tailored to the needs of homeowners, businesses, and communities.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8 text-sm text-center">
                        <div className="flex items-center  h-[42px]">
                            <div className="bg-[#4CAF50] p-2 rounded-l-md shadow-md h-full  ">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.4286 0.676025C11.8515 0.731428 12.2768 0.771351 12.6965 0.844678C14.0774 1.08572 15.3937 1.6081 16.5634 2.37926C16.5911 2.39759 16.616 2.41999 16.6617 2.45544C16.5462 2.5251 16.4397 2.58091 16.3421 2.64975C15.7155 3.09013 15.0885 3.53091 14.4672 3.97902C14.3701 4.04868 14.304 4.07923 14.1815 4.02342C11.0257 2.58009 7.48696 3.26326 5.11611 5.79713C3.90334 7.09258 3.21552 8.64182 3.0702 10.4143C2.77792 13.9841 4.79486 17.1987 8.14907 18.4396C12.6393 20.1009 17.4279 17.4065 18.4823 12.8663C18.8837 11.124 18.6796 9.29735 17.9035 7.68612C18.5877 7.14066 19.3375 6.68275 20.1356 6.32305C20.2862 6.66687 20.4425 6.99522 20.5764 7.33293C22.179 11.3729 21.0063 16.1237 17.7125 18.9578C15.9592 20.465 13.9362 21.3246 11.6261 21.4986C11.5734 21.5065 11.5213 21.5182 11.4702 21.5336H10.2472C10.1892 21.5179 10.1304 21.5058 10.0709 21.4973C7.9715 21.3344 6.08396 20.6141 4.43482 19.3077C2.34727 17.6538 1.0553 15.5097 0.588727 12.881C0.520149 12.4952 0.481369 12.1045 0.428711 11.7159V10.4937C0.460143 10.2322 0.486676 9.97027 0.523414 9.70914C0.818954 7.60383 1.66271 5.7458 3.08448 4.16519C4.69852 2.3703 6.6979 1.25042 9.08263 0.838975C9.46838 0.772166 9.85821 0.730614 10.2472 0.676025H11.4286Z" fill="white" />
                                    <path d="M10.0325 12.2995C10.2525 11.7952 10.4407 11.3092 10.6726 10.8432C12.3001 7.54345 14.6934 4.97455 17.9549 3.24361C18.4623 2.97434 19.002 2.76495 19.5302 2.53641C19.9347 2.36165 20.3413 2.33273 20.6968 2.64152C21.0777 2.97393 21.1867 3.41553 21.1026 3.89867C21.0209 4.3643 20.7372 4.67268 20.2939 4.83849C18.4803 5.51432 16.9271 6.58449 15.5996 7.98016C13.6402 10.0382 12.3409 12.4491 11.7678 15.2412C11.7474 15.3406 11.7319 15.4412 11.7147 15.5414C11.6249 16.071 11.3065 16.3969 10.7881 16.4825C10.208 16.579 9.71085 16.3688 9.46837 15.9048C9.04262 15.0901 8.5589 14.3161 7.94455 13.6276C7.2261 12.8285 6.36656 12.168 5.40879 11.6791C5.09611 11.5162 4.83241 11.3125 4.74954 10.9503C4.63116 10.4326 4.82343 10.0134 5.20836 9.68135C5.5933 9.34934 6.04355 9.2642 6.47788 9.5074C7.13835 9.87771 7.7976 10.2663 8.39643 10.7267C8.93608 11.1414 9.39367 11.6636 9.88637 12.1374C9.93332 12.1843 9.97577 12.2368 10.0325 12.2995Z" fill="white" />
                                </svg>

                            </div>
                            <div className="bg-[#E7F2E5] text-black text-base font-medium h-full px-4 py-2 rounded-r-md shadow w-full text-center">
                                Eco-Friendly Solutions
                            </div>
                        </div>
                        <div className="flex items-center h-[42px]">
                            <div className="bg-[#4CAF50] p-2 rounded-l-md shadow-md h-full ">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.4286 0.676025C11.8515 0.731428 12.2768 0.771351 12.6965 0.844678C14.0774 1.08572 15.3937 1.6081 16.5634 2.37926C16.5911 2.39759 16.616 2.41999 16.6617 2.45544C16.5462 2.5251 16.4397 2.58091 16.3421 2.64975C15.7155 3.09013 15.0885 3.53091 14.4672 3.97902C14.3701 4.04868 14.304 4.07923 14.1815 4.02342C11.0257 2.58009 7.48696 3.26326 5.11611 5.79713C3.90334 7.09258 3.21552 8.64182 3.0702 10.4143C2.77792 13.9841 4.79486 17.1987 8.14907 18.4396C12.6393 20.1009 17.4279 17.4065 18.4823 12.8663C18.8837 11.124 18.6796 9.29735 17.9035 7.68612C18.5877 7.14066 19.3375 6.68275 20.1356 6.32305C20.2862 6.66687 20.4425 6.99522 20.5764 7.33293C22.179 11.3729 21.0063 16.1237 17.7125 18.9578C15.9592 20.465 13.9362 21.3246 11.6261 21.4986C11.5734 21.5065 11.5213 21.5182 11.4702 21.5336H10.2472C10.1892 21.5179 10.1304 21.5058 10.0709 21.4973C7.9715 21.3344 6.08396 20.6141 4.43482 19.3077C2.34727 17.6538 1.0553 15.5097 0.588727 12.881C0.520149 12.4952 0.481369 12.1045 0.428711 11.7159V10.4937C0.460143 10.2322 0.486676 9.97027 0.523414 9.70914C0.818954 7.60383 1.66271 5.7458 3.08448 4.16519C4.69852 2.3703 6.6979 1.25042 9.08263 0.838975C9.46838 0.772166 9.85821 0.730614 10.2472 0.676025H11.4286Z" fill="white" />
                                    <path d="M10.0325 12.2995C10.2525 11.7952 10.4407 11.3092 10.6726 10.8432C12.3001 7.54345 14.6934 4.97455 17.9549 3.24361C18.4623 2.97434 19.002 2.76495 19.5302 2.53641C19.9347 2.36165 20.3413 2.33273 20.6968 2.64152C21.0777 2.97393 21.1867 3.41553 21.1026 3.89867C21.0209 4.3643 20.7372 4.67268 20.2939 4.83849C18.4803 5.51432 16.9271 6.58449 15.5996 7.98016C13.6402 10.0382 12.3409 12.4491 11.7678 15.2412C11.7474 15.3406 11.7319 15.4412 11.7147 15.5414C11.6249 16.071 11.3065 16.3969 10.7881 16.4825C10.208 16.579 9.71085 16.3688 9.46837 15.9048C9.04262 15.0901 8.5589 14.3161 7.94455 13.6276C7.2261 12.8285 6.36656 12.168 5.40879 11.6791C5.09611 11.5162 4.83241 11.3125 4.74954 10.9503C4.63116 10.4326 4.82343 10.0134 5.20836 9.68135C5.5933 9.34934 6.04355 9.2642 6.47788 9.5074C7.13835 9.87771 7.7976 10.2663 8.39643 10.7267C8.93608 11.1414 9.39367 11.6636 9.88637 12.1374C9.93332 12.1843 9.97577 12.2368 10.0325 12.2995Z" fill="white" />
                                </svg>                            </div>
                            <div className="bg-[#E7F2E5] text-black text-base font-medium h-full px-4 py-2 rounded-r-md shadow w-full text-center">
                                Affordable Pricing
                            </div>
                        </div>
                        <div className="flex items-center h-[42px]">
                            <div className="bg-[#4CAF50] p-2 rounded-l-md shadow-md h-full ">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.4286 0.676025C11.8515 0.731428 12.2768 0.771351 12.6965 0.844678C14.0774 1.08572 15.3937 1.6081 16.5634 2.37926C16.5911 2.39759 16.616 2.41999 16.6617 2.45544C16.5462 2.5251 16.4397 2.58091 16.3421 2.64975C15.7155 3.09013 15.0885 3.53091 14.4672 3.97902C14.3701 4.04868 14.304 4.07923 14.1815 4.02342C11.0257 2.58009 7.48696 3.26326 5.11611 5.79713C3.90334 7.09258 3.21552 8.64182 3.0702 10.4143C2.77792 13.9841 4.79486 17.1987 8.14907 18.4396C12.6393 20.1009 17.4279 17.4065 18.4823 12.8663C18.8837 11.124 18.6796 9.29735 17.9035 7.68612C18.5877 7.14066 19.3375 6.68275 20.1356 6.32305C20.2862 6.66687 20.4425 6.99522 20.5764 7.33293C22.179 11.3729 21.0063 16.1237 17.7125 18.9578C15.9592 20.465 13.9362 21.3246 11.6261 21.4986C11.5734 21.5065 11.5213 21.5182 11.4702 21.5336H10.2472C10.1892 21.5179 10.1304 21.5058 10.0709 21.4973C7.9715 21.3344 6.08396 20.6141 4.43482 19.3077C2.34727 17.6538 1.0553 15.5097 0.588727 12.881C0.520149 12.4952 0.481369 12.1045 0.428711 11.7159V10.4937C0.460143 10.2322 0.486676 9.97027 0.523414 9.70914C0.818954 7.60383 1.66271 5.7458 3.08448 4.16519C4.69852 2.3703 6.6979 1.25042 9.08263 0.838975C9.46838 0.772166 9.85821 0.730614 10.2472 0.676025H11.4286Z" fill="white" />
                                    <path d="M10.0325 12.2995C10.2525 11.7952 10.4407 11.3092 10.6726 10.8432C12.3001 7.54345 14.6934 4.97455 17.9549 3.24361C18.4623 2.97434 19.002 2.76495 19.5302 2.53641C19.9347 2.36165 20.3413 2.33273 20.6968 2.64152C21.0777 2.97393 21.1867 3.41553 21.1026 3.89867C21.0209 4.3643 20.7372 4.67268 20.2939 4.83849C18.4803 5.51432 16.9271 6.58449 15.5996 7.98016C13.6402 10.0382 12.3409 12.4491 11.7678 15.2412C11.7474 15.3406 11.7319 15.4412 11.7147 15.5414C11.6249 16.071 11.3065 16.3969 10.7881 16.4825C10.208 16.579 9.71085 16.3688 9.46837 15.9048C9.04262 15.0901 8.5589 14.3161 7.94455 13.6276C7.2261 12.8285 6.36656 12.168 5.40879 11.6791C5.09611 11.5162 4.83241 11.3125 4.74954 10.9503C4.63116 10.4326 4.82343 10.0134 5.20836 9.68135C5.5933 9.34934 6.04355 9.2642 6.47788 9.5074C7.13835 9.87771 7.7976 10.2663 8.39643 10.7267C8.93608 11.1414 9.39367 11.6636 9.88637 12.1374C9.93332 12.1843 9.97577 12.2368 10.0325 12.2995Z" fill="white" />
                                </svg>                            </div>
                            <div className="bg-[#E7F2E5] text-black text-base font-medium h-full px-4 py-2 rounded-r-md shadow w-full text-center">
                                Reliable Service
                            </div>
                        </div>
                        <div className="flex items-center h-[42px]">
                            <div className="bg-[#4CAF50] p-2 rounded-l-md shadow-md h-full ">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.4286 0.676025C11.8515 0.731428 12.2768 0.771351 12.6965 0.844678C14.0774 1.08572 15.3937 1.6081 16.5634 2.37926C16.5911 2.39759 16.616 2.41999 16.6617 2.45544C16.5462 2.5251 16.4397 2.58091 16.3421 2.64975C15.7155 3.09013 15.0885 3.53091 14.4672 3.97902C14.3701 4.04868 14.304 4.07923 14.1815 4.02342C11.0257 2.58009 7.48696 3.26326 5.11611 5.79713C3.90334 7.09258 3.21552 8.64182 3.0702 10.4143C2.77792 13.9841 4.79486 17.1987 8.14907 18.4396C12.6393 20.1009 17.4279 17.4065 18.4823 12.8663C18.8837 11.124 18.6796 9.29735 17.9035 7.68612C18.5877 7.14066 19.3375 6.68275 20.1356 6.32305C20.2862 6.66687 20.4425 6.99522 20.5764 7.33293C22.179 11.3729 21.0063 16.1237 17.7125 18.9578C15.9592 20.465 13.9362 21.3246 11.6261 21.4986C11.5734 21.5065 11.5213 21.5182 11.4702 21.5336H10.2472C10.1892 21.5179 10.1304 21.5058 10.0709 21.4973C7.9715 21.3344 6.08396 20.6141 4.43482 19.3077C2.34727 17.6538 1.0553 15.5097 0.588727 12.881C0.520149 12.4952 0.481369 12.1045 0.428711 11.7159V10.4937C0.460143 10.2322 0.486676 9.97027 0.523414 9.70914C0.818954 7.60383 1.66271 5.7458 3.08448 4.16519C4.69852 2.3703 6.6979 1.25042 9.08263 0.838975C9.46838 0.772166 9.85821 0.730614 10.2472 0.676025H11.4286Z" fill="white" />
                                    <path d="M10.0325 12.2995C10.2525 11.7952 10.4407 11.3092 10.6726 10.8432C12.3001 7.54345 14.6934 4.97455 17.9549 3.24361C18.4623 2.97434 19.002 2.76495 19.5302 2.53641C19.9347 2.36165 20.3413 2.33273 20.6968 2.64152C21.0777 2.97393 21.1867 3.41553 21.1026 3.89867C21.0209 4.3643 20.7372 4.67268 20.2939 4.83849C18.4803 5.51432 16.9271 6.58449 15.5996 7.98016C13.6402 10.0382 12.3409 12.4491 11.7678 15.2412C11.7474 15.3406 11.7319 15.4412 11.7147 15.5414C11.6249 16.071 11.3065 16.3969 10.7881 16.4825C10.208 16.579 9.71085 16.3688 9.46837 15.9048C9.04262 15.0901 8.5589 14.3161 7.94455 13.6276C7.2261 12.8285 6.36656 12.168 5.40879 11.6791C5.09611 11.5162 4.83241 11.3125 4.74954 10.9503C4.63116 10.4326 4.82343 10.0134 5.20836 9.68135C5.5933 9.34934 6.04355 9.2642 6.47788 9.5074C7.13835 9.87771 7.7976 10.2663 8.39643 10.7267C8.93608 11.1414 9.39367 11.6636 9.88637 12.1374C9.93332 12.1843 9.97577 12.2368 10.0325 12.2995Z" fill="white" />
                                </svg>                            </div>
                            <div className="bg-[#E7F2E5] text-black text-base font-medium h-full px-4 py-2 rounded-r-md shadow w-full text-center">
                                Expert Team
                            </div>
                        </div>
                        <div className="flex items-center h-[42px]">
                            <div className="bg-[#4CAF50] p-2 rounded-l-md shadow-md h-full ">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.4286 0.676025C11.8515 0.731428 12.2768 0.771351 12.6965 0.844678C14.0774 1.08572 15.3937 1.6081 16.5634 2.37926C16.5911 2.39759 16.616 2.41999 16.6617 2.45544C16.5462 2.5251 16.4397 2.58091 16.3421 2.64975C15.7155 3.09013 15.0885 3.53091 14.4672 3.97902C14.3701 4.04868 14.304 4.07923 14.1815 4.02342C11.0257 2.58009 7.48696 3.26326 5.11611 5.79713C3.90334 7.09258 3.21552 8.64182 3.0702 10.4143C2.77792 13.9841 4.79486 17.1987 8.14907 18.4396C12.6393 20.1009 17.4279 17.4065 18.4823 12.8663C18.8837 11.124 18.6796 9.29735 17.9035 7.68612C18.5877 7.14066 19.3375 6.68275 20.1356 6.32305C20.2862 6.66687 20.4425 6.99522 20.5764 7.33293C22.179 11.3729 21.0063 16.1237 17.7125 18.9578C15.9592 20.465 13.9362 21.3246 11.6261 21.4986C11.5734 21.5065 11.5213 21.5182 11.4702 21.5336H10.2472C10.1892 21.5179 10.1304 21.5058 10.0709 21.4973C7.9715 21.3344 6.08396 20.6141 4.43482 19.3077C2.34727 17.6538 1.0553 15.5097 0.588727 12.881C0.520149 12.4952 0.481369 12.1045 0.428711 11.7159V10.4937C0.460143 10.2322 0.486676 9.97027 0.523414 9.70914C0.818954 7.60383 1.66271 5.7458 3.08448 4.16519C4.69852 2.3703 6.6979 1.25042 9.08263 0.838975C9.46838 0.772166 9.85821 0.730614 10.2472 0.676025H11.4286Z" fill="white" />
                                    <path d="M10.0325 12.2995C10.2525 11.7952 10.4407 11.3092 10.6726 10.8432C12.3001 7.54345 14.6934 4.97455 17.9549 3.24361C18.4623 2.97434 19.002 2.76495 19.5302 2.53641C19.9347 2.36165 20.3413 2.33273 20.6968 2.64152C21.0777 2.97393 21.1867 3.41553 21.1026 3.89867C21.0209 4.3643 20.7372 4.67268 20.2939 4.83849C18.4803 5.51432 16.9271 6.58449 15.5996 7.98016C13.6402 10.0382 12.3409 12.4491 11.7678 15.2412C11.7474 15.3406 11.7319 15.4412 11.7147 15.5414C11.6249 16.071 11.3065 16.3969 10.7881 16.4825C10.208 16.579 9.71085 16.3688 9.46837 15.9048C9.04262 15.0901 8.5589 14.3161 7.94455 13.6276C7.2261 12.8285 6.36656 12.168 5.40879 11.6791C5.09611 11.5162 4.83241 11.3125 4.74954 10.9503C4.63116 10.4326 4.82343 10.0134 5.20836 9.68135C5.5933 9.34934 6.04355 9.2642 6.47788 9.5074C7.13835 9.87771 7.7976 10.2663 8.39643 10.7267C8.93608 11.1414 9.39367 11.6636 9.88637 12.1374C9.93332 12.1843 9.97577 12.2368 10.0325 12.2995Z" fill="white" />
                                </svg>                            </div>
                            <div className="bg-[#E7F2E5] text-black text-base font-medium h-full px-4 py-2 rounded-r-md shadow w-full text-center">
                                Advanced Technology
                            </div>
                        </div>
                        <div className="flex items-center h-[42px]">
                            <div className="bg-[#4CAF50] p-2 rounded-l-md shadow-md h-full ">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.4286 0.676025C11.8515 0.731428 12.2768 0.771351 12.6965 0.844678C14.0774 1.08572 15.3937 1.6081 16.5634 2.37926C16.5911 2.39759 16.616 2.41999 16.6617 2.45544C16.5462 2.5251 16.4397 2.58091 16.3421 2.64975C15.7155 3.09013 15.0885 3.53091 14.4672 3.97902C14.3701 4.04868 14.304 4.07923 14.1815 4.02342C11.0257 2.58009 7.48696 3.26326 5.11611 5.79713C3.90334 7.09258 3.21552 8.64182 3.0702 10.4143C2.77792 13.9841 4.79486 17.1987 8.14907 18.4396C12.6393 20.1009 17.4279 17.4065 18.4823 12.8663C18.8837 11.124 18.6796 9.29735 17.9035 7.68612C18.5877 7.14066 19.3375 6.68275 20.1356 6.32305C20.2862 6.66687 20.4425 6.99522 20.5764 7.33293C22.179 11.3729 21.0063 16.1237 17.7125 18.9578C15.9592 20.465 13.9362 21.3246 11.6261 21.4986C11.5734 21.5065 11.5213 21.5182 11.4702 21.5336H10.2472C10.1892 21.5179 10.1304 21.5058 10.0709 21.4973C7.9715 21.3344 6.08396 20.6141 4.43482 19.3077C2.34727 17.6538 1.0553 15.5097 0.588727 12.881C0.520149 12.4952 0.481369 12.1045 0.428711 11.7159V10.4937C0.460143 10.2322 0.486676 9.97027 0.523414 9.70914C0.818954 7.60383 1.66271 5.7458 3.08448 4.16519C4.69852 2.3703 6.6979 1.25042 9.08263 0.838975C9.46838 0.772166 9.85821 0.730614 10.2472 0.676025H11.4286Z" fill="white" />
                                    <path d="M10.0325 12.2995C10.2525 11.7952 10.4407 11.3092 10.6726 10.8432C12.3001 7.54345 14.6934 4.97455 17.9549 3.24361C18.4623 2.97434 19.002 2.76495 19.5302 2.53641C19.9347 2.36165 20.3413 2.33273 20.6968 2.64152C21.0777 2.97393 21.1867 3.41553 21.1026 3.89867C21.0209 4.3643 20.7372 4.67268 20.2939 4.83849C18.4803 5.51432 16.9271 6.58449 15.5996 7.98016C13.6402 10.0382 12.3409 12.4491 11.7678 15.2412C11.7474 15.3406 11.7319 15.4412 11.7147 15.5414C11.6249 16.071 11.3065 16.3969 10.7881 16.4825C10.208 16.579 9.71085 16.3688 9.46837 15.9048C9.04262 15.0901 8.5589 14.3161 7.94455 13.6276C7.2261 12.8285 6.36656 12.168 5.40879 11.6791C5.09611 11.5162 4.83241 11.3125 4.74954 10.9503C4.63116 10.4326 4.82343 10.0134 5.20836 9.68135C5.5933 9.34934 6.04355 9.2642 6.47788 9.5074C7.13835 9.87771 7.7976 10.2663 8.39643 10.7267C8.93608 11.1414 9.39367 11.6636 9.88637 12.1374C9.93332 12.1843 9.97577 12.2368 10.0325 12.2995Z" fill="white" />
                                </svg>                            </div>
                            <div className="bg-[#E7F2E5] text-black text-base font-medium h-full px-4 py-2 rounded-r-md shadow w-full text-center">
                                Customer Satisfaction
                            </div>
                        </div>
                        <div className="flex items-center h-[42px]">
                            <div className="bg-[#4CAF50] p-2 rounded-l-md shadow-md h-full ">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.4286 0.676025C11.8515 0.731428 12.2768 0.771351 12.6965 0.844678C14.0774 1.08572 15.3937 1.6081 16.5634 2.37926C16.5911 2.39759 16.616 2.41999 16.6617 2.45544C16.5462 2.5251 16.4397 2.58091 16.3421 2.64975C15.7155 3.09013 15.0885 3.53091 14.4672 3.97902C14.3701 4.04868 14.304 4.07923 14.1815 4.02342C11.0257 2.58009 7.48696 3.26326 5.11611 5.79713C3.90334 7.09258 3.21552 8.64182 3.0702 10.4143C2.77792 13.9841 4.79486 17.1987 8.14907 18.4396C12.6393 20.1009 17.4279 17.4065 18.4823 12.8663C18.8837 11.124 18.6796 9.29735 17.9035 7.68612C18.5877 7.14066 19.3375 6.68275 20.1356 6.32305C20.2862 6.66687 20.4425 6.99522 20.5764 7.33293C22.179 11.3729 21.0063 16.1237 17.7125 18.9578C15.9592 20.465 13.9362 21.3246 11.6261 21.4986C11.5734 21.5065 11.5213 21.5182 11.4702 21.5336H10.2472C10.1892 21.5179 10.1304 21.5058 10.0709 21.4973C7.9715 21.3344 6.08396 20.6141 4.43482 19.3077C2.34727 17.6538 1.0553 15.5097 0.588727 12.881C0.520149 12.4952 0.481369 12.1045 0.428711 11.7159V10.4937C0.460143 10.2322 0.486676 9.97027 0.523414 9.70914C0.818954 7.60383 1.66271 5.7458 3.08448 4.16519C4.69852 2.3703 6.6979 1.25042 9.08263 0.838975C9.46838 0.772166 9.85821 0.730614 10.2472 0.676025H11.4286Z" fill="white" />
                                    <path d="M10.0325 12.2995C10.2525 11.7952 10.4407 11.3092 10.6726 10.8432C12.3001 7.54345 14.6934 4.97455 17.9549 3.24361C18.4623 2.97434 19.002 2.76495 19.5302 2.53641C19.9347 2.36165 20.3413 2.33273 20.6968 2.64152C21.0777 2.97393 21.1867 3.41553 21.1026 3.89867C21.0209 4.3643 20.7372 4.67268 20.2939 4.83849C18.4803 5.51432 16.9271 6.58449 15.5996 7.98016C13.6402 10.0382 12.3409 12.4491 11.7678 15.2412C11.7474 15.3406 11.7319 15.4412 11.7147 15.5414C11.6249 16.071 11.3065 16.3969 10.7881 16.4825C10.208 16.579 9.71085 16.3688 9.46837 15.9048C9.04262 15.0901 8.5589 14.3161 7.94455 13.6276C7.2261 12.8285 6.36656 12.168 5.40879 11.6791C5.09611 11.5162 4.83241 11.3125 4.74954 10.9503C4.63116 10.4326 4.82343 10.0134 5.20836 9.68135C5.5933 9.34934 6.04355 9.2642 6.47788 9.5074C7.13835 9.87771 7.7976 10.2663 8.39643 10.7267C8.93608 11.1414 9.39367 11.6636 9.88637 12.1374C9.93332 12.1843 9.97577 12.2368 10.0325 12.2995Z" fill="white" />
                                </svg>                            </div>
                            <div className="bg-[#E7F2E5] text-black text-base font-medium h-full px-4 py-2 rounded-r-md shadow w-full text-center">
                                24/7 Support
                            </div>
                        </div>
                        <div className="flex items-center h-[42px]">
                            <div className="bg-[#4CAF50] p-2 rounded-l-md shadow-md h-full ">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.4286 0.676025C11.8515 0.731428 12.2768 0.771351 12.6965 0.844678C14.0774 1.08572 15.3937 1.6081 16.5634 2.37926C16.5911 2.39759 16.616 2.41999 16.6617 2.45544C16.5462 2.5251 16.4397 2.58091 16.3421 2.64975C15.7155 3.09013 15.0885 3.53091 14.4672 3.97902C14.3701 4.04868 14.304 4.07923 14.1815 4.02342C11.0257 2.58009 7.48696 3.26326 5.11611 5.79713C3.90334 7.09258 3.21552 8.64182 3.0702 10.4143C2.77792 13.9841 4.79486 17.1987 8.14907 18.4396C12.6393 20.1009 17.4279 17.4065 18.4823 12.8663C18.8837 11.124 18.6796 9.29735 17.9035 7.68612C18.5877 7.14066 19.3375 6.68275 20.1356 6.32305C20.2862 6.66687 20.4425 6.99522 20.5764 7.33293C22.179 11.3729 21.0063 16.1237 17.7125 18.9578C15.9592 20.465 13.9362 21.3246 11.6261 21.4986C11.5734 21.5065 11.5213 21.5182 11.4702 21.5336H10.2472C10.1892 21.5179 10.1304 21.5058 10.0709 21.4973C7.9715 21.3344 6.08396 20.6141 4.43482 19.3077C2.34727 17.6538 1.0553 15.5097 0.588727 12.881C0.520149 12.4952 0.481369 12.1045 0.428711 11.7159V10.4937C0.460143 10.2322 0.486676 9.97027 0.523414 9.70914C0.818954 7.60383 1.66271 5.7458 3.08448 4.16519C4.69852 2.3703 6.6979 1.25042 9.08263 0.838975C9.46838 0.772166 9.85821 0.730614 10.2472 0.676025H11.4286Z" fill="white" />
                                    <path d="M10.0325 12.2995C10.2525 11.7952 10.4407 11.3092 10.6726 10.8432C12.3001 7.54345 14.6934 4.97455 17.9549 3.24361C18.4623 2.97434 19.002 2.76495 19.5302 2.53641C19.9347 2.36165 20.3413 2.33273 20.6968 2.64152C21.0777 2.97393 21.1867 3.41553 21.1026 3.89867C21.0209 4.3643 20.7372 4.67268 20.2939 4.83849C18.4803 5.51432 16.9271 6.58449 15.5996 7.98016C13.6402 10.0382 12.3409 12.4491 11.7678 15.2412C11.7474 15.3406 11.7319 15.4412 11.7147 15.5414C11.6249 16.071 11.3065 16.3969 10.7881 16.4825C10.208 16.579 9.71085 16.3688 9.46837 15.9048C9.04262 15.0901 8.5589 14.3161 7.94455 13.6276C7.2261 12.8285 6.36656 12.168 5.40879 11.6791C5.09611 11.5162 4.83241 11.3125 4.74954 10.9503C4.63116 10.4326 4.82343 10.0134 5.20836 9.68135C5.5933 9.34934 6.04355 9.2642 6.47788 9.5074C7.13835 9.87771 7.7976 10.2663 8.39643 10.7267C8.93608 11.1414 9.39367 11.6636 9.88637 12.1374C9.93332 12.1843 9.97577 12.2368 10.0325 12.2995Z" fill="white" />
                                </svg>                            </div>

                            <div className="bg-[#E7F2E5] text-black text-base font-medium h-full px-4 py-2 rounded-r-md shadow w-full text-center">
                                Quality Workmanship
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative bg-[#374932] text-white py-16 md:pb-[120px] overflow-hidden" data-aos="zoom-in-up">
                <img
                    src="/assets/images/3rdsection.png"
                    alt="Layout Background"
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[300px] md:w-[600px] z-0 pointer-events-none"
                />

                <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-5xl text-black">3400+</h2>
                        <p className="mt-2 text-[#4CAF50] font-instrument font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
                            Septic Systems Serviced
                        </p>

                        <span className="block mt-2 text-gray-500 font-instrument text-sm sm:text-base md:text-lg">
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </span>

                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg md:relative md:top-[96px]">
                        <h2 className="text-5xl text-black">6820</h2>
                        <p className="mt-2 text-[#4CAF50] font-instrument font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
                            Satisfied Customers
                        </p>

                        <span className="block mt-2 text-gray-500 font-instrument text-sm sm:text-base md:text-lg">
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </span>

                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-5xl text-black">270+</h2>
                        <p className="mt-2 text-[#4CAF50] font-instrument font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
                            Advanced Equipment
                        </p>
                        <span className="block mt-2 text-gray-500 font-instrument text-sm sm:text-base md:text-lg">
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </span>

                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg md:relative md:top-[96px]">
                        <h2 className="text-5xl text-black">3568</h2>
                        <p className="mt-2 text-[#4CAF50] font-instrument font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
                            System Inspections
                        </p>
                        <span className="block mt-2 text-gray-500 font-instrument text-sm sm:text-base md:text-lg">
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </span>

                    </div>
                </div>
            </section>

            <section className="bg-white py-16" data-aos="zoom-in-down">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    <img src="/assets/images/About/AboutUSImage.png" alt="Team working" className="rounded-lg" />

                    <div>
                        <h2 className="font-instrument font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
                            Who We Are
                        </h2>


                        <p className="text-gray-600 mb-4 flex items-center gap-2">
                            <img src="/assets/images/About/Whoweare.png" alt="Error" />
                            <span
                                className="text-xl sm:text-lg md:text-xl lg:text-2xl ms-4 text-gray-800 font-semibold font-instrument"
                                style={{
                                    fontWeight: 600,
                                    lineHeight: '140%',
                                }}
                            >
                                We're in this business since 2011 and we provide the best services.
                            </span>


                        </p>

                        <p className="text-gray-600 mb-4 text-cxl">
                            Evergreen Septics is a team of highly skilled professionals dedicated to ensuring the health and efficiency of your septic system. We understand that proper maintenance and timely service are crucial to keeping your property safe and environmentally friendly. Our mission is to offer affordable, high-quality, and sustainable septic services while maintaining the highest industry standards.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                            <div>
                                <div className="flex items-center gap-2 text-green-600 font-semibold text-lg">
                                    <span><MdAccessTime className="text-xl" /></span> Expert Septic Professionals
                                </div>
                                <p className="text-gray-600 mt-1 text-sm font-instrument">
                                    Our team consists of experienced and certified septic specialists who ensure efficient and reliable service. We provide top-tier septic solutions across residential and commercial properties.
                                </p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 text-green-600 font-semibold text-lg">
                                    <span><MdAccessTime className="text-xl" /></span> Maintenance & Repairs
                                </div>
                                <p className="text-gray-600 mt-1 text-sm font-instrument">
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
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-instrument font-medium text-center text-white mb-10">
                        What We Do
                    </h2>

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
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-instrument font-medium mb-4">
                            Why Choose Us
                        </h2>


                        <p className="text-gray-600 mb-4 text-cxl">
                            At Evergreen Septics, we take pride in offering reliable, efficient, and environmentally responsible septic solutions. Our commitment to quality and customer satisfaction sets us apart. Here’s why homeowners and businesses trust us:
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-8 text-sm text-center">
                            <div className="flex items-center">
                                <div className="bg-[#E8F3E6] p-2 rounded-l-md shadow-md">
                                    <MdAccessTime className="text-[#3F503B] text-lg" />
                                </div>
                                <div className="bg-[#5D7757] text-white text-base font-medium px-4 py-2 rounded-r-md shadow w-full text-center">
                                    Eco-Friendly Solutions
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="bg-[#E8F3E6] p-2 rounded-l-md shadow-md">
                                    <MdAccessTime className="text-[#3F503B] text-lg" />
                                </div>
                                <div className="bg-[#5D7757] text-white text-base font-medium px-4 py-2 rounded-r-md shadow w-full text-center">
                                    Affordable Pricing
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="bg-[#E8F3E6] p-2 rounded-l-md shadow-md">
                                    <MdAccessTime className="text-[#3F503B] text-lg" />
                                </div>
                                <div className="bg-[#5D7757] text-white text-base font-medium px-4 py-2 rounded-r-md shadow w-full text-center">
                                    Advanced Technology
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="bg-[#E8F3E6] p-2 rounded-l-md shadow-md">
                                    <MdAccessTime className="text-[#3F503B] text-lg" />
                                </div>
                                <div className="bg-[#5D7757] text-white text-base font-medium px-4 py-2 rounded-r-md shadow w-full text-left">
                                    Customer Satisfaction
                                </div>
                            </div>

                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                            <div className="transform rotate-2 bg-white shadow-lg overflow-hidden">
                                <img src="/assets/images/About/Image1AboutSection.png" alt="Card 1" className="w-full h-48 object-cover shadow-md" />
                            </div>
                            <div className="transform rotate-2 bg-white shadow-lg overflow-hidden">
                                <img src="/assets/images/About/Image2AboutSection.png" alt="Card 2" className="w-full h-48 object-cover shadow-md" />
                            </div>
                            <div className="transform rotate-2 bg-white shadow-lg overflow-hidden">
                                <img src="assets/images/About/Image3AboutSection.png" alt="Card 3" className="w-full h-48 object-cover shadow-md" />
                            </div>
                        </div>
                    </div>
                    <img src="/assets/images/About/AboutUSImage.png" alt="Team working" className="rounded-lg" />
                </div>
            </section>

            <section className='max-w-4xl mx-auto p-6 mt-10 mb-10 font-sans' data-aos="fade-up">
                <div className="bg-[#F0F0F0] rounded-lg p-4 md:p-6 mb-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">

                        <div className="flex items-start p-3 rounded-md w-full md:w-auto bg-[#F0F0F0]">
                            <div className="bg-[#e9f3e6] p-2 rounded-md mr-3 flex-shrink-0">
                                <Mail className="h-7 w-7 text-[#3F503B]" />
                            </div>
                            <div className="flex flex-col w-full overflow-hidden">
                                <div className="font-semibold text-base md:text-lg">
                                    Mail Us
                                </div>
                                <Link 
                                        href="mailto:evergreensepticservicellc@gmail.com"
                                        className="text-gray-700 text-sm md:text-base break-words overflow-wrap break-word w-full">
                                    evergreensepticservicellc@gmail.com
                                </Link>
        
                            </div>
                        </div>


                        <div className="flex items-center p-3 rounded-md w-full md:w-auto">
                            <div className="bg-[#e9f3e6] p-2 rounded-md mr-3">
                                <Phone className="h-7 w-7 text-[#3F503B]" />
                            </div>
                            <div>
                                <div className="font-semibold text-base md:text-lg">Call Us</div>
                                <Link href="tel:+1 262-248-4711" className="text-gray-700 text-sm md:text-base">+1 262-248-4711</Link>
                            </div>
                        </div>

                        <Link href="/contact-us" className="w-full md:w-auto">
                            <Button className="w-full md:w-auto bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md flex items-center justify-center gap-2">
                                <Rocket className="h-5 w-5" /> GET A FREE QUOTE
                            </Button>
                        </Link>

                    </div>
                </div>


                <div className="text-center font-inter font-medium text-base sm:text-lg md:text-[24px] leading-[26px] sm:leading-[28px] md:leading-[30px] text-gray-700">
                    <p>Phone: 262-248-4711 (during normal business hours, Monday-Friday, 8 AM to 4 PM)</p>
                    <p>Emergency Number: 262-949-3555</p>
                </div>

            </section>

            <section>
                <div className="relative" data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <div className="relative h-[500px] w-full">
                        <Image
                            src="/assets/images/Banner/bgImage.png"
                            alt="Septic system maintenance"
                            fill
                            className="object-cover brightness-[0.85]"
                            priority
                        />

                        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 hidden md:block">
                            <svg width="200" height="200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M15.6947 13.7H15.7037M15.6947 16.7H15.7037M11.9955 13.7H12.0045M11.9955 16.7H12.0045M8.29431 13.7H8.30329M8.29431 16.7H8.30329"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        {/* Hero Content */}
                        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-16">
                            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl max-w-3xl leading-tight font-instrument font-medium">
                                Maintain your septic system with our reliable and efficient solutions.
                            </h1>

                            <Link href="/contact-us">
                                <div className="mt-8">
                                    <Button className="bg-red-500 cursor-pointer hover:bg-red-600 text-white px-6 py-6 rounded-md text-[24px] font-instrument font-bold leading-[100%] md:text-[24px]">
                                        <Rocket className="mr-2 h-5 w-5" />
                                        GET A FREE QUOTE
                                    </Button>

                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="relative mx-auto max-w-4xl -mt-16 px-4">
                        <div className="bg-white rounded-lg shadow-lg p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div className="flex flex-col">
                                <span className="text-3xl md:text-4xl font-bold text-gray-800">3400+</span>
                                <span className="text-sm text-gray-500 mt-1 font-instrument">Complete Projects</span>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-3xl md:text-4xl font-bold text-gray-800">6,820</span>
                                <span className="text-sm text-gray-500 mt-1 font-instrument">Happy Clients</span>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-3xl md:text-4xl font-bold text-gray-800">270+</span>
                                <span className="text-sm text-gray-500 mt-1 font-instrument">Dealer Equipments</span>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-3xl md:text-4xl font-bold text-gray-800">15+</span>
                                <span className="text-sm text-gray-500 mt-1 font-instrument">Years of Experience</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative bg-white py-16" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                <div className="absolute top-0 right-0 z-0">
                    <img src="/assets/images/Union.png" alt="Design" className="w-[300px] md:h-[165px]" />
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <p className="text-sm font-instrument font-bold text-[#3F503B] uppercase mb-2 text-[20px] md:text-[20px]">
                        Testimonials
                    </p>

                    <h2 className="font-instrument font-normal text-[32px] text-black mb-12 md:text-[48px] lg:text-[54px]">
                        What Our Clients Say
                    </h2>


                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="group bg-white border border-transparent p-6 rounded-lg shadow-sm hover:bg-[#e8f3e6] hover:border-[#3F503B] hover:shadow-md transition-all duration-300">
                            <h3 className="font-gilroy font-bold text-[#000000] text-[20.38px] sm:text-[18px] leading-[25.94px] group-hover:text-[#3F503B] mb-3">
                                The Best Septic Services
                            </h3>

                            <p className="font-instrument text-[#696969] text-[16.67px] leading-[27.79px] mb-6 sm:text-[14px] sm:leading-[22px]">
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
                            <h3 className="font-gilroy font-bold text-[#000000] text-[20.38px] sm:text-[18px] leading-[25.94px] group-hover:text-[#3F503B] mb-3">
                                The Best Septic Services
                            </h3>
                            <p className="font-instrument text-[#696969] text-[16.67px] leading-[27.79px] mb-6 sm:text-[14px] sm:leading-[22px]">
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
                            <h3 className="font-gilroy font-bold text-[#000000] text-[20.38px] sm:text-[18px] leading-[25.94px] group-hover:text-[#3F503B] mb-3">
                                The Best Septic Services
                            </h3>
                            <p className="font-instrument text-[#696969] text-[16.67px] leading-[27.79px] mb-6 sm:text-[14px] sm:leading-[22px]">
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