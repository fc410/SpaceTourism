import {NavLink} from 'react-router-dom';
import './index.css';

const CrewNav = () => {
    return(
        <div className="crew-destination">
            <nav className='des-nav'>
                <NavLink
                    exact='true'
                    activeclassname='active'
                    to='/crew/commander'
                    className='crew-a'
                >
                    <div className='crew-nav'></div>
                </NavLink>

                <NavLink
                    exact='true'
                    activeclassname='active'
                    to='/crew/engineer'
                    className='crew-a'
                >
                    <div className='crew-nav'></div>
                </NavLink>

                <NavLink
                    exact='true'
                    activeclassname='active'
                    to='/crew/pilot'
                    className='crew-a'
                >
                    <div className='crew-nav'></div>
                </NavLink>

                <NavLink
                    exact='true'
                    activeclassname='active'
                    to='/crew/specialist'
                    className='crew-a'
                >
                    <div className='crew-nav'></div>
                </NavLink>
            </nav>
        </div>
    )
}

export default CrewNav;