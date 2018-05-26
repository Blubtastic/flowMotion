import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import Cover from '../Cover';
import CoreValues from '../CoreValues';
import Slideshow from '../Slideshow';

import Button from '../Molecules/Button';
import TextBlock from '../Molecules/TextBlock';
import Position from '../Molecules/Position'
import InstaImage from '../Molecules/InstaImage'
import TextIcon from '../Molecules/TextIcon';

//Icons
import coffee from '../../images/icons/coffee.png';
import food from '../../images/icons/food.png';
import party from '../../images/icons/party.png';
import money from '../../images/icons/money.png';
import schedule from '../../images/icons/schedule.png';
import position from '../../images/icons/position.png';

import playIcon from '../../images/playIcon.png';


//Homepage content. Everything except the navbar
export default class Home extends Component {
  constructor(props){
    super(props);

    //Most of the text for the webpage. Some text must be added to specific components.
    this.state = {
      about: [
        "Our Story",
        "We've come a long way since developing our first prototype in April 2015 — but we're just getting started. And now we're looking for more adventurous and passionate people to join our journey.",
        "After having to suddenly change our product, we launched one of the top 150 most funded Kickstarter campaigns and continued our success by pre-selling more than 20 000 units — that are currently being shipped wordlwide.",
        "We're building high-quality, exciting technology — all under a premium Scandinavian brand. We hope you want to be a part of this journey."
      ],

      ourPeople: [
        "Our Team & Work",
        "FlowMotion consists of 10+ passionate, talented and ambitious people; We’re adventurers, travelers, and techies, and we share a passion for videography, the outdoors and technology.",
      ],

      benefits: [
        "Benefits",
        "We are located in the heart of Oslo, and stribe to create a vibrant, collaborative, and exciting workplace. ",
      ],

      position1: [
        "VP of Sales",
        "We've come a long way since our first prototype in April 2015. Our community continues to grow and we are looking forward to adventurous and passionate people. ",
        "jobs"
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
            <TextBlock content={this.state.about} />
          </div>
        </div>

        {/* Mission / Video section */}
        <div>
          <Cover image={"mission.jpg"} top={"-380px"} height={"780px"} Component={this.missionCoverContent()}/>
        </div>

        {/*
        CORE VALUES SECTION. Uncomment to add.
        <div className="container black centerAlign textAlign sidePadding">
          <CoreValues titles={this.state.coreValueTitles} texts={this.state.coreValueTexts}/>
        </div>
        */}

        {/* Slideshow section */}
        <div className="container column">
          <div className="paragraph wideContainer sidePadding">
            <TextBlock content={this.state.ourPeople} />
          </div>

          <div className="topPadding">
            <Slideshow/>
          </div>
        </div>

        {/* Benefits section */}
        <div className="container black grayText">
          <div className="paragraph wideContainer sidePadding ">
            <TextBlock content={this.state.benefits} />
            <div className="benefits wideContainer topPadding whiteText ">

              <div className="row">
                <TextIcon image={coffee} word={"Unlimited Coffee"}/>
                <TextIcon image={food} word={"Free lunch"} />
                <TextIcon image={party} word={"Social events"} />
              </div>
              <div className="row topPadding">
                <TextIcon image={money} word={"Competitive salary"} />
                <TextIcon image={schedule} word={"Flexible hours"} />
                <TextIcon image={position} word={"Convenient location"} />
              </div>

            </div>
          </div>
        </div>

        {/* Open Positions section */}
        <div className="container centerAlign column">
          <h2>Open Positions</h2>
          <div className="positionCards row wideContainer maxWidth">
            <Position title={this.state.position1[0]} text={this.state.position1[1]} link={this.state.position1[2]} />
            <Position title={this.state.position2[0]} text={this.state.position2[1]} link={this.state.position2[2]} />
            <Position title={this.state.position3[0]} text={this.state.position3[1]} link={this.state.position3[2]} />
          </div>
        </div>

        {/* Instagram section */}
        <div className="container centerAlign column">
          <h2>Latest from our Instagram</h2>
          <div className="row flexWrap centerAlign smallSidePadding maxWidth">
            <div className="row maxWidth test">
              <InstaImage image={"insta.jpg"} link={"http://www.google.com"} />
              <InstaImage image={"insta.jpg"} link={"http://www.google.com"} />
            </div>
            <div className="row maxWidth test">
              <InstaImage image={"insta.jpg"} link={"http://www.google.com"} />
              <InstaImage image={"insta.jpg"} link={"http://www.google.com"} />
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
        <h1 className="smallSidePadding">Join the FlowMotion Community</h1>
        <div className="cornerButton">
          <div></div>
          <div><Button text={"VIEW JOBS"} link={"/"} /></div>
        </div>
      </div>
    )
  }

  //Returns the content for the "the mission" cover part.
  missionCoverContent(){
    return (
      <div className="shaded dark column grayText alignTop sidePadding padding textAlign">
        <h2>Our Mission</h2>
        <p className="missionText">Our mission is to help people tell a better story.</p>
        <Link to="/" className="playButton"><img src={playIcon} alt="play"/></Link>
        <h3>PLAY VIDEO</h3>
      </div>
    )
  }

}
