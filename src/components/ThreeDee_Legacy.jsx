import { Canvas, useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import Model from './Model.jsx'
import { CamContext } from '../context/contexts.jsx'
import { useRef, useState, useContext, useEffect } from 'react'

function CameraRig() {
  const {camState, setCamState} = useContext(CamContext);
  const easedPos = useRef(0);

  // useEffect(() => {
  //   const onScroll = () => setCamState(window.scrollY)
  //   window.addEventListener('scroll', onScroll)
  //   return () => window.removeEventListener('scroll', onScroll)
  // }, [])

  // useFrame(({ camera }) => {
  //   camera.position.x = 5 - scrollY * -0.01
  //   camera.position.z = 5 - scrollY * -0.02
  // })
  // useFrame(({ camera }) => {
  //   camera.position.x = 5 - camState * -0.01
  //   camera.position.z = 5 - camState * -0.02
  // })
  useFrame((_, delta) => {
    const ease = 1 - Math.exp(-6 * delta)
    easedPos.current += (camState - easedPos.current) * ease

    const s = easedPos.current

    _.camera.position.x = 5 - s * -0.01
    _.camera.position.z = 5 - s * -0.01
  })

  return null
} 

export default function ThreeDee() {
  return (
    <Canvas
      camera={{ position: [4.5, 0.3, 4], fov: 50 }}
      style={{ 
        width: '100vw', 
        height: '100vh', 
        position: 'fixed', 
        left:0
      }}
    >
        <CameraRig />
        <Model modelName="WindowsXP" position={[0, 0.4, 3]} />
        <Model modelName="Keyboard" position={[3.1, -0.2, 1.5]} />
        <Model modelName="Pen" position={[13.5, -0.2, 12]} />
        <Model modelName="Tux" position={[9.5, -1.5, 13]} />
        <Model modelName="CD" position={[21, 0.4, 23.5]} />
        <Model modelName="Headphones" position={[20, -2.5, 16]} />
        <Model modelName="Dolphin" position={[30, -1.5, 33]} />
        <Model modelName="Gamecube" position={[31, -3, 28]} />

      <Environment preset="studio" />
    </Canvas>
  )
}
