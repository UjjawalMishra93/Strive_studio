import React, { useEffect, useRef, useState } from 'react';
import { Star, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        text: "The web experience they built for us didn't just look good—it redefined our brand. Our conversion metrics are up 200%.",
        author: "Alex Rivera",
        role: "CMO at FinLoop",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        text: "We needed a site that felt 'alive'. Strive Studio delivered something that feels like magic. Smooth, fast, and stunning.",
        author: "Sara Jenkins",
        role: "Director, ArtVibe",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        text: "Professionalism at its finest. They took our vague ideas and turned them into a pixel-perfect reality. Highly recommended.",
        author: "Marcus Chen",
        role: "Founder, TechFlow",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        text: "I've worked with many agencies, but none compare to this level of design execution. They truly understand modern UX.",
        author: "Emily Tao",
        role: "Product Lead, Stripe",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D"
    }
];

const Testimonials = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const scrollRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-scroll loop
    useEffect(() => {
        let animationFrameId;

        const animateScroll = () => {
            if (scrollRef.current && !isPaused) {
                const { current } = scrollRef;
                // Scroll speed
                current.scrollLeft += 1;

                // Infinite loop: Reset to 1/3 point when reaching 2/3 point
                // (Assumes 3 duplicates of data)
                if (current.scrollWidth > 0 && current.scrollLeft >= (current.scrollWidth / 3) * 2) {
                    current.scrollLeft = (current.scrollWidth / 3);
                }
            }
            animationFrameId = requestAnimationFrame(animateScroll);
        };

        animationFrameId = requestAnimationFrame(animateScroll);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    useEffect(() => {
        const ctx = gsap.context(() => {
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
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="reviews" className="py-32 bg-white overflow-hidden border-t border-gray-100">
            <div className="container mx-auto px-4 mb-20">
                <div ref={headerRef} className="flex flex-col md:flex-row items-end justify-between gap-8 max-w-7xl mx-auto">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="flex">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} className="fill-black text-black" />)}
                            </span>
                            <span className="text-sm font-semibold">5.0 Rating</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 leading-[0.9]">
                            Don't just take <br />
                            <span className="text-gray-400">our word for it.</span>
                        </h2>
                    </div>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full">

                {/* Fade Gradients */}
                <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* Scrollable Row */}
                <div
                    ref={scrollRef}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className="flex whitespace-nowrap gap-8 overflow-x-auto overflow-y-hidden scroll-smooth pb-8"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                        <div
                            key={i}
                            className="w-[400px] md:w-[500px] flex-shrink-0 p-10 bg-gray-50 rounded-[2rem] hover:bg-gray-100 transition-colors cursor-default border border-transparent hover:border-gray-200 group"
                        >
                            <div className="mb-8">
                                <div className="text-2xl md:text-3xl leading-snug font-medium text-gray-900 whitespace-normal">
                                    "{t.text}"
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200">
                                    <img src={t.avatar} alt={t.author} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">{t.author}</div>
                                    <div className="text-sm text-gray-500">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <style jsx>{`
                /* Hide scrollbar for Chrome/Safari/Opera */
                .overflow-x-auto::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
