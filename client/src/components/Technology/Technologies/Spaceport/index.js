import './index.css';
import SPACEPORT from  '../../../../images/technology/image-spaceport-portrait.jpg'

const Spaceport = () => {
    return(
        <div>
            <img src={SPACEPORT} alt='vehicle' className='tech-img'/>  

            <div className='tech-main-paragraph'>
                <div className='desc'>
                    THE TERMINOLOGY...
                </div>
                <div className='tech-title'>
                    SPACEPORT
                </div>
                <div className='tech-paragraph'>
                    A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
                    by analogy to the seaport for ships or airport for aircraft. Based in the 
                    famous Cape Canaveral, our spaceport is ideally situated to take advantage 
                    of the Earth’s rotation for launch.
                </div>
            </div>  
        </div>
    )
}

export default Spaceport;