'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
      title: 'Exceptional Septic Service',
      quote:
        'Evergreen Septic provided outstanding service for our septic tank maintenance. Jon and his team were professional, prompt, and honest. Highly recommend!',
      name: 'Sarah M.',
      location: 'Lake Geneva, WI',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
      title: 'Reliable and Trustworthy',
      quote:
        'The inspection was thorough, and the crew explained everything clearly. Their eco-friendly approach made all the difference. Thank you, Evergreen!',
      name: 'John D.',
      location: 'Foothills, WI',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      title: 'Top-Notch Maintenance',
      quote:
        'Evergreen Septic is our go-to for septic care. Their maintenance services are affordable, reliable, and environmentally conscious. Great work!',
      name: 'Emily R.',
      location: 'Lake Geneva, WI',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      title: 'Fantastic Customer Service',
      quote:
        'From scheduling to service, Evergreen Septic was a pleasure to work with. They fixed our septic issue quickly and kept us informed throughout.',
      name: 'Michael T.',
      location: 'Burlington, WI',
      image: 'https://randomuser.me/api/portraits/men/78.jpg',
    },
    {
      title: 'Highly Recommended',
      quote:
        'Jon’s team went above and beyond to ensure our septic system was in top shape. Their expertise and friendliness are unmatched. Will use again!',
      name: 'Laura B.',
      location: 'Elkhorn, WI',
      image: 'https://randomuser.me/api/portraits/women/19.jpg',
    },
    {
      title: 'Prompt and Professional',
      quote:
        'Evergreen Septic responded quickly to our emergency call and resolved our septic issue efficiently. Their professionalism is top-tier!',
      name: 'David K.',
      location: 'Delavan, WI',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
    {
      title: 'Eco-Friendly Expertise',
      quote:
        'Their commitment to sustainable practices is impressive. The team serviced our tank with care and provided great advice for maintenance.',
      name: 'Anna L.',
      location: 'Williams Bay, WI',
      image: 'https://randomuser.me/api/portraits/women/72.jpg',
    },
    {
      title: 'Outstanding Support',
      quote:
        'Evergreen’s team was incredibly helpful during our septic inspection. They answered all our questions and ensured everything was compliant.',
      name: 'Robert P.',
      location: 'Lake Geneva, WI',
      image: 'https://randomuser.me/api/portraits/men/19.jpg',
    },
    {
      title: 'Affordable and Reliable',
      quote:
        'We’ve used Evergreen for years, and their pricing is fair with no surprises. Their maintenance keeps our system running smoothly.',
      name: 'Jennifer S.',
      location: 'Burlington, WI',
      image: 'https://randomuser.me/api/portraits/women/33.jpg',
    },
    {
      title: 'Great Communication',
      quote:
        'The crew kept us updated throughout the pumping process. Their transparency and friendliness made the experience stress-free.',
      name: 'Thomas W.',
      location: 'Fontana, WI',
      image: 'https://://randomuser.me/api/portraits/men/64.jpg',
    },
    {
      title: 'Expert Septic Solutions',
      quote:
        'Evergreen Septic diagnosed and fixed a complex issue with our system. Their knowledge and efficiency saved us time and money!',
      name: 'Megan C.',
      location: 'Elkhorn, WI',
      image: 'https://randomuser.me/api/portraits/women/88.jpg',
    },
    {
      title: 'Friendly and Efficient',
      quote:
        'Jon and his team were a pleasure to work with. They completed our septic service quickly and left the area spotless. Highly recommend!',
      name: 'Steven H.',
      location: 'Lake Geneva, WI',
      image: 'https://randomuser.me/api/portraits/men/27.jpg',
    },
    {
      title: 'Trusted Local Service',
      quote:
        'As a local business, Evergreen Septic truly cares about the community. Their reliable service has earned our trust for years.',
      name: 'Christine F.',
      location: 'Walworth, WI',
      image: 'https://randomuser.me/api/portraits/women/56.jpg',
    },
];


export default function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [progress, setProgress] = useState(0);

  const updateProgress = useCallback(() => {
    if (!emblaApi) return;
    const currentSlide = emblaApi.selectedScrollSnap();
    const totalSlides = emblaApi.slideNodes().length;
    const progressPercent = ((currentSlide + 1) / totalSlides) * 100;
    setProgress(progressPercent);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });

    const intervalId = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, 3000);

    if (emblaApi) {
      emblaApi.on('select', updateProgress);
      emblaApi.on('reInit', updateProgress);
      updateProgress();
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [emblaApi, updateProgress]);

  return (
    <>
     <section className="relative bg-white py-16" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div className="absolute top-0 right-0 z-0">
          <img src="/assets/images/Union.png" alt="Decorative Background" className="w-[300px] md:h-[165px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <p className="text-sm font-instrument font-bold text-[#3F503B] uppercase mb-2 text-[20px] md:text-[20px]">
            Testimonials
          </p>
          <h2 className="font-instrument font-normal text-[32px] text-black mb-12 md:text-[48px] lg:text-[54px]">
            What Our Clients Say
          </h2>

          <div className="w-full">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex-[0_0_100%] md:flex-[0_0_33.3333%] p-3">
                    <div className="group bg-white border border-transparent p-6 rounded-lg shadow-sm hover:bg-[#e8f3e6] hover:border-[#3F503B] hover:shadow-md transition-all duration-300 h-full">
                      <h3 className="font-gilroy font-bold text-[#000000] text-[20.38px] sm:text-[18px] leading-[25.94px] group-hover:text-[#3F503B] mb-3">
                        {testimonial.title}
                      </h3>
                      <p className="font-instrument text-[#696969] text-[16.67px] leading-[27.79px] mb-6 sm:text-[14px] sm:leading-[22px]">
                        {testimonial.quote}
                      </p>
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.image}
                          className="w-10 h-10 rounded-full"
                          alt={`${testimonial.name}'s profile`}
                        />
                        <div>
                          <p className="font-semibold text-sm text-black group-hover:text-[#3F503B]">
                            {testimonial.name}
                          </p>
                          <p className="text-xs text-gray-500">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-4 mt-6">
              <Button
                onClick={scrollPrev}
                className="bg-[#3F503B] hover:bg-[#4CAF50] text-white p-2 rounded-full"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                onClick={scrollNext}
                className="bg-[#3F503B] hover:bg-[#4CAF50] text-white p-2 rounded-full"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            <div className="-mt-4 w-full max-w-[40em] h-2 bg-gray-200 rounded-full overflow-hidden border" style={{ borderColor: '#AEAEAE' }}>
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: `${progress}%`,
                  backgroundColor: '#484848',
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}