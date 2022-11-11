import React from 'react'
import {AiOutlineShopping} from 'react-icons/ai'
import Link from "next/link";
import { urlFor } from "../lib/client";

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href="/">
          Enauro Store
        </Link>
      </p>
      <button type="button" className='cart-icon' onClick={()=>{console.log('nothing')}}>
        <AiOutlineShopping/>
        <span className='cart-item-qty'>1</span>
      </button>
    </div>
  )
}

export default Navbar