import './index.css';
import DestinationNav from './DestinationNav';
import {Outlet} from 'react-router-dom';

const Destination = () => {
    return(
        <div className="main-content-des">
            <div className="title">
                01 PICK YOUR DESTINATION
            </div>
            <DestinationNav />
            <Outlet />            
        </div>
    )
}

export default Destination;