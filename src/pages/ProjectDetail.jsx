import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Check, Layers, Palette, Type } from 'lucide-react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';

const projectData = {
    "mishra-transport": {
        title: "Mishra Transport",
        subtitle: "Logistics • Case Study",
        description: "A digital transformation for a leading North Indian logistics provider, modernizing fleet tracking and customer engagement.",
        client: "Mishra Transport Services",
        year: "2024",
        services: "Web Design, React Dev",
        liveLink: "https://mishra-transport-service.vercel.app/",
        liveDisplay: "mishra-transport.app",
        heroImage: "/projects/mishra.png",
        challenge: {
            text: "Mishra Transport Services, with over 25 years of legacy, relied heavily on traditional offline operations. They lacked a digital footprint to attract modern B2B clients and showcase their extensive fleet of 500+ vehicles. The challenge was to translate their massive physical reliability into a digital trust signal.",
            points: [
                "No digital presence for a 25-year-old brand",
                "Difficulty in showcasing diverse fleet capabilities",
                "Need to reach new tech-savvy B2B clients"
            ]
        },
        solution: {
            text: "We designed and developed a comprehensive web platform that highlights their scale and reliability. Using a bold 'Safety Orange' and 'Trust Navy' color palette, we created an interface that speaks to industrial strength and modern efficiency. The site features detailed service breakdowns and an easy inquiry flow.",
            points: [
                "Modern, responsive fleet showcase",
                "Trust-building UI with clear statistics",
                "Simplified contact and inquiry funnel"
            ]
        },
        designSystem: {
            typography: "Inter",
            colors: [
                { name: "Surface", hex: "#FFFFFF" },
                { name: "Brand Navy", hex: "#1e293b" },
                { name: "Safety Orange", hex: "#ff6b2b" }
            ],
            fonts: ["Regular 400", "Medium 500", "Bold 700"]
        },
        metrics: [
            { value: "25+", label: "Years Experience" },
            { value: "500+", label: "Vehicles Managed" },
            { value: "98%", label: "On-Time Delivery" }
        ],
        gallery: [
            "/projects/mishra.png",
            "/projects/mishra_services.png",
            "/projects/mishra_fleet.png"
        ],
        nextProject: "arjuna-ai"
    },
    "arjuna-ai": {
        title: "Arjuna AI",
        subtitle: "AI Agent • SaaS",
        description: "An intelligent interview coaching platform that uses voice-based AI to simulate real technical interviews and provide instant, actionable feedback.",
        client: "Arjuna AI",
        year: "2024",
        services: "Product Design, Next.js Dev",
        liveLink: "https://interviewer-platform-iota.vercel.app/",
        liveDisplay: "arjuna.ai",
        heroImage: "/projects/arjuna_hero.png",
        challenge: {
            text: "Technical candidates often fail not because of a lack of knowledge, but due to anxiety and poor communication during live interviews. Traditional mock interviews are expensive and hard to schedule. The challenge was to create an AI that feels like a human hiring manager.",
            points: [
                "High anxiety in live settings",
                "Lack of objective, instant feedback",
                "Difficulty practicing vocal communication"
            ]
        },
        solution: {
            text: "We built a voice-first AI agent that conducts realistic technical interviews. Using deep learning for speech-to-text and sentiment analysis, Arjuna allows candidates to speak naturally. The dashboard provides granular scoring on technical accuracy, communication style, and empathy.",
            points: [
                "Real-time Voice Interaction",
                "Detailed Performance Analytics",
                "Leaderboard & Gamification"
            ]
        },
        designSystem: {
            typography: "Inter / Roboto",
            colors: [
                { name: "Deep Space", hex: "#0f172a" },
                { name: "Indigo Core", hex: "#6366f1" },
                { name: "Success Green", hex: "#22c55e" }
            ],
            fonts: ["Regular 400", "Medium 500", "Bold 700"]
        },
        metrics: [
            { value: "20k+", label: "Candidates Trained" },
            { value: "78%", label: "Avg. User Score" },
            { value: "Top 7%", label: "Percentile Ranking" }
        ],
        gallery: [
            "/projects/arjuna_hero.png",
            "/projects/arjuna_features.png",
            "/projects/arjuna_detail.png"
        ],
        nextProject: "tomato-food"
    },
    "tomato-food": {
        title: "Tomato",
        subtitle: "FoodTech • Frontend",
        description: "A vibrant, appetite-inducing food delivery interface designed to streamline the ordering process for local restaurants.",
        client: "Tomato Delivery",
        year: "2024",
        services: "Frontend Dev, UI/UX",
        liveLink: "https://food-delivery-wnrj.vercel.app/",
        liveDisplay: "tomato.app",
        heroImage: "/projects/food_hero.png",
        challenge: {
            text: "Local restaurant websites often suffer from clutter and poor mobile responsiveness, leading to cart abandonment. The goal was to create a 'hunger-inducing' interface that makes ordering as simple as possible.",
            points: [
                "Cluttered legacy menus",
                "Poor mobile experience",
                "Lack of visual appeal"
            ]
        },
        solution: {
            text: "We designed a visual-first experience where food photography takes center stage. Using a vibrant 'Tomato Red' identity, we built a seamless category explorer and a distraction-free checkout flow.",
            points: [
                "Visual Menu Navigation",
                "Mobile-First Responsive Design",
                "Appetizing Color Psychology"
            ]
        },
        designSystem: {
            typography: "Outfit / Poppins",
            colors: [
                { name: "Pure White", hex: "#FFFFFF" },
                { name: "Tomato Red", hex: "#FF5200" },
                { name: "Slate Text", hex: "#334155" }
            ],
            fonts: ["Regular 400", "Medium 500", "Bold 700"]
        },
        metrics: [
            { value: "0.8s", label: "Load Time" },
            { value: "100%", label: "Mobile Responsive" },
            { value: "5⭐", label: "User Experience" }
        ],
        gallery: [
            "/projects/food_hero.png",
            "/projects/food_menu.png",
            "/projects/food_detail.png"
        ],
        nextProject: "sundown-studio"
    },
    "sundown-studio": {
        title: "Sundown Studio",
        subtitle: "Experiential • Design",
        description: "A premium design studio website featuring smooth scroll, complex animations, and an immersive user journey.",
        client: "Sundown Studio",
        year: "2024",
        services: "Frontend Dev, GSAP Animation",
        liveLink: "https://sundownstudio-woad.vercel.app/",
        liveDisplay: "sundown.studio",
        heroImage: "/projects/sundown_hero.png",
        challenge: {
            text: "Standard agency portfolios often feel static and lifeless. The client needed a digital space that moved and breathed, reflecting their philosophy of creating unique, evolving environments.",
            points: [
                "Need for advanced motion",
                "Maintaining performance",
                "Unconventional layout"
            ]
        },
        solution: {
            text: "We engineered a highly interactive experience using Locomotive Scroll for smooth inertia and GSAP for complex timeline animations. The result is a website that feels less like a page and more like a continuous journey.",
            points: [
                "Locomotive Smooth Scroll",
                "GSAP Timeline Animations",
                "Dynamic interactive elements"
            ]
        },
        designSystem: {
            typography: "Neue Montreal",
            colors: [
                { name: "Off-White", hex: "#EFEAE3" },
                { name: "Bold Orange", hex: "#FE330A" },
                { name: "Deep Void", hex: "#0B0500" }
            ],
            fonts: ["Regular 400", "Object Sans"]
        },
        metrics: [
            { value: "60fps", label: "Animation Performance" },
            { value: "GSAP", label: "Powered by GreenSock" },
            { value: "100%", label: "Immersive Score" }
        ],
        gallery: [
            "/projects/sundown_hero.png",
            "/projects/sundown_work.png",
            "/projects/sundown_detail.png"
        ],
        nextProject: "pixora-ai"
    },
    "pixora-ai": {
        title: "Pixora AI",
        subtitle: "GenAI • SaaS",
        description: "A state-of-the-art image generation platform enabling users to create stunning visuals with simple text prompts.",
        client: "Pixora Tech",
        year: "2024",
        services: "Full Stack, AI Integration",
        liveLink: "https://pixora-hazel.vercel.app/",
        liveDisplay: "pixora.ai",
        heroImage: "/projects/pixora_hero.png",
        challenge: {
            text: "AI generation tools can often feel complex and intimidating to new users. We needed to bridge the gap between powerful diffusion models and an intuitive, easy-to-use creative interface.",
            points: [
                "Complex Model Parameters",
                " intimidating UI/UX",
                "Slow Generation Times"
            ]
        },
        solution: {
            text: "We built a sleek, dark-mode 'creator studio' that simplifies the workflow. By abstracting complex parameters behind smart presets and optimizing the Nebius AI backend, we achieved professional results in seconds.",
            points: [
                "Smart Prompt Assistant",
                "Lightning-Fast Generation",
                "Curated Style Presets"
            ]
        },
        designSystem: {
            typography: "Inter / Space Grotesk",
            colors: [
                { name: "Deep Void", hex: "#030014" },
                { name: "Neon Purple", hex: "#A855F7" },
                { name: "Electric Blue", hex: "#3B82F6" }
            ],
            fonts: ["Regular 400", "SemiBold 600"]
        },
        metrics: [
            { value: "SDXL", label: "Model Architecture" },
            { value: "<2s", label: "Generation Speed" },
            { value: "API", label: "Developer Ready" }
        ],
        gallery: [
            "/projects/pixora_hero.png",
            "/projects/pixora_interface.png",
            "/projects/pixora_detail.png"
        ],
        nextProject: "mishra-transport"
    },
    "1": {
        title: "Lumina",
        subtitle: "Fintech • Case Study",
        description: "A complete banking dashboard redesign focusing on user accessibility and financial data visualization.",
        client: "Lumina Financial",
        year: "2024",
        services: "Web Design, React Dev",
        liveLink: "#",
        liveDisplay: "lumina.finance",
        heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        challenge: {
            text: "Lumina struggled with a legacy interface that was confusing for new crypto-curious users. The data density was too high, leading to cognitive overload and a bounce rate of 65%. They needed a solution that felt trustworthy yet modern.",
            points: [
                "High bounce rate on landing",
                "Confusing navigation structure"
            ]
        },
        solution: {
            text: "We stripped the application down to its core value proposition. By using a modular bento-grid layout, we allowed users to customize their dashboard. We implemented a strict design system based on 'Trust Blue' and highly legible typography.",
            points: [
                "Custom Dashboard Widgets",
                "Dark/Light Mode toggle"
            ]
        },
        designSystem: {
            typography: "Plus Jakarta Sans",
            colors: [
                { name: "Surface", hex: "#FFFFFF" },
                { name: "Background", hex: "#0A0A0A" },
                { name: "Primary", hex: "#4F46E5" }
            ],
            fonts: ["Regular 400", "Medium 500", "SemiBold 600", "Bold 700"]
        },
        metrics: [
            { value: "300%", label: "Increase in Signups" },
            { value: "0.9s", label: "Page Load Time" },
            { value: "98%", label: "Customer Satisfaction" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2500&auto=format&fit=crop"
        ],
        nextProject: "2"
    }
};

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectData[id] || projectData["1"]; // Fallback to Lumina if not found

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) return <div>Project not found</div>;

    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            {/* Hero Header */}
            <div className="pt-32 pb-20 px-6 bg-gray-50 border-b border-gray-200">
                <div className="container mx-auto max-w-7xl">
                    <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-black transition-colors mb-8 text-sm font-medium">
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
            <div className="container mx-auto max-w-7xl px-4 -mt-12 mb-24 relative z-10">
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200 border border-gray-200 aspect-video bg-gray-100">
                    <img
                        src={project.heroImage}
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
                                    <div key={idx} className={`flex items-center p-4 rounded-xl justify-between ${color.hex === '#FFFFFF' ? 'bg-white text-black' : 'bg-[#0a0a0a] border border-white/10 text-white'}`} style={color.hex !== '#FFFFFF' && color.hex !== '#0A0A0A' ? { backgroundColor: color.hex, border: 'none' } : {}}>
                                        <span className="font-bold">{color.name}</span>
                                        <span className="font-mono text-sm opacity-60">{color.hex}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Screenshot Parallax Grid */}
                    <div className="space-y-12">
                        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                            <img src={project.gallery[0] || project.heroImage} alt="UI 1" className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity" />
                        </div>
                        {project.gallery.length > 1 && (
                            <div className="grid grid-cols-2 gap-8">
                                <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                                    <img src={project.gallery[1] || project.heroImage} alt="UI 2" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                                    <img src={project.gallery[2] || project.heroImage} alt="UI 3" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        )}
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
                <Link to={`/project/${project.nextProject}`} className="group inline-flex flex-col items-center">
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
