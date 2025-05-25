import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { AsciiRenderer } from '@react-three/drei'

export default function App() {
  return (
    <Canvas className="canvas">
      <group>
        <color attach="background" args={['white']} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={1} 
          intensity={300} 
          penumbra={1} 
          castShadow 
          shadow-mapSize-width={1024} 
          shadow-mapSize-height={1024} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <AsciiRenderer fgColor="white" bgColor={"transparent"} invert resolution={0.2} />
        <Torusknot />
      </group>
    </Canvas>
  )
}

function Torusknot(props) {
  const ref = useRef()
  const viewport = useThree((state) => state.viewport)
  useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta / 2))
  return (
    <mesh scale={Math.min(viewport.width, viewport.height) / 5} {...props} ref={ref}>
      <torusKnotGeometry args={[1, 0.2, 128, 32]} />
      <meshStandardMaterial color="red" />
    </mesh>
  )
}
