import React, {Component} from 'react'
import Cover from '../Cover';
import CoreValues from '../CoreValues';
import Slideshow from '../Slideshow';

import Button from '../Molecules/Button';
import TextBlock from '../Molecules/TextBlock';
import Position from '../Molecules/Position'
import InstaImage from '../Molecules/InstaImage'
import TextIcon from '../Molecules/TextIcon';

//Homepage content. Everything except the navbar
export default class Home extends Component {
  constructor(props){
    super(props);

    //Most of the text for the webpage. Some text must be added to specific components.
    this.state = {
      about: [
        "About us",
        "We've come a long way since our first prototype in April 2015. Our community continues to grow and we are looking forward to adventurous and passionate people to join our journey.",
        "We are now one of the top 150 most-fnuded Kickstarter campaigns with a passionate community of over 7,000 people. We're on a mission to put an end to shaky videos world wide. And we have the ultimate tool to do it. We hope so you can be a part of this mission!"
      ],
      ourPeople: [
        "Our People",
        "We've come a long way since our first prototype in April 2015. Our community continues to grow and we are looking forward to adventurous and passionate people to join our journey.",
        "We are now one of the top 150 most-fnuded Kickstarter campaigns with a passionate community of over 7,000 people. We're on a mission to put an end to shaky videos world wide. And we have the ultimate tool to do it. We hope so you can be a part of this mission!"
      ],
      benefits: [
        "Benefits",
        "We are located in a beautiful office in the heart of Oslo. We strive to create a vibrant, collaborative, and exciting workplace for our people to thrive in. ",
        "/"
      ],



      position1: [
        "VP of Sales",
        "We've come a long way since our first prototype in April 2015. Our community continues to grow and we are looking forward to adventurous and passionate people. ",
        "/"
      ],
      position2: [
        "Customer Service Rep",
        "We've come a long way since our first prototype in April 2015. Our community continues to grow and we are looking forward to adventurous and passionate people. ",
        "/"
      ],
      position3: [
        "Marketing Manager",
        "We've come a long way since our first prototype in April 2015. Our community continues to grow and we are looking forward to adventurous and passionate people. ",
        "/"
      ],
      //CoreValueTexts and coreValueTitles must have a length of 4!
      coreValueTexts: [
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi",
        "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.",
        "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary."
      ],
      coreValueTitles: [
        "Transparency",
        "Flow",
        "Motion",
        "Discipline",
      ]
    }

  }
  render() {
    return(
      <div className="page">

        {/* Cover Image section */}
        <div>
          <Cover image={"cover.jpg"} height={"650px"} top={"-670px"} Component={this.homeCoverContent()}/>
        </div>

        {/* About Us section */}
        <div className="container sidePadding">
          <div className="paragraph wideContainer">
            <TextBlock title={this.state.about[0]} p1={this.state.about[1]} p2={this.state.about[2]} />
          </div>
        </div>

        {/* Mission / Video section */}
        <div>
          <Cover image={"mission.jpg"} height={"700px"} top={"-350px"} Component={this.missionCoverContent()}/>
        </div>

        {/* Core Values section */}
        <div className="container black centerAlign textAlign sidePadding">
          <CoreValues titles={this.state.coreValueTitles} texts={this.state.coreValueTexts}/>
        </div>

        {/* Slideshow section */}
        <div className="container">
          <div className="paragraph wideContainer sidePadding">
            <TextBlock title={this.state.ourPeople[0]} p1={this.state.ourPeople[1]} p2={this.state.ourPeople[2]} />
          </div>
        </div>
        <div className="container centerAlign">
          <Slideshow/>
        </div>

        {/* Benefits section */}
        <div className="container black whiteText">
          <div className="paragraph wideContainer sidePadding ">
            <TextBlock title={this.state.benefits[0]} p1={this.state.benefits[1]} />
            <div className="benefits wideContainer">
              <div className="row padding">
                <TextIcon image={"instagram.png"} word={"Benefit 1"} />
                <TextIcon image={"instagram.png"} word={"Benefit 2"} />
                <TextIcon image={"instagram.png"} word={"Benefit 3"} />
              </div>
              <div className="row">
                <TextIcon image={"instagram.png"} word={"Benefit 4"} />
                <TextIcon image={"instagram.png"} word={"Benefit 5"} />
                <TextIcon image={"instagram.png"} word={"Benefit 6"} />
              </div>
            </div>
          </div>
        </div>

        {/* Open Positions section */}
        <div className="container centerAlign column">
          <h2>Open Positions</h2>
          <div className="positionCards row wideContainer">
            <Position title={this.state.position1[0]} text={this.state.position1[1]} link={this.state.position1[2]} />
            <Position title={this.state.position2[0]} text={this.state.position2[1]} link={this.state.position2[2]} />
            <Position title={this.state.position3[0]} text={this.state.position3[1]} link={this.state.position3[2]} />
          </div>
        </div>

        {/* Instagram section */}
        <div className="container centerAlign column">
          <h2>Instagram</h2>
          <div className="row flexWrap centerAlign smallSidePadding maxWidth">
            <div className="row maxWidth test">
              <InstaImage image={"insta.jpg"}/>
              <InstaImage image={"insta.jpg"}/>
            </div>
            <div className="row maxWidth test">
              <InstaImage image={"insta.jpg"}/>
              <InstaImage image={"insta.jpg"}/>
            </div>
          </div>
        </div>



      </div>
    )
  }

  //Returns the content for the home cover page.
  homeCoverContent(){
    return (
      <div className="shaded column flowMotion">
        <h1>Join the FlowMotion Community</h1>
        <div className="cornerButton">
          <div></div>
          <div><Button text={"VIEW JOBS"} link={"/jobs"} /></div>
        </div>
      </div>
    )
  }

  //Returns the content for the "the mission" cover part.
  missionCoverContent(){
    return (
      <div className="shaded dark column whiteText alignTop sidePadding padding textAlign">
        <h2>The Mission</h2>
        <p>Our mission for FlowMotion is to build a global, Scandinavian brand. </p>
        <svg className="playButton" height="140" width="140">
          <circle cx="70" cy="70" r="70" fill="white" />
        </svg>
      </div>
    )
  }

}
