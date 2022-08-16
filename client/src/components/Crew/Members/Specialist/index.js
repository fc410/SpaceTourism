import SPECIALIST from '../../../../images/crew/image-mark-shuttleworth.png';
import './index.css';

const Specialist = () =>{
    return(
        <div>
            <img src={SPECIALIST} alt='commander' className='crew-img'/>

            <div className='main-text'>
                <div className='position'>
                    Mission Specialist
                </div>
                <div className='crew-name'>
                    Mark Shuttleworth
                </div>
                <div className='crew-description'>
                    Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
                    the Linux-based Ubuntu operating system. Shuttleworth became the first South 
                    African to travel to space as a space tourist.
                </div>
            </div>
        </div>
    )
}

export default Specialist;