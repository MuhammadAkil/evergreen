'use client';

import React, { useEffect, useState } from 'react';
import { Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { Metadata } from 'next';
import { toast } from 'react-toastify';
import Seo from '@/Seo';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Evergreen Septic Service LLC for septic pumping and inspection inquiries in the foothills.',
  keywords: [
    'Contact Evergreen Septic',
    'Septic service inquiries',
    'Foothills septic contact',
    'Evergreen Septic support',
  ],
  openGraph: {
    title: 'Contact Us | Evergreen Septic Service LLC',
    description:
      'Contact Evergreen Septic Service LLC for septic pumping and inspection inquiries.',
    url: 'https://www.evergreensepticsvc.com/contact',
    images: [
      {
        url: 'https://www.evergreensepticsvc.com/assets/images/HeroSection.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Evergreen Septic Service LLC',
    description:
      'Contact Evergreen Septic Service LLC for septic pumping and inspection inquiries.',
    images: ['https://www.evergreensepticsvc.com/assets/images/HeroSection.png'],
  },
};

export default function Hero() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    subject?: string;
    phone?: string;
    message?: string;
    addressStreet?: string;
    city?: string;
    state?: string;
    zipCode?: string;
  }>({});
  const [loading, setLoading] = useState(false);
  const [addressStreet, setAddressStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const validateField = (field: string, value: string) => {
    let error = '';
    if (field === 'name' && !value.trim()) error = 'Name is required.';
    if (field === 'email') {
      if (!value.trim()) error = 'Email is required.';
      else if (!/\S+@\S+\.\S+/.test(value)) error = 'Email is invalid.';
    }
    if (field === 'subject' && !value.trim()) error = 'Subject is required.';
    if (field === 'phone') {
      if (!value.trim()) error = 'Phone is required.';
    }
    if (field === 'message' && !value.trim()) error = 'Message is required.';
    if (field === 'addressStreet' && !value.trim()) error = 'Address Street is required.';
    if (field === 'city' && !value.trim()) error = 'City is required.';
    if (field === 'state' && !value.trim()) error = 'State is required.';
    if (field === 'zipCode') {
      if (!value.trim()) error = 'Zip Code is required.';
      else if (!/^\d{5}(-\d{4})?$/.test(value)) error = 'Invalid Zip Code.';
    }
    return error;
  };

  const validateForm = () => {
    const newErrors: {
      name?: string;
      email?: string;
      subject?: string;
      phone?: string;
      message?: string;
      addressStreet?: string;
      city?: string;
      state?: string;
      zipCode?: string;
    } = {};

    newErrors.name = validateField('name', name);
    newErrors.email = validateField('email', email);
    newErrors.subject = validateField('subject', subject);
    newErrors.phone = validateField('phone', phone);
    newErrors.message = validateField('message', message);
    newErrors.addressStreet = validateField('addressStreet', addressStreet);
    newErrors.city = validateField('city', city);
    newErrors.state = validateField('state', state);
    newErrors.zipCode = validateField('zipCode', zipCode);

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };


  const handleInputChange = (field: string, value: string) => {
    const error = validateField(field, value);
    setErrors((prev) => ({ ...prev, [field]: error }));
    if (field === 'name') setName(value);
    if (field === 'email') setEmail(value);
    if (field === 'subject') setSubject(value);
    if (field === 'phone') setPhone(value);
    if (field === 'message') setMessage(value);
    if (field === 'addressStreet') setAddressStreet(value);
    if (field === 'city') setCity(value);
    if (field === 'state') setState(value);
    if (field === 'zipCode') setZipCode(value);
  };

  const handleSubmitNoCors = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fill out all required fields correctly.');
      return;
    }

    const formData = {
      name,
      email,
      subject,
      phone,
      addressStreet,
      city,
      state,
      zipCode,
      message,
    };

    console.log('Form data to send:', formData);
    setLoading(true);

    try {
      await fetch('https://script.google.com/macros/s/AKfycbwVWjaU0iuJPelxTCLZKiSMzcDeAQ3L30459utKxyKNuimNNjMJbL8HWNcRiDoZw9FN/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'no-cors',
      });

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          access_key: '99760948-10ae-4676-b664-87235dfe2f80',
        }),
      });

      if (!response.ok) {
        throw new Error(`Web3Forms request failed with status ${response.status}`);
      }

      const result = await response.json();
      if (!result.success) {
        throw new Error('Web3Forms submission failed: ' + result.message);
      }

      toast.success('Request submitted successfully!');
      setName('');
      setEmail('');
      setSubject('');
      setPhone('');
      setMessage('');
      setAddressStreet('');
      setCity('');
      setState('');
      setZipCode('');
      setErrors({});
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setLoading(false)
    }
  };

  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with Evergreen Septic Service LLC for septic pumping and inspection inquiries in the foothills."
        keywords={[
          'Contact Evergreen Septic',
          'Septic service inquiries',
          'Foothills septic contact',
          'Evergreen Septic support',
        ]}
        ogTitle="Contact Us | Evergreen Septic Service LLC"
        ogDescription="Contact Evergreen Septic Service LLC for septic pumping and inspection inquiries."
        ogUrl="https://www.evergreensepticsvc.com/contact"
        ogImage="https://www.evergreensepticsvc.com/assets/images/HeroSection.png"
        twitterCard="summary_large_image"
        twitterTitle="Contact Us | Evergreen Septic Service LLC"
        twitterDescription="Contact Evergreen Septic Service LLC for septic pumping and inspection inquiries."
        twitterImage="https://www.evergreensepticsvc.com/assets/images/HeroSection.png"
      />
      <section className="py-16 bg-white relative overflow-hidden" data-aos="fade-up">
        <img
          src="/assets/images/Union.png"
          alt="Background Graphic"
          className="absolute top-0 left-0 w-40 h-auto object-contain z-0"
        />
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 relative z-10">
          <div className="bg-[#F7FAFF] border border-[#E5EAF1] rounded-lg p-6 shadow-sm">
            <div className="mb-4 text-[#3F503B] text-3xl">
              <svg width="58" height="72" viewBox="0 0 58 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29 71.875C29.578 71.8717 30.1379 71.673 30.5888 71.3112C31.5625 70.44 57.1875 49.7863 57.1875 28.3125C57.1875 20.8367 54.2178 13.6671 48.9316 8.38093C43.6454 3.09475 36.4758 0.125 29 0.125C21.5242 0.125 14.3546 3.09475 9.06843 8.38093C3.78225 13.6671 0.8125 20.8367 0.8125 28.3125C0.8125 49.7863 26.4375 70.44 27.4113 71.3112C27.8621 71.673 28.422 71.8717 29 71.875ZM5.9375 28.3125C5.9375 22.1959 8.36729 16.3299 12.6923 12.0048C17.0174 7.67979 22.8834 5.25 29 5.25C35.1166 5.25 40.9826 7.67979 45.3076 12.0048C49.6327 16.3299 52.0625 22.1959 52.0625 28.3125C52.0625 44.4562 34.4581 61.1381 29 65.9556C23.5419 61.1381 5.9375 44.4562 5.9375 28.3125Z" fill="#374932" />
                <path d="M41.8125 28.3125C41.8125 25.7784 41.0611 23.3013 39.6532 21.1943C38.2454 19.0873 36.2443 17.445 33.9031 16.4753C31.562 15.5056 28.9858 15.2518 26.5004 15.7462C24.015 16.2406 21.7321 17.4608 19.9402 19.2527C18.1483 21.0446 16.9281 23.3275 16.4337 25.8129C15.9393 28.2983 16.1931 30.8745 17.1628 33.2156C18.1325 35.5568 19.7748 37.5579 21.8818 38.9657C23.9888 40.3736 26.4659 41.125 29 41.125C32.3981 41.125 35.657 39.7751 38.0598 37.3723C40.4626 34.9695 41.8125 31.7106 41.8125 28.3125ZM21.3125 28.3125C21.3125 26.7921 21.7634 25.3058 22.6081 24.0416C23.4528 22.7774 24.6534 21.792 26.0581 21.2102C27.4628 20.6283 29.0085 20.4761 30.4998 20.7727C31.991 21.0693 33.3608 21.8015 34.4359 22.8766C35.511 23.9517 36.2432 25.3215 36.5398 26.8128C36.8364 28.304 36.6842 29.8497 36.1023 31.2544C35.5205 32.6591 34.5352 33.8597 33.271 34.7044C32.0068 35.5491 30.5205 36 29 36C26.9612 36 25.0058 35.1901 23.5641 33.7484C22.1224 32.3067 21.3125 30.3514 21.3125 28.3125Z" fill="#374932" />
              </svg>
            </div>
            <h4 className="font-normal text-2xl sm:text-3xl md:text-[32px] font-gilroy-semibold mb-1">
              Head Office
            </h4>
            <p className="font-instrument font-medium text-base sm:text-lg md:text-[22px] text-gray-600 hover:underline">
              Lake Geneva, Wisconsin.
            </p>
          </div>
          <div className="bg-[#F7FAFF] border border-[#E5EAF1] rounded-lg p-6 shadow-sm">
            <div className="mb-4 text-[#3F503B] text-3xl">
              <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M65.4198 58.1738C64.6185 57.3698 63.6664 56.7318 62.618 56.2964C61.5696 55.8611 60.4456 55.637 59.3105 55.637C58.1753 55.637 57.0513 55.8611 56.0029 56.2964C54.9545 56.7318 54.0024 57.3698 53.2011 58.1738L49.0323 62.3426C44.3386 59.3637 39.9899 55.8731 36.0661 51.9351C32.1363 48.0038 28.6466 43.656 25.6586 38.9688L29.8273 34.8001C30.6314 33.9988 31.2694 33.0467 31.7047 31.9983C32.14 30.9499 32.3641 29.8259 32.3641 28.6907C32.3641 27.5555 32.14 26.4315 31.7047 25.3832C31.2694 24.3348 30.6314 23.3826 29.8273 22.5813L21.6911 14.4738C20.9011 13.6671 19.957 13.0274 18.9149 12.5928C17.8728 12.1581 16.7539 11.9375 15.6248 11.9438C14.4877 11.941 13.3613 12.1631 12.3103 12.5973C11.2594 13.0315 10.3046 13.6693 9.50108 14.4738L5.59108 18.3551C3.72742 20.3589 2.3365 22.7548 1.52055 25.3668C0.704608 27.9789 0.484388 30.7405 0.876077 33.4488C1.79608 44.2301 8.86858 57.1963 19.7648 68.1213C30.6611 79.0463 43.7711 86.0901 54.5523 87.1251C55.3568 87.1681 56.1629 87.1681 56.9673 87.1251C59.2881 87.2225 61.605 86.8557 63.7821 86.046C65.9593 85.2364 67.9529 84.0002 69.6461 82.4101L73.5273 78.5001C74.3319 77.6965 74.9696 76.7418 75.4038 75.6908C75.838 74.6399 76.0601 73.5135 76.0573 72.3763C76.0637 71.2472 75.843 70.1284 75.4084 69.0863C74.9738 68.0442 74.3341 67.1001 73.5273 66.3101L65.4198 58.1738ZM69.4736 74.4463L65.5636 78.3276C64.1179 79.5325 62.4302 80.4127 60.6148 80.9087C58.7994 81.4047 56.8986 81.5049 55.0411 81.2026C45.6973 80.3976 33.7948 73.7851 23.9623 63.9526C14.1298 54.1201 7.51733 42.3038 6.62608 32.9601C6.31604 31.1026 6.41251 29.1999 6.90886 27.3833C7.4052 25.5667 8.2896 23.8794 9.50108 22.4376L13.5548 18.5276C13.8235 18.2611 14.1421 18.0503 14.4923 17.9072C14.8426 17.7642 15.2177 17.6916 15.5961 17.6938C15.9744 17.6916 16.3495 17.7642 16.6998 17.9072C17.0501 18.0503 17.3687 18.2611 17.6373 18.5276L25.7736 26.7501C26.309 27.2888 26.6096 28.0174 26.6096 28.777C26.6096 29.5365 26.309 30.2652 25.7736 30.8038L20.0236 36.5538C19.5736 37.0016 19.2845 37.5856 19.2013 38.2149C19.1181 38.8442 19.2455 39.4833 19.5636 40.0326C23.0061 45.8931 27.1902 51.2851 32.0123 56.0751C36.8023 60.8972 42.1943 65.0813 48.0548 68.5238C48.6041 68.8419 49.2432 68.9693 49.8725 68.8861C50.5018 68.8029 51.0858 68.5138 51.5336 68.0638L57.2836 62.3138C57.8222 61.7784 58.5509 61.4778 59.3105 61.4778C60.07 61.4778 60.7987 61.7784 61.3373 62.3138L69.4736 70.4501C69.74 70.7187 69.9508 71.0373 70.0939 71.3876C70.237 71.7379 70.3095 72.113 70.3073 72.4913C70.2893 73.2256 69.991 73.9251 69.4736 74.4463ZM74.4761 13.4963C70.4806 9.48563 65.7307 6.3055 60.5002 4.13931C55.2698 1.97312 49.6623 0.863725 44.0011 0.875086C43.2386 0.875086 42.5073 1.17799 41.9681 1.71715C41.429 2.25632 41.1261 2.98759 41.1261 3.75009C41.1261 4.51258 41.429 5.24385 41.9681 5.78302C42.5073 6.32219 43.2386 6.62509 44.0011 6.62509C48.936 6.62491 53.822 7.60202 58.3773 9.50004C62.9326 11.3981 67.0669 14.1794 70.5416 17.6835C74.0164 21.1877 76.7628 25.3453 78.6224 29.9164C80.4819 34.4875 81.4178 39.3816 81.3761 44.3163C81.3761 45.0788 81.679 45.8101 82.2181 46.3493C82.7573 46.8884 83.4886 47.1913 84.2511 47.1913C85.0136 47.1913 85.7448 46.8884 86.284 46.3493C86.8232 45.8101 87.1261 45.0788 87.1261 44.3163C87.1811 38.5949 86.0902 32.9203 83.9177 27.6271C81.7451 22.334 78.5348 17.5293 74.4761 13.4963Z" fill="#374932" />
                <path d="M58.1183 29.9412C59.7499 31.5629 61.0406 33.4946 61.9146 35.6227C62.7885 37.7507 63.2279 40.032 63.207 42.3324C63.207 43.0949 63.5099 43.8262 64.0491 44.3654C64.5883 44.9045 65.3195 45.2074 66.082 45.2074C66.8445 45.2074 67.5758 44.9045 68.115 44.3654C68.6541 43.8262 68.957 43.0949 68.957 42.3324C68.9951 39.2879 68.4283 36.2661 67.2895 33.4424C66.1507 30.6186 64.4625 28.0491 62.323 25.8828C60.1834 23.7165 57.6351 21.9966 54.8257 20.8228C52.0163 19.649 49.0018 19.0447 45.957 19.0449C45.1945 19.0449 44.4633 19.3478 43.9241 19.887C43.3849 20.4262 43.082 21.1574 43.082 21.9199C43.082 22.6824 43.3849 23.4137 43.9241 23.9529C44.4633 24.492 45.1945 24.7949 45.957 24.7949C48.2228 24.812 50.4629 25.2753 52.5496 26.1583C54.6363 27.0413 56.5285 28.3267 58.1183 29.9412Z" fill="#374932" />
              </svg>
            </div>
            <h4 className="font-normal text-2xl sm:text-3xl md:text-[32px] font-gilroy-semibold mb-1">
              Phones
            </h4>
            <p className="text-sm text-gray-600"></p>
            <Link
              href="tel:262-248-4711"
              className="font-instrument font-medium text-base sm:text-lg md:text-[22px] text-gray-600 hover:underline"
            >
              262-248-4711
            </Link>
          </div>
          <div className="bg-[#F7FAFF] border border-[#E5EAF1] rounded-lg p-6 shadow-sm">
            <div className="mb-4 text-[#3F503B] text-3xl">
              <svg width="97" height="83" viewBox="0 0 97 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M73.1096 0.839844C60.8046 0.839844 50.7466 10.2558 49.6766 22.2398H8.90961C4.20161 22.2398 0.349609 26.0918 0.349609 30.7998V73.5998C0.349609 78.3078 4.20161 82.1598 8.90961 82.1598H79.5296C84.2376 82.1598 88.0896 78.3078 88.0896 73.5998V42.5698C93.3326 38.2898 96.6496 31.7628 96.6496 24.3798C96.6496 11.4328 86.0566 0.839844 73.1096 0.839844ZM8.90961 26.5198H49.6766C50.3186 33.9028 54.3846 40.2158 60.2696 44.0678L45.6106 56.6938C44.7546 57.4428 43.5776 57.4428 42.8286 56.6938L8.05361 26.6268C8.26761 26.5198 8.58861 26.5198 8.90961 26.5198ZM4.62961 73.5998V30.7998C4.62961 30.3718 4.73661 29.9438 4.84361 29.5158L31.0586 52.1998L4.84361 74.8838C4.73661 74.4558 4.62961 74.0278 4.62961 73.5998ZM79.5296 77.8798H8.90961C8.58861 77.8798 8.26761 77.8798 8.05361 77.7728L34.3756 54.9818L40.0466 59.9038C41.2236 60.9738 42.7216 61.5088 44.2196 61.5088C45.7176 61.5088 47.2156 60.9738 48.3926 59.9038L54.0636 54.9818L80.3856 77.7728C80.1716 77.8798 79.8506 77.8798 79.5296 77.8798ZM83.8096 73.5998C83.8096 74.0278 83.7026 74.4558 83.5956 74.8838L57.3806 52.1998L64.3356 46.2078C67.0106 47.2778 70.0066 47.9198 73.1096 47.9198C76.9616 47.9198 80.5996 46.9568 83.8096 45.3518V73.5998ZM73.1096 43.6398C62.5166 43.6398 53.8496 34.9728 53.8496 24.3798C53.8496 13.7868 62.5166 5.11984 73.1096 5.11984C83.7026 5.11984 92.3696 13.7868 92.3696 24.3798C92.3696 34.9728 83.7026 43.6398 73.1096 43.6398ZM83.7026 16.0338C84.5586 16.8898 84.5586 18.1738 83.7026 19.0298L70.1136 32.7258C69.6856 33.1538 69.1506 33.3678 68.6156 33.3678C68.0806 33.3678 67.5456 33.1538 67.1176 32.7258L62.6236 28.2318C61.7676 27.3758 61.7676 26.0918 62.6236 25.2358C63.4796 24.3798 64.8706 24.3798 65.6196 25.2358L68.6156 28.2318L80.7066 16.1408C81.4556 15.1778 82.8466 15.1778 83.7026 16.0338Z" fill="#374932" />
              </svg>
            </div>
            <h4 className="font-normal text-2xl sm:text-3xl md:text-[32px] font-gilroy-semibold mb-1">
              Email
            </h4>
            <Link
              href="mailto:info@evergreenseptic.com"
              className="font-instrument font-medium text-base sm:text-lg md:text-[22px] text-gray-600 hover:underline"
            >
              info@evergreenseptic.com
            </Link>
          </div>
        </div>
      </section>

      <section className="pt-13 mt-13" data-aos="fade-up">
        <div className="md:w-1/2">
          <div className="text-black mb-4 px-9">
            <p className="font-instrument font-semibold text-base sm:text-lg md:text-[20px] leading-tight text-[#3F503B] mb-2 md:relative md:top-0 relative">
              GET IN TOUCH
            </p>
            <h2 className="font-gilroy-medium font-normal text-2xl sm:text-4xl md:text-[54px] leading-tight md:relative md:top-0 relative top-[-4em]">
              Expert Help, One Click Away
            </h2>
          </div>
        </div>

        <div className="relative hidden md:block h-[500px] w-full mt-10">
          {/* Map in Background */}
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-30 z-[5]"></div>

          {/* Contact Form on top of map */}
          <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex items-center justify-end">
            <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-xl -mt-[180px] border">
              <form className="space-y-4" onSubmit={handleSubmitNoCors}>
                <div>
                  <label className="block text-sm mb-1 font-medium">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full border rounded-md p-2 bg-[#EDF7E8] ${errors.name ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 ${errors.name ? 'focus:ring-red-500' : 'focus:ring-[#3F503B]'
                      }`}
                  />
                  {errors.name && <span className="text-red-500 text-sm mt-1 block">{errors.name}</span>}
                </div>

                <div>
                  <label className="block text-sm mb-1 font-medium">
                    Subject <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className={`w-full border rounded-md p-2 bg-[#EDF7E8] ${errors.subject ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 ${errors.subject ? 'focus:ring-red-500' : 'focus:ring-[#3F503B]'
                      }`}
                  />
                  {errors.subject && <span className="text-red-500 text-sm mt-1 block">{errors.subject}</span>}
                </div>

                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label className="block text-sm mb-1 font-medium">
                      Email <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full border rounded-md p-2 bg-[#EDF7E8] ${errors.email ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 ${errors.email ? 'focus:ring-red-500' : 'focus:ring-[#3F503B]'
                        }`}
                    />
                    {errors.email && <span className="text-red-500 text-sm mt-1 block">{errors.email}</span>}
                  </div>


                  <div className="w-1/2">
                    <label className="block text-sm mb-1 font-medium">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`w-full border rounded-md p-2 bg-[#EDF7E8] ${errors.phone ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 ${errors.phone ? 'focus:ring-red-500' : 'focus:ring-[#3F503B]'
                        }`}
                    />
                    {errors.phone && <span className="text-red-500 text-sm mt-1 block">{errors.phone}</span>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-1 font-medium">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={addressStreet}
                    onChange={(e) => handleInputChange('addressStreet', e.target.value)}
                    className={`w-full border rounded-md p-2 bg-[#EDF7E8] ${errors.addressStreet ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 ${errors.addressStreet ? 'focus:ring-red-500' : 'focus:ring-[#3F503B]'
                      }`}
                  />
                  {errors.addressStreet && <span className="text-red-500 text-sm mt-1 block">{errors.addressStreet}</span>}
                </div>

                <div className="flex gap-4">
                  <div className="w-1/3">
                    <label className="block text-sm mb-1 font-medium">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className={`w-full border rounded-md p-2 bg-[#EDF7E8] ${errors.city ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 ${errors.city ? 'focus:ring-red-500' : 'focus:ring-[#3F503B]'
                        }`}
                    />
                    {errors.city && <span className="text-red-500 text-sm mt-1 block">{errors.city}</span>}
                  </div>
                  <div className="w-1/3">
                    <label className="block text-sm mb-1 font-medium">
                      State <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      className={`w-full border rounded-md p-2 bg-[#EDF7E8] ${errors.state ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 ${errors.state ? 'focus:ring-red-500' : 'focus:ring-[#3F503B]'
                        }`}
                    />
                    {errors.state && <span className="text-red-500 text-sm mt-1 block">{errors.state}</span>}
                  </div>
                  <div className="w-1/3">
                    <label className="block text-sm mb-1 font-medium">
                      Zip Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={zipCode}
                      onChange={(e) => handleInputChange('zipCode', e.target.value)}
                      className={`w-full border rounded-md p-2 bg-[#EDF7E8] ${errors.zipCode ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 ${errors.zipCode ? 'focus:ring-red-500' : 'focus:ring-[#3F503B]'
                        }`}
                    />
                    {errors.zipCode && <span className="text-red-500 text-sm mt-1 block">{errors.zipCode}</span>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-1 font-medium">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className={`w-full border rounded-md p-2 bg-[#EDF7E8] ${errors.message ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 ${errors.message ? 'focus:ring-red-500' : 'focus:ring-[#3F503B]'
                      }`}
                    rows={4}
                  ></textarea>
                  {errors.message && <span className="text-red-500 text-sm mt-1 block">{errors.message}</span>}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`bg-[#3F503B] text-white py-2 px-6 rounded-md mt-2 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#2f462f]'
                    }`}
                >
                  {loading ? 'Sending...' : 'Send Now'}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="block md:hidden space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-xl border mx-4">
            <form className="space-y-4" onSubmit={handleSubmitNoCors}>
              <div>
                <label className="block text-sm mb-1 font-medium">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full border rounded-md p-2 bg-[#EDF7E8] ${errors.name ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 ${errors.name ? 'focus:ring-red-500' : 'focus:ring-[#3F503B]'
                    }`}
                />
                {errors.name && <span className="text-red-500 text-sm mt-1 block">{errors.name}</span>}
              </div>
              <div>
                <label className="block text-sm mb-1 font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full border rounded-md p-2 bg-[#EDF7E8] ${errors.email ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 ${errors.email ? 'focus:ring-red-500' : 'focus:ring-[#3F503B]'
                    }`}
                />
                {errors.email && <span className="text-red-500 text-sm mt-1 block">{errors.email}</span>}
              </div>
              <div>
                <label className="block text-sm mb-1 font-medium">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  className={`w-full border rounded-md p-2 bg-[#EDF7E8] ${errors.subject ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 ${errors.subject ? 'focus:ring-red-500' : 'focus:ring-[#3F503B]'
                    }`}
                />
                {errors.subject && <span className="text-red-500 text-sm mt-1 block">{errors.subject}</span>}
              </div>
              <div>
                <label className="block text-sm mb-1 font-medium">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`w-full border rounded-md p-2 bg-[#EDF7E8] ${errors.phone ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 ${errors.phone ? 'focus:ring-red-500' : 'focus:ring-[#3F503B]'
                    }`}
                />
                {errors.phone && <span className="text-red-500 text-sm mt-1 block">{errors.phone}</span>}
              </div>
              <div>
                <label className="block text-sm mb-1 font-medium">
                  Address Street <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={addressStreet}
                  onChange={(e) => handleInputChange('addressStreet', e.target.value)}
                  className={`w-full border rounded-md p-2 bg-[#EDF7E8] ${errors.addressStreet ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 ${errors.addressStreet ? 'focus:ring-red-500' : 'focus:ring-[#3F503B]'
                    }`}
                />
                {errors.addressStreet && <span className="text-red-500 text-sm mt-1 block">{errors.addressStreet}</span>}
              </div>

              <div className="flex gap-4">
                <div className="w-1/3">
                  <label className="block text-sm mb-1 font-medium">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className={`w-full border rounded-md p-2 bg-[#EDF7E8] ${errors.city ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 ${errors.city ? 'focus:ring-red-500' : 'focus:ring-[#3F503B]'
                      }`}
                  />
                  {errors.city && <span className="text-red-500 text-sm mt-1 block">{errors.city}</span>}
                </div>
                <div className="w-1/3">
                  <label className="block text-sm mb-1 font-medium">
                    State <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    className={`w-full border rounded-md p-2 bg-[#EDF7E8] ${errors.state ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 ${errors.state ? 'focus:ring-red-500' : 'focus:ring-[#3F503B]'
                      }`}
                  />
                  {errors.state && <span className="text-red-500 text-sm mt-1 block">{errors.state}</span>}
                </div>
                <div className="w-1/3">
                  <label className="block text-sm mb-1 font-medium">
                    Zip Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={zipCode}
                    onChange={(e) => handleInputChange('zipCode', e.target.value)}
                    className={`w-full border rounded-md p-2 bg-[#EDF7E8] ${errors.zipCode ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 ${errors.zipCode ? 'focus:ring-red-500' : 'focus:ring-[#3F503B]'
                      }`}
                  />
                  {errors.zipCode && <span className="text-red-500 text-sm mt-1 block">{errors.zipCode}</span>}
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1 font-medium">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className={`w-full border rounded-md p-2 bg-[#EDF7E8] ${errors.message ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 ${errors.message ? 'focus:ring-red-500' : 'focus:ring-[#3F503B]'
                    }`}
                  rows={4}
                ></textarea>
                {errors.message && <span className="text-red-500 text-sm mt-1 block">{errors.message}</span>}
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`bg-[#3F503B] text-white py-2 px-6 rounded-md mt-2 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#2f462f]'
                  }`}
              >
                {loading ? 'Sending...' : 'Send Now'}
              </button>
            </form>
          </div>

          {/* Map second */}
          <div className="h-[300px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden h-[500px]" data-aos="fade-up">
        <img
          src="/assets/images/ContactUs/bgImage.png"
          alt="Background Image"
          className="w-full h-full object-cover"
        />
        <img
          src="/assets/images/ContactUs/WhiteBg.png"
          alt="Mask Overlay"
          className="w-[50%] h-[161%] object-cover absolute top-15 left-0 z-10"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center md:ml-10 text-white z-20 px-4 md:px-0 py-20 w-full">
          <h1 className="font-instrument text-3xl md:text-6xl font-bold uppercase tracking-wide text-center md:text-left">
            Live Clean and Worry-Free
          </h1>
          <p className="font-instrument text-base md:text-xl mt-4 max-w-lg text-center md:text-left">
            Experience peace of mind with our professional services. Your satisfaction is our priority, ensuring a cleaner, safer home for you and your family.
          </p>
          <div className="w-full mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="flex justify-center md:justify-start">
                <Link href="/contact-us">
                  <Button className="bg-red-500 cursor-pointer hover:bg-red-600 text-white px-4 py-2 rounded-md flex items-center">
                    <Rocket className="mr-2 h-5 w-5 font-instrument" />
                    GET A FREE QUOTE
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <img
                  src="/assets/images/Person.png"
                  className="w-10 h-10 rounded-full"
                  alt="Sophia Moore"
                />
                <div className="flex flex-col justify-start">
                  <p className="font-semibold text-sm text-white group-hover:text-[#3F503B]">
                    Sophia Moore
                  </p>
                  <p className="text-xs text-gray-300 font-instrument">Home Owner New Orleans</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <p className="text-2xl md:text-4xl text-white font-semibold font-instrument">
                  262-248-4711
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}