'use client';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Metadata } from 'next';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Seo from '@/Seo';

export const metadata: Metadata = {
    title: 'Newsletter Subscription | Evergreen Septic Services',
    description: 'Subscribe to Evergreen Septic Services’ newsletter for the latest septic maintenance tips, eco-friendly solutions, and exclusive promotions in the Lake Geneva region.',
    keywords: [
        'Evergreen Septic Services',
        'Septic newsletter',
        'Lake Geneva septic tips',
        'Eco-friendly septic solutions',
        'Septic maintenance promotions',
    ],
    openGraph: {
        title: 'Newsletter Subscription | Evergreen Septic Services',
        description: 'Subscribe to Evergreen Septic Services’ newsletter for the latest septic maintenance tips, eco-friendly solutions, and exclusive promotions in the Lake Geneva region.',
        url: 'https://www.evergreensepticsvc.com/newsletter',
        images: [
            {
                url: 'https://www.evergreensepticsvc.com/assets/images/ContactUs/bgImage.png',
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Newsletter Subscription | Evergreen Septic Services',
        description: 'Subscribe to Evergreen Septic Services’ newsletter for the latest septic maintenance tips, eco-friendly solutions, and exclusive promotions in the Lake Geneva region.',
        images: ['https://www.evergreensepticsvc.com/assets/images/ContactUs/bgImage.png'],
    },
};

export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '99760948-10ae-4676-b664-87235dfe2f80',
          email,
          subject: 'New Newsletter Subscription',
          from_name: 'Evergreen Septic Newsletter',
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Thank you for subscribing! You’ll receive updates soon.');
        setEmail('');
      } else {
        toast.error('Something went wrong. Please try again later.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Seo
        title="Newsletter Subscription"
        description="Subscribe to Evergreen Septic Services’ newsletter for the latest septic maintenance tips, eco-friendly solutions, and exclusive promotions in the Lake Geneva region."
        keywords={[
          'Evergreen Septic Services',
          'Septic newsletter',
          'Lake Geneva septic tips',
          'Eco-friendly septic solutions',
          'Septic maintenance promotions',
        ]}
        ogTitle="Newsletter Subscription | Evergreen Septic Services"
        ogDescription="Subscribe to Evergreen Septic Services’ newsletter for the latest septic maintenance tips, eco-friendly solutions, and exclusive promotions in the Lake Geneva region."
        ogUrl="https://www.evergreensepticsvc.com/newsletter"
        ogImage="https://www.evergreensepticsvc.com/assets/images/ContactUs/bgImage.png"
        twitterCard="summary_large_image"
        twitterTitle="Newsletter Subscription | Evergreen Septic Services"
        twitterDescription="Subscribe to Evergreen Septic Services’ newsletter for the latest septic maintenance tips, eco-friendly solutions, and exclusive promotions in the Lake Geneva region."
        twitterImage="https://www.evergreensepticsvc.com/assets/images/ContactUs/bgImage.png"
      />
      <section className="bg-[#4CAF50] py-16 px-4" data-aos="fade-up">
       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 text-white text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl mb-2 font-instrument">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-sm sm:text-base font-instrument">
              Join our mailing list for the latest septic maintenance tips,
              eco-friendly solutions, and exclusive promotions from Evergreen Septic Service LLC in Lake Geneva.
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
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-[#3F503B] font-semibold px-6 py-3 rounded-md border border-white hover:bg-gray-100 transition w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}