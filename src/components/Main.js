import React from 'react';
import Feature_item from './Feature_item';
import Blog_text from './Blog_text';
import ImgPlaceholder from '../photo/img-placeholder.png';
import Development_tab from './Development_tab';
import Bubble from './Bubble'


const main = () => {
  const feature_names = [
    {title: 'Superbly responsive', fa_name: 'fa fa-mobile'},
    {title: 'squeeky clean', fa_name: 'fa fa-desktop'},
    {title: 'multi purpose', fa_name: 'fa fa-laptop'},
    {title: 'highly flexible', fa_name: 'fa fa-recycle'}]
  const recent_work = [
    {name: 'Blog Title 1', content: '1 labore quis anim quis elit fugiat quae aute tempor quis'},
    {name: 'Blog Title 2', content: '2 labore quis anim quis elit fugiat quae aute tempor quis 2'},
    {name: 'Blog Title 3', content: '3 lafbore quis anim quis elit fugiat quae aute tempor quis 3'}
  ]
  const testimonials = [
    {name: 'John A', content: '1 labore quis anim quis anim  quis anim quis elitquis elit quis  quis anim quis elit quis anim quis elitelit fugiat quae quis elit fugiat quae aute tempor quis'},
    {name: 'John B', content: '2 labore quis anim quis elit  quis  quis anim quis elitani quis anim quis elitm quis elitfu quis anim quis elitgiat quae aute tempor quis elit fugiat quae quis 2'},
    {name: 'John C', content: '3 labore quis anim quis eli q quis anim quis elituis  quis anim quis elitanim quis elitt fugiat qu quis anim quis elitae aute tempor quis elit fugiat quae quis 3'},
    {name: 'John D', content: '4 labore quis anim quis eli qu quis anim quis elit quis anim quis elitis anim quis elitt fugiat quae aute quis anim quis elit tempor quis elit fugiat quae quis 4'}
  ]

  return (

    <main>
      <div className="feature-list">
        {feature_names.map(feature =>
          <Feature_item key={feature.title} feature_name={feature.title} fa_name={feature.fa_name} />
        )}
      </div>

      <div className="recent-work">
        <div className='heading-wrap'>
          <h2>RECENT WORK</h2>
          <div className='stripes-divider'></div>
      </div>
        <div className="recent-work-wrapper">
          {recent_work.map(work => {
            return (
              <div className="recent-work-item">
                <img src={ImgPlaceholder}/>
                <Blog_text key={work.name} title={work.name} content={work.content} />
              </div>
          )
          })}
        </div>
      </div>

      <div className="testimonials">
        <div className='heading-wrap'>
          <h2>TESTIMONIALS</h2>
          <div className='stripes-divider'></div>
        </div>
        <div className="testimonial-wrapper">
          {testimonials.map(testi => {
            return (
              <div className="test-item">
                <Blog_text key={testi.name} title={testi.name} content={testi.content} />
              </div>
            )
          })}
        </div>
      </div>

      <div className="development">
        <div className='heading-wrap'>
          <h2>DEVELOPMENT</h2>
          <div className='stripes-divider'></div>
      </div>
        <Development_tab />
      </div>

      <Bubble main_text='get in touch with us now!' button_text="contact us"/>
    </main>
  )
}

export default main;
