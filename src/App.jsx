import Canvas from './Canvas'
import './App.css'
import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <div style={{ minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column'}}>
      <Header />
      <main style={{ flex: 1 }}>
        <h1 style={{ margin: 0, padding: "2rem"}}>Professional Portfolio</h1>
        <div style={{width: '100vw', height: '100vh', position: 'relative'}}>
          <Canvas />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
