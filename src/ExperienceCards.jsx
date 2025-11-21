import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const ExperienceCard = () => {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <>
        <div 
            className="card-body" 
            style={{ 
                backgroundColor: 'rgba(10, 10, 25, 0.3)', 
                borderRadius: '15px', 
                padding: '1rem',
                marginTop: '1rem',
                marginBottom: '1rem',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
            }}
            data-aos="fade-up"
            data-aos-delay="100"
        >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <div>
                    <h3 className="card-title" style={{ marginTop: '0', marginBottom: '0' }}>
                        Mechanical Engineer LIGO Caltech & MIT
                    </h3>
                    <h2 className="card-subtitle mb-2 text-muted" style={{ marginTop: '0rem' }}>
                        Caltech
                    </h2>
                    <h5 className="card-text" style={{marginTop: '0rem', marginBottom: '0rem'}}>
                        Apr 2023 - Present <br />
                        Cambridge, Massachusetts, United States
                    </h5>
                </div>
                <img 
                    src="/Seal_of_the_California_Institute_of_Technology.svg.png" 
                    alt="Company Logo" 
                    style={{ width: '75px', height: '75px', borderRadius: '5%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)' }}
                />
            </div>
        
            <p className="card-text">
                Analysis and design of the most precise scientific instrument ever created, LIGO consists of two identical detectors (laser interferometers) separated by 3000 km. These detectors measure gravitational waves, ripples in spacetime from events like black hole/neutron star collisions, providing insights into the universe’s most extreme phenomena and testing Einstein’s theory of general relativity. My responsibilities include designing, analyzing and testing the hardware for the next generation gravitational wave detectors.
            </p>
            <ul>
                <li>Precision suspension design</li>
                <li>Multidisciplinary design for complex mechanical systems</li>
                <li>Prototyping</li>
                <li>Thermal vacuum analysis</li>
                <li>Active control systems</li>
                <li>Seismic isolation systems</li>
                <li>Structural dynamics characterization using advanced Finite Element Analysis methods</li>
                <li>Optomechanical design</li>
                <li>Vacuum system and pressure vessel design</li>
            </ul>
        </div>

        <div 
            className="card-body" 
            style={{ 
                backgroundColor: 'rgba(10, 10, 25, 0.3)', 
                borderRadius: '15px', 
                padding: '1rem',
                marginTop: '1rem',
                marginBottom: '1rem',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' // Added shadow for rounded corner effect
            }}
            data-aos="fade-up"
            data-aos-delay="100"
        >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <div>
                    <h3 className="card-title" style={{ marginTop: '0', marginBottom: '0' }}>
                        Director
                    </h3>
                    <h2 className="card-subtitle mb-2 text-muted" style={{ marginTop: '0rem' }}>
                        III Engineering
                    </h2>
                    <h5 className="card-text" style={{marginTop: '0rem', marginBottom: '0rem'}}>
                        Aug 2022 - Apr 2023 <br />
                        Boston, Massachusetts, United States
                    </h5>
                </div>
                <img 
                    src="/iiiengineeringlogo.jpg" 
                    alt="III Engineering Logo" 
                    style={{ width: '75px', height: '75px', borderRadius: '5%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)' }} // Rounded corners for the image
                />
            </div>
        
            <p className="card-text">
            Your partners in asset integrity management. Helping you achieve a competitive advantage by utilizing your equipment to its full potential. <br />
            International business development and corporate strategy. <br />
            III Engineering is a subsidiary of Investmech (Pty) Ltd.
            </p>
        </div>

        <div 
            className="card-body" 
            style={{ 
                backgroundColor: 'rgba(10, 10, 25, 0.3)', 
                borderRadius: '15px', 
                padding: '1rem',
                marginTop: '1rem',
                marginBottom: '1rem',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' // Added shadow for rounded corner effect
            }}
            data-aos="fade-up"
            data-aos-delay="100"
        >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <div>
                    <h3 className="card-title" style={{ marginTop: '0', marginBottom: '0' }}>
                        Executive Director & Mechanical Engineer  
                    </h3>
                    <h2 className="card-subtitle mb-2 text-muted" style={{ marginTop: '0rem' }}>
                        Investmech (Pty) Ltd
                    </h2>
                    <h5 className="card-text" style={{marginTop: '0rem', marginBottom: '0rem'}}>
                        May 2020 - Apr 2023 <br />
                        Gauteng, South Africa
                    </h5>
                </div>
                <img 
                    src="/Investmech-LOGO.png" 
                    alt="Investmech Company Logo" 
                    style={{ width: '75px', height: '75px', borderRadius: '5%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', objectFit: 'cover' }} // Rounded corners for the image
                />
            </div>
        
            <p className="card-text">
                International business development and corporate strategy. <br />
            </p>
            <ul>
                <li>Limited mission profile driven design.</li>
                <li>Design audits.</li>
                <li>Advanced finite element analysis (ANSYS, MSC).</li>
                <li>Advanced computational fluid dynamics (ANSYS).</li>
                <li>Structural integrity assessments according to BS 7608, EN 1993, EN 1991, SANS 10160 and SANS 10162.</li>
                <li>Pressure vessel design for nuclear applications.</li>
                <li>Particulate solid storage container design.</li>
                <li>Large scale transient computational fluid dynamic - structural dynamic coupled analyses for nuclear applications. Analyzed complex thermal boundary conditions with conduction, forced and natural convection and radiation effects. This simulation was approved by nuclear industry experts and confirmed with on site measurements. It consisted of close to 60 million cells and used 390 GB RAM to solve.</li>
                <li>Fatigue life analyses by means of advanced Finite Element Analysis methods.</li>
            </ul>
        </div>

        <div 
            className="card-body" 
            style={{ 
                backgroundColor: 'rgba(10, 10, 25, 0.3)', 
                borderRadius: '15px', 
                padding: '1rem',
                marginTop: '1rem',
                marginBottom: '1rem',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' // Added shadow for rounded corner effect
            }}
            data-aos="fade-up"
            data-aos-delay="100"
        >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <div>
                    <h3 className="card-title" style={{ marginTop: '0', marginBottom: '0' }}>
                        Undergraduate Reseacher
                    </h3>
                    <h2 className="card-subtitle mb-2 text-muted" style={{ marginTop: '0rem' }}>
                        Massachusetts Institute of Technology (MIT)
                    </h2>
                    <h5 className="card-text" style={{marginTop: '0rem', marginBottom: '0rem'}}>
                        Feb 2017 - Dec 2017 <br />
                        Cambridge, Massachusetts, United States
                    </h5>
                </div>
                <img 
                    src="/mit-logo-black-transparent.png" 
                    alt="MIT Logo" 
                    style={{ width: '75px', height: '75px', borderRadius: '5%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)' }} // Rounded corners for the image
                />
            </div>
            
            <h3> MIT Space Telecommunications, Astronomy and Radiation Laboratory</h3>
            <p className="card-text">
                Designed, machined, assembled and tested space worthy mounts and baseplate for mounting optical components on a satellite module that allows optical communication links between nanosatellites and ground stations. <br />
            </p>

            <h3> MIT Space Systems Laboratory </h3>
            <p className="card-text">
                Conceptual design and feasibility study of WaferSat. WaferSats are 8-inch PCB disks that have small onboard ion propulsion systems. Useful for launching in large quantities to be placed in Golay formation for deep space image sensing. <br />
            </p>

        </div>

        </>
    );
};

export default ExperienceCard;