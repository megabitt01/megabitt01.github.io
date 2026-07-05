import { Canvas, useFrame } from '@react-three/fiber'
// import { Environment } from '@react-three/drei'
// import { EffectComposer, Bloom } from '@react-three/postprocessing';
import Model from './Model.jsx'
import { CamContext } from '../context/contexts.jsx'
import { useRef, useState, useContext, useEffect } from 'react'

function CameraRig({ interp }) {
  const { camState } = useContext(CamContext);
  const easedPos = useRef(0);

  useFrame((state, delta) => {
    let s;

    if (interp === true) {
      const ease = 1 - Math.exp(-6 * delta);
      easedPos.current += (camState - easedPos.current) * ease;
      s = easedPos.current;
    } else {
      s = camState;
    }

    state.camera.position.z = 5 - s * -0.01;
  });

  return null;
}

// function BloomController({ setIntensity }) {
//   useFrame((state) => {
//     const t = state.clock.elapsedTime;
//     const intensity = 0.35 + Math.sin(t * 3) * 0.35;
//     setIntensity(intensity);
//   });

//   return null;
// }

export default function ThreeDee() {
  const [bloomIntensity, setBloomIntensity] = useState(0.5);

  return (
    <Canvas
      camera={{ position: [0, 0, 0], fov: 50 }}
      style={{ 
        width: '100%', 
        height: '700px', 
        position: 'relative', 
        left:0
      }}
    >
        <CameraRig/>
        <Model modelName="NewGrid" position={[2, 35, -15]} />
        <Model modelName="NewGrid2" position={[2, -35, -15]} />
        {/* <BloomController setIntensity={setBloomIntensity} />
        <EffectComposer>
          <Bloom
            intensity={bloomIntensity} // The bloom intensity.
            luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
            mipmapBlur={false} // Enables or disables mipmap blur.
          />
        </EffectComposer> */}
    </Canvas>
  )
}
