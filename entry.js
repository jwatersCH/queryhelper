import React from 'react';
import ReactDom from 'react-dom';


import NavBar from './src/js/nav';
import AutoCompleteExample from './src/js/search';
import ChipExampleArray from './src/js/chip';
import DataImage from './src/js/dataImage';
import SearchField from './src/js/searchtest'
import ShowMenu from './src/js/showmenu'
import WelcomeMessage from './src/js/welcomemessage'
import suggestions from './src/js/data'
import andSuggestions from './src/js/andSuggestions'








class MainDiv extends React.Component{


	constructor(props) {
	    super(props);
	    this.state = { chipList: [], counter: 0, searchText:'', addWords:[], display:'none', displayExclude: 'none', displayGuide: 'none', displayGuide2: 'none', displayGuide3: 'none' ,color: 'white', andColor:'white', textColor: 'black', andTextColor:'black'};
	    this.chipify = this.chipify.bind(this);
	    this.removeChip = this.removeChip.bind(this);
        this.capture = this.capture.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.menuClick = this.menuClick.bind(this);
        this.addToPill = this.addToPill.bind(this);
        this.include = this.include.bind(this);
        this.exclude = this.exclude.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.addTypedWord = this.addTypedWord.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleTextAreaClick = this.handleTextAreaClick.bind(this);
        this.includeClick = this.includeClick.bind(this);
        this.excludeClick = this.excludeClick.bind(this);
        this.captureRemove = this.captureRemove.bind(this);
        this.hidePrompt = this.hidePrompt.bind(this);
        this.handleTextAreaClickExclude = this.handleTextAreaClickExclude.bind(this);
        this.showInfo = this.showInfo.bind(this);
        this.showInfo2 = this.showInfo2.bind(this);
        this.showInfo3 = this.showInfo3.bind(this);
        this.menuClickAnd = this.menuClickAnd.bind(this);
	}

	 chipify( requestString, color ){
	 	if(requestString == ''){return}
	 	else{
		 	var newObj = {}
	    	newObj.key = this.state.counter
	    
	    	this.state.counter += 1
	    	newObj.label = [requestString]
	    	newObj.inOrEx = color
	    	this.state.added = true
	    	this.state.chipList.push(newObj)
	    	this.setState({chipList: this.state.chipList})
    	}
    }

    removeChip( deletedChip ){
    	console.log(deletedChip)
    	this.closeMenu()
    	for(var i = 0; i < this.state.chipList.length; i++) {
	    	if(this.state.chipList[i].key == deletedChip) {
		        this.state.chipList.splice(i, 1);
		        break;
	   		 }
		}
    	this.setState({chipList: this.state.chipList})
    }

    showMenu( key ){

		    if(document.getElementById(key).style.display === 'none'){
		      document.getElementById(key).style.display = 'block'
		    }
		    else if(document.getElementById(key).style.display == 'block') {
		    	document.getElementById(key).style.display = ' none '
		    }
		    	this.closeMenu( key )  	

    }

    menuClick( wordClicked, keyClicked, flagged){
    	for(var i = 0; i < suggestions.length; i++){
    		if(suggestions[i].key == keyClicked){
    			suggestions[i].flagged = !suggestions[i].flagged;    			
    		}

    		this.setState({chipList: this.state.chipList})
    	}

    	for(var i = 0; i < this.state.addWords.length; i++){
    		if(wordClicked === this.state.addWords[i]){
    			this.state.addWords.splice(i, 1)
    			if(this.state.addWords.length == 0){
    				
    			}
    			for(var n = 0; n < suggestions.length; n++){
    			if(suggestions[n].flagged == true){
					this.state.color = '#4771B8'
				    this.state.textColor='white' 
				    break}
    			
    		else{this.state.color="white", this.state.textColor="black"}
    	}
    			return
    		}
    		  				
    	}
    	for(var n = 0; n < suggestions.length; n++){
    			if(suggestions[n].flagged == true){
					this.state.color = '#4771B8'
				    this.state.textColor='white' 
				    break}
    			
    		else{this.state.color="white", this.state.textColor="black"}
    	}
    	this.state.addWords.push( wordClicked )
    }


    menuClickAnd( wordClicked, keyClicked, flagged){
    	for(var i = 0; i < andSuggestions.length; i++){
    		if(andSuggestions[i].key == keyClicked){
    			andSuggestions[i].flagged = !andSuggestions[i].flagged;    			
    		}
    		this.setState({chipList: this.state.chipList})
    	}

    	for(var i = 0; i < this.state.addWords.length; i++){
    		if(wordClicked === this.state.addWords[i]){
    			this.state.addWords.splice(i, 1)
    			if(this.state.addWords.length == 0){
    				
    			}
    			for(var n = 0; n < andSuggestions.length; n++){
    			if(andSuggestions[n].flagged == true){
					this.state.andColor = '#4771B8'
				    this.state.andTextColor='white' 
				    break}
    			
    		else{this.state.andColor="white", this.state.andTextColor="black"}
    	}
    			return
    		}
    		  				
    	}
    	for(var n = 0; n < andSuggestions.length; n++){
    			if(andSuggestions[n].flagged == true){
					this.state.andColor = '#4771B8'
				    this.state.andTextColor='white' 
				    break}
    			
    		else{this.state.andColor="white", this.state.andTextColor="black"}
    	}
    	this.state.addWords.push( wordClicked )
    }

    addToPill( sentKey ){
    	
    	for(var i = 0; i < this.state.chipList.length; i++){
    		if(this.state.chipList[i].key == sentKey){
    			if(this.state.addWords == ''){return}
    			else{
    				for(var n=0; n < this.state.addWords.length; n++){
			    		this.state.chipList[i].label.push(this.state.addWords[n])
			    	}
			    		this.closeMenu()
			    		this.state.addWords = []
			    		this.setState({chipList: this.state.chipList})
	    		}
	   		 }
		}

		for(var i = 0; i < suggestions.length ; i++){
			if(suggestions[i].added == true){suggestions.shift()}
			suggestions[i].flagged = false
		}
    }

    addTypedWord( wordToAdd ){
    	suggestions.unshift({key:suggestions.length, word: wordToAdd, flagged: true, added: true})
    	this.state.addWords.push( wordToAdd )
    	this.setState({searchText: ""})
      	this.setState({chipList: this.state.chipList})
    }


    handleUpdate(e){
    	this.setState({searchText:e})
    }

    closeMenu( key ){
    	for(var i=0; i < this.state.chipList.length; i ++){
    		if(document.getElementById(this.state.chipList[i].key).style.display = 'none' && this.state.chipList[i].key == key){continue}
    		document.getElementById(this.state.chipList[i].key).style.display = 'none'
    	}
    	for(var i = 0; i < suggestions.length; i++){
    		 suggestions[i].flagged = false   			
    		}
    		for(var i = 0; i < andSuggestions.length; i++){
    		 andSuggestions[i].flagged = false   			
    		}
    	this.state.addWords = []
    	this.setState({display:'none'})
    	this.setState({displayExclude:'none'})
    	this.setState({displayGuide: 'none'})
    	this.setState({displayGuide2: 'none'})
    	this.setState({displayGuide3: 'none'})
    	this.setState({color:'white'})
    	this.setState({andColor:'white'})
    	this.setState({textColor:'black'})
    	this.setState({andTextColor:'black'})
    }

    handleTextAreaClick(){
    	this.closeMenu()
    	if(this.state.chipList.length > 0 && this.state.display == 'none'){
    		this.setState({display:'block'})
			this.setState({displayExclude:'none'})
    	}
    	else{
    		this.setState({display:'none'})
			this.setState({displayExclude:'none'})
		}
    }

      handleTextAreaClickExclude(){
    	this.closeMenu()
    	if(this.state.chipList.length > 0 && this.state.displayExclude == 'none'){
    		this.setState({displayExclude:'block'})
			this.setState({display: 'none'})
    	}
    	else{
    		this.setState({displayExclude:'none'})
			this.setState({display:'none'})
		
		}
    }

	  capture(e){
	  	var helped = false;
	  	if(e.keyCode == 13) {
	  		if(this.state.chipList.length == 2){
	  			if(helped == true){return}
	  			else{

	  			}
	  		}
	  		if( this.state.chipList.length > 0 ){
	  			var newText=document.getElementById('myText').value
	  			e.preventDefault()
	  			
  				
  				if(newText == ''){return}
  				else{
  					e.preventDefault()
  				this.include();
	  			}
  			  }
  			  else{
  			  	e.preventDefault()
	  		this.include()
	  	}

			}
	   	 
	   	 else if(e.keyCode == 8 && document.getElementById('myText').value == ''){
	  		this.state.chipList.pop()
	  		this.setState({chipList: this.state.chipList})
	  	}

	  }


	 captureRemove(e){
	  	if(e.keyCode == 13) {
	  		if( this.state.chipList.length > 0 ){
	  			var newText=document.getElementById('myTextRemove').value
	  			e.preventDefault()
	  			
  				
  				if(newText == ''){return}
  				else{
  					e.preventDefault()
  				this.exclude();
	  			}
  			  }
  			  else{
  			  	e.preventDefault()
	  		this.exclude()
	  	}

			}
	   	 
	   	 else if(e.keyCode == 8 && document.getElementById('myTextRemove').value == ''){
	  		this.state.chipList.pop()
	  		this.setState({chipList: this.state.chipList})
	  	}
	  }



	  includeClick(){
	  	for(var i=0; i < this.state.addWords.length; i++){
	  		this.chipify(this.state.addWords[i], 'include')
	  	}

		for(var i = 0; i < suggestions.length ; i++){
			andSuggestions[i].flagged = false
		}
	  	this.state.addWords = []
	  	 this.setState({display:'none'})
	  }
	
		excludeClick(){
		  	for(var i=0; i < this.state.addWords.length; i++){
		  		this.chipify(this.state.addWords[i], 'exclude')
		  	}


			for(var i = 0; i < suggestions.length ; i++){
				andSuggestions[i].flagged = false
			}
			  this.state.addWords = []
			  this.setState({displayExclude:'none'})
		  }

	
	  include(){
	  	this.closeMenu()
	  	this.chipify(document.getElementById('myText').value, 'include')
	  	document.getElementById('myText').value = ''
	  }

	  exclude(){
	  	this.closeMenu()
	  	this.chipify(document.getElementById('myTextRemove').value, 'exclude')
	  	document.getElementById('myTextRemove').value = ''
	  	
	  }

	  hidePrompt(){
	  	document.getElementById('orPrompt').style.display = 'none'
	  }

	    showInfo(){
	    	this.closeMenu()
		    if(this.state.displayGuide == 'none'){
		          this.setState({displayGuide: 'block'});         
		        }
		    else{this.setState({displayGuide: 'none'})}
		  }

		   showInfo2(){
	    	this.closeMenu()
		    if(this.state.displayGuide2 == 'none'){
		          this.setState({displayGuide2: 'block'});         
		        }
		    else{this.setState({displayGuide2: 'none'})}
		  }

		  showInfo3(){
	    	this.closeMenu()
		    if(this.state.displayGuide3 == 'none'){
		          this.setState({displayGuide3: 'block'});         
		        }
		    else{this.setState({displayGuide3: 'none'})}
		  }

	render(){
		return(
			<div>
				<NavBar></NavBar>
				<WelcomeMessage chips={this.state.chipList}></WelcomeMessage>
				<SearchField 
					addTypedWord={this.addTypedWord} 
					closeMenu={this.closeMenu} 
					exclude={this.exclude} 
					include={this.include} 
					capture={this.capture} 
					chips={this.state.chipList} 
					showMenu={this.showMenu} 
					menuClick={this.menuClick} 
					menuClickAnd={this.menuClickAnd}
					addToPill={this.addToPill} 
					chipify={this.chipify} 
					removeChip={this.removeChip}
					suggestions={suggestions}
					searchText={this.state.searchText}
					handleUpdate={this.handleUpdate}
					handleTextAreaClick={this.handleTextAreaClick}
					handleTextAreaClickExclude={this.handleTextAreaClickExclude}
					display={this.state.display}
					displayExclude={this.state.displayExclude}
					includeClick={this.includeClick}
					excludeClick={this.excludeClick}
					captureRemove={this.captureRemove}
					hidePrompt={this.hidePrompt}
					showInfo={this.showInfo}
					showInfo2={this.showInfo2}
					showInfo3={this.showInfo3}
					displayGuide={this.state.displayGuide}
					displayGuide2={this.state.displayGuide2}
					displayGuide3={this.state.displayGuide3}
					color={this.state.color}
					textColor={this.state.textColor}
					andColor={this.state.andColor}
					andTextColor={this.state.andTextColor}
				>
				</SearchField>
				<DataImage 
					chips={this.state.chipList} 
					added={this.state.added} 
					closeMenu={this.closeMenu}
				>
				</DataImage>	
			</div>
		)
	}
};

var mainDiv = <MainDiv/>

ReactDom.render(mainDiv, document.getElementById('main'));























