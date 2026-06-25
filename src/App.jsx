import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NewHeader from './components/NewHeader'
import Home from './pages/Home'
import AlphaRing from './pages/AlphaRing'
import MiddleZealand from './pages/MiddleZealand'
import Gonkville from './pages/Gonkville'
import Midguardians from './pages/Midguardians'
import OffTheGrid from './pages/OffTheGrid';

function App() {

  return (
    <>
    <Router>
      <NewHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alpharing" element={<AlphaRing />} />
        <Route path="/middlezealand" element={<MiddleZealand />} />
        <Route path="/gonkville" element={<Gonkville />} />
        <Route path="/midguardians" element={<Midguardians />} />
        <Route path="/offthegrid" element={<OffTheGrid />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;