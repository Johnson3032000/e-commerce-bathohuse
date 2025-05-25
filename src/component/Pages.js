import React from 'react';
import './Pages.css';
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";

function Pages() {
  return (
<div className='universe'>

<h3>About Us</h3>
 
 <div className='demoabt'> 
  <div className='apt1'>
 
   <h5>Technology</h5>
   <h6>Sustainable Furniture Rocks This World! Check Out New Minimalistic Wooden Collection</h6>
   <p>There is no denying that eco-friendly materials can easily conquer the market. But can we produce enough to fulfill the growing demands? Can we create an astonishing look for the new collection of eco-friendly furniture? That is a tough question. But did make an effort!

</p>
<hr></hr>

<h5>Interior</h5>
   <h6>Primary Palette Can Allow You To Be Bold! Give Your Interior Artistic Edge</h6>
   <p>Use this well-known tip for mixing two primary colors with a trendy muted palette. Neutral spaces with wooden furniture can be changed within a minutes using the right set of vibrant colors. Such interior design helps you to stand out from ordinary palettes.
</p>

<hr></hr>
<h5>Design</h5>
   <h6>Check Out The Latest Design Trends! Minimalism, Stripes, and Sculptural Furniture</h6>
   <p>Let's mix stripes and checks - everyone's favorite patterns. New-season colors add the right balance to this awesome mix. Even in bedroom decor you can use this fun new trend along with classic cushions and delicate color scheme or love colorful decoration.
</p>   
  </div>
<div className='apt2'>
<img src='./Asset/11.jpg'></img>
<img src='./Asset/111.jpg'></img>



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

export default Pages