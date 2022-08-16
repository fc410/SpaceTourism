import './index.css';
import CAPSULE from '../../../../images/technology/image-space-capsule-portrait.jpg';

const Capsule = () => {
    return (
        <div>
            <img src={CAPSULE} alt='vehicle' className='tech-img'/>  

            <div className='tech-main-paragraph'>
                <div className='desc'>
                    THE TERMINOLOGY...
                </div>
                <div className='tech-title'>
                    SPACE CAPSULE
                </div>
                <div className='tech-paragraph'>
                    A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
                    capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
                    you'll spend your time during the flight. It includes a space gym, cinema, 
                    and plenty of other activities to keep you entertained.
                </div>
            </div>  
        </div>
    )
}

export default Capsule;