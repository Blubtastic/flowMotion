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


export default class LeadMechanicalEngineer extends Component{
  constructor(props){
    super(props);

    //Most of the page's content is defined here. Makes it easier to update as long as a server isn't used.
    this.state = {
      about: [
        "About us",
        "We’re adventurers, travelers, and techies, and we share a passion for videography, the outdoors and technology. Our first product — an advanced handheld smartphone stabilizer — is the first step in our mission to help people tell better stories. So far we’ve done one of the top 150 most successful Kickstarter campaigns ever and pre-sold over 20,000 units to more than 80 countries. FlowMotion has been featured in Forbes, Digital Trends, UNILAD, and Business Insider.",
      "We’re a young team with international ambitions, consisting of software and hardware engineers, designers, marketers, supply chain, and support consultants. We have offices in Trondheim, and Oslo, Norway."
    ],
      whatYouDo: [
        "What we’re looking for",
      "You are an experienced mechanical engineer with strong capabilities who is passionate about building things. You have a curious mindset and and you enjoy solving complex engineering problems and value the importance of doing things right way. You are efficient, hands-on and self-driven, and you believe that no engineering problem is too big to be solved. You have experience with design for manufacturing and manufacturing processes.."
    ],
    position: [
      "Position",
      "We are hiring a Lead Mechanical Engineer to strengthen our product development and manufacturing capabilities. As the Lead Mechanical Engineer at FlowMotion you will take ideas, turn them into physical products and deliver them to our tens of thousands of customers. Your main tasks will be to build prototypes of new concepts, test them and take products through the DMF-phase and all the way through and beyond mass production. Your role will be to actively contribute to get new ideas and products to market, and be involved in and oversee the entire product life cycle. You’ll also have to travel to Shenzhen occasionally to work close with our manufacturing partner."
    ],
      responsibilities: [
        "Responsibilities and main tasks", //Title
        "Product development",
        "Mechanical design",
        "Fine element analysis",
        "3D modeling",
        "Prototyping",
        "Product testing",
        "Design for Manufacturing",
        "Oversee manufacturing processes",
        "Develop QA/QC processes with our manufacturing partner"
      ],
      keyQualifications: [
        "Required skills", //Title
        "B.Sc. or M.Sc. mechanical engineering",
        "5+ years’ experience in mechanical engineering & product development",
        "Computer aided design (CAD) skills: 3D CAD experience required - SolidWorks preferred",
        "Engineering Fundamentals: Applied mechanics, material science, machine elements, fine element analysis",
        "Experience designing mechanical components for high volume manufacturing is preferred - specifically injection molded parts, sheet metal components, die-cast and machined parts",
        "Experience in the design cycle from concept through manufacturing is a plus",
        "Excellent communication skills: both written and verbal, ability to clearly communicate ideas, contribute to brainstorms",
        "Highly proficient in spoken and written English"
      ],
      bonusPoints: [
        "What we’re offering", //Title
        "An opportunity to work with an extraordinary team",
        "A key role in a fast-growing startup",
        "An opportunity to learn something new every day",
        "A competitive salary",
        "A share incentive plan",
        "A brand new office in the heart of Oslo",
        "A beautiful roof terrace! ",
        "Social gatherings and activities",
      ],

      coffee: [
        "Let’s have coffee!",
        "We’d love to discuss the opportunity to join our team, so feel free to reach out to us."
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
          <Cover image={"leadMechanical.jpg"} height={"480px"} top={"-540px"}  Component={this.jobsCoverContent()}/>
        </div>


        <div className="container column">

          {/* TEXT About Us section */}
          <div className="wideContainer sidePadding">
            <TextBlock content={this.state.about} />
          </div>

          {/* TEXT what you'll do */}
          <div className="wideContainer smallPadding sidePadding">
            <TextBlock content={this.state.whatYouDo} />
          </div>

          {/* TEXT position */}
          <div className="wideContainer smallPadding sidePadding">
            <TextBlock content={this.state.position} />
          </div>

          {/* BULLET responsibilities*/}
          <div className="wideContainer smallPadding smallSidePadding">
            <BulletList text={this.state.responsibilities}/>
          </div>

          {/* BULLET key qualifications*/}
          <div className="wideContainer smallPadding smallSidePadding">
            <BulletList text={this.state.keyQualifications}/>
          </div>

          {/* BULLET key bonus points*/}
          <div className="wideContainer smallPadding smallSidePadding">
            <BulletList text={this.state.bonusPoints}/>
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


          {/* TEXT let's have some coffee section */}
          <div className="wideContainer sidePadding">
            <TextBlock content={this.state.coffee} />
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
        <h1>Lead Mechanical Engineer</h1>
        <p className="whiteText wideContainer textAlign">Want to work for one of Norway's most promising hardware startups? FlowMotion is looking for a competent mechanical engineer with manufacturing experience.</p>
        <div className="cornerButton">
          <div><img src={arrow} alt="arrow"/><Link to="/">Back to jobs</Link></div>
          <div><Button text={"APPLY"} route={"/"} /></div>
        </div>
      </div>
    )
  }
}
