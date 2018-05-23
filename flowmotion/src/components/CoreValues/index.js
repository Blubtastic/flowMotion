import React, {Component} from 'react'

import transparency from '../../images/icons/transparency.png';
import idea from '../../images/icons/idea.png';
import travel from '../../images/icons/travel.png';
import fun from '../../images/icons/fun.png';

import transparencyWhite from '../../images/icons/transparencyWhite.png';
import ideaWhite from '../../images/icons/ideaWhite.png';
import travelWhite from '../../images/icons/travelWhite.png';
import funWhite from '../../images/icons/funWhite.png';

import arrow from '../../images/arrowRed.png'

export default class CoreValues extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      reds: [transparency, idea, travel, fun],
      whites: [transparencyWhite, ideaWhite, travelWhite, funWhite],
    }
  }
  render() {
    return(
        <div className="whiteText coverWidth maxWidth">
          <h2>Core Values</h2>
          <div className="coreIcons narrowContainer">

            <div onClick={() => this.updateIndex(0)} >
            {this.renderIcon(0)}
            </div>

            <div onClick={() => this.updateIndex(1)} >
              {this.renderIcon(1)}
            </div>

            <div onClick={() => this.updateIndex(2)} >
              {this.renderIcon(2)}
            </div>

            <div onClick={() => this.updateIndex(3)} >
              {this.renderIcon(3)}
            </div>
          </div>
          <div className="narrowContainer">
            {this.renderTitle()}
            {this.renderText()}
          </div>
        </div>
    )
  }

  //Sets index of the clicked div
  updateIndex(newIndex){
    this.setState({index: newIndex})
  }
  //Returns the right title
  renderTitle(){
    return <h2 className="redText">{this.props.titles[this.state.index]}</h2>
  }
  //Returns the right text
  renderText(){
    return <p>{this.props.texts[this.state.index]}</p>
  }

  //Renders a white icon or a red icon with arrow
  renderIcon(iconIndex){
    if(iconIndex === this.state.index){
      return (
        <div className="column">
          <img src={this.state.reds[iconIndex]} alt="core value"/>
          <img className={"arrowDown"} src={arrow} alt="arrow"/>
        </div>
      )
    }
    else{
      return (
        <div className="column">
          <img src={this.state.whites[iconIndex]} alt="core value"/>
        </div>
      )
    }
  }
}
