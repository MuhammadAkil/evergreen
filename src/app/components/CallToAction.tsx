import { Mail, Phone, CheckSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Link from "next/link";

export default function CallToAction() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  return (
    <>
     <section className='max-w-4xl mx-auto p-6 mt-10 mb-10 font-sans'  data-aos="fade-down">
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
                <Link href="mailto:evergreensepticservicellc@gmail.com" className="text-gray-700 text-sm md:text-base break-words overflow-wrap break-word w-full">
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
                <Link href='tel:+1 262-248-4711' className="text-gray-700 text-sm md:text-base">+1 262-248-4711</Link>
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
          <p> (during normal business hours, Monday-Friday, 8 AM to 4 PM)</p>
         <div className="flex justify-center gap-3 mt-2">
           <p>Emergency Number:</p><Link href="tel:+1262-949-3555" className="hover:underline">1 262-949-3555</Link>
        </div>
        </div>

      </section>

    </>
  )
}
