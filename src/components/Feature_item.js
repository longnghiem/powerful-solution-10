import React from 'react';

const feature_item = (props) => {
  return (
    <div className="feature-item ">
      <div><i className={props.fa_name}></i></div>
      <h3>{props.feature_name}</h3>
      <p> Tempor aute aliqua esse quem summis elit tempor veniam quid velit anim quae quid
      illum quis esse fugiat aliqua duis
      </p>
      <a href="#" className='button'>READ MORE</a>
    </div>
  )
}

export default feature_item;
