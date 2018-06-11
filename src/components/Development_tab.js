import React, {Component} from 'react';

class Development_tab extends Component {

  state = {
    label_design_class: 'h3-design',
    label_production_class: 'h3-production inactive',
    content_design_class: 'design',
    content_production_class: 'production hidden',
    isInactive: false,
  }

  toggleTabHandler = (bool) => {
    if (bool) {
      this.setState({
        label_production_class: this.state.label_production_class + ' inactive',
        label_design_class: this.state.label_design_class.replace(' inactive',''),
        content_production_class: this.state.content_production_class + ' hidden',
        content_design_class: this.state.content_design_class.replace(' hidden',''),
      })
    } else {
      this.setState({
        label_design_class: this.state.label_design_class + ' inactive',
        label_production_class: this.state.label_production_class.replace(' inactive',''),
        content_design_class: this.state.content_design_class + ' hidden',
        content_production_class: this.state.content_production_class.replace(' hidden',''),
      })
    }
  }

  render(){
    return (
      <section>
        <h3 onClick={()=>this.toggleTabHandler(true)} className={this.state.label_design_class}>DESIGN</h3>
        <h3 onClick={()=>this.toggleTabHandler(false)}  className={this.state.label_production_class}>PRODUCTION</h3>
        <div className={this.state.content_design_class}>
          <h4>The Design</h4>
          <p>eanim summis cillum labore illum sunt veniam veniam multos quae aliqua nulla minim quis anim quis elit quis anim quis elit quis anim quis elit quis anim quis elit quis anim quis elitaute export fugiat summis dolor duis irure irure quid esse magna esse export fore</p>
          <p>elit magna anim summis cillum labore illum sunt veniam veniam multos quae aliqua
            nulla miniduis irure irure quid essenim quis anim quis elnim quis anim quis el
            magna esse export fore</p>
          <a href='#' className='button'>READ MORE</a>
        </div>
        <div className={this.state.content_production_class}>
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

}

export default Development_tab;
