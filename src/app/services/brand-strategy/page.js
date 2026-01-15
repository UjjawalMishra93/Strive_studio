"use client";
import React, { useEffect, useRef } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Button from '../../../components/Button';
import { Quote, MoveRight, Star, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useModal } from '../../../context/ModalContext';

gsap.registerPlugin(ScrollTrigger);

const BrandStrategy = () => {
    const horizontalSection = useRef(null);
    const { openModal } = useModal();

    useEffect(() => {
        // Horizontal Scroll for values
        const ctx = gsap.context(() => {
            const sections = gsap.utils.toArray(".horizontal-panel");
            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: horizontalSection.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (sections.length - 1),
                    end: "+=3500",
                }
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="bg-[#f2f2f2] min-h-screen text-[#111] font-sans selection:bg-black selection:text-white overflow-x-hidden">
            <Navbar />

            {/* Hero Section - Swiss Style Typography */}
            <section className="pt-48 pb-32 px-6">
                <div className="container mx-auto max-w-[90rem]">
                    <div className="border-t-[1px] border-black pt-8">
                        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-24">
                            <h1 className="text-8xl md:text-[11rem] font-medium leading-[0.8] tracking-tighter uppercase mb-12 lg:mb-0">
                                Identity <br /> <span className="italic font-serif">Systems</span>
                            </h1>
                            <div className="max-w-md">
                                <p className="text-xl font-medium leading-normal mb-8">
                                    We build brands that don't just exist—they lead. Strategic positioning meets timeless visual identity.
                                </p>
                                <Button
                                    onClick={openModal}
                                    className="bg-black text-white px-8 py-4 rounded-full uppercase text-xs tracking-widest font-bold hover:scale-105 transition-transform flex items-center gap-3"
                                >
                                    Define Your Voice <ArrowRight size={16} />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Horizontal Scroll Section */}
            <section ref={horizontalSection} className="h-screen w-full overflow-hidden bg-black text-[#f2f2f2] flex items-center">
                <div className="flex w-[400vw] h-full">

                    {/* Panel 1 */}
                    <div className="horizontal-panel w-screen h-full flex flex-col justify-center px-12 md:px-32 border-r border-white/10">
                        <span className="text-sm font-mono uppercase tracking-widest opacity-50 mb-8">(01) Strategy</span>
                        <h2 className="text-6xl md:text-9xl font-serif italic mb-8">Positioning</h2>
                        <p className="text-2xl md:text-4xl font-light max-w-4xl text-gray-400">Finding the white space in a crowded market. We define not just where you sit, but where you stand.</p>
                    </div>

                    {/* Panel 2 */}
                    <div className="horizontal-panel w-screen h-full flex flex-col justify-center px-12 md:px-32 border-r border-white/10 bg-[#1a1a1a]">
                        <span className="text-sm font-mono uppercase tracking-widest opacity-50 mb-8">(02) Visuals</span>
                        <h2 className="text-6xl md:text-9xl font-serif italic mb-8">Art Direction</h2>
                        <p className="text-2xl md:text-4xl font-light max-w-4xl text-gray-400">Crafting a visual lexicon. Photography, typography, and color palettes that speak without words.</p>
                    </div>

                    {/* Panel 3 */}
                    <div className="horizontal-panel w-screen h-full flex flex-col justify-center px-12 md:px-32 border-r border-white/10">
                        <span className="text-sm font-mono uppercase tracking-widest opacity-50 mb-8">(03) Voice</span>
                        <h2 className="text-6xl md:text-9xl font-serif italic mb-8">Copywriting</h2>
                        <p className="text-2xl md:text-4xl font-light max-w-4xl text-gray-400">Words matter. We define your tone of voice to ensure every message resonates with your tribe.</p>
                    </div>

                    {/* Panel 4 */}
                    <div className="horizontal-panel w-screen h-full flex flex-col justify-center items-center text-center px-12 bg-[#FF3300] text-black">
                        <h2 className="text-6xl md:text-[10rem] font-bold uppercase leading-none mb-12">Make Your <br /> Mark.</h2>
                        <Button
                            onClick={openModal}
                            className="bg-black text-white px-12 py-6 text-xl rounded-full hover:scale-105 transition-transform"
                        >
                            Start the Journey
                        </Button>
                    </div>
                </div>
            </section>

            {/* Manifesto / Text Block */}
            <section className="py-32 px-6">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex gap-8 items-start">
                        <Quote size={48} className="text-gray-300 flex-shrink-0" />
                        <div>
                            <p className="text-3xl md:text-5xl font-medium leading-tight mb-12">
                                Good design is good business. But great design is a movement. We don't just design logos; we design legacies.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-black rounded-full"></div>
                                <div>
                                    <p className="font-bold uppercase tracking-wide">Strive Studio</p>
                                    <p className="text-sm text-gray-500">Strategy Team</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BrandStrategy;
