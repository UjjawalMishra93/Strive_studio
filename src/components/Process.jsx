import React from 'react';
import { Search, Map, Palette, SquareTerminal, Rocket } from 'lucide-react';

const Process = () => {
    const steps = [
        {
            id: '01',
            title: 'Discovery',
            desc: 'We start by immersing ourselves in your brand. We analyze your audience, competitors, and goals to build a solid foundation.',
            icon: <Search className="text-blue-400" size={32} />,
            color: 'border-l-blue-500'
        },
        {
            id: '02',
            title: 'Strategy',
            desc: 'Visualizing the path to success. We map out user journeys, site architecture, and content strategy before a single pixel is placed.',
            icon: <Map className="text-indigo-400" size={32} />,
            color: 'border-l-indigo-500'
        },
        {
            id: '03',
            title: 'Design',
            desc: 'Where magic happens. We craft intuitive, stunning interfaces that align precise aesthetics with functional UX patterns.',
            icon: <Palette className="text-purple-400" size={32} />,
            color: 'border-l-purple-500'
        },
        {
            id: '04',
            title: 'Development',
            desc: 'Clean, scalable code. We build with modern frameworks to ensure your site is fast, secure, and easy to scale.',
            icon: <SquareTerminal className="text-pink-400" size={32} />,
            color: 'border-l-pink-500'
        },
        {
            id: '05',
            title: 'Launch',
            desc: 'The lift-off. We rigorously test globally, optimize for SEO, and ensure a silky smooth deployment to the world.',
            icon: <Rocket className="text-orange-400" size={32} />,
            color: 'border-l-orange-500'
        }
    ];

    return (
        <section id="process" className="py-24 md:py-32 bg-[#050505] text-white relative">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Left Column: Sticky Header */}
                    <div className="lg:h-screen lg:sticky lg:top-32 h-fit mb-12 lg:mb-0">
                        <span className="text-blue-500 font-mono text-xs md:text-sm tracking-widest uppercase mb-4 block">Our Process</span>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.1] text-balance">
                            From chaos <br />
                            <span className="text-gray-500">to clarity.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-400 max-w-md leading-relaxed mb-8 md:mb-12">
                            A refined, five-step workflow designed to take your idea from concept to a market-ready digital product without the headaches.
                        </p>

                        {/* Decorative Line or Graphic */}
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full"></div>
                    </div>

                    {/* Right Column: Scrolling Cards */}
                    <div className="flex flex-col gap-6 md:gap-8 pb-12 md:pb-24">
                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                className={`group relative p-8 md:p-10 rounded-3xl bg-[#0f0f0f] border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden ${step.color} border-l-4`}
                            >
                                {/* Background Gradient Hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                                            {step.icon}
                                        </div>
                                        <span className="text-4xl md:text-5xl font-bold text-gray-800 select-none font-mono opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                                            {step.id}
                                        </span>
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{step.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Process;
