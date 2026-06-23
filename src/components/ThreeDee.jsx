import { Canvas, useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import Model from './Model.jsx'
import { CamContext } from '../context/contexts.jsx'
import { useRef, useState, useContext, useEffect } from 'react'

function CameraRig(interp) {
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
    let s
    if(interp == true) {
      const ease = 1 - Math.exp(-6 * delta)
      easedPos.current += (camState - easedPos.current) * ease
  
      s = easedPos.current
    } else {
      s = camState - easedPos.current
    }
    _.camera.position.z = 5 - s * -0.01
    // _.camera.position.z = 5 - s * -0.01
  })

  return null
} 

export default function ThreeDee(interp) {
  return (
    <Canvas
      camera={{ position: [0, 0, 0], fov: 50 }}
      style={{ 
        width: '100vw', 
        height: '700px', 
        position: 'fixed', 
        left:0
      }}
    >
        <CameraRig interp/>
        <Model modelName="NewGrid" position={[2, 12, 3]} />
        <Model modelName="NewGrid2" position={[2, -12, 3]} />

      <Environment preset="studio" />
    </Canvas>
  )
}
