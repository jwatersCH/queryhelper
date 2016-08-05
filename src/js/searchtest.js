import React from 'react';
import styles from '../css/search.css'

import ChipExampleArray from './chip'
import Suggested from './suggested'
import IncludeText from './includeText'
import ExcludeText from './excludeText'



class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {shown: 'none'};
   
  
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
      <div className="searchField">

            <p id="chipInfo" style={{display: this.state.shown}} onClick={this.props.showInfo}>?</p>
            <div id="OrStatementGuide" style={{display: this.props.displayGuide}}>
              <p>Click on a search pill and add similar terms to capture more of the conversation. Add a new pill to narrow search results.</p>
            </div>
            <ChipExampleArray 
              addTypedWord={this.props.addTypedWord} 
              include={this.props.include} 
              exclude={this.props.exclude} 
              showMenu={this.props.showMenu} 
              menuClick={this.props.menuClick} 
              addToPill={this.props.addToPill} 
              className="chipClass" 
              chips={this.props.chips} 
              removeChip={this.props.removeChip}
              searchText={this.props.searchText}
              handleUpdate={this.props.handleUpdate}
              clickAction={this.props.includeClick}
              color={this.props.color}
              textColor={this.props.textColor}
            >
            </ChipExampleArray> 
            <IncludeText 
              chips={this.props.chips} 
              display={this.props.display}
              capture={this.props.capture}
              handleTextAreaClick={this.props.handleTextAreaClick}
              color={this.props.andColor}
              textColor={this.props.andTextColor}
              display={this.props.display} 
              menuClick={this.props.menuClickAnd}
              clickAction={this.props.includeClick}
             >
             </IncludeText>
            <p id="chipInfo2" style={{display: this.state.shown}} onClick={this.props.showInfo2}>?</p>
            <div id="OrStatementGuide2" style={{display: this.props.displayGuide2}}>
              <p>Type here to narrow your results.  Clicking in the text field will provide related terms</p>
            </div>
             <ExcludeText
              captureRemove={this.props.captureRemove}
              handleTextAreaClickExclude={this.props.handleTextAreaClickExclude}
              color={this.props.andColor}
              textColor={this.props.andTextColor}
              displayExclude={this.props.displayExclude} 
              menuClickAnd={this.props.menuClickAnd}
              excludeClick={this.props.excludeClick}
             >
             </ExcludeText>
              <p id="chipInfo3" style={{display: this.state.shown}} onClick={this.props.showInfo3}>?</p>
              <div id="OrStatementGuide3" style={{display: this.props.displayGuide3}}>
                <p>Type here to remove terms from your search results.  Clicking in the text field will provide related terms</p>
            </div>
            
            
          </div>
      
    );
  }

}

export default SearchField;




























