import NewHeader from './components/NewHeader'
import { useEffect, useState } from 'react'
import './App.css'
import { CamContext } from './context/contexts'
import ThreeDee from './components/ThreeDee';

function App() {
  let [camState, setCamState] = useState(0);
  let [viewState, setViewState] = useState(0);
  let [coordState, setCoordState] = useState([0, 0, 950]);

  useEffect(() => {
    setCamState(coordState[0]);
    setViewState(coordState[1]);
  }, [coordState]);

  useEffect(() => {
    let start;

    function animate(timestamp) {
      if (!start) start = timestamp;

      const elapsed = timestamp - start;
      const x = elapsed * 0.5;
      
      if (x > 5000) start = timestamp;

      setCoordState([x, 0, 0]);

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, []);
  return (
    <>
        <NewHeader />
        <CamContext.Provider value={{ camState, setCamState }}>
          <ThreeDee />
        </CamContext.Provider>
    </>
  )
}

export default App
