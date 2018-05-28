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


export default class CustomerConsultant extends Component{
  constructor(props){
    super(props);

    //Most of the page's content is defined here. Makes it easier to update as long as a server isn't used.
    this.state = {
      about: [
        "About us",
        "We’re adventurers, travelers, and techies, and we share a passion for videography, the outdoors and technology. Our first product — an advanced handheld smartphone stabilizer — is the first step on our mission to help people tell better stories. So far we’ve done one of the top 150 most successful Kickstarter campaigns ever and pre-sold over 15,000 units to more than 80 countries. FlowMotion has been featured in Forbes, Digital Trends, UNILAD, and Business Insider.",
        "We’re a young team with international ambitious, consisting of software and hardware engineers, designers, marketers, supply chain, and support consultants. We have offices in Trondheim, and Oslo, Norway."
    ],
    position: [
      "Position",
      "As a Customer Consultant, you’ll be on the front line of our brand, communicating with our customers solving any issues or answering any questions they might have. You’ll work closely with the marketing and the tech team to achieve the best possible experience for our community."
    ],
      responsibilities: [
        "Responsibilities & Main Tasks", //Title
        "Manage incoming support tickets and inquiries",
        "Identifying and assessing customers’ needs to achieve satisfaction",
        "Build sustainable relations and trust with customers",
        "Be up-to-date on our customer knowledge base",
        "Provide accurate, valid, and complete information by using the right methods/tools",
        "Follow and develop communication procedures, guidelines, and policies",
        "Go the extra mile to engage customers"
      ],
      keyQualifications: [
        "Required Skills", //Title
        "Proven customer support experience or experience as a client service ",
        "Highly proficient in spoken and written English",
        "Excellent communication and presentation skills",
        "Ability to prioritize, and manage time effectively",
        "Strong empathy for customers, i.e. being able to put yourself in their shoes",
        "Ability to listen and exercise patience with customers",
        "A calming, positive attitude",
        "Student or B.Sc./M.Sc"
      ],
      bonusPoints: [
        "What We Can Offer", //Title
        "An opportunity to work with an extraordinary team",
        "A competitive salary",
        "A fun place to work",
        "Social gatherings and activities",
        "Long term possibilities "
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
          <Cover image={"customerConsultant.jpg"} height={"480px"} top={"-540px"}  Component={this.jobsCoverContent()}/>
        </div>


        <div className="container column">

          {/* TEXT About Us section */}
          <div className="wideContainer sidePadding">
            <TextBlock content={this.state.about} />
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
        <h1>Customer Consultant</h1>
        <p className="whiteText wideContainer textAlign">Want to work for one of Norway's most promising hardware startups? We’re looking for a Customer Consultant who has empathy for customers and is willing to go the extra mile to keep our customers happy.</p>
        <div className="cornerButton">
          <div><img src={arrow} alt="arrow"/><Link to="/">Back to jobs</Link></div>
          <div><Button text={"APPLY"} route={"/"} /></div>
        </div>
      </div>
    )
  }
}
