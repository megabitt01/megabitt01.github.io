import NewHeader from './components/NewHeader'
import { h1frames } from './assets/text.js'
import { useEffect, useState, useRef } from 'react'
import './App.css'
import { CamContext, CamContext2 } from './context/contexts'
import ThreeDee from './components/ThreeDee';
import ThreeDee2 from './components/ThreeDee2.jsx';
import "98.css";

function App() {
  const [camState, setCamState] = useState(0);
  const [camState2, setCamState2] = useState(0);
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
          (greetIndexRef.current >= 22 && greetIndexRef.current <= 32) ||
          (greetIndexRef.current >= 38 && greetIndexRef.current <= 47) ||
          (greetIndexRef.current >= 52 && greetIndexRef.current <= 56) ||
          (greetIndexRef.current >= 66 && greetIndexRef.current <= 70) ||
          (greetIndexRef.current >= 75 && greetIndexRef.current <= 84) ||
          (greetIndexRef.current >= 93 && greetIndexRef.current <= 102) ||
          (greetIndexRef.current >= 105 && greetIndexRef.current <= 116)
          ? 50
          : 400;

      if (timestamp - lastFrameRef.current >= frameRateRef.current) {
        advanceFrame();
        lastFrameRef.current = timestamp;
      }

      // if (x >= 975) {
      if (x >= 1890) {
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

      <div className="threedee-container">
        <CamContext.Provider value={{ camState, setCamState }}>
          <div className="twodee-overlay">
            <h1>{h1frames[greetIndex]}</h1>
            <div class="twodee-text">
              <p>Hi, I'm Jack Bittner</p>
              <p>Contract SWE @ Northwestern Mutual | Typescript/React, C#, AWS</p>
            </div>
            <div className="twodee-fog"></div>
          </div>

          <ThreeDee interp={interp} />
        </CamContext.Provider>
      </div>

      <div className="window" style={{ width: 'calc(100% - 6px)', height: '700px'}}>
        <div className="title-bar">
          <div className="title-bar-text">
            About Me
          </div>

          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"/>
          </div>
        </div>
        {/* <div className="window-body">
          <CamContext2.Provider value={{ camState2, setCamState2 }}>
            <div className="twodee-overlay">
            </div>
            <ThreeDee2 interp={interp} />
        </CamContext2.Provider>
        </div> */}
      </div>
        {/* <div className="neon-container">
          <div id="neon-1b" style={{
            position: 'absolute', 
            left: '20%'
          }}>
            <div className="neon-line-blue vert"></div>
          </div>
          <div id="neon-2b" style={{
            position: 'absolute', 
            top: '60%'
          }}>
            <div className="neon-line-blue horz"></div>
          </div>
          <div id="neon-1a" style={{
            position: 'absolute', 
            top: '75%'
          }}>
            <div className="neon-line-pink horz"></div>
          </div>
          <div id="neon-2a" style={{
            position: 'absolute', 
            left: '25%'
          }}>
            <div className="neon-line-pink vert"></div>
          </div>
          <div id="neon-3" style={{
            position: 'absolute', 
            top: '15%'
          }}>
            <div className="neon-line-pink horz"></div>
          </div>
          <div id="neon-4a" style={{
            position: 'absolute', 
            left: '75%'
          }}>
            <div className="neon-line-pink vert"></div>
          </div>
          <div id="neon-5a" style={{
            position: 'absolute', 
            bottom: '8%'
          }}>
            <div className="neon-line-pink horz"></div>
          </div>
          <div id="neon-6a" style={{
            position: 'absolute', 
            bottom: '8%'
          }}>
            <div className="neon-line-pink horz"></div>
          </div>
          <div id="neon-4b" style={{
            position: 'absolute', 
            right: '20%'
          }}>
            <div className="neon-line-blue vert"></div>
          </div>
          <div id="neon-5b" style={{
            position: 'absolute', 
            top: '80%'
          }}>
            <div className="neon-line-blue horz"></div>
          </div>
          <div id="neon-6b" style={{
            position: 'absolute', 
            right: '5%'
          }}>
            <div className="neon-line-blue vert"></div>
          </div>
          <div id="neon-7b" style={{
            position: 'absolute', 
            top: '40%'
          }}>
            <div className="neon-line-blue horz"></div>
          </div>
      </div> */}
    </>
  );
}

export default App;