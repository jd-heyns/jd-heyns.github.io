import React from "react";
import "./Header.css";

const navLinks = [
    "About",
    "Experience",
    "Skills",
    "Contact"   
];

export default function Header() {
    return (
        <>
            <header className="header">
                <div className="logo">JD Heyns</div>
                <nav>
                    <ul className="nav-links">
                        {navLinks.map(link => (
                            <li key={link}>
                                <a className="nav-link" href={`#${link.toLowerCase()}`}>{link}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </>
    );
}