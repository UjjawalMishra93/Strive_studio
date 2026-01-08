import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Services from '../components/Services';
import Process from '../components/Process';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
    // Fix hash scrolling when navigating back to home
    useEffect(() => {
        if (window.location.hash) {
            const element = document.getElementById(window.location.hash.substring(1));
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Hero />
            <Features />
            <Services />
            <Process />
            <Projects />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;
