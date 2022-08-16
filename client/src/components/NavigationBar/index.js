import './index.css';
import {NavLink} from 'react-router-dom';

const NavigationBar = () => {
    return(
        <div className="main-navigation">
            <nav className='main-nav'>
                <NavLink
                    exact='true'
                    activeclassname='active'
                    to='/'
                    className='nav-a'
                >
                    00 Home
                </NavLink>

                <NavLink
                    exact='true'
                    activeclassname='active'
                    to='/destination'
                    className='nav-a'
                >
                    01 Destination
                </NavLink>

                <NavLink
                    exact='true'
                    activeclassname='active'
                    to='/crew'
                    className='nav-a'
                    >
                    02 Crew
                </NavLink>

                <NavLink
                    exact='true'
                    activeclassname='active'
                    to='/technology'
                    className='nav-a'
                >
                    03 Technology
                </NavLink>
            </nav>
        </div>
    )
}

export default NavigationBar;