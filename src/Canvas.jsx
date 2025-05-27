import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { AsciiRenderer } from '@react-three/drei'

export default function App() {
  return (
    <Canvas className="canvas">
      <group>
        <color attach="background" args={['black']} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          intensity={5000} 
          penumbra={1} 
          castShadow  />
        <pointLight position={[-5, -5, -5]} intensity={2000} />
        <AsciiRenderer fgColor="white" bgColor="transparent" resolution={0.2} invert="true" characters='.:-+*=%@# '/>
        <Torusknot />
      </group>
    </Canvas>
  )
}

function Torusknot(props) {
  const ref = useRef()
  const viewport = useThree((state) => state.viewport)
  const [dragging, setDragging] = useState(false)
  const [velocity, setVelocity] = useState([0, 0])
  const last = useRef([0, 0])

  useFrame((state, delta) => {
    if (!dragging) {
      // Apply velocity with damping
      ref.current.rotation.x += velocity[1]
      ref.current.rotation.y += velocity[0]
      setVelocity([
      velocity[0] * 0.95, // Dampen X velocity
      velocity[1] * 0.95  // Dampen Y velocity
      ])
      // Always add the base rotation
      ref.current.rotation.x += delta / 2
      ref.current.rotation.y += delta / 2
    }
  })

  const onPointerDown = (e) => {
    setDragging(true)
    last.current = [e.clientX, e.clientY]
    // Prevent default to avoid unwanted selection
    e.target.setPointerCapture(e.pointerId)
  }

  const onPointerUp = (e) => {
    setDragging(false)
    e.target.releasePointerCapture(e.pointerId)
  }

  const onPointerMove = (e) => {
    if (dragging) {
      const [lx, ly] = last.current
      const dx = (e.clientX - lx) * 0.01
      const dy = (e.clientY - ly) * 0.01
      ref.current.rotation.y += dx
      ref.current.rotation.x += dy
      setVelocity([dx, dy]) // Store the last velocity
      last.current = [e.clientX, e.clientY]
    }
  }

  return (
    <mesh
      scale={Math.min(viewport.width, viewport.height) / 5}
      {...props}
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerMove={onPointerMove}
      style={{ cursor: dragging ? 'grabbing' : 'grab' }}
    >
      <torusKnotGeometry args={[1, 0.2, 128, 32]} />
      <meshStandardMaterial color="red" />
    </mesh>
  )
}
