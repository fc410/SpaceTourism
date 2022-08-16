import './index.css';
import VEHICLE from '../../../../images/technology/image-launch-vehicle-portrait.jpg';

const Vehicle = () =>{
    return(
        <div>
            <img src={VEHICLE} alt='vehicle' className='tech-img' />  

            <div className='tech-main-paragraph'>
                <div className='desc'>
                    THE TERMINOLOGY...
                </div>
                <div className='tech-title'>
                    LAUNCH VEHICLE
                </div>
                <div className='tech-paragraph'>
                    A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
                    payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
                    WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
                    it's quite an awe-inspiring sight on the launch pad!
                </div>
            </div>  
        </div>
    )
}

export default Vehicle;