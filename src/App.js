import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Home from './component/Home';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Pages from './component/Pages';
import Shop from './component/Shop';
import Blog from './component/Blog';
import { FaSearch , FaStar , FaRegUser,FaShoppingCart,} from "react-icons/fa";
import { IoDocumentTextOutline,IoClose } from "react-icons/io5";
import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import Contact from './component/Contact';
import Cart from './component/Cart';






function App() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };



  return (
    <div className="App">
      <BrowserRouter>
         <nav className='mainnav'>
          <nav className='nav1'>
              <h1>Flatlogic</h1>
              <p><FaStar /> 5.0 / 5 (4 Reviews)</p>
              <h6>Need a custom solution? <br></br>
              contact@flatlogic.com</h6>
              <h6> <IoDocumentTextOutline /> Documentaion</h6>

              <button className='nav1-btn'>Buy Now</button>
              <h6><IoClose /> Close</h6>
            </nav>

            <nav className='nav2'>
              
              <h3> Flatlogic </h3>
             <Button variant="light"> <h6> <Link to='/'>Home</Link> </h6> </Button>
              {/* <h6> <Link to='/pages'>Pages</Link> </h6>
              <h6> <Link to='/shop'>Shop</Link> </h6>
              <h6> <Link to='/blog'>Blog</Link> </h6> */}

              <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
       Pages
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-2" > <Link to='/pages'>About us</Link></Dropdown.Item>
        <Dropdown.Item href="#/action-2"> About team</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Contact us</Dropdown.Item>
        <Dropdown.Item href="#/action-2">FAQ</Dropdown.Item>
        <Dropdown.Item href="#/action-3">404</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Wishlist</Dropdown.Item>
        <Dropdown.Item href="#/action-3">LogIn</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
      Shop
      </Dropdown.Toggle>

      <Dropdown.Menu>
        
        <Dropdown.Item href="#/action-5">Shop</Dropdown.Item>
        <Dropdown.Item href="#/action-6">Catagaries</Dropdown.Item>
        <Dropdown.Item href="#/action-7">Account</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
       Blog
      </Dropdown.Toggle>

      <Dropdown.Menu>
        
        <Dropdown.Item href="#/action-2">Blog</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Blog Article</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
              
          
            <FaSearch/>
            <Link to='/cart'><FaShoppingCart/></Link>  
             <Link to='/contact'><FaRegUser /></Link>

           
           
            </nav>
            </nav>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/pages' element={<Pages/>} />
            <Route path='/shop' element={<Shop/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/cart' element={<Cart />} />
          </Routes>

      </BrowserRouter>
 

      
      
    
    </div>
  );
}

export default App;
