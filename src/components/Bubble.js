import React from 'react';

const bubble = (props) => {
  return (
    <div className='bubble'>
      <div className="bubble-main">
        <div className='bubble-text'>{props.main_text}</div>
        <a href="#" className='button'>{props.button_text}</a>
      </div>
      <div className='bubble-triangle'></div>
    </div>
  )
}
export default bubble;
