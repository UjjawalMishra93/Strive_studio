import React, { useEffect, useRef } from 'react';
import { Layers, Zap, LineChart, Smartphone, MoveRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const cardRefs = useRef([]);

    const addToRefs = (el) => {
        if (el && !cardRefs.current.includes(el)) {
            cardRefs.current.push(el);
        }
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Header
            gsap.from(headerRef.current, {
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 85%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            // Animate Cards safely using Refs
            cardRefs.current.forEach((card, i) => {
                gsap.fromTo(card,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        delay: i * 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 75%",
                        }
                    }
                );
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="features" className="relative py-32 bg-white overflow-hidden">

            {/* Subtle Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-gray-50 to-transparent -z-10" />

            <div className="container mx-auto px-4 max-w-7xl">

                {/* Section Header (Restored to exact user request) */}
                <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-sm font-bold tracking-widest text-indigo-600 uppercase mb-3">Why Choose Us</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
                        We don't just build websites.<br className="hidden md:block" />
                        We craft digital experiences.
                    </h3>
                    <p className="text-lg text-gray-500 leading-relaxed">
                        Our agency combines aesthetics with functionality to deliver products that look stunning and perform flawlessly across every device.
                    </p>
                </div>

                {/* Grid Layout (Restored 7/5 Split) */}
                <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-auto lg:auto-rows-[350px]">

                    {/* Card 1: Pixel Perfect (Span 7) */}
                    <div ref={addToRefs} className="group relative col-span-1 md:col-span-3 lg:col-span-7 overflow-hidden rounded-[2rem] bg-gray-50 border border-gray-100 p-6 md:p-8 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 hover:-translate-y-1">
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="relative z-20">
                                <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                    <Layers className="text-blue-600" size={24} />
                                </div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-3">Pixel-Perfect Design</h4>
                                <p className="text-gray-500 max-w-xs">Every pixel is calculated. We ensure your brand looks premium on 4K monitors and mobile screens alike.</p>
                            </div>
                            <div className="absolute right-0 bottom-0 w-3/4 h-3/4 translate-x-12 translate-y-8 z-10 pointer-events-none">
                                <img
                                    src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=800&auto=format&fit=crop"
                                    alt="Design Preview"
                                    className="w-full h-full object-cover object-top rounded-tl-[2rem] shadow-2xl border-t border-l border-gray-100 opacity-90 group-hover:translate-x-[-10px] group-hover:translate-y-[-10px] transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Lightning Fast (Span 5) - Back to Black with Metrics */}
                    <div ref={addToRefs} className="group relative col-span-1 md:col-span-3 lg:col-span-5 overflow-hidden rounded-[2rem] bg-[#0a0a0a] border border-gray-800 p-6 md:p-8 hover:shadow-2xl hover:shadow-black/20 transition-all duration-500 text-white">
                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 backdrop-blur-md group-hover:bg-white/20 transition-colors">
                                    <Zap className="text-yellow-400" size={24} fill="currentColor" />
                                </div>
                                <h4 className="text-2xl font-bold mb-3">Lightning Fast Performance</h4>
                                <p className="text-gray-400 text-sm mb-6">
                                    Optimized for Core Web Vitals. We code for speed so your users never wait.
                                </p>
                            </div>

                            {/* Restored Metrics Section */}
                            <div className="flex items-center gap-8 mt-auto">
                                <div className="flex flex-col">
                                    <span className="text-4xl font-bold text-green-400">99</span>
                                    <span className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Performance</span>
                                </div>
                                <div className="h-10 w-px bg-white/10"></div>
                                <div className="flex flex-col">
                                    <span className="text-4xl font-bold text-green-400">0.2s</span>
                                    <span className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Load Time</span>
                                </div>
                            </div>
                        </div>
                        {/* Ambient Background Glow */}
                        <div className="absolute top-1/2 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-indigo-500/30 transition-colors" />
                    </div>

                    {/* Card 3: Strategy First (Span 5) - Light Blue/Indigo */}
                    <div ref={addToRefs} className="group relative col-span-1 md:col-span-3 lg:col-span-5 overflow-hidden rounded-[2rem] bg-indigo-50/50 border border-indigo-100 p-6 md:p-8 hover:bg-indigo-50 transition-colors duration-500">
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-full bg-white border border-indigo-100 flex items-center justify-center mb-6 shadow-sm">
                                <LineChart className="text-indigo-600" size={24} />
                            </div>
                            <h4 className="text-2xl font-bold text-gray-900 mb-2">Strategy First</h4>
                            <p className="text-gray-500">
                                We don't guess. We build based on market data and user behavior analysis to maximize conversion.
                            </p>
                        </div>
                        {/* Decorative Arrow/Shape */}
                        <div className="absolute bottom-4 right-4 text-indigo-200">
                            <MoveRight size={100} strokeWidth={0.5} className="rotate-[-45deg] opacity-20 group-hover:scale-110 group-hover:rotate-[-30deg] transition-all duration-700" />
                        </div>
                    </div>

                    {/* Card 4: Mobile First (Span 7) - White with large image */}
                    <div ref={addToRefs} className="group relative col-span-1 md:col-span-3 lg:col-span-7 overflow-hidden rounded-[2rem] bg-white border border-gray-100 p-6 md:p-8 shadow-sm hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-500 hover:-translate-y-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
                            <div className="order-2 md:order-1 relative h-48 md:h-full bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden group-hover:border-gray-200 transition-colors">
                                <img
                                    src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2670&auto=format&fit=crop"
                                    alt="Mobile First"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            <div className="order-1 md:order-2">
                                <div className="w-12 h-12 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center mb-6">
                                    <Smartphone className="text-orange-500" size={24} />
                                </div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-3">Mobile-First Approach</h4>
                                <p className="text-gray-500 mb-6">
                                    With 60% of traffic coming from phones, we treat mobile as the primary experience, not an afterthought.
                                </p>
                                <a href="#process" className="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-indigo-600 transition-colors group/link">
                                    See our process
                                    <MoveRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;
