import { useState, useEffect } from 'react'

import './signin.css'
import {Link, useNavigate} from "react-router-dom"
import pic1 from '../../pictures/pic1.jpg'

function SignIn() {


 const [signIn, setSignIn] = useState(false)
 const [data, setData] =useState({'answer': 'abel'})

 const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };

    setData({...data, ...newInput});
    console.log(data)
  }


  
  const history = useNavigate()

  const handleSubmit = () => {

      // Check if the sign-in was successful
      if (data.answer.toLocaleLowerCase === 'hauwa' || data.answer === 'Hauwa' || data.answer === 'Nanahauwa' || data.answer === 'HAUWA') {
        history('/home')
        setSignIn(true)
        console.log("Sign-in successful");
        // Navigate to the next page upon successful sign-in
        // You can use a programmatically triggered navigation or set a state variable.
      } else {
        setSignIn(false)
        console.log("Sign-in failed");
        // Handle the case where sign-in was not successful
      }
    } 


  return (
    <>
        <div className='personal'>
            <img style={{width: '100%', height: '100%'}} src={pic1} alt='my picture' />
            <p>Answer correctly to gain access</p>
        </div>
        
        <div className='sign-in-container'>
            <label style={{'paddingBottom': '5px'}}>Who is the most beautiful lady in the world?</label>
            <input
            className='email'
            name='answer'
            placeholder='answer'
            onChange = {(event)=> handleInput(event)}

                />

        <div>
            {signIn ? (
              <Link to={"/home"}>
                <input
                  className='submit'
                  type='submit'
                  value="Sign In"
                  onClick={handleSubmit}
                />
              </Link>
            ) : (
              <input
                className='submit'
                type='submit'
                value="Sign In"
                onClick={handleSubmit}
              />
            )}
          </div>
          <p style={{"fontSize": '8px', 'marginTop': '10px', 'color': 'gold'}}>Hint: it starts with and H and ends with and a</p>
        </div>
     
    </>
     
)}

export default SignIn
