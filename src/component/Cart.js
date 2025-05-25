import React from 'react'
import './Cart.css'
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";

function Cart() {
  return (
    <div className='universecart'>

      

            <div>
                <h3>Shopping cart</h3>

              <div className='div1'> <p>Product</p>  <p>Quantity</p> <p>Price</p> </div>
              <hr/>
              <div className='img1'>              
              <div className='frst'> <div> <img src='./Asset/122.png'></img> <p>Decoration <br></br>
              Chinese Teapot</p> </div>  <div> <p>-</p> <h4>1</h4> <p>+</p> </div> <div > <p>50$</p> </div> </div>

              <div className='frst'> <div> <img src='./Asset/123.png'></img> <p>Decoration <br></br>
              Chinese Teapot</p> </div>  <div> <p>-</p> <h4>1</h4> <p>+</p> </div> <div > <p>50$</p> </div> </div>

              <div className='frst'> <div> <img src='./Asset/124.png'></img> <p>Decoration <br></br>
              Chinese Teapot</p> </div>  <div> <p>-</p> <h4>1</h4> <p>+</p> </div> <div > <p>50$</p> </div> </div>

              <div className='frst'> <div> <img src='./Asset/125.png'></img> <p>Decoration <br></br>
              Chinese Teapot</p> </div>  <div> <p>-</p> <h4>1</h4> <p>+</p> </div> <div > <p>50$</p> </div> </div>


              </div>




            

           
</div>

<footer>
<div className='ftdemo'>
<div className='ft1'>
  <h3>Many desktop publishing</h3>
  <p>Do you want to receive exclusive email offers? Subscribe to our newsletter! You will receive a unique 
    promo code which gives you a 20% discount on all our products in 10 minutes.</p>

</div>
<div className='ft2'>
  <input placeholder='Search'></input> <button>Subscribe</button>
</div>
</div>
<hr></hr>

<div className='ftdemo5'>

  <div className='kl1'>
    <h3>Flatlogic.</h3>
    <p>Lorem Ipsum has been the industry's standard dummy text ever since <br/> the 1500s,</p>
    <a><FaGoogle /></a> <br/>
    <a><FaTwitter /></a> <br/>
    <a><SiIndeed /></a> <br/>
    <a><FaFacebook /></a>
  </div>
  <div className='kl1'>
    <h4>company</h4>
    <p>What We Do <br/>
    Available Services <br/>
     Latest Posts <br/>
      FAQs</p>
 </div>
  <div className='kl1'>
    <h4>my account</h4>
    <p>Sign In <br/>
View Cart <br/>
Order Tracking <br/>
Help & Support</p>
  </div>
  <div className='kl1'>
    <h4>customer service</h4>
    <p>Help & Contact Us <br/>
Returns & Refunds <br/>
Online Stores <br/>
Terms & Conditions</p>
  </div>
</div>

<hr></hr>

<p>© 2020-2024 powered by Flatlogic</p>
</footer>


    </div>
  )
}

export default Cart