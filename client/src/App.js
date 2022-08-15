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
import Destination1 from './components/Destination/Destinations/Destination1';
import Destination2 from './components/Destination/Destinations/Destination2';
import Destination3 from './components/Destination/Destinations/Destination3';
import Destination4 from './components/Destination/Destinations/Destination4'
import Icon from './images/shared/logo.svg'
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
        <Route path='/destination' element={<Destination />}>
          <Route path='destination/destination1' element={<Destination1 />}/>
          <Route path='destination/destination2' element={<Destination2 />}/>
          <Route path='destination/destination3' element={<Destination3 />}/>
          <Route path='destination/destination4' element={<Destination4 />}/>
        </Route>
        <Route path='/technology' element={<Technology />}/>
      </Routes>
    </>
  );
}

export default App;
