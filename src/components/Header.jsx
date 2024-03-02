import React from 'react'
import '../style.css'
import { Link } from 'react-router-dom'


const Header=({cart})=> {
  
  return (
    <div className="menu" >
        <Link to="/" className='logo'>Reactify</Link>
        <div className='links'>
            <Link to="/">Home</Link>
       
            <Link to="/about">About</Link>
        
            <Link to="/cart">Cart</Link>
       
            <Link to="/contact">Contact</Link>
      </div>
      
        <Link to="/cart"><span className='cart'>{cart}</span></Link>
     
    </div>
  )
}

export default Header
