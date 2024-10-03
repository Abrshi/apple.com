import React from 'react';
import Lowerprops from "../../props-component/lowerprops";
import "./smoler.css"
import vplogo from "../../../imag/icon/vishionpro/vison.png"
import vcardlogo from "../../../imag/icon/card/card.png"
import trandlogo from "../../../imag/icon/tre/trend.png";
function Smalers() {
  return (
    <div className='hole'>
   <div className='flex'>
    <Lowerprops
    ldiv="visonpro"
    lh2=<img src={vplogo} alt=""/>
    lh3="Welcome to the era of spatial computing."

    />

    <Lowerprops
    ldiv="macbook"
    lh2="MacBook Air"
    lh3="Lean. Mean. M3 machine"
    />
    </div>

    <div className='flex'>
    <Lowerprops
    ldiv="ipad"
    lh2="iPad"
    lh3="Lovable. Drawable. Magical."
    />

    <Lowerprops
    span="Adaptive Audio."
    ldiv="airpad"
    lh2="AirPad Pro" 
    lh3="Now playing."
    />
    </div>
 
    
    <div className='flex'>
    <Lowerprops
    ldiv="card"
    lh2=<img src={vcardlogo} alt=""/>
    lh3="Get up to 3% Daily Cash back " 
    lh31= "with every purchase."
    />

    <Lowerprops
    ldiv="tradi"
    lh2=<img src={trandlogo} alt=""/>
    lh3="Get $180-$630 in credit when "
    lh31="you trade in iPhone 11 or higher."
    />
    </div>
 
    

    <h2>latest youtube post</h2>
    </div>
  )
}

export default Smalers