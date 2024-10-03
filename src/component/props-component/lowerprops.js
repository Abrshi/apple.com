import React from 'react'
import "./lowerprops.css"
import { Link } from 'react-router-dom'
function lowerprops(props) {
  return (
    <div className="parentdivsm">
 
        <div className="childLdiv">
          <div className={props.ldiv} >
          <div>
          <h2> {props.lh2} </h2>
          <h3 className='lpwidth'><span className='colerfull'>{props.span}</span> {props.lh3}<br/> {props.lh31} </h3>
          <ul className='lpul'>
          <li><Link to="#" className='links'>lern more</Link></li>
          <li><Link to="#" className='links'>Buy</Link></li>
        </ul>
        </div>
        </div>
    </div>  

    
    
    </div>

  )
}

export default lowerprops