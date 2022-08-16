import './index.css';
import COMMANDER from '../../images/crew/image-douglas-hurley.png';

const Crew = () => {
    return(
        <div>
            <img src={COMMANDER} alt='commander' className='crew-img'/>

            <div className='main-text'>
                <div className='position'>
                    Commander
                </div>
                <div className='crew-name'>
                    Douglas Hurley
                </div>
                <div className='crew-description'>
                    Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
                    and former NASA astronaut. He launched into space for the third time as 
                    commander of Crew Dragon Demo-2.
                </div>
            </div>
        </div>
    )
}

export default Crew;