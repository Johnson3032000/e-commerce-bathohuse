import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='universecont'>
        <div className='maincont'>
            <div className='cont1'>
                <h2>Login</h2>

                <p className='textp'>Email</p> 
                <input></input> 

                <p className='textp'>Password</p> 
                <input></input> <br></br>

                <a href='#' >Create an account</a>   <button>LOGIN</button>
               

            </div>
            <div className='cont2'>

              <img className='img1' src='./Asset/114.png' />

            </div>
        </div>

        
        
        <div className='bt1'>

<h6> Terms & Conditions </h6>
<h6> Privacy Policy</h6>
<h6> Forgot password</h6>
</div>


    </div>
  )
}

export default Contact