import TITAN from '../../../../images/destination/image-titan.webp';
import DestinationNav from '../../DestinationNav';
import './index.css';

const Moon = () => {
    return(
        <div className="main-content-des">
            <img src={TITAN} alt='moon' className='titan-img'/>

            <div className="description-paragraph">
                <div className='planet-text'>
                    Titan
                </div>
                <div classNames='moon-description'>
                    The only moon known to have a dense atmosphere other than Earth, Titan 
                    is a home away from home (just a few hundred degrees colder!). As a 
                    bonus, you get striking views of the Rings of Saturn.
                </div>
                <hr/>
                <div className='distance-travel'>
                    <div>
                        <div className='header'>
                            AVG. DISTANCE
                        </div>
                        <div className='time'>
                            1.6 bil. km
                        </div>
                    </div>

                    <div>
                        <div className='header' style={{paddingRight:'100px'}}>
                            EST. TRAVEL TIME
                        </div>
                        <div className='time'>
                            7 years
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Moon;