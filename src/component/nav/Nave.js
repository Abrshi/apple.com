import React, { useState } from 'react'

import logo_sm from "../../imag/icon/logo-sm.png";
import search_icon_sm from "../../imag/icon/search-icon-sm.png";
import cart_sm from "../../imag/icon/cart-sm.png";
import { Link } from 'react-router-dom';
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";

function Nave() {
  const [toggle, setToggle] = useState(false);
  const toggleFunction=()=>{
    setToggle(!toggle)
    console.log(toggle);
    
  }


  return (
    <div className='outerdiv'>
    <div className='inerdiv'>
        <ul className='ul'>
            <li><Link to="/" ><img src={logo_sm} /></Link></li>
            <div className='uldiv'>
              <ul className={`ul2 ${toggle ? 'block' : 'none'}`}>
              <li><Link to="/store" className='link'>Store</Link></li>
            <li><Link to="/mac" className='link'>mac</Link></li>
            <li><Link to="/ipad" className='link'>iPad</Link></li>
            <li><Link to="/iPhone" className='link'>iPhone</Link></li>
            <li><Link to="/watch" className='link'>Watch</Link></li>
            <li><Link to="/vision" className='link'>Vision</Link></li>
            <li><Link to="/airpod" className='link'>AirPods</Link></li>
            <li><Link to="/tvandhome" className='link'>TV&Home</Link></li>
            <li><Link to="/intertainment" className='link'>Entertainment</Link></li>
            <li><Link to="/accessories" className='link'>Accessories</Link></li>
            <li><Link to="/support" className='link'>Support</Link></li>
              </ul>
            </div>
            <li><Link to="#"><img src={search_icon_sm} /></Link></li>
            <li><Link to="#"><img src={cart_sm} /></Link></li>
            <li onClick={toggleFunction}>
            <li className='toogler' onClick={toggleFunction}>
                         {toggle ? <FiX color="white" size={24}/> : <FiAlignJustify color="white" size={24}/>}
              </li>

              </li>
        </ul>
    </div>
</div>
  )
}

export default Nave