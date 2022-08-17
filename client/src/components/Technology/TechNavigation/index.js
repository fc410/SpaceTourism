import {NavLink} from 'react-router-dom';
import './index.css';


const TechNavigation = () =>{
    return (
        <div className="main-tech">
            <nav className='tech-nav'>
                <NavLink
                    exact='true'
                    activeclassname='active'
                    to='/technology/vehicle'
                    className='tech-a'
                >
                    <div className='tech-nav'>1</div>
                </NavLink>

                <NavLink
                    exact='true'
                    activeclassname='active'
                    to='/technology/spaceport'
                    className='tech-a'
                >
                    <div className='tech-nav'>2</div>
                </NavLink>

                <NavLink
                    exact='true'
                    activeclassname='active'
                    to='/technology/capsule'
                    className='tech-a'
                >
                    <div className='tech-nav'>3</div>
                </NavLink>

            </nav>
        </div>
    )
}

export default TechNavigation;