import React from "react";

const Footer = () => (
    <footer style={{
        background: "#140B26",
        color: "#fff",
        textAlign: "center",
        padding: "1.5rem 0",
        marginTop: "3rem",
        fontSize: "1rem",
        opacity: 0.8,
    }}>
        <div>
            &copy; {new Date().getFullYear()} JD Heyns. All rights reserved.
        </div>
        <div style={{ marginTop: "0.5rem" }}>
            <a
                href="https://github.com/jd-heyns"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fff", margin: "0 0.5rem", textDecoration: "none" }}
            >
                GitHub
            </a>
            |
            <a
                href="https://www.linkedin.com/in/jdheyns/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fff", margin: "0 0.5rem", textDecoration: "none" }}
            >
                LinkedIn
            </a>
            |
            <a
                href="mailto:jdheyns@calte"
                style={{ color: "#fff", margin: "0 0.5rem", textDecoration: "none" }}
            >
                Email
            </a>
        </div>
    </footer>
);

export default Footer;