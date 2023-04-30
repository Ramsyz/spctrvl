import './TrainingStyles.css'
import { Link } from 'react-router-dom'

import Pod from '../assests/pod.jpg'
import Moon from '../assests/moon.jpg'


const Training = () => {
  return (
    <div className='training'>
        <div className='left'>
            <h1>Training</h1>
            <p>Through training is necessity when travelling in space. We offer all inclusive training foe pre-flight and inflight scenarios.</p>
           <Link to='/contact'><button className='btn'>Contact</button></Link>  
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='image-stack top'>
                    <img src={Moon} className='img' alt='/'/>
                </div>
                <div className='image-stack bottom'>
                    <img src={Pod} className='img' alt='/'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Training
