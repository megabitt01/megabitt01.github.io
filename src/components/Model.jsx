import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

export default function Model({ modelName, position = [0, 0, 0], scale = 5, spin = false }) {
  const { scene } = useGLTF(`/models/${modelName}.glb`)
  const ref = useRef()

  const basePosition = useRef(new THREE.Vector3(...position))

  useFrame(({ clock }, delta) => {
    if (!ref.current) return

    const t = clock.getElapsedTime()

    if(spin) {
      // ref.current.position.set(
      //   basePosition.current.x,
      //   basePosition.current.y + Math.sin(t * 1.2) * 0.25,
      //   basePosition.current.z
      // )
      
      ref.current.rotation.y += delta * 0.8
    }
  })

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={scale}
      position={position}
      rotation={[0,0,0]}
    />
  )
}

useGLTF.preload('/models/Arch.glb')
useGLTF.preload('/models/NewGrid.glb')
useGLTF.preload('/models/NewGrid2.glb')