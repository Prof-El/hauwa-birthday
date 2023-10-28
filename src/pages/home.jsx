
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
    const [style1, setStyle1] = useState({"filter": 'blur(5px)'})
    const [style2, setStyle2] = useState({"filter": 'blur(5px)'})
    const [style3, setStyle3] = useState({"filter": 'blur(5px)'})
    const [style4, setStyle4] = useState({"filter": 'blur(5px)'})
    const [style5, setStyle5] = useState({"filter": 'blur(5px)'})
    const [style6, setStyle6] = useState({"filter": 'blur(5px)'})
    const [style7, setStyle7] = useState({"filter": 'blur(5px)'})
    const [style8, setStyle8] = useState({"filter": 'blur(5px)'})
    const [style9, setStyle9] = useState({"filter": 'blur(5px)'})
    const [style10, setStyle10] = useState({"filter": 'blur(5px)'})
    

  
    const handleClick1 = () => {
        setStyle1({"filter": "none"})
    }

    const handleClick2 = () => {
        setStyle2({"filter": "none"})
    }
    const handleClick3 = () => {
        setStyle3({"filter": "none"})
    }
    const handleClick4 = () => {
        setStyle4({"filter": "none"})
    }
    const handleClick5 = () => {
        setStyle5({"filter": "none"})
    }
    const handleClick6 = () => {
        setStyle6({"filter": "none"})
    }
    const handleClick7 = () => {
        setStyle7({"filter": "none"})
    }
    const handleClick8 = () => {
        setStyle8({"filter": "none"})
    }
    const handleClick9 = () => {
        setStyle9({"filter": "none"})
    }


    
    
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
                <img style={style1} onClick={handleClick1} className='pic' src={pic2} />
                <img style={style2} onClick={handleClick2} className='pic' src={pic3} />
                <img style={style3} onClick={handleClick3} className='pic' src={pic4} />
                <img style={style4} onClick={handleClick4} className='pic' src={pic5} />
                <img style={style5} onClick={handleClick5} className='pic' src={pic6} />
                <img style={style6} onClick={handleClick6} className='pic' src={pic7} />
                <img style={style7} onClick={handleClick7} className='pic' src={pic8} />
                <img style={style8} onClick={handleClick8} className='pic' src={pic9} />
                <img style={style9} onClick={handleClick9}  className='pic' src={pic10} />
              
            </div>
            
        </>
    )
}


export default Home