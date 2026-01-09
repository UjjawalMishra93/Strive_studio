import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Button from './Button';
import Logo from './Logo';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showFullNav, setShowFullNav] = useState(true);
    const navRef = useRef(null);
    const linkRefs = useRef({});
    const navigate = useNavigate();
    const location = useLocation();

    const navLinks = [
        { id: 'about', label: 'About us' },
        { id: 'features', label: 'Why Us' },
        { id: 'services', label: 'Services' },
        { id: 'process', label: 'Process' },
        { id: 'work', label: 'Work' },
        { id: 'reviews', label: 'Reviews' }
    ];

    // Scroll Logic
    useEffect(() => {
        const handleScroll = () => {
            // 1. Scroll Spy
            const scrollPosition = window.scrollY + 200;
            if (location.pathname === '/') {
                for (const link of navLinks) {
                    if (link.id === 'about') continue;
                    const element = document.getElementById(link.id);
                    if (element) {
                        const { offsetTop, offsetHeight } = element;
                        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                            setActiveSection(link.id);
                            break;
                        }
                    }
                }
            }

            // 2. Hide Branding/CTA on Scroll
            // We'll use a threshold. Typically Hero is ~100vh. Let's use 600px safely.
            // Or better: show if at top, hide if scrolled down significantly.
            if (window.scrollY > 100) {
                setShowFullNav(false);
            } else {
                setShowFullNav(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Trigger once
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    // Active Pill Animation... (unchanged logic mostly, but dependent on activeSection)

    const handleNavClick = (e, linkId) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        if (linkId === 'about') {
            if (location.pathname === '/about') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                navigate('/about');
            }
            setActiveSection('about');
            return;
        }

        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(linkId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    setActiveSection(linkId);
                }
            }, 100);
            return;
        }

        const element = document.getElementById(linkId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(linkId);
        }
    };


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
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 bg-transparent pointer-events-none">
            {/* Main Header Container */}
            <div className="flex items-center justify-between relative z-50">
                {/* Logo */}
                <div
                    className={`flex items-center gap-3 pointer-events-auto cursor-pointer group transition-all duration-500 transform ${showFullNav ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}
                    onClick={() => navigate('/')}
                >
                    <Logo className="w-8 h-8 text-black transition-transform duration-300 group-hover:rotate-12" fill="currentColor" />
                    <div className="relative flex flex-col items-center">
                        <span className="text-xl md:text-2xl font-heading font-bold tracking-tighter text-black relative z-10">Strive Studio.</span>
                        <svg
                            className="absolute -bottom-1.5 left-0 w-full h-2 text-indigo-500/80"
                            viewBox="0 0 100 10"
                            preserveAspectRatio="none"
                        >
                            <path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>

                {/* Desktop Navigation Links Container */}
                <div
                    className="hidden md:flex items-center relative p-1.5 bg-gray-100/90 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm pointer-events-auto transition-transform duration-500 ease-in-out"
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
                            onClick={(e) => handleNavClick(e, link.id)}
                            className={`
                                relative z-10 px-5 py-2 text-sm font-sans font-medium tracking-wide transition-colors duration-200
                                ${activeSection === link.id ? 'text-black font-semibold' : 'text-gray-500 hover:text-gray-900'}
                            `}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* CTA Button (Desktop) */}
                <div className={`hidden md:flex items-center pointer-events-auto transition-all duration-500 transform ${showFullNav ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
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
                        onClick={(e) => handleNavClick(e, link.id)}
                        className={`text-3xl font-heading font-bold tracking-tight ${activeSection === link.id ? 'text-indigo-600' : 'text-gray-900'}`}
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
