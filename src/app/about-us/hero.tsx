'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { MdCheckCircle } from 'react-icons/md';
import { FaPumpSoap, FaTools, FaSearch, FaHardHat, FaLeaf, FaBell, FaCheckCircle } from 'react-icons/fa';
import { Mail, Phone, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

export default function AboutUsClient() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [progress, setProgress] = useState(0);

    const onScroll = useCallback(() => {
        if (!emblaApi) return;
        const scrollProgress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
        setProgress(scrollProgress);
    }, [emblaApi]);

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });

        const intervalId = setInterval(() => {
            if (emblaApi) {
                emblaApi.scrollNext();
            }
        }, 3000);

        if (emblaApi) {
            emblaApi.on('scroll', onScroll);
            emblaApi.on('reInit', onScroll);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [emblaApi, onScroll]);

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
                            <div className="bg-[#3f503b] text-white text-base font-medium h-full px-4 py-2 rounded-r-md shadow w-full text-center">
                                Eco-Friendly Solutions
                            </div>
                        </div>
                        <div className="flex items-center h-[42px]">
                            <div className="bg-[#4CAF50] p-2 rounded-l-md shadow-md h-full ">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.4286 0.676025C11.8515 0.731428 12.2768 0.771351 12.6965 0.844678C14.0774 1.08572 15.3937 1.6081 16.5634 2.37926C16.5911 2.39759 16.616 2.41999 16.6617 2.45544C16.5462 2.5251 16.4397 2.58091 16.3421 2.64975C15.7155 3.09013 15.0885 3.53091 14.4672 3.97902C14.3701 4.04868 14.304 4.07923 14.1815 4.02342C11.0257 2.58009 7.48696 3.26326 5.11611 5.79713C3.90334 7.09258 3.21552 8.64182 3.0702 10.4143C2.77792 13.9841 4.79486 17.1987 8.14907 18.4396C12.6393 20.1009 17.4279 17.4065 18.4823 12.8663C18.8837 11.124 18.6796 9.29735 17.9035 7.68612C18.5877 7.14066 19.3375 6.68275 20.1356 6.32305C20.2862 6.66687 20.4425 6.99522 20.5764 7.33293C22.179 11.3729 21.0063 16.1237 17.7125 18.9578C15.9592 20.465 13.9362 21.3246 11.6261 21.4986C11.5734 21.5065 11.5213 21.5182 11.4702 21.5336H10.2472C10.1892 21.5179 10.1304 21.5058 10.0709 21.4973C7.9715 21.3344 6.08396 20.6141 4.43482 19.3077C2.34727 17.6538 1.0553 15.5097 0.588727 12.881C0.520149 12.4952 0.481369 12.1045 0.428711 11.7159V10.4937C0.460143 10.2322 0.486676 9.97027 0.523414 9.70914C0.818954 7.60383 1.66271 5.7458 3.08448 4.16519C4.69852 2.3703 6.6979 1.25042 9.08263 0.838975C9.46838 0.772166 9.85821 0.730614 10.2472 0.676025H11.4286Z" fill="white" />
                                    <path d="M10.0325 12.2995C10.2525 11.7952 10.4407 11.3092 10.6726 10.8432C12.3001 7.54345 14.6934 4.97455 17.9549 3.24361C18.4623 2.97434 19.002 2.76495 19.5302 2.53641C19.9347 2.36165 20.3413 2.33273 20.6968 2.64152C21.0777 2.97393 21.1867 3.41553 21.1026 3.89867C21.0209 4.3643 20.7372 4.67268 20.2939 4.83849C18.4803 5.51432 16.9271 6.58449 15.5996 7.98016C13.6402 10.0382 12.3409 12.4491 11.7678 15.2412C11.7474 15.3406 11.7319 15.4412 11.7147 15.5414C11.6249 16.071 11.3065 16.3969 10.7881 16.4825C10.208 16.579 9.71085 16.3688 9.46837 15.9048C9.04262 15.0901 8.5589 14.3161 7.94455 13.6276C7.2261 12.8285 6.36656 12.168 5.40879 11.6791C5.09611 11.5162 4.83241 11.3125 4.74954 10.9503C4.63116 10.4326 4.82343 10.0134 5.20836 9.68135C5.5933 9.34934 6.04355 9.2642 6.47788 9.5074C7.13835 9.87771 7.7976 10.2663 8.39643 10.7267C8.93608 11.1414 9.39367 11.6636 9.88637 12.1374C9.93332 12.1843 9.97577 12.2368 10.0325 12.2995Z" fill="white" />
                                </svg>                            </div>
                            <div className="bg-[#3f503b] text-white text-base font-medium h-full px-4 py-2 rounded-r-md shadow w-full text-center">
                                Affordable Pricing
                            </div>
                        </div>
                        <div className="flex items-center h-[42px]">
                            <div className="bg-[#4CAF50] p-2 rounded-l-md shadow-md h-full ">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.4286 0.676025C11.8515 0.731428 12.2768 0.771351 12.6965 0.844678C14.0774 1.08572 15.3937 1.6081 16.5634 2.37926C16.5911 2.39759 16.616 2.41999 16.6617 2.45544C16.5462 2.5251 16.4397 2.58091 16.3421 2.64975C15.7155 3.09013 15.0885 3.53091 14.4672 3.97902C14.3701 4.04868 14.304 4.07923 14.1815 4.02342C11.0257 2.58009 7.48696 3.26326 5.11611 5.79713C3.90334 7.09258 3.21552 8.64182 3.0702 10.4143C2.77792 13.9841 4.79486 17.1987 8.14907 18.4396C12.6393 20.1009 17.4279 17.4065 18.4823 12.8663C18.8837 11.124 18.6796 9.29735 17.9035 7.68612C18.5877 7.14066 19.3375 6.68275 20.1356 6.32305C20.2862 6.66687 20.4425 6.99522 20.5764 7.33293C22.179 11.3729 21.0063 16.1237 17.7125 18.9578C15.9592 20.465 13.9362 21.3246 11.6261 21.4986C11.5734 21.5065 11.5213 21.5182 11.4702 21.5336H10.2472C10.1892 21.5179 10.1304 21.5058 10.0709 21.4973C7.9715 21.3344 6.08396 20.6141 4.43482 19.3077C2.34727 17.6538 1.0553 15.5097 0.588727 12.881C0.520149 12.4952 0.481369 12.1045 0.428711 11.7159V10.4937C0.460143 10.2322 0.486676 9.97027 0.523414 9.70914C0.818954 7.60383 1.66271 5.7458 3.08448 4.16519C4.69852 2.3703 6.6979 1.25042 9.08263 0.838975C9.46838 0.772166 9.85821 0.730614 10.2472 0.676025H11.4286Z" fill="white" />
                                    <path d="M10.0325 12.2995C10.2525 11.7952 10.4407 11.3092 10.6726 10.8432C12.3001 7.54345 14.6934 4.97455 17.9549 3.24361C18.4623 2.97434 19.002 2.76495 19.5302 2.53641C19.9347 2.36165 20.3413 2.33273 20.6968 2.64152C21.0777 2.97393 21.1867 3.41553 21.1026 3.89867C21.0209 4.3643 20.7372 4.67268 20.2939 4.83849C18.4803 5.51432 16.9271 6.58449 15.5996 7.98016C13.6402 10.0382 12.3409 12.4491 11.7678 15.2412C11.7474 15.3406 11.7319 15.4412 11.7147 15.5414C11.6249 16.071 11.3065 16.3969 10.7881 16.4825C10.208 16.579 9.71085 16.3688 9.46837 15.9048C9.04262 15.0901 8.5589 14.3161 7.94455 13.6276C7.2261 12.8285 6.36656 12.168 5.40879 11.6791C5.09611 11.5162 4.83241 11.3125 4.74954 10.9503C4.63116 10.4326 4.82343 10.0134 5.20836 9.68135C5.5933 9.34934 6.04355 9.2642 6.47788 9.5074C7.13835 9.87771 7.7976 10.2663 8.39643 10.7267C8.93608 11.1414 9.39367 11.6636 9.88637 12.1374C9.93332 12.1843 9.97577 12.2368 10.0325 12.2995Z" fill="white" />
                                </svg>                            </div>
                            <div className="bg-[#3f503b] text-white text-base font-medium h-full px-4 py-2 rounded-r-md shadow w-full text-center">
                                Reliable Service
                            </div>
                        </div>
                        <div className="flex items-center h-[42px]">
                            <div className="bg-[#4CAF50] p-2 rounded-l-md shadow-md h-full ">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.4286 0.676025C11.8515 0.731428 12.2768 0.771351 12.6965 0.844678C14.0774 1.08572 15.3937 1.6081 16.5634 2.37926C16.5911 2.39759 16.616 2.41999 16.6617 2.45544C16.5462 2.5251 16.4397 2.58091 16.3421 2.64975C15.7155 3.09013 15.0885 3.53091 14.4672 3.97902C14.3701 4.04868 14.304 4.07923 14.1815 4.02342C11.0257 2.58009 7.48696 3.26326 5.11611 5.79713C3.90334 7.09258 3.21552 8.64182 3.0702 10.4143C2.77792 13.9841 4.79486 17.1987 8.14907 18.4396C12.6393 20.1009 17.4279 17.4065 18.4823 12.8663C18.8837 11.124 18.6796 9.29735 17.9035 7.68612C18.5877 7.14066 19.3375 6.68275 20.1356 6.32305C20.2862 6.66687 20.4425 6.99522 20.5764 7.33293C22.179 11.3729 21.0063 16.1237 17.7125 18.9578C15.9592 20.465 13.9362 21.3246 11.6261 21.4986C11.5734 21.5065 11.5213 21.5182 11.4702 21.5336H10.2472C10.1892 21.5179 10.1304 21.5058 10.0709 21.4973C7.9715 21.3344 6.08396 20.6141 4.43482 19.3077C2.34727 17.6538 1.0553 15.5097 0.588727 12.881C0.520149 12.4952 0.481369 12.1045 0.428711 11.7159V10.4937C0.460143 10.2322 0.486676 9.97027 0.523414 9.70914C0.818954 7.60383 1.66271 5.7458 3.08448 4.16519C4.69852 2.3703 6.6979 1.25042 9.08263 0.838975C9.46838 0.772166 9.85821 0.730614 10.2472 0.676025H11.4286Z" fill="white" />
                                    <path d="M10.0325 12.2995C10.2525 11.7952 10.4407 11.3092 10.6726 10.8432C12.3001 7.54345 14.6934 4.97455 17.9549 3.24361C18.4623 2.97434 19.002 2.76495 19.5302 2.53641C19.9347 2.36165 20.3413 2.33273 20.6968 2.64152C21.0777 2.97393 21.1867 3.41553 21.1026 3.89867C21.0209 4.3643 20.7372 4.67268 20.2939 4.83849C18.4803 5.51432 16.9271 6.58449 15.5996 7.98016C13.6402 10.0382 12.3409 12.4491 11.7678 15.2412C11.7474 15.3406 11.7319 15.4412 11.7147 15.5414C11.6249 16.071 11.3065 16.3969 10.7881 16.4825C10.208 16.579 9.71085 16.3688 9.46837 15.9048C9.04262 15.0901 8.5589 14.3161 7.94455 13.6276C7.2261 12.8285 6.36656 12.168 5.40879 11.6791C5.09611 11.5162 4.83241 11.3125 4.74954 10.9503C4.63116 10.4326 4.82343 10.0134 5.20836 9.68135C5.5933 9.34934 6.04355 9.2642 6.47788 9.5074C7.13835 9.87771 7.7976 10.2663 8.39643 10.7267C8.93608 11.1414 9.39367 11.6636 9.88637 12.1374C9.93332 12.1843 9.97577 12.2368 10.0325 12.2995Z" fill="white" />
                                </svg>                            </div>
                            <div className="bg-[#3f503b] text-white text-base font-medium h-full px-4 py-2 rounded-r-md shadow w-full text-center">
                                Expert Team
                            </div>
                        </div>
                        <div className="flex items-center h-[42px]">
                            <div className="bg-[#4CAF50] p-2 rounded-l-md shadow-md h-full ">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.4286 0.676025C11.8515 0.731428 12.2768 0.771351 12.6965 0.844678C14.0774 1.08572 15.3937 1.6081 16.5634 2.37926C16.5911 2.39759 16.616 2.41999 16.6617 2.45544C16.5462 2.5251 16.4397 2.58091 16.3421 2.64975C15.7155 3.09013 15.0885 3.53091 14.4672 3.97902C14.3701 4.04868 14.304 4.07923 14.1815 4.02342C11.0257 2.58009 7.48696 3.26326 5.11611 5.79713C3.90334 7.09258 3.21552 8.64182 3.0702 10.4143C2.77792 13.9841 4.79486 17.1987 8.14907 18.4396C12.6393 20.1009 17.4279 17.4065 18.4823 12.8663C18.8837 11.124 18.6796 9.29735 17.9035 7.68612C18.5877 7.14066 19.3375 6.68275 20.1356 6.32305C20.2862 6.66687 20.4425 6.99522 20.5764 7.33293C22.179 11.3729 21.0063 16.1237 17.7125 18.9578C15.9592 20.465 13.9362 21.3246 11.6261 21.4986C11.5734 21.5065 11.5213 21.5182 11.4702 21.5336H10.2472C10.1892 21.5179 10.1304 21.5058 10.0709 21.4973C7.9715 21.3344 6.08396 20.6141 4.43482 19.3077C2.34727 17.6538 1.0553 15.5097 0.588727 12.881C0.520149 12.4952 0.481369 12.1045 0.428711 11.7159V10.4937C0.460143 10.2322 0.486676 9.97027 0.523414 9.70914C0.818954 7.60383 1.66271 5.7458 3.08448 4.16519C4.69852 2.3703 6.6979 1.25042 9.08263 0.838975C9.46838 0.772166 9.85821 0.730614 10.2472 0.676025H11.4286Z" fill="white" />
                                    <path d="M10.0325 12.2995C10.2525 11.7952 10.4407 11.3092 10.6726 10.8432C12.3001 7.54345 14.6934 4.97455 17.9549 3.24361C18.4623 2.97434 19.002 2.76495 19.5302 2.53641C19.9347 2.36165 20.3413 2.33273 20.6968 2.64152C21.0777 2.97393 21.1867 3.41553 21.1026 3.89867C21.0209 4.3643 20.7372 4.67268 20.2939 4.83849C18.4803 5.51432 16.9271 6.58449 15.5996 7.98016C13.6402 10.0382 12.3409 12.4491 11.7678 15.2412C11.7474 15.3406 11.7319 15.4412 11.7147 15.5414C11.6249 16.071 11.3065 16.3969 10.7881 16.4825C10.208 16.579 9.71085 16.3688 9.46837 15.9048C9.04262 15.0901 8.5589 14.3161 7.94455 13.6276C7.2261 12.8285 6.36656 12.168 5.40879 11.6791C5.09611 11.5162 4.83241 11.3125 4.74954 10.9503C4.63116 10.4326 4.82343 10.0134 5.20836 9.68135C5.5933 9.34934 6.04355 9.2642 6.47788 9.5074C7.13835 9.87771 7.7976 10.2663 8.39643 10.7267C8.93608 11.1414 9.39367 11.6636 9.88637 12.1374C9.93332 12.1843 9.97577 12.2368 10.0325 12.2995Z" fill="white" />
                                </svg>                            </div>
                            <div className="bg-[#3f503b] text-white text-base font-medium h-full px-4 py-2 rounded-r-md shadow w-full text-center">
                                Advanced Technology
                            </div>
                        </div>
                        <div className="flex items-center h-[42px]">
                            <div className="bg-[#4CAF50] p-2 rounded-l-md shadow-md h-full ">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.4286 0.676025C11.8515 0.731428 12.2768 0.771351 12.6965 0.844678C14.0774 1.08572 15.3937 1.6081 16.5634 2.37926C16.5911 2.39759 16.616 2.41999 16.6617 2.45544C16.5462 2.5251 16.4397 2.58091 16.3421 2.64975C15.7155 3.09013 15.0885 3.53091 14.4672 3.97902C14.3701 4.04868 14.304 4.07923 14.1815 4.02342C11.0257 2.58009 7.48696 3.26326 5.11611 5.79713C3.90334 7.09258 3.21552 8.64182 3.0702 10.4143C2.77792 13.9841 4.79486 17.1987 8.14907 18.4396C12.6393 20.1009 17.4279 17.4065 18.4823 12.8663C18.8837 11.124 18.6796 9.29735 17.9035 7.68612C18.5877 7.14066 19.3375 6.68275 20.1356 6.32305C20.2862 6.66687 20.4425 6.99522 20.5764 7.33293C22.179 11.3729 21.0063 16.1237 17.7125 18.9578C15.9592 20.465 13.9362 21.3246 11.6261 21.4986C11.5734 21.5065 11.5213 21.5182 11.4702 21.5336H10.2472C10.1892 21.5179 10.1304 21.5058 10.0709 21.4973C7.9715 21.3344 6.08396 20.6141 4.43482 19.3077C2.34727 17.6538 1.0553 15.5097 0.588727 12.881C0.520149 12.4952 0.481369 12.1045 0.428711 11.7159V10.4937C0.460143 10.2322 0.486676 9.97027 0.523414 9.70914C0.818954 7.60383 1.66271 5.7458 3.08448 4.16519C4.69852 2.3703 6.6979 1.25042 9.08263 0.838975C9.46838 0.772166 9.85821 0.730614 10.2472 0.676025H11.4286Z" fill="white" />
                                    <path d="M10.0325 12.2995C10.2525 11.7952 10.4407 11.3092 10.6726 10.8432C12.3001 7.54345 14.6934 4.97455 17.9549 3.24361C18.4623 2.97434 19.002 2.76495 19.5302 2.53641C19.9347 2.36165 20.3413 2.33273 20.6968 2.64152C21.0777 2.97393 21.1867 3.41553 21.1026 3.89867C21.0209 4.3643 20.7372 4.67268 20.2939 4.83849C18.4803 5.51432 16.9271 6.58449 15.5996 7.98016C13.6402 10.0382 12.3409 12.4491 11.7678 15.2412C11.7474 15.3406 11.7319 15.4412 11.7147 15.5414C11.6249 16.071 11.3065 16.3969 10.7881 16.4825C10.208 16.579 9.71085 16.3688 9.46837 15.9048C9.04262 15.0901 8.5589 14.3161 7.94455 13.6276C7.2261 12.8285 6.36656 12.168 5.40879 11.6791C5.09611 11.5162 4.83241 11.3125 4.74954 10.9503C4.63116 10.4326 4.82343 10.0134 5.20836 9.68135C5.5933 9.34934 6.04355 9.2642 6.47788 9.5074C7.13835 9.87771 7.7976 10.2663 8.39643 10.7267C8.93608 11.1414 9.39367 11.6636 9.88637 12.1374C9.93332 12.1843 9.97577 12.2368 10.0325 12.2995Z" fill="white" />
                                </svg>                            </div>
                            <div className="bg-[#3f503b] text-white text-base font-medium h-full px-4 py-2 rounded-r-md shadow w-full text-center">
                                Customer Satisfaction
                            </div>
                        </div>
                        <div className="flex items-center h-[42px]">
                            <div className="bg-[#4CAF50] p-2 rounded-l-md shadow-md h-full ">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.4286 0.676025C11.8515 0.731428 12.2768 0.771351 12.6965 0.844678C14.0774 1.08572 15.3937 1.6081 16.5634 2.37926C16.5911 2.39759 16.616 2.41999 16.6617 2.45544C16.5462 2.5251 16.4397 2.58091 16.3421 2.64975C15.7155 3.09013 15.0885 3.53091 14.4672 3.97902C14.3701 4.04868 14.304 4.07923 14.1815 4.02342C11.0257 2.58009 7.48696 3.26326 5.11611 5.79713C3.90334 7.09258 3.21552 8.64182 3.0702 10.4143C2.77792 13.9841 4.79486 17.1987 8.14907 18.4396C12.6393 20.1009 17.4279 17.4065 18.4823 12.8663C18.8837 11.124 18.6796 9.29735 17.9035 7.68612C18.5877 7.14066 19.3375 6.68275 20.1356 6.32305C20.2862 6.66687 20.4425 6.99522 20.5764 7.33293C22.179 11.3729 21.0063 16.1237 17.7125 18.9578C15.9592 20.465 13.9362 21.3246 11.6261 21.4986C11.5734 21.5065 11.5213 21.5182 11.4702 21.5336H10.2472C10.1892 21.5179 10.1304 21.5058 10.0709 21.4973C7.9715 21.3344 6.08396 20.6141 4.43482 19.3077C2.34727 17.6538 1.0553 15.5097 0.588727 12.881C0.520149 12.4952 0.481369 12.1045 0.428711 11.7159V10.4937C0.460143 10.2322 0.486676 9.97027 0.523414 9.70914C0.818954 7.60383 1.66271 5.7458 3.08448 4.16519C4.69852 2.3703 6.6979 1.25042 9.08263 0.838975C9.46838 0.772166 9.85821 0.730614 10.2472 0.676025H11.4286Z" fill="white" />
                                    <path d="M10.0325 12.2995C10.2525 11.7952 10.4407 11.3092 10.6726 10.8432C12.3001 7.54345 14.6934 4.97455 17.9549 3.24361C18.4623 2.97434 19.002 2.76495 19.5302 2.53641C19.9347 2.36165 20.3413 2.33273 20.6968 2.64152C21.0777 2.97393 21.1867 3.41553 21.1026 3.89867C21.0209 4.3643 20.7372 4.67268 20.2939 4.83849C18.4803 5.51432 16.9271 6.58449 15.5996 7.98016C13.6402 10.0382 12.3409 12.4491 11.7678 15.2412C11.7474 15.3406 11.7319 15.4412 11.7147 15.5414C11.6249 16.071 11.3065 16.3969 10.7881 16.4825C10.208 16.579 9.71085 16.3688 9.46837 15.9048C9.04262 15.0901 8.5589 14.3161 7.94455 13.6276C7.2261 12.8285 6.36656 12.168 5.40879 11.6791C5.09611 11.5162 4.83241 11.3125 4.74954 10.9503C4.63116 10.4326 4.82343 10.0134 5.20836 9.68135C5.5933 9.34934 6.04355 9.2642 6.47788 9.5074C7.13835 9.87771 7.7976 10.2663 8.39643 10.7267C8.93608 11.1414 9.39367 11.6636 9.88637 12.1374C9.93332 12.1843 9.97577 12.2368 10.0325 12.2995Z" fill="white" />
                                </svg>                            </div>
                            <div className="bg-[#3f503b] text-white text-base font-medium h-full px-4 py-2 rounded-r-md shadow w-full text-center">
                                24/7 Support
                            </div>
                        </div>
                        <div className="flex items-center h-[42px]">
                            <div className="bg-[#4CAF50] p-2 rounded-l-md shadow-md h-full ">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.4286 0.676025C11.8515 0.731428 12.2768 0.771351 12.6965 0.844678C14.0774 1.08572 15.3937 1.6081 16.5634 2.37926C16.5911 2.39759 16.616 2.41999 16.6617 2.45544C16.5462 2.5251 16.4397 2.58091 16.3421 2.64975C15.7155 3.09013 15.0885 3.53091 14.4672 3.97902C14.3701 4.04868 14.304 4.07923 14.1815 4.02342C11.0257 2.58009 7.48696 3.26326 5.11611 5.79713C3.90334 7.09258 3.21552 8.64182 3.0702 10.4143C2.77792 13.9841 4.79486 17.1987 8.14907 18.4396C12.6393 20.1009 17.4279 17.4065 18.4823 12.8663C18.8837 11.124 18.6796 9.29735 17.9035 7.68612C18.5877 7.14066 19.3375 6.68275 20.1356 6.32305C20.2862 6.66687 20.4425 6.99522 20.5764 7.33293C22.179 11.3729 21.0063 16.1237 17.7125 18.9578C15.9592 20.465 13.9362 21.3246 11.6261 21.4986C11.5734 21.5065 11.5213 21.5182 11.4702 21.5336H10.2472C10.1892 21.5179 10.1304 21.5058 10.0709 21.4973C7.9715 21.3344 6.08396 20.6141 4.43482 19.3077C2.34727 17.6538 1.0553 15.5097 0.588727 12.881C0.520149 12.4952 0.481369 12.1045 0.428711 11.7159V10.4937C0.460143 10.2322 0.486676 9.97027 0.523414 9.70914C0.818954 7.60383 1.66271 5.7458 3.08448 4.16519C4.69852 2.3703 6.6979 1.25042 9.08263 0.838975C9.46838 0.772166 9.85821 0.730614 10.2472 0.676025H11.4286Z" fill="white" />
                                    <path d="M10.0325 12.2995C10.2525 11.7952 10.4407 11.3092 10.6726 10.8432C12.3001 7.54345 14.6934 4.97455 17.9549 3.24361C18.4623 2.97434 19.002 2.76495 19.5302 2.53641C19.9347 2.36165 20.3413 2.33273 20.6968 2.64152C21.0777 2.97393 21.1867 3.41553 21.1026 3.89867C21.0209 4.3643 20.7372 4.67268 20.2939 4.83849C18.4803 5.51432 16.9271 6.58449 15.5996 7.98016C13.6402 10.0382 12.3409 12.4491 11.7678 15.2412C11.7474 15.3406 11.7319 15.4412 11.7147 15.5414C11.6249 16.071 11.3065 16.3969 10.7881 16.4825C10.208 16.579 9.71085 16.3688 9.46837 15.9048C9.04262 15.0901 8.5589 14.3161 7.94455 13.6276C7.2261 12.8285 6.36656 12.168 5.40879 11.6791C5.09611 11.5162 4.83241 11.3125 4.74954 10.9503C4.63116 10.4326 4.82343 10.0134 5.20836 9.68135C5.5933 9.34934 6.04355 9.2642 6.47788 9.5074C7.13835 9.87771 7.7976 10.2663 8.39643 10.7267C8.93608 11.1414 9.39367 11.6636 9.88637 12.1374C9.93332 12.1843 9.97577 12.2368 10.0325 12.2995Z" fill="white" />
                                </svg>                            </div>
                            <div className="bg-[#3f503b] text-white text-base font-medium h-full px-4 py-2 rounded-r-md shadow w-full text-center">
                                Quality Workmanship
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="relative bg-[#374932] text-white py-16 md:pb-[120px] overflow-hidden"
                data-aos="zoom-in-up"
            >
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
                            Over 3,400 septic systems maintained and repaired with expert care in the Lake Geneva region.
                        </span>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg md:relative md:top-[96px]">
                        <h2 className="text-5xl text-black">6820</h2>
                        <p className="mt-2 text-[#4CAF50] font-instrument font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
                            Satisfied Customers
                        </p>
                        <span className="block mt-2 text-gray-500 font-instrument text-sm sm:text-base md:text-lg">
                            6,820 happy clients trust us for reliable and eco-friendly septic solutions.
                        </span>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-5xl text-black">270+</h2>
                        <p className="mt-2 text-[#4CAF50] font-instrument font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
                            Advanced Equipment
                        </p>
                        <span className="block mt-2 text-gray-500 font-instrument text-sm sm:text-base md:text-lg">
                            Utilizing over 270 advanced tools to ensure efficient and precise septic services.
                        </span>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg md:relative md:top-[96px]">
                        <h2 className="text-5xl text-black">3568</h2>
                        <p className="mt-2 text-[#4CAF50] font-instrument font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
                            System Inspections
                        </p>
                        <span className="block mt-2 text-gray-500 font-instrument text-sm sm:text-base md:text-lg">
                            Conducted 3,568 thorough inspections to keep septic systems compliant and functional.
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
                                    <span><img src='/assets/images/Icon.svg' className='h-7' alt='error' /></span> Expert Septic Professionals
                                </div>
                                <p className="text-gray-600 mt-1 text-sm font-instrument">
                                    Our team consists of experienced and certified septic specialists who ensure efficient and reliable service. We provide top-tier septic solutions across residential and commercial properties.
                                </p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 text-green-600 font-semibold text-lg">
                                    <span><img src='/assets/images/Icon.svg' className='h-7' alt='error' /></span> Maintenance & Repairs
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
                        <div className="bg-[#E8F3E6] hover:bg-white transition-colors shadow-md p-6 rounded-lg w-full max-w-[320px] text-center">
                            <img src='/assets/images/About/Icon1.svg' alt='error' className='mx-auto mb-4' />
                            <h3 className="font-bold mb-2 font-instrument ">Septic Tank Pumping</h3>
                            <p className="text-gray-600 font-instrument ">Prevent overflows with routine maintenance.</p>
                        </div>

                        <div className="bg-[#E8F3E6] hover:bg-white transition-colors shadow-md p-6 rounded-lg w-full max-w-[320px] text-center">
                            <img src='/assets/images/About/Icon2.svg' alt='error' className='mx-auto mb-4' />
                            <h3 className="font-bold mb-2 font-instrument ">Septic System Installation</h3>
                            <p className="text-gray-600 font-instrument ">Professional new & replacement system setup.</p>
                        </div>

                        <div className="bg-[#E8F3E6] hover:bg-white transition-colors shadow-md p-6 rounded-lg w-full max-w-[320px] text-center">
                            <img src='/assets/images/About/Icon3.svg' alt='error' className='mx-auto mb-4' />
                            <h3 className="font-bold mb-2 font-instrument ">Septic System Inspections</h3>
                            <p className="text-gray-600 font-instrument ">Ensure compliance & efficiency.</p>
                        </div>

                        <div className="bg-[#E8F3E6] hover:bg-white transition-colors shadow-md p-6 rounded-lg w-full max-w-[320px] text-center">
                            <img src='/assets/images/About/Icon4.svg' alt='error' className='mx-auto mb-4' />
                            <h3 className="font-bold mb-2 font-instrument ">Septic Repairs</h3>
                            <p className="text-gray-600 font-instrument ">Quick fixes for long-term performance.</p>
                        </div>

                        <div className="bg-[#E8F3E6] hover:bg-white transition-colors shadow-md p-6 rounded-lg w-full max-w-[320px] text-center">
                            <img src='/assets/images/About/Icon5.svg' alt='error' className='mx-auto mb-4' />
                            <h3 className="font-bold mb-2 font-instrument ">Drain Field Restoration</h3>
                            <p className="text-gray-600 font-instrument ">Keep your drainage effective.</p>
                        </div>

                        <div className="bg-[#E8F3E6] hover:bg-white transition-colors shadow-md p-6 rounded-lg w-full max-w-[320px] text-center">
                            <img src='/assets/images/About/Icon6.svg' alt='error' className='mx-auto mb-4' />
                            <h3 className="font-bold mb-2 font-instrument ">Emergency Services</h3>
                            <p className="text-gray-600 font-instrument ">24/7 support for urgent issues.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-16" data-aos="fade-up" data-aos-duration="3000">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-stretch">
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-instrument font-medium mb-4">
                                Why Choose Us
                            </h2>

                            <p className="text-gray-600 mb-3 text-cxl">
                                At Evergreen Septics, we take pride in offering reliable, efficient, and environmentally responsible septic solutions. Our commitment to quality and customer satisfaction sets us apart. Here’s why homeowners and businesses trust us:
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                                {[
                                    "Eco-Friendly Solutions",
                                    "Affordable Pricing",
                                    "Advanced Technology",
                                    "Customer Satisfaction",
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center">
                                        <div className="bg-[#E8F3E6] p-3 rounded-l-md shadow-md flex items-center justify-center">
                                            <FaCheckCircle className="text-[#3F503B] text-lg" />
                                        </div>
                                        <div className="bg-[#5D7757] text-white text-base font-medium h-full px-4 py-2 rounded-r-md shadow w-full text-center">
                                            {item}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                                {[
                                    "/assets/images/About/Image1AboutSection.png",
                                    "/assets/images/About/Image2AboutSection.png",
                                    "assets/images/About/Image3AboutSection.png",
                                ].map((src, idx) => (
                                    <div key={idx} className="transform rotate-2 bg-white shadow-lg overflow-hidden">
                                        <img src={src} alt={`Card ${idx + 1}`} className="w-full h-48 object-cover shadow-md" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="h-full">
                        <img
                            src="/assets/images/About/AboutUSImage.png"
                            alt="Team working"
                            className="rounded-lg h-full w-full object-cover"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}