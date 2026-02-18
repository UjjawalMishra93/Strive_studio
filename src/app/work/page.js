
"use client";
import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { projects } from '../../data/projects';
import { useRouter } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import Button from '../../components/Button';

const WorkPage = () => {
    const router = useRouter();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            <div className="pt-32 pb-20 px-6 md:px-12 bg-gray-50/50">
                <div className="container mx-auto max-w-7xl">
                    {/* Header */}
                    <div className="mb-16 md:mb-24 text-center">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-gray-900">
                            Selected Work<span className="text-indigo-600">.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-medium">
                            A curated collection of digital experiences, brand identities, and web applications designed to perform.
                        </p>
                    </div>

                    {/* Grid Layout - Uniform Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className="group relative cursor-pointer flex flex-col h-full rounded-[2rem] overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                                onClick={() => router.push(`/project/${project.id}`)}
                            >
                                {/* Image Container - Fixed Aspect Ratio */}
                                <div className="relative overflow-hidden aspect-[16/10] w-full">
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 z-10" />

                                    {/* Hover Action */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                                        <div className="w-20 h-20 bg-white shadow-2xl rounded-full flex items-center justify-center transform hover:scale-110 transition-transform">
                                            <ArrowUpRight className="text-black" size={32} />
                                        </div>
                                    </div>

                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Content Details */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600 mb-3 tracking-wide uppercase">
                                                {project.year}
                                            </span>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-1 leading-tight group-hover:text-indigo-600 transition-colors">
                                                {project.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium line-clamp-3">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.category.split('•').map((tag, idx) => (
                                            <span key={idx} className="text-xs font-semibold text-gray-400 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                                                {tag.trim()}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer Contact CTA */}
                    <div className="mt-24 md:mt-32 text-center py-20 border-t border-gray-200">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">Have a project in mind?</h2>
                        <Button
                            className="px-10 py-5 text-lg font-bold"
                            onClick={() => router.push('/')}
                        >
                            Let's Collaborate
                        </Button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default WorkPage;
