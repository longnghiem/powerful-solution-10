import React from 'react';
import headerImg from '../photo/header.png';
import Bubble from './Bubble'

const header = () => {
  return (
    <header>
      <div className="header-wrapper">
        <img src={headerImg}/>
        <div className="header-content">
          <h1><span>Powerfully simple</span> with a <span>Squeeky clean</span> design</h1>
          <div>Find out how you can offer quick and powerful solutions to your customers now!</div>
          <a href="#" className='button'>LEARN MORE</a>
        </div>
        <Bubble main_text="create a powerful solution now!" button_text='get started'/>
      </div>
    </header>
  )
}

export default header;
