import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#2a3b2a] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left section - Logo, description and social icons */}
          <div className="md:w-1/3">
            <div className="flex items-center gap-2 mb-4">
              <svg viewBox="0 0 24 24" className="w-10 h-10 fill-white">
                <path d="M12 2L4 9v12h16V9l-8-7zm0 2.5L17 9v10h-2v-6h-6v6H7V9l5-4.5z" />
              </svg>
              <div>
                <div className="text-xl font-bold tracking-wide">EVERGREEN</div>
                <div className="text-sm">Septic Services LLC</div>
              </div>
            </div>

            <p className="text-sm mb-4">
              Providing reliable and professional septic services to keep your system running smoothly. Contact us for
              expert maintenance, repairs, and installations. Serving your community with trust and efficiency.
            </p>

            <div className="flex gap-2">
              <Link href="#" className="bg-white/20 p-2 rounded-md hover:bg-white/30 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link href="#" className="bg-white/20 p-2 rounded-md hover:bg-white/30 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link href="#" className="bg-white/20 p-2 rounded-md hover:bg-white/30 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link href="#" className="bg-white/20 p-2 rounded-md hover:bg-white/30 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M19.2 17.8l-4.2-1.4c-.8 1-1.1 1.3-1.9 2.2l3.9 2.7c.7.5 1.6.3 2.1-.4s.4-1.6-.3-2.1zm-7.1-9.6l4.2-1.4c.7-.3 1.1-1.1.8-1.8s-1.1-1.1-1.8-.8l-4.2 1.4c-.7.3-1.1 1.1-.8 1.8.3.7 1.1 1.1 1.8.8zm-2.2 5.3l-4.2-1.4c-.7-.3-1.6 0-1.9.7s0 1.6.7 1.9l4.2 1.4c.7.3 1.6 0 1.9-.7.3-.7 0-1.6-.7-1.9zm10.5-5.3l-4.2 1.4c-.7.3-1.1 1.1-.8 1.8s1.1 1.1 1.8.8l4.2-1.4c.7-.3 1.1-1.1.8-1.8-.3-.7-1.1-1.1-1.8-.8zm-8.3 9.6c.7-.3 1.1-1.1.8-1.8l-1.4-4.2c-.3-.7-1.1-1.1-1.8-.8s-1.1 1.1-.8 1.8l1.4 4.2c.3.7 1.1 1.1 1.8.8z" />
                </svg>
              </Link>
            </div>
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
                  <a href="tel:+12622484711" className="text-sm hover:underline">
                    +1 262-248-4711
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
                  <Link href="#" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Offers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Service Request
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Estimation Calculator
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="mt-8 pt-4 border-t border-[#3a4b3a] text-center text-sm">
          <p>Copyright © 2025 EverGreen Septic Services LLC</p>
        </div>
      </div>
    </footer>
  )
}
