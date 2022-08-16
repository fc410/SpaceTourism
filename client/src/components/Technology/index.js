import './index.css';
import {Outlet} from 'react-router-dom';
import TechNavigation from './TechNavigation';

const Technology = () => {
    return(
        <div className="main-content-tech">
            <div className="title">
                03 SPACE LAUNCH 101
            </div>
            <TechNavigation/>
            <Outlet />  
            <div className='tech-main-paragraph'>
                <div className='desc'>
                    THE TERMINOLOGY...
                </div>
            </div>    
                
        </div>
    )
}

export default Technology;