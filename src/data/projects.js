
export const projects = [
    {
        id: "lumiere-furniture",
        title: "Lumière",
        subtitle: "Interior Design • E-commerce",
        category: "Lifestyle • E-commerce",
        client: "Lumière Interiors",
        services: "Web Design, Brand Strategy",
        liveLink: "https://furniture-omega-six.vercel.app/",
        liveDisplay: "lumiere.co",
        description: "A sophisticated furniture e-commerce experience blending timeless design with modern digital convenience.",
        image: "/projects/lumiere_hero.png",
        heroImage: "/projects/lumiere_hero.png",
        year: "2024",
        size: "col-span-1 md:col-span-2",
        challenge: {
            text: "Selling high-end furniture online requires more than just photos; it requires an emotional connection. Lumière needed a platform that could translate the tactile quality of fabrics and the warmth of wood through a screen.",
            points: [
                "Conveying texture and material quality",
                "Balancing catalog depth with editorial style",
                "Seamless day-to-night mood transition"
            ]
        },
        solution: {
            text: "We designed an editorial-first e-commerce site that treats every product like a feature story. The 'Set the Mood' feature allows users to toggle between day and night lighting to see how pieces adapt to their environment.",
            points: [
                "Editorial Product Storytelling",
                "Day/Night Ambience Toggle",
                "Interactive 'Room to Breathe' Modules"
            ]
        },
        designSystem: {
            typography: "Editorial New / Geist",
            colors: [
                { name: "Olive", hex: "#5A6B53" },
                { name: "Cream", hex: "#F5F5F0" },
                { name: "Charcoal", hex: "#1A1A1A" }
            ],
            fonts: ["Regular 400", "Italic", "Bold 700"]
        },
        metrics: [
            { value: "$1.2k", label: "Avg Order Value" },
            { value: "3.5m", label: "Time on Site" },
            { value: "40%", label: "Return Customer Rate" }
        ],
        gallery: [
            "/projects/lumiere_features.png",
            "/projects/lumiere_dining.png",
            "/projects/lumiere_night.png"
        ],
        nextProject: "tasty-foods"
    },
    {
        id: "tasty-foods",
        title: "Tasty Foods",
        subtitle: "Restaurant • Delivery App",
        category: "FoodTech • UI/UX",
        client: "Tasty Foods",
        services: "Web Design, Brand Identity",
        liveLink: "https://tastyfoodbyujjawal.netlify.app/",
        liveDisplay: "tastyfoods.com",
        description: "A mouth-watering food delivery platform with a vibrant, appetite-inducing interface and seamless ordering flow.",
        image: "/projects/tasty_hero.png",
        heroImage: "/projects/tasty_hero.png",
        year: "2024",
        size: "col-span-1 md:col-span-2",
        challenge: {
            text: "Capturing the sensory appeal of food on a digital screen is tough. Tasty Foods needed a website that didn't just display menus, but actively stimulated appetite and drove immediate conversions through an intuitive ordering flow.",
            points: [
                "Stimulating appetite visually",
                "Simplifying the checkout process",
                "Highlighting special offers"
            ]
        },
        solution: {
            text: "We utilized high-quality imagery overlapping with dynamic layout elements to create depth and fun. The 'Make Your Burger' interactive section and clear, bold CTA buttons resulted in a significant increase in online orders.",
            points: [
                "Appetite-inducing Layout",
                "Interactive Menu Elements",
                "Streamlined Checkout"
            ]
        },
        designSystem: {
            typography: "Poppins / Inter",
            colors: [
                { name: "Chili Red", hex: "#E31837" },
                { name: "Burger Gold", hex: "#FFC72C" },
                { name: "Fresh White", hex: "#FFFFFF" }
            ],
            fonts: ["Bold 700", "Regular 400"]
        },
        metrics: [
            { value: "35%", label: "Order Increase" },
            { value: "4.8", label: "App Rating" },
            { value: "15min", label: "Avg Delivery" }
        ],
        gallery: [
            "/projects/tasty_menu.png",
            "/projects/tasty_delivery.png",
            "/projects/tasty_products.png"
        ],
        nextProject: "coffeo-brand"
    },
    {
        id: "coffeo-brand",
        title: "Coffeo",
        subtitle: "D2C • E-commerce",
        category: "E-commerce • Branding",
        client: "Coffeo Roasters",
        services: "Brand Identity, Web Design",
        liveLink: "https://coffeo-dun.vercel.app/",
        liveDisplay: "coffeo.store",
        description: "A premium direct-to-consumer coffee brand delivering freshly roasted beans with a minimalist, aroma-filled digital experience.",
        image: "/projects/coffeo_hero.png",
        heroImage: "/projects/coffeo_hero.png",
        year: "2024",
        size: "col-span-1 md:col-span-2", // Wide card
        challenge: {
            text: "Standing out in the crowded online coffee market is difficult. Coffeo needed a digital presence that didn't just sell coffee, but conveyed the 'freshness' and 'aroma' of their beans through a screen, while effectively converting visitors into subscribers.",
            points: [
                "Saturated market",
                "Conveying sensory details digitally",
                "Driving recurring subscriptions"
            ]
        },
        solution: {
            text: "We created a sensory-focused minimalist design using warm beige tones and high-fidelity motion imagery. The 'splash' hero interaction immediately grabs attention, while the streamlined product selection prompts users towards the subscription model with exclusive perks.",
            points: [
                "Sensory Visual Design",
                "Subscription-First UX",
                "Warm, Trust-Building Palette"
            ]
        },
        designSystem: {
            typography: "Syne / Inter",
            colors: [
                { name: "Cream", hex: "#FDFBF7" },
                { name: "Roast", hex: "#2A1810" },
                { name: "Gold", hex: "#D4AF37" }
            ],
            fonts: ["Bold 700", "Regular 400"]
        },
        metrics: [
            { value: "45%", label: "Sub Rate" },
            { value: "2x", label: "AOV" },
            { value: "0.5s", label: "Load Time" }
        ],
        gallery: [
            "/projects/coffeo_products.png",
            "/projects/coffeo_detail.png",
            "/projects/coffeo_newsletter.png"
        ],
        nextProject: "mishra-transport"
    },
    {
        id: "mishra-transport",
        title: "Mishra Transport",
        subtitle: "Regional Transport Specialists",
        category: "Logistics • Web App",
        client: "Mishra Transport Services",
        services: "Web Development, Logistics Tech",
        liveLink: "https://mishra-transport-service.vercel.app/",
        liveDisplay: "mishra-transport.app",
        description: "A modern logistics platform moving India's goods with trust, speed, and commitment.",
        image: "/projects/mishra_hero.png",
        heroImage: "/projects/mishra_hero.png",
        year: "2024",
        size: "col-span-1 md:col-span-2", // Wide card
        challenge: {
            text: "Regional transport logistics often suffer from poor tracking and opaque pricing. Clients needed a reliable way to book Full Truck Load (FTL) and Part Truck Load (PTL) services without the hassle of traditional offline negotiations.",
            points: [
                "Lack of real-time shipment visibility",
                "Complex booking processes",
                "Need for pan-India reach"
            ]
        },
        solution: {
            text: "We delivered a streamlined digital platform featuring a 'Request a Quote' system and detailed service breakdowns. The new identity emphasizes speed and reliability with a bold red palette, integrating tracking capabilities and 24/7 support channels.",
            points: [
                "Instant Quote Request System",
                "Comprehensive Service Listing (FTL/PTL)",
                "24/7 Customer Support Integration"
            ]
        },
        designSystem: {
            typography: "Inter / Sans-serif",
            colors: [
                { name: "Surface", hex: "#FFFFFF" },
                { name: "Brand Red", hex: "#DC2626" },
                { name: "Brand Navy", hex: "#1e293b" }
            ],
            fonts: ["Regular 400", "Bold 700", "ExtraBold 800"]
        },
        metrics: [
            { value: "Real-time", label: "Tracking" },
            { value: "24/7", label: "Support" },
            { value: "Pan-India", label: "Network" }
        ],
        gallery: [
            "/projects/mishra_hero.png",
            "/projects/mishra_services.png",
            "/projects/mishra_footer.png"
        ],
        nextProject: "arjuna-ai"
    },
    {
        id: "arjuna-ai",
        title: "Arjuna AI",
        subtitle: "AI Agent • SaaS",
        category: "AI Agent • SaaS",
        client: "Arjuna AI",
        services: "Product Design, Next.js Dev",
        liveLink: "https://interviewer-platform-iota.vercel.app/",
        liveDisplay: "arjuna.ai",
        description: "AI-powered interview agent that helps candidates ace technical interviews with real-time voice feedback.",
        image: "/projects/arjuna_hero.png",
        heroImage: "/projects/arjuna_hero.png",
        year: "2024",
        size: "col-span-1 md:col-span-2", // Wide card
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
    {
        id: "tomato-food",
        title: "Tomato",
        subtitle: "FoodTech • Frontend",
        category: "FoodTech • Frontend",
        client: "Tomato Delivery",
        services: "Frontend Dev, UI/UX",
        liveLink: "https://food-delivery-wnrj.vercel.app/",
        liveDisplay: "tomato.app",
        description: "A vibrant, appetite-inducing food delivery interface designed for local restaurant chains.",
        image: "/projects/food_hero.png",
        heroImage: "/projects/food_hero.png",
        year: "2024",
        size: "col-span-1", // Tall card
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
    {
        id: "sundown-studio",
        title: "Sundown Studio",
        subtitle: "Experiential • Design",
        category: "Experiential • Design",
        client: "Sundown Studio",
        services: "Frontend Dev, GSAP Animation",
        liveLink: "https://sundownstudio-woad.vercel.app/",
        liveDisplay: "sundown.studio",
        description: "A multi-disciplinary studio creating immersive, end-to-end digital environments with fluid motion.",
        image: "/projects/sundown_hero.png",
        heroImage: "/projects/sundown_hero.png",
        year: "2024",
        size: "col-span-1", // Tall card
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
    {
        id: "pixora-ai",
        title: "Pixora AI",
        subtitle: "GenAI • SaaS",
        category: "GenAI • SaaS",
        client: "Pixora Tech",
        services: "Full Stack, AI Integration",
        liveLink: "https://pixora-hazel.vercel.app/",
        liveDisplay: "pixora.ai",
        description: "A futuristic AI image generation platform transforming text prompts into professional-grade visuals.",
        image: "/projects/pixora_hero.png",
        heroImage: "/projects/pixora_hero.png",
        year: "2024",
        size: "col-span-1 md:col-span-2", // Wide card
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
    {
        id: "1",
        title: "Lumina",
        subtitle: "Fintech • Case Study",
        category: "Fintech • Case Study",
        client: "Lumina Financial",
        services: "Web Design, React Dev",
        liveLink: "#",
        liveDisplay: "lumina.finance",
        description: "A complete banking dashboard redesign focusing on user accessibility and financial data visualization.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        year: "2024",
        size: "col-span-1",
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
];

export default projects;
