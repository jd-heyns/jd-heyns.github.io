import React from 'react';
import Canvas from './Canvas';
import BubbleSkills from './BubbleSkills';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const MainPage = () => {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <main
            style={{
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
                textAlign: 'left',
                margin: '0 auto',
                maxWidth: '1200px',
                display: 'block'
            }}
        >
            <section
                id="about"
                data-aos="fade-up"
                style={{ padding: '0.5rem 0', wordBreak: 'break-word', overflowWrap: 'break-word', textAlign: 'left' }}
            >
                <h2>About Me</h2>
                <p>
                    Hi, I'm JD Heyns, a Mechanical engineer with experience designing and testing cutting-edge technology for gravitational wave detectors.
                </p>
                <p>
                    I'm passionate about developing multidisciplinary solutions to push the boundaries of engineering.
                </p>
            </section>

            <section
                id="experience"
                data-aos="fade-up"
                style={{ padding: '2rem 0', wordBreak: 'break-word', overflowWrap: 'break-word', textAlign: 'left' }}
            >
                <h2>Experience</h2>
                <ul>
                    <li>
                        <strong>Project One:</strong>
                        <p>Description of your first project.</p>
                    </li>
                    <li>
                        <strong>Project Two:</strong>
                        <p>Description of your second project.</p>
                    </li>
                    {/* Add more projects as needed */}
                </ul>
            </section>

            <section
                id="skills"
                data-aos="fade-up"
                style={{ padding: '2rem 0', wordBreak: 'break-word', overflowWrap: 'break-word', textAlign: 'left' }}
            >
                <h2>Skills</h2>
                <BubbleSkills />
            </section>

            <section
                id="contact"
                data-aos="fade-up"
                style={{ padding: '2rem 0', wordBreak: 'break-word', overflowWrap: 'break-word', textAlign: 'left' }}
            >
                <h2>Contact</h2>
                <p>
                    Feel free to reach out via email at <a href="mailto:your.email@example.com">your.email@example.com</a>
                </p>
            </section>
        </main>
    );
};

export default MainPage;