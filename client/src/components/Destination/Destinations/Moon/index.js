import MOON from '../../../../images/destination/image-moon.webp';
import DestinationNav from '../../DestinationNav';
import './index.css';

const Moon = () => {
    console.log('Moon component');

    return(
        <div className="main-content-des">
            <div className="title">
                01 PICK YOUR DESTINATION
            </div>
            <DestinationNav/>

                <img src={MOON} alt='moon' className='moon-img'/>


            <div className="description-paragraph">
                <div style={{fontSize: '70px'}}>
                    Moon
                </div>
                <div classNames='moon-description'>
                    See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                    regain perspective and come back refreshed. While you’re there, take in some history 
                    by visiting the Luna 2 and Apollo 11 landing sites.
                </div>
                <hr/>
                <div className='distance-travel'>
                    <div>
                        <div className='header'>
                            AVG. DISTANCE
                        </div>
                        <div className='time'>
                            384,400 KM
                        </div>
                    </div>

                    <div>
                        <div className='header' style={{paddingRight:'100px'}}>
                            EST. TRAVEL TIME
                        </div>
                        <div className='time'>
                            3 DAYS
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Moon;