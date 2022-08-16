import {Outlet} from 'react-router-dom';
import DestinationNav from '../DestinationNav';

const DestinationLayout = () =>{
    return (
        <div className="main-content-des">
            <div className="title">
                01 PICK YOUR DESTINATION
            </div>
            <DestinationNav />
            <Outlet />            
        </div>
    )
}

export default DestinationLayout;