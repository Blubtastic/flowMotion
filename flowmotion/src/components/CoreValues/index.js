import React, {Component} from 'react'

export default class CoreValues extends Component {
  constructor(props){
    super(props);
    this.state = {
      texts: ["Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur", "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi", "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.", "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary."],
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
            <h2 className="redText">Transparency</h2>
            {this.renderText()}
          </div>
        </div>
    )
  }

  updateIndex(newIndex){
    this.setState({index: newIndex})
  }
  renderText(){
    let text = this.state.texts[this.state.index];
    return(
      <p>{text}</p>
    )
  }
}
