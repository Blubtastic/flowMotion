import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Cover from '../../Cover';

import Button from '../../Molecules/Button';
import TextBlock from '../../Molecules/TextBlock';
import BulletList from '../../Molecules/BulletList';
import TextIcon from '../../Molecules/TextIcon';

import coffee from '../../../images/icons/coffeeBlack.png';
import food from '../../../images/icons/foodBlack.png';
import party from '../../../images/icons/partyBlack.png';
import money from '../../../images/icons/moneyBlack.png';
import schedule from '../../../images/icons/scheduleBlack.png';
import position from '../../../images/icons/positionBlack.png';

import arrow from '../../../images/arrowWhite.png';


export default class AndroidDeveloper extends Component{
  constructor(props){
    super(props);

    //Most of the page's content is defined here. Makes it easier to update as long as a server isn't used.
    this.state = {
      about: [
        "About us",
        "We’re adventurers, travelers, and techies, and we share a passion for videography, the outdoors and technology. Our first product — an advanced handheld smartphone stabilizer — is the first step on our mission in enabling people to tell better stories. So far we’ve done one of the top 150 most successful Kickstarter campaigns ever and pre-sold over 20,000 units to more than 80 countries. FlowMotion has been featured in Forbes, Digital Trends, UNILAD, and Business Insider.",
        "We’re a young team with international ambitions, consisting of software and hardware engineers, designers, marketers, supply chain, and support consultants. We have offices in Trondheim, and Oslo, Norway."
    ],
    lookingFor: [
      "What we’re looking for", //Title
      "You are a skilled Android developer and a quick learner. ",
      "You have a passion for technology, and you love to learn new things.  ",
      "You're a geek enthusiast and have a sense of humor. ",
      "You’re structured, and you love clean code. ",
      "You have a keen interest in software design",
      "You love working with bleeding edge technologies. ",
      "You’re self-going, but you also enjoy working in small teams.",
    ],
    position: [
      "Position",
      "We are hiring an Android Developer to strengthen our development team and inhouse capabilities. As an Android Developer at FlowMotion, you will develop the android versions of FlowMotions applications, which today consist of an advanced camera app, ‘the FlowMotion app.’ The app enables people to capture video and photo and can be controlled from the physical handle on the FlowMotion ONE stabilizer. The app communicates with the FlowMotion ONE via, and the FlowMotion ONE's firmware is updated through the app. The app currently has advanced features such as object tracking, motion time-lapse, and live stream. "
    ],
      responsibilities: [
        "Responsibilities and main tasks", //Title
        "You'll help define the complete development cycle, including requirements",
        "You'll write scalable, maintainable, efficient and reusable code",
        "You'll use and implement advanced algorithms",
        "You'll develop solutions for the Android platform (among others)",
        "You'll contribute to QA for all our software projects"
      ],
      keyQualifications: [
        "Required skills", //Title
        "You know the difference between OOP, MVC, and CDN",
        "You can work with and design APIs",
        "Proficient in Java or Kotlin (or both)",
        "Experience with GUI programming",
        "Experience with  version control",
        "Experience developing for Android",
        "Knowledge of agile development processes",
        "Highly proficient in spoken and written English"
      ],
      bonusPoints: [
        "We’d love it if you", //Title
        "Have a desire to move outside the safe confines of MVC and MVP",
        "Can discuss advantages and disadvantages of hybrid vs. native mobile applications",
        "Can discuss advantages and disadvantages of Java vs. Kotlin",
        "Can discuss advantages and disadvantages of various software architectures and patterns",
        "Have experience with Android NDK",
        "Have experience with the Camera2 API",
        "Have experience with photography or videography",
        "Have a basic understanding of university grade applied mathematics",
        "Have experience with computer vision, artificial intelligence, and advanced algorithms"
      ],

      workingWith: [
        "What we're working with",
        "java, kotlin, gradle, graphql, micro services, swift, rest, http, nosql, scale, android, ios, json, node.js, xml, linux, gsuite, ai, docker, reactjs, webpack, kanban, scrum, tdd, c++, c, git, jira, confluence, bitbucket, css3, html5, seo, cdn, headless cms, shopify, liquid, eigen, fft, cnn, lstm, ann, orb, vip, embedded, hardware, rust"
      ],

      canOffer: [
        "What we can offer", //Title
        "An opportunity to work with an extraordinary team",
        "A key role in a fast-growing startup",
        "To build something that tens of thousands of people will use every day!",
        "A competitive salary",
        "A share incentive plan",
        "A fun place to work",
        "One of the most beautiful rooftop terraces in Oslo! ",
        "Social gatherings and activities"
      ],

      benefits: [
        "Benefits",
        "We are located in a beautiful office in the heart of Oslo. We strive to create a vibrant, collaborative, and exciting workplace for our people to thrive in. ",
        "/"
      ],

    }
  }

  render() {
    return(
      <div className="page">

        {/* COVER Image section */}
        <div>
          <Cover image={"androidDeveloper.jpg"} height={"480px"} top={"0px"}  Component={this.jobsCoverContent()}/>
        </div>


        <div className="container column">

          {/* TEXT About Us section */}
          <div className="wideContainer sidePadding">
            <TextBlock content={this.state.about} />
          </div>

          {/* BULLET looking for*/}
            <div className="wideContainer smallPadding smallSidePadding">
            <BulletList text={this.state.lookingFor}/>
          </div>

          {/* TEXT position */}
          <div className="wideContainer smallPadding sidePadding">
            <TextBlock content={this.state.position} />
          </div>


          {/* BULLET key qualifications*/}
          <div className="wideContainer smallPadding smallSidePadding">
            <BulletList text={this.state.responsibilities}/>
          </div>

          {/* BULLET key bonus points*/}
          <div className="wideContainer smallPadding smallSidePadding">
            <BulletList text={this.state.keyQualifications}/>
          </div>

          {/* BULLET key bonus points*/}
          <div className="wideContainer smallPadding smallSidePadding">
            <BulletList text={this.state.bonusPoints}/>
          </div>



          {/* TEXT what we're working with */}
          <div className="wideContainer smallPadding sidePadding">
            <TextBlock content={this.state.workingWith} />
          </div>

          {/* BULLET what we can offer*/}
          <div className="wideContainer smallPadding smallSidePadding">
            <BulletList text={this.state.canOffer}/>
          </div>

          {/* BENEFITS section */}
          <div className="wideContainer leftText smallSidePadding">
            <div>
              <h3>Benefits</h3>
              <p>We are located in a beautiful office in the heart of Oslo. We strive to create a vibrant, collaborative, and exciting workplace for our people to thrive in.</p>
            </div>
            <div className="benefits wideContainer blackText">

              <div className="row padding ">
                <TextIcon image={coffee} word={"Coffee"} />
                <TextIcon image={food} word={"Lunch"} />
                <TextIcon image={party} word={"Social events"} />
              </div>
              <div className="row">
                <TextIcon image={money} word={"Competitive salary"} />
                <TextIcon image={schedule} word={"Flexible hours"} />
                <TextIcon image={position} word={"Convenient location"} />
              </div>

            </div>
          </div>

          {/* BUTTON apply*/}
          <div className="horizontalAlign padding wideButton">
            <Button text={"APPLY"} route={"/"} />
          </div>


        </div>

      </div>
    )
  }

  //Generates the content displayed on top of the hero image. (Passed as a parameter for hero image component)
  jobsCoverContent(){
    return (
      <div className="shaded column jobsCover sidePadding">
        <h1>Android Developer</h1>
        <p className="whiteText wideContainer textAlign">Want to work for one of Norway's most promising hardware startups? FlowMotion is looking for an excellent Android developer with a passion for new technologies.</p>
        <div className="cornerButton">
          <div><img src={arrow} alt="arrow"/><Link to="/">Back to jobs</Link></div>
          <div><Button text={"APPLY"} route={"/"} /></div>
        </div>
      </div>
    )
  }
}
