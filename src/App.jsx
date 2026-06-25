import { useState } from 'react';
import NewHeader from './components/NewHeader'
import Home from './Home'

function App() {
  const [ pageState, setPageState ] = useState('home');

  return (
    <>
      <NewHeader />
      { pageState == 'home' && 
        <Home />
      }
    </>
  );
}

export default App;