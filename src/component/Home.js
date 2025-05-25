import React from 'react'
import  {useState} from 'react';
import './Home.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FiTruck } from "react-icons/fi";
import { MdSettingsBackupRestore } from "react-icons/md";
import { FaHeadset } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";


import Modal from 'react-bootstrap/Modal';


function Home() {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




    const images = [
        './Asset/10.jpg',
        './Asset/11.jpg',
        './Asset/108.png',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + images.length) % images.length
        );
    };
    




  return (
    <>
    <div className="slider">
    <img src={images[currentIndex]} alt="Slider" />
    <div className="buttons">
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
    </div>
</div>



<div className='demo'>
    
<h3>New Arrivals</h3>
<div><p>Check out our new furniture collection! Cozy sofa, fancy chair, wooden casket, and many more. The new collection
     brings an informal elegance to your home.</p></div>
     
</div>

<div className='maincart'>

<div className='crt1'>

    <img src='./Asset/10.jpg'></img>
<br></br><Button variant="light" onClick={handleShow}>
        <h6>Awesome Lamp</h6>
        <p>$40</p>
      </Button>

      <Modal show={show} onHide={handleClose}>
      
        <Modal.Header closeButton>
          <Modal.Title>Awesome Lamp</Modal.Title>
        </Modal.Header>
        <Modal.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ultricies aliquam.
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
</div>


<div className='crt1'>

    <img src='./Asset/10.jpg'></img>
<br></br><Button variant="light" onClick={handleShow}>
        <h6>Awesome Lamp</h6>
        <p>$40</p>
      </Button>

      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton> 
          <Modal.Title>Cool Flower
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque 
          penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ultricies aliquam.!</Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
</div>


<div className='crt1'>

    <img src='./Asset/10.jpg'></img>
<br></br><Button variant="light" onClick={handleShow}>
        <h6>Awesome Lamp</h6>
        <p>$40</p>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
</div>


<div className='crt1'>

    <img src='./Asset/10.jpg'></img>
<br></br><Button variant="light" onClick={handleShow}>
        <h6>Awesome Lamp</h6>
        <p>$40</p>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
</div>
</div>


<div className='maincart'>

<div className='crt1'>

    <img src='./Asset/10.jpg'></img>
<br></br><Button variant="light" onClick={handleShow}>
        <h6>Awesome Lamp</h6>
        <p>$40</p>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
</div>


<div className='crt1'>

    <img src='./Asset/10.jpg'></img>
<br></br><Button variant="light" onClick={handleShow}>
        <h6>Awesome Lamp</h6>
        <p>$40</p>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
</div>


<div className='crt1'>

    <img src='./Asset/10.jpg'></img>
<br></br><Button variant="light" onClick={handleShow}>
        <h6>Awesome Lamp</h6>
        <p>$40</p>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
</div>


<div className='crt1'>

    <img src='./Asset/10.jpg'></img>
<br></br><Button variant="light" onClick={handleShow}>
        <h6>Awesome Lamp</h6>
        <p>$40</p>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
</div>
</div>


<div className='demo2'>
  <div>
  <h3>Top Selling Products</h3> 
  <p>These furniture sets will become an essential part of an ecosystem of elements in your home. 
    Your domestic space will easily embrace these tables, chairs, and bookshelves.</p>
    </div>
</div >

<div className='demo3'>
  <div><img className='uniq' src='./Asset/10.jpg'></img></div>
  <div>
    
  <table >
  
  <tr>
    <td><img src='./Asset/10.jpg'></img></td>
    <td><img src='./Asset/10.jpg'></img></td>
   
  </tr>
  <tr>
    <td><img src='./Asset/10.jpg'></img></td>
    <td><img src='./Asset/10.jpg'></img></td>
    
  </tr>
</table>
 
  </div>
</div>

<hr></hr>
<div className='demo4' >
  <div className='jn'><  FiTruck /> <h4>free shipping </h4>
  <p>On all orders of $ 150</p>
  </div>
  <div> <div className='jn'><FaHeadset />
  <h4>24/7 support</h4>
  <p>Get help when you need it </p>
  </div></div>
  <div> <div className='jn'><MdSettingsBackupRestore /> <h4>100% money back
 </h4>
  <p> 30 day money back guarantee</p>
  </div></div>
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







</>

   
  )
}

export default Home