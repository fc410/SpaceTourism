import MARS from '../../../../images/destination/image-mars.webp';
import DestinationNav from '../../DestinationNav';
import './index.css';

const Mars = () => {
    console.log('Moon component');

    return(
        <div className="main-content-des">
            <img src={MARS} alt='mars' className='mars-img'/>

            <div className="description-paragraph">
                <div style={{fontSize: '70px'}}>
                    MARS
                </div>
                <div classNames='moon-description'>
                    Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
                    the tallest planetary mountain in our solar system. It’s two and a half times 
                    the size of Everest!
                </div>
                <hr/>
                <div className='distance-travel'>
                    <div>
                        <div className='header'>
                            AVG. DISTANCE
                        </div>
                        <div className='time'>
                            225 mil. km
                        </div>
                    </div>

                    <div>
                        <div className='header' style={{paddingRight:'100px'}}>
                            EST. TRAVEL TIME
                        </div>
                        <div className='time'>
                            9 months
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mars;