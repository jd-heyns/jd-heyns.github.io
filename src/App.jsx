import './App.css'
import Canvas from './Canvas'
import Header from './Header'
import Footer from './Footer'
import QuadPendulum from './QuadPendulum'
import FinanceProjection from './FinanceProjection'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  // Import AOS and initialize it

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div style={{ minHeight: '100vh', width: '100vw', display: 'flex', flexDirection: 'column'}}>
      <Header />
      <main style={{ flex: 1 }}>
        <h1 style={{ margin: 0, padding: "2rem"}} data-aos="zoom-in">Professional Portfolio</h1>
        <div style={{width: '100vw', height: '100vh', position: 'relative'}} data-aos="fade-up">
          <Canvas />
        </div>
        <div data-aos="fade-down">
          <FinanceProjection />
        </div>
        <div data-aos="fade-up">
          <QuadPendulum />
        </div>
      </main>
      <Footer data-aos="fade-up" />
    </div>
  )
}

export default App
