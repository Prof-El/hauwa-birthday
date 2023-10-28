
import './home.css'
import {Link, useNavigate} from "react-router-dom"
import bill from '../../pictures/bill.jpg'
import hauwa from '../../pictures/hauwa.jpg'

import { useState } from 'react'

import pic1 from '../../pictures/pic1.jpg'
import pic2 from '../../pictures/pic2.jpg'
import pic3 from '../../pictures/pic3.jpg'
import pic4 from '../../pictures/pic4.jpg'
import pic5 from '../../pictures/pic5.jpg'
import pic6 from '../../pictures/pic6.jpg'
import pic7 from '../../pictures/pic7.jpg'
import pic8 from '../../pictures/pic8.jpg'
import pic9 from '../../pictures/pic9.jpg'
import pic10 from '../../pictures/pic10.jpg'

const Home = () => {

 
    
    return(
        <>
            <Link className="signout" to={'/'}>
                <div >
                    Sign Out
                </div>
            </Link>
            <div>
                <img style={{width: "100%", height: "100vh"}} src={hauwa} />
            </div>
            <div className='grid-container'>
                <img className='pic' src={pic2} />
                <img className='pic' src={pic3} />
                <img className='pic' src={pic4} />
                <img className='pic' src={pic5} />
                <img className='pic' src={pic6} />
                <img className='pic' src={pic7} />
                <img className='pic' src={pic8} />
                <img className='pic' src={pic9} />
                <img className='pic' src={pic10} />
              
            </div>
            
        </>
    )
}


export default Home