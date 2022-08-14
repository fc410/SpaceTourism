import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Crew from './components/Crew';
import Destination from './components/Destination';
import Technology from './components/Technology';

const App = () => {
  return (
    <>
      <Routes>
        <Route index  element={<Home />}/>
        <Route path='/crew' element={<Crew />}/>
        <Route path='/destination' element={<Destination />}/>
        <Route path='/technology' element={<Technology />}/>
      </Routes>
    </>
  );
}

export default App;
