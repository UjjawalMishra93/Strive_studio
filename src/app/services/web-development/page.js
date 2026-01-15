"use client";
import React, { useEffect, useRef } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Button from '../../../components/Button';
import { Code, Cpu, Layers, Zap, GitBranch, Terminal, ArrowRight, ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useModal } from '../../../context/ModalContext';

gsap.registerPlugin(ScrollTrigger);

const WebDevelopment = () => {
    const scope = useRef(null);
    const { openModal } = useModal();

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Hero Reveal
            const tl = gsap.timeline();
            tl.from(".hero-text", { y: 100, opacity: 0, duration: 1, stagger: 0.1, ease: "power4.out" })
                .from(".hero-visual", { scale: 0.9, opacity: 0, duration: 1, ease: "expo.out" }, "-=0.5");

            // Marquee Animation
            gsap.to(".marquee-track", {
                xPercent: -50,
                repeat: -1,
                duration: 20,
                ease: "linear"
            });

            // Feature Cards Hover/Scroll Effect
            gsap.from(".feature-card", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".features-grid",
                    start: "top 80%"
                }
            });

        }, scope);

        return () => ctx.revert();
    }, []);

    const techStack = [
        "NEXT.JS 14", "REACT", "TYPESCRIPT", "NODE.JS", "TAILWIND", "GSAP", "SUPABASE", "GRAPHQL", "POSTGRESQL", "VERCEL"
    ];

    return (
        <div ref={scope} className="bg-white min-h-screen text-black font-sans selection:bg-[#FF4D00] selection:text-white">
            <Navbar />

            {/* Editorial Hero Section */}
            <section className="relative pt-32 pb-20 px-6 min-h-[90vh] flex flex-col justify-center overflow-hidden">
                <div className="container mx-auto max-w-[90rem]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-7 z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-gray-50 mb-8 hero-text max-w-fit">
                                <span className="w-2 h-2 rounded-full bg-[#FF4D00] animate-pulse"></span>
                                <span className="text-xs font-mono uppercase tracking-widest text-gray-500">Engineering Division</span>
                            </div>
                            <h1 className="text-[13vw] lg:text-[8rem] leading-[0.8] font-bold tracking-tighter mb-8 text-black hero-text">
                                Code As <br />
                                <span className="font-serif italic font-light text-gray-400">Art Form.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 max-w-xl leading-relaxed font-medium mb-12 hero-text">
                                We don't just write software; we architect digital ecosystems. Clean, scalable, and obsessively optimized for the future.
                            </p>
                            <div className="flex flex-wrap gap-4 hero-text">
                                <Button onClick={openModal} className="bg-black text-white hover:bg-[#FF4D00] border-none">
                                    Start The Build
                                </Button>
                            </div>
                        </div>

                        {/* Generated 3D Hero Visual */}
                        <div className="lg:col-span-5 relative h-[600px] w-full flex items-center justify-center hero-visual hidden lg:flex">
                            <div className="relative w-full max-w-lg aspect-square">
                                <img
                                    src="/web-dev-hero.png"
                                    alt="Web Development Abstract 3D Render"
                                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-700 drop-shadow-2xl animate-float-slow"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infinite Marquee - Brutalist Tech Stack */}
            <section className="py-12 bg-black border-y border-white/10 overflow-hidden whitespace-nowrap">
                <div className="marquee-track flex gap-12 items-center">
                    {[...techStack, ...techStack, ...techStack].map((tech, i) => (
                        <div key={i} className="flex items-center gap-4 group cursor-default">
                            <span className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-500 group-hover:from-white group-hover:to-gray-300 transition-all duration-300 uppercase font-heading tracking-tight">
                                {tech}
                            </span>
                            <span className="text-[#FF4D00] text-2xl">/</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* The Engineering Standard - Alternative Grid */}
            <section className="py-32 px-6 bg-white features-grid">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">The new <br /> Standard.</h2>
                        <p className="text-xl text-gray-500 max-w-md mt-6 md:mt-0 font-medium">Over-engineered for performance. Simplified for the user.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="feature-card p-10 rounded-[2rem] bg-gray-50 hover:bg-black hover:text-white transition-colors duration-500 group cursor-pointer border border-transparent hover:border-gray-800">
                            <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center mb-8 text-2xl group-hover:bg-[#FF4D00] group-hover:text-white transition-colors">
                                <Zap size={28} />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Hypersonic<br />Speed</h3>
                            <p className="text-gray-500 group-hover:text-gray-400 text-lg leading-relaxed">
                                99+ Lighthouse scores are our baseline. Using Next.js and Edge caching, we deliver content globally in milliseconds.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="feature-card p-10 rounded-[2rem] bg-gray-50 hover:bg-black hover:text-white transition-colors duration-500 group cursor-pointer border border-transparent hover:border-gray-800">
                            <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center mb-8 text-2xl group-hover:bg-[#FF4D00] group-hover:text-white transition-colors">
                                <GitBranch size={28} />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Scalable<br />Architecture</h3>
                            <p className="text-gray-500 group-hover:text-gray-400 text-lg leading-relaxed">
                                Modular component systems and type-safe backends that grow with your business, not against it.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="feature-card p-10 rounded-[2rem] bg-gray-50 hover:bg-black hover:text-white transition-colors duration-500 group cursor-pointer border border-transparent hover:border-gray-800">
                            <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center mb-8 text-2xl group-hover:bg-[#FF4D00] group-hover:text-white transition-colors">
                                <Layers size={28} />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Pixel<br />Perfection</h3>
                            <p className="text-gray-500 group-hover:text-gray-400 text-lg leading-relaxed">
                                We translate design into code with surgical precision. Every animation, padding, and interaction is exactly as intended.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Minimalist Code Block Section */}
            <section className="py-24 bg-black text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF4D00] blur-[200px] opacity-20 pointer-events-none"></div>
                <div className="container mx-auto max-w-6xl px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                                Built for the <br /> <span className="text-[#FF4D00]">Modern Web.</span>
                            </h2>
                            <div className="space-y-8">
                                <div className="flex gap-6 items-start group">
                                    <div className="mt-2 w-2 h-2 rounded-full bg-[#FF4D00] group-hover:scale-150 transition-transform"></div>
                                    <div>
                                        <h4 className="text-2xl font-bold mb-2">Headless CMS</h4>
                                        <p className="text-gray-400">Content management that doesn't break your design. Sanity, Strapi, or Contentful integrated seamlessly.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start group">
                                    <div className="mt-2 w-2 h-2 rounded-full bg-[#FF4D00] group-hover:scale-150 transition-transform"></div>
                                    <div>
                                        <h4 className="text-2xl font-bold mb-2">Interactive 3D</h4>
                                        <p className="text-gray-400">Three.js and WebGL experiences that captivate users and win awwwards.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#111] rounded-xl border border-white/10 p-6 font-mono text-sm md:text-base leading-loose shadow-2xl">
                            <div className="flex gap-2 mb-6 opacity-30">
                                <div className="w-3 h-3 rounded-full bg-white"></div>
                                <div className="w-3 h-3 rounded-full bg-white"></div>
                            </div>
                            <div className="text-gray-400">
                                <span className="text-[#FF4D00]">import</span> <span className="text-white">{"{ Scaling }"}</span> <span className="text-[#FF4D00]">from</span> 'strive-studio';<br /><br />
                                <span className="text-[#FF4D00]">const</span> <span className="text-blue-400">Project</span> = <span className="text-white">await</span> Scaling.init({"{"}<br />
                                &nbsp;&nbsp;performance: <span className="text-green-400">'100/100'</span>,<br />
                                &nbsp;&nbsp;design: <span className="text-green-400">'Premium'</span>,<br />
                                &nbsp;&nbsp;uptme: <span className="text-green-400">'99.9%'</span><br />
                                {"}"});<br /><br />
                                <span className="text-gray-500">// Your vision, fully deployed.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-32 text-center bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-5xl md:text-7xl font-bold mb-12 tracking-tighter">Ready to upgrade?</h2>
                    <Button onClick={openModal} className="bg-black text-white px-12 py-6 rounded-full text-xl hover:scale-110 transition-transform duration-300">
                        Start Your Project
                    </Button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default WebDevelopment;
