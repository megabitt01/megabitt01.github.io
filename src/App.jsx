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

function App() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        window.addEventListener("load", () => {
          console.log("loaded")
            setLoaded(true);
        });
    }, []);

  return (
    <>
    <Router>
      <NewHeader />
      { loaded &&  (
        <Progress />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alpharing" element={<AlphaRing />} />
        <Route path="/middlezealand" element={<MiddleZealand />} />
        <Route path="/pswg" element={<PSWG />} />
        <Route path="/gonkville" element={<Gonkville />} />
        <Route path="/midguardians" element={<Midguardians />} />
        <Route path="/offthegrid" element={<OffTheGrid />} />
      </Routes>
      <Progress/>
    </Router>
    </>
  );
}

export default App;