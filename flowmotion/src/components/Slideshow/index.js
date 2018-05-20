import React, {Component} from 'react'
import './slideshow.css';
import Slide from './slide.js';

export default class Slideshow extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: ['gmail.png', 'google_maps.png', 'git.png', 'angular.png', 'face.png', 'react.png'],
      indexes: [] //generated in "componentDidMount"
    }
    //Must bind the function to use state.
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }
  componentDidMount(){
    //Generate indexes based on image list length
    let indexes = [];
    for (let x = 0; x < this.state.images.length; x++){
      indexes[x] = x;
    }
    this.setState({ indexes: indexes });
  }


  //RENDER
  render() {
    return(
      <div>

        <div className="slide-container">
          {this.generateSlides()}
        </div>

        <div>
          <button onClick={this.previousSlide}>Prev</button>
          <button onClick={this.nextSlide}>Next</button>
        </div>

      </div>
    )
  }


  //Returns slideshow images (components)
  generateSlides(){
    let children = [];
    for (let x = 0; x < this.state.images.length; x++){
      children.push(<div className={'hidden image' + this.state.indexes[x]}>  <Slide image={this.state.images[x]}/>  </div>)
    }
    return children;
  }

  previousSlide(){
    for (let x = 0; x < this.state.indexes.length; x++){
      let newIndexes = this.state.indexes; //duplicate placeholder, this is edited
      if (this.state.indexes[x] < this.state.images.length - 1){
        newIndexes[x] = this.state.indexes[x] + 1
        this.setState({ indexes: newIndexes }); //State value copied from placeholder
      }
      else{
        newIndexes[x] = 0
        this.setState({indexes: newIndexes});
      }
    }
  }
  nextSlide(){
    for (let x = 0; x < this.state.indexes.length; x++){
      let newIndexes = this.state.indexes; //duplicate placeholder, this is edited
      if (this.state.indexes[x] > 0){
        newIndexes[x] = this.state.indexes[x] - 1
        this.setState({ indexes: newIndexes});;
      }
      else{
        newIndexes[x] = this.state.images.length -1;
        this.setState({ indexes: newIndexes});
      }
    }
  }
}
