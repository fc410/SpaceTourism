import './index.css';
import {NavLink} from 'react-router-dom';

const NavigationBar = () => {
    return(
        <div className="main-navigation">
            <nav>
                <NavLink
                    exact='true'
                    activeclassname='active'
                    to='/'
                >
                    00 Home
                </NavLink>

                <NavLink
                    exact='true'
                    activeclassname='active'
                    to='/destination'
                >
                    01 Destination
                </NavLink>

                <NavLink
                    exact='true'
                    activeclassname='active'
                    to='/crew'
                    >
                    02 Crew
                </NavLink>

                <NavLink
                    exact='true'
                    activeclassname='active'
                    to='/technology'
                >
                    03 Technology
                </NavLink>
            </nav>
        </div>
    )
}

export default NavigationBar;