import React, {Component} from 'react';
import { HashLink as Link } from 'react-router-hash-link';

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


export default class VRSupplyChain extends Component{
  constructor(props){
    super(props);

    //Most of the page's content is defined here. Makes it easier to update as long as a server isn't used.
    this.state = {
      about: [
        "About us",
        "We’re adventurers, travelers, and techies, and we share a passion for videography, the outdoors and technology. Our first product — an advanced handheld smartphone stabilizer — is the first step on our mission in enabling people to tell better stories. So far we’ve done one of the top 150 most successful Kickstarter campaigns ever and pre-sold over 18,000 units to more than 80 countries. FlowMotion has been featured in Forbes, Digital Trends, UNILAD, and Business Insider.",
        "We’re a young team with international ambitions, consisting of software and hardware engineers, designers, marketers, supply chain, and support consultants. We have offices in Trondheim, and Oslo, Norway."
    ],
      whatYouDo: [
        "What we’re looking for",
        "You are an up-and-coming young professional with experience in supply chain and logistics management. You have an entrepreneurial mindset and are willing to go the extra mile (i.e. travel to China on a regular basis). You understand the complexity of supply chains and how information, cash, and people affect it. You’re familiar with procurement and sourcing and have project management experience. System integration and automation excites you and you enjoy solving complex operation and strategy problems. You’re an excellent communicator and a natural leader."
    ],
    position: [
      "Position",
      "As the VP of Supply Chain & Logistics your main goal is to get our products into the hands of our customers in the safest, fastest, and most cost-effective way possible."
  ],
      responsibilities: [
        "Responsibilities and main tasks", //Title
        "Establish, lead and manage the Supply Chain & Logistics team",
        "Work with our team in Norway  and Shenzhen on procurement,  sourcing and batch planning",
        "Work with our team in Norway  and Shenzhen on QA/QC",
        "Manage inventory and flow between multiple warehouses in different parts of the world",
        "Manage  and oversee logistics in all parts of the supply chain - from suppliers to the end customer",
        "Mitigate cost and risk",
        "Collaborate with other departments on system integration",
        "Design and implement a reverse logistics model"
      ],
      keyQualifications: [
        "Required skills", //Title
        "B.Sc. or M.Sc. Business management, supply chain & logistics management or engineering",
        "Minimum of 5  years of direct experience in Supply Chain roles including, Logistics, Procurement, Material Program Management or equivalent",
        "Process-oriented mindset and strong analytical skills",
        "Excellent communication and presentation skills",
        "Experience leading small teams and ability to inspire others",
        "Highly proficient in MS Excel",
        "Highly proficient in spoken and written English"
      ],
      bonusPoints: [
        "What we can offer", //Title
        "An opportunity to work with an extraordinary team",
        "A key role in fast-growing startup",
        "A competitive salary",
        "A fun place to work",
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
          <Cover image={"VPSupply.jpg"} height={"480px"} top={"-540px"}  Component={this.jobsCoverContent()}/>
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

          {/* BUTTON apply*/}
          <div className="horizontalAlign wideButton textAlign column sidePadding verticalAlign">
          <h3>Application deadline: June 10th, 2018</h3>
            <Button text={"APPLY"} link={"https://flowmotion-1.workable.com/jobs/730148/candidates/new"} />
          </div>


        </div>

      </div>
    )
  }

  //Generates the content displayed on top of the hero image. (Passed as a parameter for hero image component)
  jobsCoverContent(){
    return (
      <div className="shaded column jobsCover sidePadding">
        <h1>VP Supply Chain & Logistics</h1>
        <p className="whiteText wideContainer textAlign">Want to work for one of Norway's most promising hardware startups? We’re looking for an up-and-coming professional with supply chain and logistics management experience.</p>
        <div className="cornerButton">
          <div><img src={arrow} alt="arrow"/><Link to="/#positions">Back to jobs</Link></div>
          <div> <Button text={"APPLY"} link={"https://flowmotion-1.workable.com/jobs/730148/candidates/new"} /> </div>
        </div>
      </div>
    )
  }
}
