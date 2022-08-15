import EUROPA from '../../../../images/destination/image-europa.webp';
import DestinationNav from '../../DestinationNav';
import './index.css';

const Mars = () => {
    return(
        <div className="main-content-des">
            <div className="title">
                01 PICK YOUR DESTINATION
            </div>
            <DestinationNav/>

                <img src={EUROPA} alt='europa' className='europa-img'/>


            <div className="description-paragraph">
                <div style={{fontSize: '70px'}}>
                    EUROPA
                </div>
                <div classNames='moon-description'>
                    The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
                    winter lover’s dream. With an icy surface, it’s perfect for a bit of 
                    ice skating, curling, hockey, or simple relaxation in your snug 
                    wintery cabin.
                </div>
                <hr/>
                <div className='distance-travel'>
                    <div>
                        <div className='header'>
                            AVG. DISTANCE
                        </div>
                        <div className='time'>
                            628 mil. km
                        </div>
                    </div>

                    <div>
                        <div className='header' style={{paddingRight:'100px'}}>
                            EST. TRAVEL TIME
                        </div>
                        <div className='time'>
                            3 years
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mars;