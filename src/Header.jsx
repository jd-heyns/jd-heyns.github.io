import "./Header.css";
import React, { useState, useEffect } from "react";

const navLinks = [
    "About",
    "Experience",
    "Skills",
    "Contact"   
];

export default function Header() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 600);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <header className={`header`}>
                {!isMobile && <div className="logo">JD Heyns</div>}
                <nav>
                    <ul className={`nav-links ${isMobile ? "mobile-nav-links" : ""}`}>
                        {navLinks.map(link => (
                            <li key={link}>
                                <a className={`nav-link ${isMobile ? "mobile-nav-link" : ""}`} href={`#${link.toLowerCase()}`}>{link}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </>
    );
}