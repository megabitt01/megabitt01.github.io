import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NewHeader from './components/NewHeader'
import Progress from './components/Progress';
import Home from './pages/Home'
import AlphaRing from './pages/AlphaRing'
import MiddleZealand from './pages/MiddleZealand'
import Gonkville from './pages/Gonkville'
import Midguardians from './pages/Midguardians'
import OffTheGrid from './pages/OffTheGrid';
import PSWG from './pages/PSWG';
import Resume from './components/Resume';

function App() {
    const [loaded, setLoaded] = useState(false);
    const [opacity, setOpacity] = useState(100);

useEffect(() => {
  const handleLoad = () => {
    setTimeout(() => {
      setOpacity(0);
    }, 500)
    setTimeout(() => {
      setLoaded(true);
    }, 1000)
  };

  if (document.readyState === "complete") {
    handleLoad();
  } else {
    window.addEventListener("load", handleLoad);
  }

  return () => window.removeEventListener("load", handleLoad);
}, []);

  return (
    <>
    <Router>
      <NewHeader />
      { !loaded &&  (
        <Progress opacity={opacity} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alpharing" element={<AlphaRing />} />
        <Route path="/middlezealand" element={<MiddleZealand />} />
        <Route path="/pswg" element={<PSWG />} />
        <Route path="/gonkville" element={<Gonkville />} />
        <Route path="/midguardians" element={<Midguardians />} />
        <Route path="/offthegrid" element={<OffTheGrid />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;