"use client";
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const router = useRouter(); // Initialize router
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const serviceRefs = useRef([]);

    // ... existing refs logic ...

    // Add references safely
    const addToRefs = (el) => {
        if (el && !serviceRefs.current.includes(el)) {
            serviceRefs.current.push(el);
        }
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header Animation
            gsap.from(headerRef.current, {
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            // Services List Stagger
            gsap.from(serviceRefs.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                x: -50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            });

        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const services = [
        {
            id: "01",
            title: "Web Development",
            description: "High-performance websites built with React, Next.js, and modern technologies. We prioritize speed, accessibility, and clean code.",
            tags: ["React", "Next.js", "Tailwind", "Node.js"],
            slug: "/services/web-development"
        },
        {
            id: "02",
            title: "UI/UX Design",
            description: "User-centered design that drives engagement. We create intuitive interfaces and stunning visuals that tell your brand story.",
            tags: ["Figma", "Prototyping", "Design Systems", "User Research"],
            slug: "/services/ui-ux-design"
        },
        {
            id: "03",
            title: "E-Commerce",
            description: "Scalable online stores that convert. From Shopify to custom solutions, we build seamless shopping experiences.",
            tags: ["Shopify", "WooCommerce", "Stripe", "Conversion Rate Optimization"],
            slug: "/services/e-commerce"
        },
        {
            id: "04",
            title: "Brand Strategy",
            description: "More than just a logo. We define your brand voice, market positioning, and visual identity to stand out in a crowded market.",
            tags: ["Identity", "Positioning", "Copywriting", "Art Direction"],
            slug: "/services/brand-strategy"
        }
    ];

    return (
        <section ref={sectionRef} id="services" className="py-24 md:py-32 bg-[#0a0a0a] text-white relative overflow-hidden">

            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-500/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">

                {/* Header */}
                <div ref={headerRef} className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 md:mb-24 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-indigo-500 font-mono text-xs md:text-sm tracking-widest uppercase mb-4">Our Expertise</h2>
                        <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-none text-balance">
                            Comprehensive <br />
                            <span className="text-gray-500">Design Solutions.</span>
                        </h3>
                    </div>
                    <div className="hidden md:block pb-4">
                        <ArrowUpRight size={48} className="text-white/20" />
                    </div>
                </div>

                {/* Services List */}
                <div className="flex flex-col">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            ref={addToRefs}
                            onClick={() => router.push(service.slug)}
                            className="group border-t border-white/10 py-10 md:py-16 hover:bg-white/5 transition-colors cursor-pointer"
                        >
                            <div className="flex flex-col md:flex-row gap-6 md:gap-8 md:items-start justify-between">
                                <span className="text-lg md:text-2xl font-mono text-gray-600 group-hover:text-indigo-400 transition-colors">/{service.id}</span>

                                <div className="max-w-2xl">
                                    <h4 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6 group-hover:translate-x-4 transition-transform duration-300">
                                        {service.title}
                                    </h4>
                                    <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-8 max-w-xl group-hover:text-gray-300 transition-colors">
                                        {service.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 md:gap-3">
                                        {service.tags.map((tag) => (
                                            <span key={tag} className="text-xs md:text-sm font-medium text-gray-500 border border-white/10 px-3 py-1 rounded-full group-hover:border-white/30 group-hover:text-white transition-all">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full border border-white/10 group-hover:bg-white group-hover:text-black transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 duration-500">
                                    <ArrowUpRight size={24} />
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-white/10" />
                </div>

            </div>
        </section>
    );
};

export default Services;
