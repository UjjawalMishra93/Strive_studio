import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Button from './Button';
import Logo from './Logo';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('about');
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navRef = useRef(null);
    const linkRefs = useRef({});

    const navLinks = [
        { id: 'about', label: 'About us' },
        { id: 'features', label: 'Why Us' },
        { id: 'services', label: 'Services' },
        { id: 'process', label: 'Process' },
        { id: 'work', label: 'Work' },
        { id: 'reviews', label: 'Reviews' }
    ];

    // Scroll Spy Logic
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200; // Offset for better detection

            for (const link of navLinks) {
                const element = document.getElementById(link.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(link.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Active Pill Animation Logic
    useEffect(() => {
        const activeLinkElement = linkRefs.current[activeSection];
        if (activeLinkElement && navRef.current) {
            const navRect = navRef.current.getBoundingClientRect();
            const linkRect = activeLinkElement.getBoundingClientRect();

            setIndicatorStyle({
                left: linkRect.left - navRect.left + 6,
                width: linkRect.width,
                opacity: 1
            });
        }
    }, [activeSection]);

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            // Close mobile menu on desktop resize
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }

            const activeLinkElement = linkRefs.current[activeSection];
            if (activeLinkElement && navRef.current) {
                const navRect = navRef.current.getBoundingClientRect();
                const linkRect = activeLinkElement.getBoundingClientRect();
                setIndicatorStyle({
                    left: linkRect.left - navRect.left + 6,
                    width: linkRect.width,
                    opacity: 1
                });
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [activeSection]);


    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 bg-transparent">
            {/* Main Header Container - Ensure items are visible */}
            <div className="flex items-center justify-between relative z-50">
                {/* Logo */}
                <div className="flex items-center gap-3 pointer-events-auto">
                    <Logo className="w-8 h-8 text-black" fill="currentColor" />
                    <span className="text-xl font-bold tracking-tight text-black">Strive Studio.</span>
                </div>

                {/* Desktop Navigation Links Container */}
                <div
                    className="hidden md:flex items-center relative p-1.5 bg-gray-100/90 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm pointer-events-auto"
                    ref={navRef}
                >
                    {/* The Moving Pill Background */}
                    <div
                        className="absolute h-[calc(100%-12px)] bg-white rounded-full shadow-sm transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] z-0 top-1.5"
                        style={{
                            left: indicatorStyle.left,
                            width: indicatorStyle.width,
                            opacity: indicatorStyle.opacity
                        }}
                    />

                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            ref={el => linkRefs.current[link.id] = el}
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector(`#${link.id}`)?.scrollIntoView({ behavior: 'smooth' });
                                setActiveSection(link.id);
                            }}
                            className={`
                                relative z-10 px-5 py-2 text-sm font-medium transition-colors duration-200
                                ${activeSection === link.id ? 'text-black' : 'text-gray-500 hover:text-gray-900'}
                            `}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* CTA Button (Desktop) - Only show when at top or specific logic if needed, but here we keep it mostly visible or dependent on state */}
                <div className={`hidden md:flex items-center pointer-events-auto transition-all duration-300 transform ${activeSection === 'about' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                    <Button className="pl-5 pr-1 py-1 text-sm font-semibold">Let's Collaborate</Button>
                </div>

                {/* Mobile Menu Button - Visible on small screens */}
                <button
                    className="md:hidden p-2 text-black bg-white/80 rounded-full border border-gray-200 backdrop-blur-md pointer-events-auto"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`
                fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden
                ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}
            `}>
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100/50 via-transparent to-transparent pointer-events-none" />

                {navLinks.map((link) => (
                    <a
                        key={link.id}
                        href={`#${link.id}`}
                        onClick={(e) => {
                            e.preventDefault();
                            setIsMobileMenuOpen(false); // Close menu
                            setTimeout(() => {
                                document.querySelector(`#${link.id}`)?.scrollIntoView({ behavior: 'smooth' });
                                setActiveSection(link.id);
                            }, 300); // Slight delay for menu close animation
                        }}
                        className={`text-2xl font-bold tracking-tight ${activeSection === link.id ? 'text-indigo-600' : 'text-gray-900'}`}
                    >
                        {link.label}
                    </a>
                ))}

                <div className="mt-8">
                    <Button className="pl-8 pr-8 py-3 text-lg font-semibold w-full">Let's Collaborate</Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
