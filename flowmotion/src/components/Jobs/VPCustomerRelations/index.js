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
import rooftop from '../../../images/icons/rooftopBlack.png';
import money from '../../../images/icons/moneyBlack.png';
import schedule from '../../../images/icons/scheduleBlack.png';
import position from '../../../images/icons/positionBlack.png';
import shares from '../../../images/icons/sharesBlack.png';

import arrow from '../../../images/arrowWhite.png';


export default class VRCustomerRelations extends Component{
  constructor(props){
    super(props);

    //Most of the page's content is defined here. Makes it easier to update as long as a server isn't used.
    this.state = {
      about: [
        "About us",
        "We’re adventurers, travelers, and techies, and we share a passion for videography, the outdoors and technology. Our first product — an advanced handheld smartphone stabilizer — is the first step in our mission to help people tell better stories. So far we’ve done one of the top 150 most successful Kickstarter campaigns ever and pre-sold over 15,000 units to more than 80 countries. FlowMotion has been featured in Forbes, Digital Trends, UNILAD, and Business Insider.",
      "We’re a young team with international ambitions, consisting of software and hardware engineers, designers, marketers, supply chain, and support consultants. We have offices in Trondheim, and Oslo, Norway."
    ],
      whatYouDo: [
        "What we’re looking for",
      "You are an up and coming young professional with strong analytical skills who is able to see the big picture. You have an entrepreneurial mindset and are not afraid to get your hands dirty. System integration and automation excites you and you enjoy solving complex operation and strategy problems. You are an excellent communicator and a natural leader. You have empathy for customers and you are passionate about going the extra mile to make customers happy."
    ],
    position: [
      "Position",
      "As VP of Customer Relations & Support you have one main goal - make our customers happy by providing them with the best possible experience."
    ],
      responsibilities: [
        "Responsibilities and main tasks", //Title
        "Develop strategies to reach customer relations & support goals",
        "Lead and manage the customer relations & support team",
        "Manage and analyze customer data",
        "Develop customer data models",
        "Manage and develop The FlowMotion customer knowledge base",
        "Work with marketing, finance and supply chain on system integration",
        "Work with marketing on communication strategies",
        "Work with the tech team on establishing a product feedback process",
        "Manage and develop refund and return processes"
      ],
      keyQualifications: [
        "Required skills", //Title
        "B.Sc. or M.Sc. bus. adm., finance, operations, engineering or similar",
        "5+ years’ experience working with operations and/or strategy, or as a consultant with relevant experience",
        "Process-oriented mindset and strong analytical skills",
        "Experience leading small teams and ability to inspire others",
        "Excellent communication and presentation skills",
        "Experience with advanced modeling in MS Excel ",
        "Highly proficient in spoken and written English ",
        "Empathy for customers, i.e. being able to put yourself in their shoes"
      ],
      bonusPoints: [
        "What we can offer", //Title
        "An opportunity to work with an extraordinary team",
        "A key role in a fast-growing startup",
        "A competitive salary",
        "A share incentive plan",
        "A fun place to work",
        "A beautiful roof terrace!",
        "Social gatherings and activities",
        "Free lunch and unlimited coffee",
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
          <Cover image={"VPCustomer.jpg"} height={"480px"} top={"-258px"}  Component={this.jobsCoverContent()}/>
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
            <div className="benefits textAlign wideContainer blackText">

              <div className="row padding ">
                <TextIcon image={coffee} word={"Coffee"} />
                <TextIcon image={food} word={"Lunch"} />
                <TextIcon image={party} word={"Social events"} />
                <TextIcon image={rooftop} word={"Roof terrace"} />
              </div>
              <div className="row">
                <TextIcon image={money} word={"Competitive salary"} />
                <TextIcon image={schedule} word={"Flexible hours"} />
                <TextIcon image={position} word={"Convenient location"} />
                <TextIcon image={shares} word={"Share incentive plan"} />
              </div>

            </div>
          </div>


          {/* TEXT let's have some coffee section */}
          <div className="wideContainer sidePadding">
            <TextBlock content={this.state.coffee} />
          </div>

          {/* BUTTON apply*/}
          <div className="horizontalAlign padding wideButton column verticalAlign">
            <h3>Application deadline: June 10th, 2018</h3>
            <Button text={"APPLY"} link={"https://flowmotion-1.workable.com/jobs/730964/candidates/new"} />
          </div>


        </div>

      </div>
    )
  }

  //Generates the content displayed on top of the hero image. (Passed as a parameter for hero image component)
  jobsCoverContent(){
    return (
      <div className="shaded column jobsCover sidePadding">
        <h1>VP Customer Relations & Support</h1>
        <p className="whiteText wideContainer textAlign">Want to work for one of Norway's most promising hardware startups? We’re looking for an experienced professional with empathy for customers and strong analytical skills.</p>
        <div className="cornerButton">
          <div><img src={arrow} alt="arrow"/><Link to="/">Back to jobs</Link></div>
          <div> <Button text={"APPLY"} link={"https://flowmotion-1.workable.com/jobs/730964/candidates/new"} /> </div>
        </div>
      </div>
    )
  }
}
