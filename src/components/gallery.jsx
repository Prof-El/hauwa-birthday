import bill from '../../pictures/bill.jpg'
import bill2 from '../../pictures/bill2.jpg'
import bill3 from '../../pictures/bill3.jpg'
import bill4 from '../../pictures/bill4.jpg'
import bill5 from '../../pictures/bill5.jpg'
import bill6 from '../../pictures/bill6.jpg'

import './gallery.css'


const Gallery = () => {

    return (
        <>
            <h1>Gallery</h1>
            <div className='box'>
               <img src={bill} />
                <img src={bill4} />
                <img src={bill5} />
                <img src={bill6} />

            </div>
        </>
    )
}


export default Gallery