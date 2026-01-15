"use client";
import React, { useEffect, useRef } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Button from '../../../components/Button';
import { ShoppingBag, Globe, Zap, Smartphone, ArrowUpRight, check, Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useModal } from '../../../context/ModalContext';

gsap.registerPlugin(ScrollTrigger);

const ECommerce = () => {
    const scope = useRef(null);
    const { openModal } = useModal();

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Force refresh to handle next.js routing states
            ScrollTrigger.refresh();

            // Hero Image Parallax
            gsap.to(".hero-img", {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: ".hero-section",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Receipt Unrolling Animation
            gsap.from(".receipt-content", {
                scaleY: 0,
                transformOrigin: "top center",
                duration: 1.5,
                scrollTrigger: {
                    trigger: ".receipt-section",
                    start: "top 70%",
                    end: "bottom center",
                    scrub: 1
                }
            });

            // Bento Grid Reveal
            gsap.from(".bento-item", {
                y: 50,
                duration: 0.8,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".bento-grid",
                    start: "top 80%",
                }
            });

        }, scope);

        // Extra refresh for safe measure
        setTimeout(() => ScrollTrigger.refresh(), 500);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={scope} className="bg-[#F3F4F6] min-h-screen text-black font-sans">
            <Navbar />

            {/* Creative Editorial Hero */}
            <section className="hero-section relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-32 px-6">
                <div className="container mx-auto max-w-[90rem] z-10 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-3 h-3 bg-[#FF4D00] rounded-full animate-pulse"></span>
                                <span className="font-mono text-sm uppercase tracking-widest text-gray-500">Next-Gen Commerce</span>
                            </div>
                            <h1 className="text-[12vw] lg:text-[7rem] font-bold leading-[0.85] tracking-tighter mb-8 uppercase text-black">
                                Storefronts <br />
                                <span className="font-serif italic font-light text-gray-600">That Stun.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 max-w-xl leading-relaxed font-medium mb-12">
                                We blend editorial aesthetics with industrial-grade conversion engines. Stop looking like a template. Start looking like a brand.
                            </p>
                            <Button onClick={openModal} className="bg-black text-white rounded-full px-10 py-5 text-lg">
                                Launch Your Store
                            </Button>
                        </div>

                        {/* Pinterest-style Collage Hero Visual */}
                        <div className="lg:col-span-5 relative h-[500px] lg:h-[700px]">
                            {/* Main Image */}
                            <div className="absolute top-0 right-0 w-3/4 h-3/4 overflow-hidden rounded-tr-[100px] rounded-bl-[100px] z-10 hero-img shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=1000&auto=format&fit=crop"
                                    alt="Fashion Editorial"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Floating Element 1 */}
                            <div className="absolute bottom-20 left-0 bg-white p-6 rounded-3xl shadow-xl z-20 max-w-xs animate-float-slow">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="font-bold text-lg">$420.00</span>
                                    <div className="flex gap-1 text-[#FF4D00]">
                                        <Star size={14} fill="currentColor" />
                                        <Star size={14} fill="currentColor" />
                                        <Star size={14} fill="currentColor" />
                                        <Star size={14} fill="currentColor" />
                                        <Star size={14} fill="currentColor" />
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500">"The checkout flow is buttery smooth. Sales increased by 40%."</p>
                            </div>
                            {/* Decorative Circle */}
                            <div className="absolute top-20 right-20 w-32 h-32 bg-[#FF4D00] rounded-full blur-3xl opacity-30"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The "Receipt" Stats Section - Extremely Creative */}
            <section className="receipt-section py-32 bg-black text-white relative overflow-hidden">
                <div className="container mx-auto max-w-5xl relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-16">The ROI Receipt</h2>

                    <div className="relative mx-auto w-full max-w-md bg-white text-black p-8 rounded-b-xl shadow-2xl receipt-content origin-top">
                        {/* Perforated Top */}
                        <div className="absolute -top-3 left-0 w-full h-6 bg-black" style={{ maskImage: 'radial-gradient(circle, transparent 6px, black 6.5px)', maskSize: '20px 20px', maskRepeat: 'repeat-x' }}></div>

                        <div className="text-center border-b-2 border-dashed border-gray-300 pb-8 mb-8">
                            <h3 className="text-3xl font-bold uppercase tracking-widest mb-2">STRIVE STUDIO</h3>
                            <p className="font-mono text-sm text-gray-500">ORDER #8821-X</p>
                            <p className="font-mono text-sm text-gray-500">{new Date().toLocaleDateString()}</p>
                        </div>

                        <div className="space-y-6 font-mono text-lg">
                            <div className="flex justify-between items-center">
                                <span>CONVERSION RATE</span>
                                <span className="font-bold">+145%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>PAGE SPEED</span>
                                <span className="font-bold">0.4s</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>CART RECOVERY</span>
                                <span className="font-bold">68%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>AVG ORDER VALUE</span>
                                <span className="font-bold">$85.00</span>
                            </div>
                        </div>

                        <div className="border-t-2 border-black border-dashed mt-8 pt-6 flex justify-between items-center text-xl font-bold">
                            <span>TOTAL REVENUE</span>
                            <span className="text-[#FF4D00]">$140M+</span>
                        </div>

                        <div className="mt-12 text-center">
                            <div className="barcode h-12 w-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Code_3_of_9.svg/1200px-Code_3_of_9.svg.png')] bg-cover opacity-80 mix-blend-multiply"></div>
                            <p className="font-mono text-xs mt-2 text-gray-400">THANK YOU FOR SCALING</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bento Grid Features */}
            <section className="py-32 px-6 bento-grid">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                        {/* Left Column - Large Visual */}
                        <div className="bento-item bg-white rounded-[2rem] p-8 relative overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 min-h-[500px] h-full">
                            <div className="absolute inset-0">
                                <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop" alt="Shopping" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            </div>
                            <div className="absolute bottom-8 left-8 text-white z-10">
                                <h3 className="text-3xl font-bold mb-2">Visual Merchandising</h3>
                                <p className="text-gray-300">Immersive product galleries that feel like you're touching the fabric.</p>
                            </div>
                        </div>

                        {/* Right Column - Stack */}
                        <div className="flex flex-col gap-6 h-full pb-2">
                            {/* Top Row of Right Column */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full shrink-0">
                                {/* Speed */}
                                <div className="bento-item bg-[#FF4D00] text-white rounded-[2rem] p-8 flex flex-col justify-between group shadow-lg hover:-translate-y-1 transition-transform min-h-[250px]">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                                        <Zap size={24} fill="white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-1">Instant Load</h3>
                                        <p className="text-white/80 text-sm">Headless architecture means zero lag.</p>
                                    </div>
                                </div>

                                {/* Mobile */}
                                <div className="bento-item bg-white rounded-[2rem] p-8 text-black flex flex-col justify-between shadow-sm hover:shadow-xl transition-all min-h-[250px]">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                        <Smartphone size={24} className="text-black" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-1">Mobile Native</h3>
                                        <p className="text-gray-500 text-sm">PWA accessible feel on every device.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Payments - Bottom Row of Right Column */}
                            <div className="bento-item bg-[#111] text-white rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl min-h-[250px] w-full shrink-0">
                                <div className="space-y-4">
                                    <div className="flex gap-2 text-gray-400">
                                        <div className="w-8 h-5 bg-gray-700 rounded"></div>
                                        <div className="w-8 h-5 bg-gray-700 rounded"></div>
                                        <div className="w-8 h-5 bg-gray-700 rounded"></div>
                                    </div>
                                    <h3 className="text-2xl font-bold">Universal Checkout</h3>
                                    <p className="text-gray-400 max-w-sm">Apple Pay, Stripe, PayPal. One-tap buy for higher conversion rates.</p>
                                </div>
                                <div className="h-16 w-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors cursor-pointer">
                                    <ArrowUpRight size={24} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section className="py-24 text-center">
                <h2 className="text-4xl font-bold mb-8">Ready to break the mold?</h2>
                <Button onClick={openModal} className="bg-black text-white px-12 py-6 rounded-full text-xl hover:scale-105 transition-transform">
                    Start Your Project
                </Button>
            </section>

            <Footer />
        </div>
    );
};

export default ECommerce;
