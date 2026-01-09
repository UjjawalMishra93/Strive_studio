import React from 'react';
import { ArrowUpRight, Instagram, Twitter, Linkedin, Github, Heart } from 'lucide-react';
import Button from './Button';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="bg-[#050505] text-white pt-16 md:pt-24 pb-8 md:pb-12 overflow-hidden relative">

            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] md:h-[500px] bg-indigo-900/20 blur-[100px] md:blur-[150px] pointer-events-none rounded-full" />

            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">

                {/* Top Section: Massive CTA */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 md:gap-12">
                    <div className="max-w-3xl">
                        <h2 className="text-5xl md:text-[8rem] font-bold tracking-tighter leading-[0.9] mb-8 text-balance">
                            Let's build <br />
                            <span className="text-gray-500">something epic.</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                            <Button variant="white" className="pl-6 pr-2 py-2 text-base w-full sm:w-auto justify-center">Start a Project</Button>
                            <a href="mailto:hello@strive.studio" className="text-gray-400 hover:text-white transition-colors text-lg font-medium border-b border-transparent hover:border-white pb-0.5">
                                hello@strive.studio
                            </a>
                        </div>
                    </div>

                    {/* Scroll/Decoration */}
                    <div className="hidden lg:block animate-bounce duration-[2000ms]">
                        <ArrowUpRight size={64} className="text-gray-700 rotate-180" />
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-white/10 mb-12 md:mb-16" />

                {/* Middle Section: Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-12 mb-16 md:mb-20">

                    {/* Brand Column */}
                    <div className="col-span-1 sm:col-span-2 md:col-span-4">
                        <div className="flex items-center gap-3 mb-6">
                            <Logo className="w-8 h-8 text-white" fill="currentColor" />
                            <span className="text-xl font-heading font-bold tracking-tighter">Strive Studio.</span>
                        </div>
                        <p className="text-gray-500 max-w-sm leading-relaxed mb-8">
                            A digital design and development agency crafting premium experiences for forward-thinking brands.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: <Instagram size={20} />, href: "#" },
                                { icon: <Twitter size={20} />, href: "#" },
                                { icon: <Linkedin size={20} />, href: "#" },
                                { icon: <Github size={20} />, href: "#" }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all hover:-translate-y-1"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="text-lg font-bold mb-6">Sitemap</h4>
                        <ul className="space-y-4 text-gray-500">
                            {['Home', 'Services', 'Work', 'Agency', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors block w-max relative group">
                                        {item}
                                        <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-px bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-3">
                        <h4 className="text-lg font-bold mb-6">Services</h4>
                        <ul className="space-y-4 text-gray-500">
                            {['Web Development', 'UI/UX Design', 'E-Commerce', 'Brand Strategy', 'SEO Optimization'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-white transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1 sm:col-span-2 md:col-span-3">
                        <h4 className="text-lg font-bold mb-6">Office</h4>
                        <address className="not-italic text-gray-500 space-y-4">
                            <p>123 Innovation Drive,<br />Tech City, TC 90210</p>
                            <p>Everyday: 9am - 6pm</p>
                        </address>
                    </div>
                </div>

                {/* Bottom Section: Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-gray-600 text-sm gap-4 md:gap-0">
                    <p>&copy; 2024 Strive Studio. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <span className="flex items-center gap-1 text-gray-500">
                            Built by <span className="text-gray-300 hover:text-white transition-colors cursor-pointer font-medium">Ujjawal Mishra</span>
                        </span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
