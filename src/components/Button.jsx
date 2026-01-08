import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Button = ({ children, className = "", onClick, variant = 'primary' }) => {
    const baseStyles = "group relative inline-flex items-center justify-between gap-4 rounded-full pl-6 pr-2 py-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 active:scale-95";

    const themes = {
        primary: "bg-[#0a0a0a] text-white hover:shadow-black/20",
        white: "bg-white text-black hover:shadow-white/20"
    };

    const iconStyles = {
        primary: "bg-white/10 group-hover:bg-white group-hover:text-black",
        white: "bg-black/5 group-hover:bg-black group-hover:text-white"
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${themes[variant]} ${className}`}
        >
            <span className="text-base font-medium font-sans tracking-wide">{children}</span>

            {/* Icon Container */}
            <div className={`relative w-10 h-10 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 ${iconStyles[variant]}`}>
                <ArrowUpRight
                    size={18}
                    className="absolute transition-all duration-300 group-hover:translate-x-10 group-hover:-translate-y-10 text-current"
                />
                <ArrowUpRight
                    size={18}
                    className="absolute transition-all duration-300 -translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 text-current"
                />
            </div>
        </button>
    );
};

export default Button;
