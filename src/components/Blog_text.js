import React from 'react';

const blog_text = (props) => {
  return (
    <div className='blog-text'>
      <h4>{props.title}</h4>
      <div>{props.content}</div>
    </div>
  )
}

export default blog_text;
