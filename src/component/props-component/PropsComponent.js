// PropsComponent.js
import React from 'react';
import "./props.css"
import { Link } from 'react-router-dom';
function PropsComponent(props) {
  return (
    <div className='propsouterdiv'>
    <div className={props.inerdiv1} >
      <h2 className='propsh1'>{props.h1}</h2>
      <h3 className='propsh2'>{props.h2}</h3>
      <ul className='props-ul'>
        <li>
          <Link to={props.link1} className='links'>Learn more</Link>
        </li>
        <li>
          <Link to={props.link2} className='links'>Buy</Link>
        </li>
      </ul>
      </div>
    </div>
  );
}

export default PropsComponent;
