import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Cover from '../Cover';

import Button from '../Molecules/Button';
import TextBlock from '../Molecules/TextBlock';
import BulletList from '../Molecules/BulletList';
import TextIcon from '../Molecules/TextIcon';

import coffee from '../../images/icons/coffeeBlack.png';
import food from '../../images/icons/foodBlack.png';
import party from '../../images/icons/partyBlack.png';
import money from '../../images/icons/moneyBlack.png';
import schedule from '../../images/icons/scheduleBlack.png';
import position from '../../images/icons/positionBlack.png';

import arrow from '../../images/arrowWhite.png';


export default class Jobs extends Component{
  constructor(props){
    super(props);

    //Webpage text is filled in here. Not a great solution, but makes it easy to update the content without a server.
    this.state = {
      about: [
        "About us",
        "We've come a long way since our first prototype in April 2015. Our community continues to grow and we are looking forward to adventurous and passionate people to join our journey.",
      "We are now one of the top 150 most-fnuded Kickstarter campaigns with a passionate community of over 7,000 people. We're on a mission to put an end to shaky videos world wide. And we have the ultimate tool to do it. We hope so you can be a part of this mission!"
    ],
      whatYouDo: [
        "What You'll Do",
      "We've come a long way since our first prototype in April 2015. Our community continues to grow and we are looking forward to adventurous and passionate people to join our journey."
    ],
      responsibilities: [
        "Responsibilities", //Title
        "Lorem Ipsum dolor sit amet, an eum suspicit tenda, sea movet volumus senserit ex, an eum suspicit tenda, sea movet volumus. ",
        "Lorem Ipsum dolor sit amet, an eum suspicit tenda, sea movet volumus senserit ex, an eum suspicit tenda, sea movet volumus. ",
        "Lorem Ipsum dolor sit amet, an eum suspicit tenda, sea movet volumus senserit ex, an eum suspicit tenda, sea movet volumus. ",
        "Lorem Ipsum dolor sit amet, an eum suspicit tenda, sea movet volumus senserit ex, an eum suspicit tenda, sea movet volumus. ",
        "Lorem Ipsum dolor sit amet, an eum suspicit tenda, sea movet volumus senserit ex, an eum suspicit tenda, sea movet volumus. "
      ],
      keyQualifications: [
        "Key Qualifications", //Title
        "Lorem Ipsum dolor sit amet, an eum suspicit tenda, sea movet volumus senserit ex, an eum suspicit tenda, sea movet volumus. ",
        "Lorem Ipsum dolor sit amet, an eum suspicit tenda, sea movet volumus senserit ex, an eum suspicit tenda, sea movet volumus. ",
        "Lorem Ipsum dolor sit amet, an eum suspicit tenda, sea movet volumus senserit ex, an eum suspicit tenda, sea movet volumus. ",
        "Lorem Ipsum dolor sit amet, an eum suspicit tenda, sea movet volumus senserit ex, an eum suspicit tenda, sea movet volumus. ",
        "Lorem Ipsum dolor sit amet, an eum suspicit tenda, sea movet volumus senserit ex, an eum suspicit tenda, sea movet volumus. "
      ],
      bonusPoints: [
        "Bonus Points", //Title
        "Lorem Ipsum dolor sit amet, an eum suspicit tenda, sea movet volumus senserit ex, an eum suspicit tenda, sea movet volumus. ",
        "Lorem Ipsum dolor sit amet, an eum suspicit tenda, sea movet volumus senserit ex, an eum suspicit tenda, sea movet volumus. ",
        "Lorem Ipsum dolor sit amet, an eum suspicit tenda, sea movet volumus senserit ex, an eum suspicit tenda, sea movet volumus. ",
        "Lorem Ipsum dolor sit amet, an eum suspicit tenda, sea movet volumus senserit ex, an eum suspicit tenda, sea movet volumus. ",
        "Lorem Ipsum dolor sit amet, an eum suspicit tenda, sea movet volumus senserit ex, an eum suspicit tenda, sea movet volumus. "
      ],
      includeInAppl: [
        "Include This in Your Application", //Title
        "Lorem Ipsum dolor sit amet, an eum suspicit tenda, sea movet volumus senserit ex, an eum suspicit tenda, sea movet volumus. ",
        "Lorem Ipsum dolor sit amet, an eum suspicit tenda, sea movet volumus senserit ex, an eum suspicit tenda, sea movet volumus. ",
        "Lorem Ipsum dolor sit amet, an eum suspicit tenda, sea movet volumus senserit ex, an eum suspicit tenda, sea movet volumus. "
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
          <Cover image={"jobs.jpg"} height={"480px"} top={"-540px"}  Component={this.jobsCoverContent()}/>
        </div>


        <div className="container column">

          {/* TEXT About Us section */}
          <div className="paragraph wideContainer sidePadding">
            <TextBlock content={this.state.about} />
          </div>

          {/* TEXT what you'll do */}
          <div className="paragraph wideContainer smallPadding sidePadding">
            <TextBlock content={this.state.whatYouDo} />
          </div>

          {/* BULLET responsibilities*/}
          <div className="paragraph wideContainer smallPadding smallSidePadding">
            <BulletList text={this.state.responsibilities}/>
          </div>

          {/* BULLET key qualifications*/}
          <div className="paragraph wideContainer smallPadding smallSidePadding">
            <BulletList text={this.state.keyQualifications}/>
          </div>

          {/* BULLET key bonus points*/}
          <div className="paragraph wideContainer smallPadding smallSidePadding">
            <BulletList text={this.state.bonusPoints}/>
          </div>

          {/* BENEFITS section */}
          <div className="paragraph wideContainer leftText smallSidePadding">
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

          {/* BULLET key bonus points*/}
          <div className="paragraph wideContainer smallPadding smallSidePadding">
            <BulletList text={this.state.includeInAppl}/>
          </div>

          {/* BUTTON apply*/}
          <div className="maxWidth centerAlign padding wideButton">
            <Button text={"APPLY"} link={"/"} />
          </div>


        </div>

      </div>
    )
  }

  //Generates the
  jobsCoverContent(){
    return (
      <div className="shaded column jobsCover sidePadding">
        <h1>VP of Sales</h1>
        <p className="whiteText narrowContainer textAlign">Lorem Ipsum dolor sit amet, an eum suspicit expendante, sea movet volumes senserit ex, Ullum ominium ei cum sea movet.</p>
        <div className="cornerButton">
          <div><img src={arrow} alt="arrow"/><Link to="/">Back to jobs</Link></div>
          <div><Button text={"APPLY"} link={"/"} /></div>
        </div>
      </div>
    )
  }
}
