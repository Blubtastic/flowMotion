import React, {Component} from 'react'
import Cover from '../Cover';
import Button from '../Molecules/Button';
import TextBlock from '../Molecules/TextBlock';
import CoreValues from '../CoreValues';
import Slideshow from '../Slideshow';


//Homepage content. Everything except the navbar
export default class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      about: ["About us",
      "We've come a long way since our first prototype in April 2015. Our community continues to grow and we are looking forward to adventurous and passionate people to join our journey.",
      "We are now one of the top 150 most-fnuded Kickstarter campaigns with a passionate community of over 7,000 people. We're on a mission to put an end to shaky videos world wide. And we have the ultimate tool to do it. We hope so you can be a part of this mission!"],
      ourPeople: ["Our People",
      "We've come a long way since our first prototype in April 2015. Our community continues to grow and we are looking forward to adventurous and passionate people to join our journey.",
      "We are now one of the top 150 most-fnuded Kickstarter campaigns with a passionate community of over 7,000 people. We're on a mission to put an end to shaky videos world wide. And we have the ultimate tool to do it. We hope so you can be a part of this mission!"],
      slideshowImages: [],
    }

  }
  render() {
    return(
      <div className="page">

        <div>
          <Cover image={"cover.jpg"} height={"650px"} top={"-670px"} Component={this.homeCoverContent()}/>
        </div>

        <div className="container">
          <div className="paragraph">
            <TextBlock title={this.state.about[0]} p1={this.state.about[1]} p2={this.state.about[2]} />
          </div>
        </div>

        <div>
          <Cover image={"mission.jpg"} height={"700px"} top={"-350px"} Component={this.missionCoverContent()}/>
        </div>

        <div className="container black centerAlign textAlign">
          <CoreValues/>
        </div>

        <div className="container">
          <div className="paragraph">
            <TextBlock title={this.state.ourPeople[0]} p1={this.state.ourPeople[1]} p2={this.state.ourPeople[2]} />
          </div>
        </div>

        <div className="container centerAlign">
          <Slideshow/>
        </div>

      </div>
    )
  }

  //Returns the content for the home cover page.
  homeCoverContent(){
    return (
      <div className="shaded column">
        <h1>Join the FlowMotion Community</h1>
        <div className="corner-button"><div><Button/></div></div>
      </div>
    )
  }

  missionCoverContent(){
    return (
      <div className="shaded column whiteText alignTop padding textAlign">
        <h2>The Mission</h2>
        <p>Our mission for FlowMotion is to build a global, Scandinavian brand. </p>
        <svg className="playButton" height="140" width="140">
          <circle cx="70" cy="70" r="70" fill="white" />
        </svg>
      </div>
    )
  }

}
