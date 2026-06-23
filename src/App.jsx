import NewHeader from './components/NewHeader'
import { h1frames } from './assets/text.js'
import { useEffect, useState, useRef } from 'react'
import './App.css'
import { CamContext } from './context/contexts'
import ThreeDee from './components/ThreeDee';

function App() {
  const [camState, setCamState] = useState(0);
  const [viewState, setViewState] = useState(0);
  const [coordState, setCoordState] = useState([0, 0, 950]);
  const [greetIndex, setGreetIndex] = useState(0);

  // milliseconds
  const frameRateRef = useRef(500);
  const greetIndexRef = useRef(0);

  const startRef = useRef(null);
  const lastFrameRef = useRef(0);

  const interp = false;

  function advanceFrame() {
    setGreetIndex(prev => (prev + 1) % h1frames.length);
  }

  useEffect(() => {
    greetIndexRef.current = greetIndex;
  }, [greetIndex]);

  useEffect(() => {
    setCamState(coordState[0]);
    setViewState(coordState[1]);
  }, [coordState]);

  useEffect(() => {
    let animationId;

    function animate(timestamp) {
      if (startRef.current === null) {
        startRef.current = timestamp;
        lastFrameRef.current = timestamp;
      }

      const elapsed = timestamp - startRef.current;
      const x = elapsed * 0.5;

      frameRateRef.current =
        (greetIndexRef.current >= 7 && greetIndexRef.current <= 19) || 
        (greetIndexRef.current >= 22 && greetIndexRef.current <= 26) || 
        (greetIndexRef.current >= 30 && greetIndexRef.current <= 52) ||
        (greetIndexRef.current >= 59 && greetIndexRef.current <= 78) ||
        (greetIndexRef.current >= 83 && greetIndexRef.current <= 93)
          ? 50
          : 400;

      if (timestamp - lastFrameRef.current >= frameRateRef.current) {
        advanceFrame();
        lastFrameRef.current = timestamp;
      }

      // if (x >= 975) {
      if (x >= 1650) {
        startRef.current = timestamp;
      }

      setCoordState([x, 0, 0]);

      animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <>
      <NewHeader />

      <CamContext.Provider value={{ camState, setCamState }}>
        <div className="twodee-overlay">
          <h1>{h1frames[greetIndex]}</h1>
          <div className="twodee-fog"></div>
        </div>

        <ThreeDee interp={interp} />
      </CamContext.Provider>
    </>
  );
}

export default App;