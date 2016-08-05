import React from 'react';

import styles from '../css/prompts.css'









class Prompts extends React.Component {

  render() {
    if(this.props.chips.length == 1){

    return (
      <div id="orPrompt" onClick={this.props.hidePrompt}>
        <p>You can broaden your search by clicking on one of your searched words and adding variations of that word</p>
        <p id="gotIt">Got It</p>
      </div>
      
    );
  }
  else{return(
    <div></div>
    )

  }
  }

}

export default Prompts;







