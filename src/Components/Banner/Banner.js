import './Banner.scss'
import Video from './video/sky.mp4'
import {fire} from '../../Service/firebase'
import { Link } from 'react-router-dom'
const Banner = () =>{
    const signOut = (e) =>{
        e.preventDefault();

        fire.auth().signOut()
    }
    return(
        <>
            <div className='root'>
                <div className='hiddenVideo'>
                    <video autoPlay loop >
                        <source src={Video} type='video/mp4'/>
                    </video>
                    <div className='hiddenButton'>
                        <Link to='/start'>
                            <button>START</button>
                        </Link>
                    </div>
                </div>
                <div className='shadow' />
                <div className='bannerContent'>
                    <h1>We are the best uploader</h1>
                    <button onClick={signOut}>Sign out</button>
                </div>
            </div>
        </>
    )
}

export default Banner;