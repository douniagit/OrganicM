import React from 'React';
import "./Caroussel.css";

const slides=[
	{
		url:"https://vemco.com/wp-content/uploads/2012/09/image-banner2.jpg",
		title:"ma premiere image"
	},
	{
		url:"http://www.w3schools.com/css/img_fjords.jpg",
		title:"ma deuxieme image"
	},
	{
		url:"https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg",
		title:"ma troisieme image"
	},
	{
		url:"https://vemco.com/wp-content/uploads/2012/09/image-banner2.jpg",
		title:"ma quatrieme image"
	},

]

class Caroussel extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
		position:0
	};
}


	nextSlide(){
		if(this.state.position >= 3){
		this.setState({position:0})
	}
	else{
		this.setState({position:++this.state.position})
	}
}
	prevSlide(){
		if(this.state.position<1){
			this.setState({position:0})
		}
		else{
		this.setState({position:--this.state.position})
	}
}

  render() {

// la position est traduite par une margin left de: 0*-400, 1*-400 2*-400 etc
  	let newMargin = this.state.position * -400;
    return (
      <div className="App">
     	<div className="navContent">
     		<ul style={{marginLeft:newMargin}}>
     			
	     		{slides.map(slide =>
	     			<li>
	     		<img src={slide.url} />
	     		<p> {slide.title} </p>
	     		</li>
	     		)}
     		</ul>
     	</div>
     	<button onClick={this.prevSlide}>Prev</button>
     	<button onClick={this.nextSlide}>Next</button>
      </div>
    );
  }
}

export default Caroussel;