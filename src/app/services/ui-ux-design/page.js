"use client";
import React, { useEffect, useRef } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Button from '../../../components/Button';
import { ArrowDownLeft, MoveRight, Maximize2, Layers, MousePointer } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const UIUXDesign = () => {
    const scope = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Massive Text Parallax
            gsap.to(".big-text", {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: ".hero-container",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Smooth Reveal for Hero Elements
            gsap.from(".hero-reveal", {
                y: 100,
                opacity: 0,
                duration: 1.5,
                stagger: 0.2,
                ease: "power4.out"
            });

            // Image Reveal with Parallax Scaling
            gsap.utils.toArray('.reveal-image').forEach(container => {
                gsap.fromTo(container.querySelector('img'),
                    { scale: 1.3 },
                    {
                        scale: 1,
                        scrollTrigger: {
                            trigger: container,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true
                        }
                    }
                );
            });
        }, scope);

        return () => ctx.revert();
    }, []);

    const processSteps = [
        { num: "01", title: "Strategy", desc: "User Research, Stakeholder Interviews, Competitive Audits" },
        { num: "02", title: "Structure", desc: "Information Architecture, Wireframing, User Flows" },
        { num: "03", title: "Surface", desc: "Visual Design, Motion, Design Systems" },
    ];

    return (
        <div ref={scope} className="bg-[#EAEAEA] min-h-screen text-black font-sans selection:bg-black selection:text-white">
            <Navbar />

            {/* Hero Section - Minimal Maximalism */}
            <section className="hero-container relative pt-32 pb-40 px-6 min-h-screen flex flex-col justify-between overflow-hidden">
                <div className="container mx-auto max-w-[90rem]">
                    <div className="flex justify-between items-start mb-20">
                        <div className="flex flex-col gap-2 hero-reveal">
                            <span className="font-bold uppercase tracking-widest text-xs">Strive Studio</span>
                            <span className="font-bold uppercase tracking-widest text-xs">UI / UX Division</span>
                        </div>
                        <div className="text-right hidden md:block hero-reveal">
                            <p className="text-sm font-medium w-64 ml-auto leading-relaxed">
                                Creating digital products that shape the future of human-computer interaction with precision and purpose.
                            </p>
                        </div>
                    </div>

                    <h1 className="big-text text-[10vw] md:text-[11vw] font-bold leading-[0.85] tracking-tighter uppercase mb-8 mix-blend-multiply hero-reveal">
                        Design Is <br />
                        <span className="text-transparent [-webkit-text-stroke:1px_black] md:[-webkit-text-stroke:2px_black]">Intelligence</span> <br />
                        Made Visible.
                    </h1>
                </div>

                <div className="absolute bottom-12 left-6 right-6 flex justify-between items-end hero-reveal">
                    <div className="flex flex-col gap-4">
                        <ArrowDownLeft size={48} strokeWidth={1} className="animate-bounce" />
                        <span className="text-sm font-mono uppercase tracking-widest">Scroll to Explore</span>
                    </div>
                </div>
            </section>

            {/* Featured Work - Large Imagery */}
            <section className="py-0">
                {/* Project 1 - Parallax Cover */}
                <div className="w-full h-[120vh] relative reveal-image overflow-hidden group cursor-pointer">
                    <img
                        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                        alt="Abstract UI"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />

                    {/* Floating Label */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 text-white uppercase tracking-widest text-sm font-bold flex items-center gap-2">
                            View Case Study <MoveRight size={16} />
                        </div>
                    </div>

                    <div className="absolute bottom-20 left-6 md:left-20 text-white z-10 mix-blend-difference pointer-events-none">
                        <h2 className="text-6xl md:text-9xl font-bold uppercase mb-4 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">Fintech</h2>
                        <div className="flex gap-4 items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                            <span className="w-12 h-[1px] bg-white"></span>
                            <span className="text-xl font-mono uppercase tracking-widest">Banking Dashboard</span>
                        </div>
                    </div>
                </div>

                {/* Project 2 - Split with Asymmetric Typography */}
                <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
                    <div className="bg-white p-12 md:p-24 flex flex-col justify-center relative">
                        <div className="absolute top-12 left-12">
                            <span className="text-8xl font-black text-gray-100 select-none">-02</span>
                        </div>
                        <h3 className="text-5xl md:text-7xl font-bold mb-10 leading-[0.9] tracking-tight relative z-10">
                            We strip away <br /> the non-essential.
                        </h3>
                        <p className="text-xl text-gray-400 max-w-md leading-relaxed mb-16 relative z-10">
                            Our aesthetic is defined by what we remove, not what we add. Clarity is the ultimate sophistication in a noisy digital world.
                        </p>
                        <div className="flex gap-6 relative z-10">
                            <div className="flex flex-col items-center gap-2 group cursor-pointer">
                                <div className="w-16 h-16 border border-gray-200 rounded-full flex items-center justify-center group-hover:border-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                                    <Maximize2 size={24} />
                                </div>
                                <span className="text-xs uppercase tracking-widest font-bold">Scale</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 group cursor-pointer">
                                <div className="w-16 h-16 border border-gray-200 rounded-full flex items-center justify-center group-hover:border-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                                    <Layers size={24} />
                                </div>
                                <span className="text-xs uppercase tracking-widest font-bold">Stack</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 group cursor-pointer">
                                <div className="w-16 h-16 border border-gray-200 rounded-full flex items-center justify-center group-hover:border-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                                    <MousePointer size={24} />
                                </div>
                                <span className="text-xs uppercase tracking-widest font-bold">Interact</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative reveal-image overflow-hidden h-full min-h-[50vh]">
                        <img
                            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2340&auto=format&fit=crop"
                            alt="Minimal Device"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Process - Big Numbers with Hover Interactions */}
            <section className="py-40 px-6 bg-[#0a0a0a] text-[#EAEAEA]">
                <div className="container mx-auto max-w-[90rem]">
                    <div className="flex justify-between items-end mb-32 border-b border-white/10 pb-8">
                        <h2 className="text-sm font-mono uppercase tracking-widest opacity-50">Our Methodology</h2>
                        <div className="hidden md:block text-right">
                            <p className="text-2xl font-light text-white/80">From chaos to clarity.</p>
                        </div>
                    </div>

                    <div className="space-y-0">
                        {processSteps.map((step, idx) => (
                            <div key={idx} className="border-b border-white/10 py-12 md:py-20 group hover:bg-[#111] transition-colors duration-500 cursor-default">
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                                    <div className="md:col-span-2">
                                        <span className="text-6xl md:text-8xl font-bold text-white/5 group-hover:text-white transition-colors duration-500 font-mono tracking-tighter">{step.num}</span>
                                    </div>
                                    <div className="md:col-span-6">
                                        <h3 className="text-5xl md:text-8xl font-bold uppercase mb-4 tracking-tighter transition-transform duration-500 group-hover:translate-x-4">{step.title}</h3>
                                    </div>
                                    <div className="md:col-span-4 flex md:justify-end">
                                        <p className="text-xl text-gray-500 group-hover:text-white transition-colors duration-500 font-medium max-w-xs md:text-right">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default UIUXDesign;
