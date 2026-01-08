import React from 'react';

const Logo = ({ className = "w-8 h-8", fill = "currentColor" }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="Strive Studio Logo"
        >
            {/* Abstract 'S' formed by two dynamic swooshes suggesting upward movement */}
            <path
                d="M25 65C25 65 35 35 60 35H80C80 35 65 35 55 55C45 75 30 75 20 75H10C10 75 15 75 25 65Z"
                fill={fill}
                className="opacity-80"
            />
            <path
                d="M75 35C75 35 65 65 40 65H20C20 65 35 65 45 45C55 25 70 25 80 25H90C90 25 85 25 75 35Z"
                fill={fill}
            />
        </svg>
    );
};

export default Logo;
