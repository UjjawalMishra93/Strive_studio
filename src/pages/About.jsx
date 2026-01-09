import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Users, Box, Hexagon, Component, Globe } from 'lucide-react';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const headerRef = useRef(null);
    const storyRef = useRef(null);
    const teamRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header Animation
            gsap.from(headerRef.current.children, {
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power4.out"
            });

            // Image Reveal Animation
            gsap.utils.toArray('.reveal-image').forEach((img) => {
                gsap.fromTo(img,
                    { scale: 1.2, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 1.5,
                        scrollTrigger: {
                            trigger: img,
                            start: "top 80%",
                            scrub: true
                        }
                    }
                );
            });

        });
        return () => ctx.revert();
    }, []);

    const team = [
        { name: "Alex Morgan", role: "Founder & Creative Director", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" },
        { name: "Sarah Chen", role: "Head of Strategy", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
        { name: "Marcus Johnson", role: "Lead Developer", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop" },
        { name: "Emily Davis", role: "UX Designer", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop" }
    ];

    return (
        <div className="bg-white min-h-screen">
            <Navbar /> {/* Reusing Navbar for consistency */}

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6 md:px-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[120px] -z-10 pointer-events-none" />

                <div ref={headerRef} className="container mx-auto max-w-7xl text-center">
                    <h5 className="text-sm font-bold tracking-widest text-indigo-600 uppercase mb-6">Who We Are</h5>
                    <h1 className="text-5xl md:text-8xl font-heading font-bold tracking-tighter text-gray-950 mb-8 leading-[0.9]">
                        We are the <br /><span className="text-gray-400">architects</span> of tomorrow.
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
                        Strive Studio is a collection of dreamers, doers, and creators obsessed with building digital experiences that defy the ordinary.
                    </p>
                </div>
            </section>

            {/* Visual Story Grid */}
            <section ref={storyRef} className="py-20 px-6 md:px-12">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-12 gap-6 h-auto md:h-[800px]">
                        {/* Large Left Image */}
                        <div className="col-span-12 md:col-span-8 relative overflow-hidden rounded-[2rem] group h-[350px] md:h-auto">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
                                alt="Team Working"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 reveal-image"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
                                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">Collaboration</h3>
                                <p className="opacity-80 text-sm md:text-base">Where ideas collide and brilliance is born.</p>
                            </div>
                        </div>

                        {/* Right Column Stack */}
                        <div className="col-span-12 md:col-span-4 flex flex-col gap-6">
                            <div className="relative overflow-hidden rounded-[2rem] bg-black text-white p-8 group h-[300px] md:h-auto md:flex-1">
                                <ArrowUpRight className="w-12 h-12 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-2xl font-bold mb-2">Fast & Fearless</h3>
                                <p className="text-gray-400 text-sm">We don't just keep up; we set the pace. Innovation waits for no one.</p>
                            </div>
                            <div className="relative overflow-hidden rounded-[2rem] group h-[300px] md:h-auto md:flex-1">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
                                    alt="Brainstorming"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 reveal-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission / Values - Creative Overhaul */}
            <section className="py-32 bg-[#050505] text-white relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                        {/* Left Content - Typography Focus */}
                        <div className="relative">
                            <div className="absolute -top-20 -left-20 text-[12rem] font-bold text-white/[0.02] pointer-events-none select-none font-heading leading-none">
                                01
                            </div>

                            <h2 className="text-5xl md:text-7xl font-heading font-bold mb-10 leading-[0.9]">
                                Bridging <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Art</span> &
                                <span className="text-white"> Technology</span>.
                            </h2>

                            <div className="space-y-8 max-w-lg">
                                <div className="group pl-8 border-l-2 border-white/10 hover:border-indigo-500 transition-colors duration-300">
                                    <h4 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">Purpose Driven</h4>
                                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                        We reject potential without purpose. Every pixel, every interaction, and every line of code is crafted to drive measurable impact.
                                    </p>
                                </div>
                                <div className="group pl-8 border-l-2 border-white/10 hover:border-pink-500 transition-colors duration-300">
                                    <h4 className="text-2xl font-bold mb-3 group-hover:text-pink-400 transition-colors">Human Centric</h4>
                                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                        Technology should feel like magic, not a machine. We create interfaces that understand, predict, and delight the human on the other side.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Abstract Bento Grid */}
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4 md:gap-6">
                                {/* Card 1 */}
                                <div className="col-span-1 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors duration-500 flex flex-col justify-between h-[280px] mb-6">
                                    <Box className="text-indigo-400 mb-auto" size={40} strokeWidth={1} />
                                    <div>
                                        <h3 className="text-6xl font-heading font-bold mb-2">5+</h3>
                                        <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">Years Experience</p>
                                    </div>
                                </div>

                                {/* Card 2 - Highlight */}
                                <div className="col-span-1 bg-gradient-to-br from-indigo-600 to-purple-600 p-8 rounded-[2rem] shadow-2xl shadow-indigo-900/50 flex flex-col justify-between h-[240px] translate-y-12 mb-6">
                                    <Globe className="text-white/80 mb-auto" size={40} strokeWidth={1} />
                                    <div>
                                        <h3 className="text-5xl font-heading font-bold mb-2 text-white">50+</h3>
                                        <p className="text-sm font-medium tracking-widest text-indigo-100 uppercase">Projects Shipped</p>
                                    </div>
                                </div>

                                {/* Card 3 */}
                                <div className="col-span-1 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors duration-500 flex flex-col justify-between h-[240px] -translate-y-2">
                                    <Hexagon className="text-pink-400 mb-auto" size={40} strokeWidth={1} />
                                    <div>
                                        <h3 className="text-5xl font-heading font-bold mb-2">100%</h3>
                                        <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">Client Love</p>
                                    </div>
                                </div>

                                {/* Card 4 */}
                                <div className="col-span-1 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors duration-500 flex flex-col justify-between h-[280px]">
                                    <Component className="text-yellow-400 mb-auto" size={40} strokeWidth={1} />
                                    <div>
                                        <h3 className="text-6xl font-heading font-bold mb-2">24/7</h3>
                                        <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">Dedicated Support</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section ref={teamRef} className="py-32 overflow-hidden">
                <div className="container mx-auto px-6 md:px-12 max-w-7xl mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Meet the Minds</h2>
                    <p className="text-xl text-gray-500 max-w-xl">The strategists, designers, and developers making it all happen.</p>
                </div>

                {/* Scrollable Team Row */}
                <div className="flex gap-6 overflow-x-auto px-6 md:px-12 pb-12 snap-x hide-scrollbar">
                    {team.map((member, idx) => (
                        <div key={idx} className="min-w-[300px] md:min-w-[350px] snap-start group relative">
                            <div className="h-[400px] rounded-[2rem] overflow-hidden mb-6 relative">
                                <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div className="bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20">
                                        <Users className="text-white" size={20} />
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                            <p className="text-gray-500 font-medium">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
