"use client";
import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Star } from 'lucide-react';
import Button from './Button';
import gsap from 'gsap';
import { useModal } from '../context/ModalContext';

const Hero = () => {
    const { openModal } = useModal();
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const ctaRef = useRef(null);
    const brandStripRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // Initial state is set via CSS or just fromTo here
            tl.fromTo(titleRef.current,
                { y: 100, opacity: 0, scale: 0.9 },
                { y: 0, opacity: 1, scale: 1, duration: 1.2, stagger: 0.1 }
            )
                .fromTo(subtitleRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                    "-=0.6"
                )
                .fromTo(ctaRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                    "-=0.6"
                )
                .fromTo(brandStripRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                    "-=0.6"
                );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} id="about" className="relative flex flex-col items-center pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden min-h-screen">
            {/* Premium Background Gradients */}
            {/* Light blue on the left */}
            <div className="absolute top-[20%] -left-[10%] w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-purple-200/40 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none opacity-80" />
            {/* Light yellow/orange on the right */}
            <div className="absolute top-[10%] -right-[10%] w-[250px] md:w-[600px] h-[250px] md:h-[600px] bg-amber-100/40 rounded-full blur-[60px] md:blur-[100px] -z-10 pointer-events-none opacity-80" />

            {/* Center Focus Glow - Enhanced Visibility */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[1000px] h-[500px] md:h-[1000px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none" />

            <div className="container px-4 mx-auto text-center max-w-7xl relative z-10 flex flex-col items-center justify-center flex-1">

                {/* Main Heading - Responsive Typography */}
                <h1 ref={titleRef} className="text-[2.75rem] leading-[1.05] md:text-[5.5rem] lg:text-[6.5rem] font-bold tracking-tight text-gray-950 md:leading-[0.95] mb-6 md:mb-8 mt-4 origin-bottom text-balance text-shadow-sm">
                    Building bold brands <br className="hidden md:block" />
                    with thoughtful design
                </h1>

                {/* Subheading */}
                <p ref={subtitleRef} className="max-w-md md:max-w-2xl mx-auto mb-10 md:mb-12 text-base md:text-xl text-gray-600 leading-relaxed font-medium text-balance">
                    At <span className="font-semibold text-gray-900">Strive Studio</span>, we help small startups tackle the world's biggest challenges with tailored
                    solutions, guiding you from strategy to success in a competitive market.
                </p>

                {/* CTA Area - Stack on Mobile, Row on Desktop */}
                <div ref={ctaRef} className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-16 md:mb-24 px-4 w-full">
                    {/* Primary Button */}
                    <div className="w-full md:w-auto">
                        <Button onClick={openModal} className="w-full md:w-auto pl-8 pr-3 py-3 text-lg justify-center">Get Started</Button>
                    </div>

                    {/* Social Proof */}
                    <div className="flex items-center gap-4 bg-white/50 px-4 py-2 rounded-2xl backdrop-blur-sm border border-gray-100/50">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                    <img src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`} alt="User" />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="flex text-yellow-500">
                                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                            </div>
                            <span className="text-xs font-semibold text-gray-700">Trusted by 1000+ clients</span>
                        </div>
                    </div>
                </div>

                {/* Brand Strip - Scrollable on mobile or wrapped */}
                <div ref={brandStripRef} className="w-full">
                    <p className="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6 md:mb-8">Loved by innovative teams</p>

                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Using standard logos for a clean enterprise look */}
                        <div className="h-6 md:h-8 flex items-center"><span className="text-lg md:text-xl font-bold font-sans text-gray-800">Acme Corp</span></div>
                        <div className="h-6 md:h-8 flex items-center"><span className="text-lg md:text-xl font-bold font-sans text-gray-800">GlobalBank</span></div>
                        <div className="h-6 md:h-8 flex items-center"><span className="text-lg md:text-xl font-bold font-sans text-gray-800">SaaS.io</span></div>
                        <div className="h-6 md:h-8 flex items-center"><span className="text-lg md:text-xl font-bold font-sans text-gray-800">Nebula</span></div>
                        <div className="h-6 md:h-8 flex items-center"><span className="text-lg md:text-xl font-bold font-sans text-gray-800">FoxRun</span></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
