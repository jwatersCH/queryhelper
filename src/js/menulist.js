import React from 'react';




export default class MenuList extends React.Component {



  constructor(props) {
    super(props);
    this.state = {open: 'none'};
    }


  createMenu(data) {

  if(data.flagged){
  return(
    <div>
      <p 
        id="menuItem" 
        style={{backgroundColor: '#aaaaaa', fontWeight: 'bold'}} 
        onClick={(event)=>this.props.menuClick(data.word, data.key)}
      >
        {data.word}
      </p>
    </div>
    )
  }
  else{
    return(
    <div>
      <p 
        id="menuItem"  
        onClick={(event)=>this.props.menuClick(data.word, data.key)}
      >
        {data.word}
      </p>
    </div>
    )
  }
}
  render(){
    return(
    <div>
      {this.props.suggestions.map(this.createMenu, this)}
    </div>
      )
  }
   



}