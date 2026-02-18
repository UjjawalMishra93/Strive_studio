"use client";
import React, { useEffect, useRef } from 'react';
import { projects } from '../data/projects';
import { useRouter } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import Button from './Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const router = useRouter();
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

    // Use only the first 4 projects for the featured section if plenty exist, or all if few.
    // The original file had 5 projects. Let's use the imported list.
    // If we want to filter specific ones, we can, but likely using all is fine or slice valid ones.
    const featuredProjects = projects.filter(p => p.id !== "1"); // Example filter if needed, "1" was Lumina case study dummy

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
                    {featuredProjects.map((project) => (
                        <div
                            key={project.id}
                            ref={addToRefs}
                            className={`group cursor-pointer ${project.size}`}
                            onClick={() => router.push(`/project/${project.id}`)}
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
                    <Button
                        onClick={() => router.push('/work')}
                        className="pl-10 pr-4 py-4 text-lg"
                    >
                        View All Projects
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
