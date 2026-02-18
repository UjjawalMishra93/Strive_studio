
"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Check, Layers, Palette, Type, X, ZoomIn } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Button from '../../../components/Button';
import Footer from '../../../components/Footer';
import { projects } from '../../../data/projects';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id) || projects.find(p => p.id === "1"); // Fallback to Lumina if not found
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedImage]);

    if (!project) return <div>Project not found</div>;

    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={32} />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Zoomed View"
                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}

            {/* Hero Header */}
            <div className="pt-32 pb-20 px-6 bg-gray-50 border-b border-gray-200">
                <div className="container mx-auto max-w-7xl">
                    <Link href="/work" className="inline-flex items-center gap-2 text-gray-400 hover:text-black transition-colors mb-8 text-sm font-medium">
                        <ArrowLeft size={16} /> Back to Work
                    </Link>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                        <div>
                            <span className="text-indigo-600 font-mono text-sm tracking-widest uppercase mb-4 block">{project.subtitle}</span>
                            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-none mb-6">
                                {project.title}<span className="text-indigo-600">.</span>
                            </h1>
                            <p className="text-xl text-gray-500 max-w-lg leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                        <div className="flex flex-col gap-6 md:items-end">
                            <div className="grid grid-cols-2 gap-8 text-left md:text-right">
                                <div>
                                    <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-1">Client</h4>
                                    <p className="font-medium text-gray-900">{project.client}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-1">Year</h4>
                                    <p className="font-medium text-gray-900">{project.year}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-1">Services</h4>
                                    <p className="font-medium text-gray-900">{project.services}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-1">Live Site</h4>
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-600 hover:text-indigo-800 underline decoration-indigo-200 underline-offset-4">
                                        {project.liveDisplay}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Showcase Image */}
            <div className="container mx-auto max-w-7xl px-4 -mt-12 mb-24 relative z-10 group cursor-zoom-in" onClick={() => setSelectedImage(project.heroImage)}>
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200 border border-gray-200 aspect-video bg-gray-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 z-20 pointer-events-none">
                        <div className="bg-white/90 backdrop-blur rounded-full p-4 shadow-xl">
                            <ZoomIn size={24} />
                        </div>
                    </div>
                    <img
                        src={project.heroImage}
                        alt="Project Hero"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
            </div>

            {/* The Challenge & Solution */}
            <div className="container mx-auto max-w-5xl px-6 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-3xl font-bold mb-6">The Challenge</h3>
                        <p className="text-gray-500 leading-relaxed text-lg mb-6">
                            {project.challenge.text}
                        </p>
                        <ul className="space-y-3">
                            {project.challenge.points.map((point, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-600">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center flex-shrink-0 text-xs font-bold">✕</div>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold mb-6">The Solution</h3>
                        <p className="text-gray-500 leading-relaxed text-lg mb-6">
                            {project.solution.text}
                        </p>
                        <ul className="space-y-3">
                            {project.solution.points.map((point, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-600">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0"><Check size={12} strokeWidth={4} /></div>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Visual Gallery */}
            <div className="bg-[#0a0a0a] text-white py-32 mb-24 relative overflow-hidden">
                {/* Background Blobs */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/40 rounded-full blur-[120px] pointer-events-none opacity-50" />

                <div className="container mx-auto max-w-7xl px-6 relative z-10">
                    <div className="flex items-center gap-4 mb-16">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                            <Layers size={24} className="text-indigo-400" />
                        </div>
                        <h2 className="text-4xl font-bold">Design System</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                        {/* Typography Card */}
                        <div className="bg-white/5 border border-white/10 p-12 rounded-3xl backdrop-blur-sm">
                            <div className="flex items-center gap-4 mb-8">
                                <Type className="text-gray-400" />
                                <span className="text-sm font-mono text-gray-400 uppercase tracking-wider">Typography</span>
                            </div>
                            <div className="space-y-8">
                                <div>
                                    <p className="text-6xl font-bold mb-2">Aa</p>
                                    <p className="text-2xl font-medium">{project.designSystem.typography}</p>
                                </div>
                                <div className="h-px bg-white/10"></div>
                                <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                                    {project.designSystem.fonts.map((font, idx) => (
                                        <p key={idx}>{font}</p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Color Card */}
                        <div className="bg-white/5 border border-white/10 p-12 rounded-3xl backdrop-blur-sm flex flex-col justify-between">
                            <div className="flex items-center gap-4 mb-8">
                                <Palette className="text-gray-400" />
                                <span className="text-sm font-mono text-gray-400 uppercase tracking-wider">Color Palette</span>
                            </div>
                            <div className="space-y-4">
                                {project.designSystem.colors.map((color, idx) => (
                                    <div key={idx} className={`flex items-center p-4 rounded-xl justify-between ${color.hex === '#FFFFFF' || color.name === 'Cream' ? 'bg-white text-black' : 'bg-[#0a0a0a] border border-white/10 text-white'}`} style={color.hex !== '#FFFFFF' && color.hex !== '#0A0A0A' && color.name !== 'Cream' ? { backgroundColor: color.hex, border: 'none' } : {}}>
                                        <span className="font-bold">{color.name}</span>
                                        <span className="font-mono text-sm opacity-60">{color.hex}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Screenshot Parallax Grid */}
                    <div className="space-y-12">
                        {project.gallery.map((imgSrc, idx) => (
                            <div
                                key={idx}
                                className={`rounded-3xl overflow-hidden border border-white/10 shadow-2xl cursor-zoom-in group relative ${idx % 2 !== 0 ? 'md:w-3/4 md:ml-auto' : 'md:w-full'}`}
                                onClick={() => setSelectedImage(imgSrc)}
                            >
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 z-20 pointer-events-none">
                                    <div className="bg-white/10 backdrop-blur-md rounded-full p-4 border border-white/20">
                                        <ZoomIn className="text-white" size={32} />
                                    </div>
                                </div>
                                <img
                                    src={imgSrc}
                                    alt={`Gallery ${idx + 1}`}
                                    className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Results/Metrics */}
            <div className="container mx-auto max-w-7xl px-6 mb-32">
                <div className="bg-gray-50 rounded-[3rem] p-12 md:p-20 text-center">
                    <h3 className="text-3xl font-bold mb-16">Measurable Impact</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {project.metrics.map((metric, idx) => (
                            <div key={idx}>
                                <div className="text-6xl font-bold text-indigo-600 mb-2">{metric.value}</div>
                                <p className="text-gray-500 font-medium">{metric.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Next Project Footer */}
            <div className="border-t border-gray-100 py-24 text-center">
                <p className="text-gray-400 uppercase tracking-widest text-sm font-bold mb-6">Next Case Study</p>
                <Link href={`/project/${project.nextProject}`} className="group inline-flex flex-col items-center">
                    <h2 className="text-5xl md:text-8xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-500 transition-all duration-300">
                        Next Project
                    </h2>
                    <div className="w-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-500 mt-4 group-hover:w-full transition-all duration-500 rounded-full"></div>
                    <div className="mt-8">
                        <Button className="pl-6 pr-2 py-2">View Case</Button>
                    </div>
                </Link>
            </div>

            <Footer />
        </div>
    );
};

export default ProjectDetail;
