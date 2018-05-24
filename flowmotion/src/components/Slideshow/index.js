import React, {Component} from 'react'

import Slide from './slide.js';
import SimpleSlider from '../MobileSlideshow';

import previous from '../../images/leftIcon.png'
import next from '../../images/rightIcon.png'

export default class Slideshow extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: ['mission.jpg', 'team.jpg', 'product.jpg', 'rooftops.jpg', 'sunset.jpg' ],
      indexes: [],
      //Lists must be same length as the images list.
      names: ["Our bikes", "The Team", "Our Product", "Our Roof", "Our Vacation House"],
      descriptions: ["Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi",
      "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.",
      "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.",
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur"],
      currentIndex: 1,
      mobile: false,
    }
    //Must bind the function to use state.
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.updateIndex = this.updateIndex.bind(this);
  }
  componentDidMount(){
    //Generate indexes for all images.
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
        <div className="maxWidth alignItems desktop">
          <div className="slideshowContainer">
            <img onClick={this.previousSlide} src={previous} alt="change slide"/>
            <div className="slideContainer">
              {this.generateSlides()}
            </div>
            <img onClick={this.nextSlide} src={next} alt="change slide"/>
          </div>
        </div>


        <div className="mobileSlideshow mobile">
          <SimpleSlider images={this.state.images} updateIndex={this.updateIndex} />
        </div>

        <div className="centerAlign desktop">
          {this.generateCircles()}
        </div>
        <div className="textAlign narrowContainer sidePadding">
          <h2>{this.state.names[this.state.currentIndex]}</h2>
          <p>{this.state.descriptions[this.state.currentIndex]}</p>
        </div>
      </div>
    )
  }

  updateIndex(newIndex){
    this.setState({ currentIndex: newIndex });
  }
  //Generates the slideshow images (components)
  generateSlides(){
    let children = [];
    for (let x = 0; x < this.state.images.length; x++){
      children.push(<div className={'hidden image' + this.state.indexes[x]} key={x} onClick={() => this.changeSlide(x)}>  <Slide image={this.state.images[x]} />  </div>)
    }
    return children;
  }
  //Circle bar with selected image
  generateCircles(){
    let children = [];
    for (let x = 0; x < this.state.images.length; x++){
      children.push(
        <svg height="30" width="30" key={x} >
          <circle cx="15" cy="15" r="10" fill="none" className={'circle' + this.state.indexes[x]}/>
          <svg height="30" width="30" >
            <circle cx="15" cy="15" r="6" fill="none" stroke="#bbb" strokeWidth="2" />
          </svg>
        </svg>
      )
    }
    return children;
  }

  //Change slides by clicking on neighbor slides
  changeSlide(nextIndex){
    //For simplicity
    let endIndex = this.state.indexes.length -1;
    let currentIndex = this.state.currentIndex;

    if(nextIndex === currentIndex){
      return
    }else if(nextIndex > currentIndex && (nextIndex !== endIndex)){
      this.nextSlide();
    }
    else {
      if( (nextIndex === endIndex && currentIndex === endIndex-1) || ( nextIndex === 0 && currentIndex === endIndex) ){
        this.nextSlide();
      }else{
        this.previousSlide();
      }
    }
  }

  previousSlide(){
    //Keeps track of the current selected slite
    if (this.state.currentIndex > 0){
      this.setState({ currentIndex: this.state.currentIndex - 1 });
    }
    else{
      this.setState({ currentIndex: this.state.indexes.length -1 });
    }

    //Assigns new indexes to all images. Increase all by 1 to move left.
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
    //Keeps track of the current selected slite
    if (this.state.currentIndex < this.state.indexes.length -1){
      this.setState({ currentIndex: this.state.currentIndex + 1 });
    }
    else{
      this.setState({ currentIndex: 0 });
    }

    //Assigns new indexes to all images. Decrease all by 1 to move right.
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
