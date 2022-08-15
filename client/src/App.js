import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Crew from './components/Crew';
import Destination from './components/Destination';
import Technology from './components/Technology';
import NavigationBar from './components/NavigationBar';
import Member1 from './components/Crew/Members/Member1';
import Member2 from './components/Crew/Members/Member2';
import Member3 from './components/Crew/Members/Member3';
import Member4 from './components/Crew/Members/Member4';
import Moon from './components/Destination/Destinations/Moon';
import Mars from './components/Destination/Destinations/Mars';
import Europa from './components/Destination/Destinations/Europa';
import Titan from './components/Destination/Destinations/Titan';
import Icon from './images/shared/logo.svg';
import './app.css';

const App = () => {
  return (
    <>
      <div className='icon-logo'>
        <img src={Icon} alt='icon' />    
      </div>
      <NavigationBar />
      <Routes>
        <Route index  element={<Home />}/>
        <Route path='/crew' element={<Crew />}>
          <Route path='/crew/member1' element={<Member1 />}/>
          <Route path='/crew/member2' element={<Member2 />}/>
          <Route path='/crew/member3' element={<Member3 />}/>
          <Route path='/crew/member4' element={<Member4 />}/>
        </Route>
        <Route path='/destination/titan' element={<Titan />}/>
        <Route path='/destination/europa' element={<Europa />}/>
        <Route path='/destination/mars' element={<Mars />} />
        <Route path='/destination/moon' element={<Moon />} />
        <Route path='/destination/' element={<Destination />} />
        {/* <Route path='/destination' element={<Destination />}>
          <Route path='/destination/moon' element={<Moon />} />
          <Route path='/destination/mars' element={<Mars />} />
          <Route path='/destination/europa' element={<Europa />} />
          <Route path='/destination/titan' element={<Titan />} />
        </Route> */}
        <Route path='/technology' element={<Technology />}/>
      </Routes>
    </>
  );
}

export default App;
