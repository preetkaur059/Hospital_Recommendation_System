import React from 'react'
import './Navbar.css'
import logo from '../logo.jpg';

const Navbar = () => {
    return(
        <div className='navbar'>
            <div className='navbar-logo'>
                <img src={logo} alt="hospital image" />
                <h2>Hospital Recommendation System </h2>
                    </div>
    {/* <div className='navbar'> */}
     <nav>
       <ul>
         <li><button style={{backgroundColor:'red', width:'18cln0px'}}>BOOK AN AMBULANCE</button></li>
          <li><button style={{backgroundColor:'red', width:'18cln0px'}}>Post a view</button> </li>
          <li><button style={{backgroundColor:'red', width:'18cln0px'}}>Login</button></li>            
          </ul>
            </nav>
            </div>        
        // </div>
    )
}
export default Navbar