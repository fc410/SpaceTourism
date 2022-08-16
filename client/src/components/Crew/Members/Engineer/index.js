import ENGINEER from '../../../../images/crew/image-anousheh-ansari.png';
import './index.css';

const Engineer = () =>{
    return(
        <div>
            <img src={ENGINEER} alt='commander' className='crew-img'/>

            <div className='main-text'>
                <div className='position'>
                    Flight Engineer
                </div>
                <div className='crew-name'>
                    Anousheh Ansari
                </div>
                <div className='crew-description'>
                    Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
                    Ansari was the fourth self-funded space tourist, the first self-funded woman to 
                    fly to the ISS, and the first Iranian in space. 
                </div>
            </div>
        </div>
    )
}

export default Engineer;