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
                backgroundColor: 'rgba(0, 0, 0, 0.3)', 
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
                    src="https://media.licdn.com/dms/image/v2/C4E0BAQFuhLQoh5_7yA/company-logo_100_100/company-logo_100_100/0/1640110532212/georgia_institute_of_technology_logo?e=1753920000&v=beta&t=nTL0JijYifpARe4xHVBk6SE2Clgt0f0MfkQZkuQiN00" 
                    alt="Georgia Tech Logo" 
                    style={{ width: '75px', height: '75px', borderRadius: '5%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)' }}
                />
            </div>
        </div>
        <div 
            className="card-body" 
            style={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.3)', 
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
                    src="https://media.licdn.com/dms/image/v2/D560BAQH-UXRfIDIKug/company-logo_100_100/company-logo_100_100/0/1689799729035/mit_logo?e=1753920000&v=beta&t=Vlk4dH9A9BsT7ztZZeejJylPk7XZRRywvLnx0_RwGQg" 
                    alt="MIT Logo" 
                    style={{ width: '75px', height: '75px', borderRadius: '5%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)' }}
                />
            </div>
        </div>
        <div 
            className="card-body" 
            style={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.3)', 
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
                    src="https://media.licdn.com/dms/image/v2/C560BAQEwUkwIhyTGSA/company-logo_100_100/company-logo_100_100/0/1631390729217?e=1753920000&v=beta&t=4nimY0Sj0lWdbfNQyBNnOgeRbNA-y3z0cX0LlDczalw" 
                    alt="UP Logo" 
                    style={{ width: '75px', height: '75px', borderRadius: '5%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)' }}
                />
            </div>
        </div>
        </>
    );
};

export default EducationCard;