import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const EducationCard = () => {

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
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                alignContent: 'center'
            }}
            data-aos="fade-up"
            data-aos-delay="100"
        >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <div>
                    <h3 className="card-title" style={{ marginTop: '0', marginBottom: '0' }}>
                        Master of Science - Mechanical Engineering
                    </h3>
                    <h2 className="card-subtitle mb-2 text-muted" style={{ marginTop: '0rem' }}>
                        Georgia Institute of Technology
                    </h2>
                </div>
                <img 
                    src="/georgia_institute_of_technology_logo.jpg" 
                    alt="Georgia Tech Logo" 
                    style={{ width: '75px', height: '75px', borderRadius: '5%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)' }}
                />
            </div>
        </div>
        <div 
            className="card-body" 
            style={{ 
                backgroundColor: 'rgba(10, 10, 25, 0.3)', 
                borderRadius: '15px', 
                padding: '1rem',
                marginTop: '1rem',
                marginBottom: '1rem',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                alignContent: 'center'
            }}
            data-aos="fade-up"
            data-aos-delay="100"
        >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <div>
                    <h3 className="card-title" style={{ marginTop: '0', marginBottom: '0' }}>
                        Aerospace, Aeronautical and Astronautical Engineering
                    </h3>
                    <h2 className="card-subtitle mb-2 text-muted" style={{ marginTop: '0rem' }}>
                        Massachusetts Institute of Technology (MIT)
                    </h2>
                </div>
                <img 
                    src="/mit-logo-black-transparent.png" 
                    alt="MIT Logo" 
                    style={{ width: '75px', height: '75px', borderRadius: '5%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)' }}
                />
            </div>
        </div>
        <div 
            className="card-body" 
            style={{ 
                backgroundColor: 'rgba(10, 10, 25, 0.3)', 
                borderRadius: '15px', 
                padding: '1rem',
                marginTop: '1rem',
                marginBottom: '1rem',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                alignContent: 'center'
            }}
            data-aos="fade-up"
            data-aos-delay="100"
        >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <div>
                    <h3 className="card-title" style={{ marginTop: '0', marginBottom: '0' }}>
                        Bachelors in Engineering - Mechanical and Aeronautical Engineering
                    </h3>
                    <h2 className="card-subtitle mb-2 text-muted" style={{ marginTop: '0rem' }}>
                        University of Pretoria
                    </h2>
                </div>
                <img 
                    src="/up_logo.jpg" 
                    alt="UP Logo" 
                    style={{ width: '75px', height: '75px', borderRadius: '5%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)' }}
                />
            </div>
        </div>
        </>
    );
};

export default EducationCard;