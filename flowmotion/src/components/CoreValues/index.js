import React, {Component} from 'react'

export default class CoreValues extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0,
    }
  }
  render() {
    return(
        <div className="whiteText coverWidth maxWidth">
          <h2>Core Values</h2>
          <div className="coreIcons narrowContainer">
            <div onClick={() => this.updateIndex(0)} ></div>
            <div onClick={() => this.updateIndex(1)} ></div>
            <div onClick={() => this.updateIndex(2)} ></div>
            <div onClick={() => this.updateIndex(3)} ></div>
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
}
