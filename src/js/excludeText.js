import React from 'react';
import styles from '../css/search.css'

import ChipExampleArray from './chip'
import Suggested from './suggested'


class ExcludeText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hint: 'e.g. CEOs,"virtual reality", #homecooking', shown: 'none'}; 
  }


  render() {

    if(this.props.chips.length > 0){
      this.state.hint = 'Add term to narrow results'
      this.state.shown = 'block'
    }
    else{
      this.state.hint = 'e.g. CEOs,"virtual reality", #homecooking'
      this.state.shown = 'none'
    }

 

    return (
            <div>
                <textarea 
                  id="myTextRemove" 
                  onClick={this.props.handleTextAreaClickExclude}
                  placeholder={"Remove term from results"} 
                  rows='1' 
                  onKeyDown={this.props.captureRemove}
                  style={{display: this.state.shown}}
              >
              </textarea>

              <Suggested
                id='excludeSuggestions'
                color={this.props.andColor}
                textColor={this.props.andTextColor}
                text="Remove from Results"
                display={this.props.displayExclude} 
                menuClick={this.props.menuClickAnd}
                clickAction={this.props.excludeClick}
              >
              </Suggested>
              </div>
         );
     }

}

export default ExcludeText;

