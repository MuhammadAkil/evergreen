'use client';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter a valid email address.');
      setIsError(true);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: "99760948-10ae-4676-b664-87235dfe2f80",
          email,
          subject: 'New Newsletter Subscription',
          from_name: 'Evergreen Septic Newsletter',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setMessage('Thank you for subscribing! You’ll receive updates soon.');
        setIsError(false);
        setEmail('');
      } else {
        setMessage('Something went wrong. Please try again later.');
        setIsError(true);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
      setIsError(true);
    }
  };

  return (
    <section className="bg-[#4CAF50] py-16 px-4" data-aos="fade-up">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2 text-white text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl mb-2 font-instrument">Subscribe to Our Newsletter</h2>
          <p className="text-sm sm:text-base font-instrument">
            Join our mailing list for the latest septic maintenance tips, eco-friendly solutions, and exclusive promotions from Evergreen Septic Service LLC in Lake Geneva.
          </p>
        </div>
        <div className="md:w-1/2 w-full">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 p-3 border border-white focus:outline-none placeholder-white text-white bg-transparent mb-4 sm:mb-0 sm:mr-2"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-white text-[#3F503B] font-semibold px-6 py-3 rounded-md border border-white hover:bg-gray-100 transition w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
          {message && (
            <p className={`mt-4 text-center text-sm ${isError ? 'text-red-200' : 'text-white'}`}>
              {message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}