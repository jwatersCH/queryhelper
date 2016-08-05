import React from 'react';

import images from './imageList'




class DataImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {img: ''};
  }


  chooseImage(){
    var included = []
    var includedOr = []
    var excluded = []
    for(var i = 0; i < this.props.chips.length; i ++){
      if(this.props.chips[i].inOrEx == "include"){
        if(this.props.chips[i].label.length > 1){
        for(var n=0; n < this.props.chips[i].label.length; n++){
          includedOr.push(this.props.chips[i].label[n].toLowerCase())
        }
      }
      else{included.push(this.props.chips[i].label[0].toLowerCase())}
        
      }
      else if(this.props.chips[i].inOrEx == "exclude"){
       for(var n=0; n < this.props.chips[i].label.length; n++){
          excluded.push(this.props.chips[i].label[n].toLowerCase())
        }
      }
    }

    for(var n=0; n < images.length; n++){
      if(images[n].includes.sort().toString().toLowerCase() == included.sort().toString().toLowerCase() && images[n].excludes.sort().toString().toLowerCase() == excluded.sort().toString().toLowerCase() && images[n].includesOr.sort().toString().toLowerCase() == includedOr.sort().toString().toLowerCase()){
        console.log('compare worked')
        this.state.img = images[n].key
        break
      }
      else{
        console.log(n)
        console.log(images[n].includes)
        console.log(included)
        console.log(images[n].includesOr)
        console.log(includedOr)
        this.state.img = images[0].key}
    }
  }



    render() {

    	if(this.props.chips.length > 0){
        this.chooseImage()
      	return (
        		<img style={{width: '100%', height: '100%', marginTop: '60px'}} src={this.state.img} onClick={this.props.closeMenu}/>
        		)
    	   }
      else{
        return(
          <div></div>)
        
      }
    }
}


export default DataImage;

