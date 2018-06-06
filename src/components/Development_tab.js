import React from 'react';

const development_tab = () => {


  const toggleTabHandler = (content_show,content_hidden,tab_active,tab_inactive) => {
    document.querySelector(content_show).classList.remove('hidden')
    document.querySelector(content_hidden).classList.add('hidden')
    document.querySelector(tab_active).classList.remove('inactive')
    document.querySelector(tab_inactive).classList.add('inactive')
  }

  return (
    <section>
      <h3 onClick={()=>toggleTabHandler('.design','.production','.h3-design','.h3-production')} className='h3-design'>DESIGN</h3>
      <h3 onClick={()=>toggleTabHandler('.production','.design','.h3-production','.h3-design')}  className='h3-production inactive'>PRODUCTION</h3>
      <div className="design">
        <h4>The Design</h4>
        <p>eanim summis cillum labore illum sunt veniam veniam multos quae aliqua nulla minim quis anim quis elit quis anim quis elit quis anim quis elit quis anim quis elit quis anim quis elitaute export fugiat summis dolor duis irure irure quid esse magna esse export fore</p>
        <p>elit magna anim summis cillum labore illum sunt veniam veniam multos quae aliqua
          nulla miniduis irure irure quid essenim quis anim quis elnim quis anim quis el
          magna esse export fore</p>
        <a href='#' className='button'>READ MORE</a>
      </div>
      <div className="production hidden">
        <h4>The Production</h4>
        <p>veniam ua nulla minim quis anim quis elit quis anim quis elit quis anim quis elit quis anim quis elit quis anim quis elitaute export fugiat summis dolor duis irure irure quid esse magna esse export fore</p>
        <p>eanim summis aliquanim quis anim quis elnim quis anim quis el
          nulla minim quis anim quis elit quis anim quis elit quis anim quis elit quis anim quis elit quis anim quis elitaute export fugiat summis dolor duis irure irure quid esse
          magna esse export fore</p>
        <a href='#' className='button'>READ MORE</a>
      </div>
    </section>
  )
}

export default development_tab;
