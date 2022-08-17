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
                    <div className='home-text'>
                        <span>00 Home</span>
                    </div>
                </NavLink>

                <NavLink
                    exact='true'
                    activeclassname='active'
                    to='/destination'
                    className='nav-a'
                >
                    <div className='destination-text'>
                        <span>01 Destination</span>
                    </div>
                </NavLink>

                <NavLink
                    exact='true'
                    activeclassname='active'
                    to='/crew'
                    className='nav-a'
                    >
                        <div className='crew-text'>
                            <span>02 Crew</span>
                        </div>
                </NavLink>

                <NavLink
                    exact='true'
                    activeclassname='active'
                    to='/technology'
                    className='nav-a'
                >   
                    <div className='tech-text'>
                        <span>03 Technology</span>
                    </div>
                    
                </NavLink>
            </nav>
        </div>
    )
}

export default NavigationBar;