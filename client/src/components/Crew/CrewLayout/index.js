import './index.css';
import {Outlet} from 'react-router-dom';
import CrewNav from '../CrewNav';

const CrewLayout = () => {
    return (
        <div className="main-content-crew">
            <div className="title">
                02 MEET YOUR CREW
            </div>
            <CrewNav />
            <Outlet/>
        </div>
    );
}

export default CrewLayout;