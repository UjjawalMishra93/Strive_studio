import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Button from './Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const navigate = useNavigate();
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const projectRefs = useRef([]);

    const addToRefs = (el) => {
        if (el && !projectRefs.current.includes(el)) {
            projectRefs.current.push(el);
        }
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Header
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

            // Animate Project Cards
            gsap.from(projectRefs.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const projects = [
        {
            id: 1,
            title: "Lumina Fintech",
            category: "Fintech • Web App",
            description: "A complete banking dashboard redesign focusing on user accessibility and financial data visualization.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
            year: "2024",
            size: "col-span-1 md:col-span-2" // Wide card
        },
        {
            id: 2,
            title: "Nebula Stream",
            category: "SaaS • Branding",
            description: "Brand identity and marketing site for an AI-powered video streaming platform.",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop",
            year: "2023",
            size: "col-span-1" // Tall card
        },
        {
            id: 3,
            title: "Flow State",
            category: "E-Commerce • Mobile",
            description: "Mobile-first shopping experience for a luxury wellness brand.",
            image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2500&auto=format&fit=crop",
            year: "2023",
            size: "col-span-1" // Tall card
        },
        {
            id: 4,
            title: "Urban Architecture",
            category: "Portfolio • Design",
            description: "Minimalist portfolio showcasing architectural masterpieces.",
            image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2670&auto=format&fit=crop",
            year: "2024",
            size: "col-span-1 md:col-span-2" // Wide card
        }
    ];

    return (
        <section ref={sectionRef} id="work" className="py-24 md:py-32 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Header */}
                <div ref={headerRef} className="flex flex-col md:flex-row items-end justify-between mb-16 md:mb-24">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">Selected Work</h2>
                        <h3 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-gray-900 tracking-tighter">
                            Featured <br />
                            <span className="text-gray-400">Projects.</span>
                        </h3>
                    </div>
                    <div className="hidden md:block">
                        <p className="text-gray-500 max-w-xs text-right mb-6">
                            A curation of our best work, delivering impact through design and technology.
                        </p>
                        <div className="h-px w-full bg-gray-200"></div>
                    </div>
                </div>

                {/* Masonry-style Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            ref={addToRefs}
                            className={`group cursor-pointer ${project.size}`}
                            onClick={() => navigate(`/project/${project.id}`)}
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden rounded-[2rem] aspect-[16/10] md:aspect-[16/10] mb-6">
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 duration-500" />

                                {/* Hover Button */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                                    <div className="w-24 h-24 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-2xl">
                                        <span className="text-sm font-semibold tracking-tight">View Case</span>
                                    </div>
                                </div>

                                {/* Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors flex items-center gap-2">
                                        {project.title}
                                        <ArrowUpRight size={20} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-indigo-600" />
                                    </h4>
                                    <p className="text-gray-500 font-medium text-sm md:text-base">{project.category}</p>
                                </div>
                                <div className="text-xs md:text-sm font-semibold text-gray-300 border border-gray-100 px-3 py-1 rounded-full">
                                    {project.year}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 md:mt-24 text-center pb-12 md:pb-20">
                    <Button className="pl-10 pr-4 py-4 text-lg">
                        View All Projects
                    </Button>
                </div>

            </div>
        </section>
    );
};

export default Projects;
