import './App.css'
import Canvas from './Canvas'
import Header from './Header'
import Footer from './Footer'
import FinanceProjection from './FinanceProjection'
import AOS from 'aos';
import MainPage from './MainPage'
import 'aos/dist/aos.css';
import { useEffect, useLayoutEffect } from 'react';

function App() {
  // Import AOS and initialize it
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (    
    <div style={{ minHeight: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <Header style={{top: 0}} />
      <main style={{ flex: 1 }}>
        <h1 style={{ margin: 0, padding: "1rem" }} data-aos="zoom-in">Hi, I'm JD Heyns</h1>
        <img 
          src="/picofme.png" 
          alt="JD Heyns Profile Picture" 
          style={{
            width: '150px',
            height: '150px',
            border: '4px solid #CCC',
            borderRadius: '50%',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            margin: '1rem auto',
            display: 'block'
          }} 
          data-aos="zoom-in"
        />
        <h2 style={{ margin: 0, padding: "0.5rem" }} data-aos="zoom-in">Mechanical Engineer</h2>
        <div style={{ width: '100%', position: 'relative', padding: '1rem 0' }}>
          <MainPage />
        </div>
      </main>
      <div style={{ width: "100vw", height: "100vw", maxWidth:"600px", maxHeight: "600px", margin: "0 auto" }} data-aos="fade-up">
        <Canvas />
      </div>
      <Footer data-aos="fade-up" />
    </div>
  )
}

export default App
