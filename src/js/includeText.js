import React from 'react';
import styles from '../css/search.css'

import ChipExampleArray from './chip'
import Suggested from './suggested'


class IncludeText extends React.Component {
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
                    id="myText" 
                    onClick={this.props.handleTextAreaClick}
                    placeholder={this.state.hint} 
                    rows='1' 
                    onKeyDown={this.props.capture}
                >
                </textarea>

                <Suggested 
                    id="includeSuggestions"
                    text="Add Term"
                    color={this.props.andColor}
                    textColor={this.props.andTextColor}
                    display={this.props.display} 
                    menuClick={this.props.menuClick}
                    clickAction={this.props.clickAction}
                  >
                  </Suggested>
              </div>
         );
     }

}

export default IncludeText;

