import React from 'react';

import styles from '../css/menu.css'


import andSuggestions from './andSuggestions'
import MenuList from './menulist'
import AutoCompleteExample from './search'









class Suggested extends React.Component {
  constructor(props) {
    super(props);
    this.state = {passSuggestions: andSuggestions};
  
  }
  

  render() {
    return (
      <div id={this.props.id} style={{display:this.props.display, position: 'fixed'}}>
        <div>
              <div  className='menuBox'>
              	<div>
                  <p onClick={this.props.clickAction} id='refine'  style={{maxWidth: '200px', backgroundColor:this.props.color, color: this.props.textColor}}>{this.props.text}</p>
              	</div>  
                    <MenuList 
                      suggestions={this.state.passSuggestions}
                      menuClick={this.props.menuClick}
                    
                    >
                    </MenuList>
              </div>
           </div>
      </div>
    );
  }
}

export default Suggested;







