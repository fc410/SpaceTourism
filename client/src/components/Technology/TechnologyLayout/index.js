import './index.css';
import {Outlet} from 'react-router-dom';
import TechNavigation from '../TechNavigation';


const TechnologyLayout = () => {
    return (
        <div className="main-content-tech">
            <div className="title">
                03 SPACE LAUNCH 101
            </div>
            <TechNavigation/>
 
            <div className='tech-main-paragraph'>
                <div className='desc'>
                    THE TERMINOLOGY...
                </div>
            </div>

            <Outlet />          
        </div>
    )
}

export default TechnologyLayout;