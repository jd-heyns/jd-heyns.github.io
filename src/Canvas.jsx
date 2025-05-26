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
  useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta / 2))
  return (
    <mesh scale={Math.min(viewport.width, viewport.height) / 5} {...props} ref={ref}>
      <torusKnotGeometry args={[1, 0.2, 128, 32]} />
      <meshStandardMaterial color="red" />
    </mesh>
  )
}
