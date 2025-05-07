import Link from "next/link"

export default function Footer() {
  return (
    <>
     <footer className="bg-[#2a3b2a] text-white px-8 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="flex items-center gap-2 mb-4">
                <svg width="60" height="60" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_105_240" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="72" height="72">
                    <rect width="71.7832" height="71.7832" fill="white" />
                  </mask>
                  <g mask="url(#mask0_105_240)">
                    <path d="M38.8826 65.8018V56.8289H50.8464V65.8018H38.8826ZM20.9368 65.8018V53.8379H0L11.5152 35.8921H5.98193L26.9187 5.98242L47.8555 35.8921H42.3222L53.9122 53.8379H32.9006V65.8018H20.9368ZM57.5761 53.8379L47.8555 38.8831H53.6131L37.761 16.2265L44.8645 5.98242L65.8013 35.8921H60.268L71.7832 53.8379H57.5761Z" fill="white" />
                  </g>
                </svg>

                <div>
                  <Link href='/'>
                    <div className="text-xl font-bold tracking-wide">EVERGREEN</div>
                    <div className="text-sm">Septic Services LLC</div>
                  </Link>
                </div>
              </div>

              <p className="text-sm mb-4">
                Providing reliable and professional septic services to keep your system running smoothly. Contact us for
                expert maintenance, repairs, and installations. Serving your community with trust and efficiency.
              </p>
            </div>

            {/* Middle section - Contact information */}
            <div className="md:w-1/3 flex justify-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-[#2a3b2a] p-2 rounded-md border border-[#3a4b3a]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Mail Us</div>
                    <a href="mailto:info@evergreenseptic.com" className="text-sm hover:underline">
                      info@evergreenseptic.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-[#2a3b2a] p-2 rounded-md border border-[#3a4b3a]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Call Us</div>
                    <Link href="tel:2622484711" className="text-sm hover:underline">
                      262-248-4711
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-[#2a3b2a] p-2 rounded-md border border-[#3a4b3a]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm">Lake Geneva, Wisconsin</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right section - Links */}
            <div className="md:w-1/3 flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h3 className="text-lg font-medium mb-4">Explore</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/about-us" className="hover:underline">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="hover:underline">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/frequently-asked-questions" className="hover:underline">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-lg font-medium mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/our-services" className="hover:underline">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/testimonial" className="hover:underline">
                      Testimonial
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us" className="hover:underline">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright section */}
          <div className="mt-8 pt-4 border-t border-[#3a4b3a] text-center text-sm">
            <div className="flex flex-col lg:flex-row w-full items-center mx-auto justify-between max-w-[450px]">
              <p>© Copyright {new Date().getFullYear()} Evergreen Septic Service LLC.</p>
              |
              <p>All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}