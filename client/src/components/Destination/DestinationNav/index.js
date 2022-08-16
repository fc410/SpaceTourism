import {NavLink} from 'react-router-dom';
import './index.css';

const DestinationNav = () => {
    return(
        <div className="nav-destination">
            <nav className='des-nav' style={{width: '500px'}}>
                <NavLink
                    exact='true'
                    activeclassname='active'
                    to='/destination/moon'
                    className='des-a'
                >
                    Moon
                </NavLink>

                <NavLink
                    exact='true'
                    activeclassname='active'
                    to='/destination/mars'
                    className='des-a'
                >
                    Mars
                </NavLink>

                <NavLink
                    exact='true'
                    activeclassname='active'
                    to='/destination/europa'
                    className='des-a'
                >
                    Europa
                </NavLink>

                <NavLink
                    exact='true'
                    activeclassname='active'
                    to='/destination/titan'
                    className='des-a'
                >
                    Titan
                </NavLink>
            </nav>
        </div>
    )
}

export default DestinationNav;