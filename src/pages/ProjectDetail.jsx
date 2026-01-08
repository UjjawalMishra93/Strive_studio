import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Check, Layers, Palette, Type } from 'lucide-react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';

const ProjectDetail = () => {
    const { id } = useParams();

    // In a real app, fetch data based on ID. For now, we simulate content.
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div className="bg-white min-h-screen">

            {/* Hero Header */}
            <div className="pt-32 pb-20 px-6 bg-gray-50 border-b border-gray-200">
                <div className="container mx-auto max-w-7xl">
                    <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-black transition-colors mb-8 text-sm font-medium">
                        <ArrowLeft size={16} /> Back to Work
                    </Link>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                        <div>
                            <span className="text-indigo-600 font-mono text-sm tracking-widest uppercase mb-4 block">Fintech • Case Study</span>
                            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-none mb-6">
                                Lumina<span className="text-indigo-600">.</span>
                            </h1>
                            <p className="text-xl text-gray-500 max-w-lg leading-relaxed">
                                A complete banking dashboard redesign focusing on user accessibility and financial data visualization.
                            </p>
                        </div>
                        <div className="flex flex-col gap-6 md:items-end">
                            <div className="grid grid-cols-2 gap-8 text-left md:text-right">
                                <div>
                                    <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-1">Client</h4>
                                    <p className="font-medium text-gray-900">Lumina Financial</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-1">Year</h4>
                                    <p className="font-medium text-gray-900">2024</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-1">Services</h4>
                                    <p className="font-medium text-gray-900">Web Design, React Dev</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-1">Live Site</h4>
                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-800 underline decoration-indigo-200 underline-offset-4">lumina.finance</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Showcase Image */}
            <div className="container mx-auto max-w-7xl px-4 -mt-12 mb-24 relative z-10">
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200 border border-gray-200 aspect-video bg-gray-100">
                    <img
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                        alt="Project Hero"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* The Challenge & Solution */}
            <div className="container mx-auto max-w-5xl px-6 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-3xl font-bold mb-6">The Challenge</h3>
                        <p className="text-gray-500 leading-relaxed text-lg mb-6">
                            Lumina struggled with a legacy interface that was confusing for new crypto-curious users. The data density was too high, leading to cognitive overload and a bounce rate of 65%. They needed a solution that felt trustworthy yet modern.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-gray-600">
                                <div className="mt-1 w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center flex-shrink-0 text-xs font-bold">✕</div>
                                High bounce rate on landing
                            </li>
                            <li className="flex items-start gap-3 text-gray-600">
                                <div className="mt-1 w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center flex-shrink-0 text-xs font-bold">✕</div>
                                Confusing navigation structure
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold mb-6">The Solution</h3>
                        <p className="text-gray-500 leading-relaxed text-lg mb-6">
                            We stripped the application down to its core value proposition. By using a modular bento-grid layout, we allowed users to customize their dashboard. We implemented a strict design system based on "Trust Blue" and highly legible typography.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-gray-600">
                                <div className="mt-1 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0"><Check size={12} strokeWidth={4} /></div>
                                Custom Dashboard Widgets
                            </li>
                            <li className="flex items-start gap-3 text-gray-600">
                                <div className="mt-1 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0"><Check size={12} strokeWidth={4} /></div>
                                Dark/Light Mode toggle
                            </li>
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
                                    <p className="text-2xl font-medium">Plus Jakarta Sans</p>
                                </div>
                                <div className="h-px bg-white/10"></div>
                                <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                                    <p>Regular 400</p>
                                    <p>Medium 500</p>
                                    <p>SemiBold 600</p>
                                    <p>Bold 700</p>
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
                                <div className="flex items-center p-4 bg-white rounded-xl text-black justify-between">
                                    <span className="font-bold">Surface</span>
                                    <span className="font-mono text-sm opacity-60">#FFFFFF</span>
                                </div>
                                <div className="flex items-center p-4 bg-[#0a0a0a] border border-white/10 rounded-xl text-white justify-between">
                                    <span className="font-bold">Background</span>
                                    <span className="font-mono text-sm opacity-60">#0A0A0A</span>
                                </div>
                                <div className="flex items-center p-4 bg-indigo-600 rounded-xl text-white justify-between">
                                    <span className="font-bold">Primary</span>
                                    <span className="font-mono text-sm opacity-60">#4F46E5</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Screenshot Parallax Grid */}
                    <div className="space-y-12">
                        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" alt="UI 1" className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop" alt="UI 2" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2500&auto=format&fit=crop" alt="UI 3" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Results/Metrics */}
            <div className="container mx-auto max-w-7xl px-6 mb-32">
                <div className="bg-gray-50 rounded-[3rem] p-12 md:p-20 text-center">
                    <h3 className="text-3xl font-bold mb-16">Measurable Impact</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <div className="text-6xl font-bold text-indigo-600 mb-2">300%</div>
                            <p className="text-gray-500 font-medium">Increase in Signups</p>
                        </div>
                        <div>
                            <div className="text-6xl font-bold text-indigo-600 mb-2">0.9s</div>
                            <p className="text-gray-500 font-medium">Page Load Time</p>
                        </div>
                        <div>
                            <div className="text-6xl font-bold text-indigo-600 mb-2">98%</div>
                            <p className="text-gray-500 font-medium">Customer Satisfaction</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Next Project Footer */}
            <div className="border-t border-gray-100 py-24 text-center">
                <p className="text-gray-400 uppercase tracking-widest text-sm font-bold mb-6">Next Case Study</p>
                <Link to="/project/nebula" className="group inline-flex flex-col items-center">
                    <h2 className="text-5xl md:text-8xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-500 transition-all duration-300">
                        Nebula Stream
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
