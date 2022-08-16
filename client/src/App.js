import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Crew from './components/Crew';
import Destination from './components/Destination';
import Technology from './components/Technology';
import NavigationBar from './components/NavigationBar';
import Commander from './components/Crew/Members/Commander';
import Engineer from './components/Crew/Members/Engineer';
import Pilot from './components/Crew/Members/Pilot';
import Specialist from './components/Crew/Members/Specialist';
import Moon from './components/Destination/Destinations/Moon';
import Mars from './components/Destination/Destinations/Mars';
import Europa from './components/Destination/Destinations/Europa';
import Titan from './components/Destination/Destinations/Titan';
import Icon from './images/shared/logo.svg';
import Capsule from './components/Technology/Technologies/Capsule';
import Spaceport from './components/Technology/Technologies/Spaceport';
import Vehicle from './components/Technology/Technologies/Vehicle';
import './app.css';
import DestinationLayout from './components/Destination/DestinationLayout'
import CrewLayout from './components/Crew/CrewLayout';
import TechnologyLayout from './components/Technology/TechnologyLayout';

const App = () => {
  return (
    <>
      <div className='icon-logo'>
        <img src={Icon} alt='icon' />    
      </div>
      <NavigationBar />
      <Routes>
        <Route index  element={<Home />}/>
        
        <Route path='/crew' element={<CrewLayout />}>
          <Route index element={<Crew />} />
          <Route path='commander' element={<Commander />}/>
          <Route path='engineer' element={<Engineer />}/>
          <Route path='pilot' element={<Pilot />}/>
          <Route path='specialist' element={<Specialist />}/>
        </Route>

        <Route path='/destination' element={<DestinationLayout />}>
          <Route index element={<Destination />} />
          <Route path='moon' element={<Moon />} />
          <Route path='mars' element={<Mars />} />
          <Route path='europa' element={<Europa />} />
          <Route path='titan' element={<Titan />} />
        </Route>

        <Route path='/technology' element={<TechnologyLayout />}>
          <Route index element={<Technology />}/>
          <Route path='capsule' element={<Capsule />} />
          <Route path='spaceport' element={<Spaceport />} />
          <Route path='vehicle' element={<Vehicle />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
