/**
 * Experience.js
 * Written by: Anna Richardson
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HeaderText from 'components/HeaderText';
import ExperienceItem from 'components/ExperienceItem';
import HorizontalLine from 'components/HorizontalLine';

import {
  ExperienceContainer,
  TextWrapper,
  SubHeader,
} from './Experience.styles';

const WORK_EXPERIENCES = [
  {
    title: "Senior Software Engineer",
    company: "Cogo Labs",
    dates: "June 2016 - present",
    description: "Currently managing and acting as lead developer for vertical product, Squeebles. Building websites using React, Django, and PostgreSQL. Running intern program for summer 2018; managing six mentors and ten interns. Mentored a team of five interns during summer 2017. Organized company wide hackathon in April 2017",
    location: "Cambridge, MA",
    link: {
      address: "https://www.cogolabs.com/",
      display: "cogolabs.com",
    },
  },
  {
    title: "Software Engineer Intern",
    company: "Cogo Labs",
    dates: "June 2015 - August 2015",
    description: "Created and deployed a news aggregator web platform. Collaborated with a team of software engineers, UX designers, and data analysts. Attracted 22,000 users over 10 weeks.",
    location: "Cambridge, MA",
    link: {
      address: "https://www.cogolabs.com/",
      display: "cogolabs.com",
    },
  },
];

const EDUCATION = [
  {
    title: "Bachelors of Arts in Classical Studies",
    company: "Tufts University",
    dates: "August 2012 - May 2016",
    description: "Minors in Computer Science & Entrepreneurial Leadership; Dean’s list for four years; GPA 3.66/4.00",
    location: "Medford, MA",
  },
  {
    title: "Summer Program at Villa Rosa",
    company: "Syracuse Univerity",
    dates: "June 2014 - August 2014",
    description: "Business classes and internship at leather shop, Infinity Firenze",
    location: "Florence, Italy",
  },
];

const LEADERSHIP = [
  {
    title: "Captain and Coach",
    company: "Tufts Alpine Ski Team",
    dates: "August 2013 - May 2016",
    description: "Managed 60 skiers, led meetings, interfaced with USCSA league, planned events, and organized race days as captain; now coaching team",
    location: "Medford, MA",
    link: {
      address: "http://www.tuskiteam.org/",
      display: "tuskiteam.org",
    },
  },
  {
    title: "Club Facilitator",
    company: "Girls Who Code",
    dates: "January 2018 - March 2018",
    description: "Guided Club girls through their coding curriculum; helped the girls’ debug projects",
    location: "Cambridge, MA",
    link: {
      address: "https://girlswhocode.com/",
      display: "girlswhocode.com",
    },
  },
  {
    title: "Hackathon Mentor",
    company: "Girls Develop It",
    dates: "November 2017",
    description: "Assisted teams of beginner developers; judged final presentations ",
    location: "Boston, MA",
    link: {
      address: "https://www.girldevelopit.com/chapters/boston/",
      display: "girldevelopit.com",
    },
  },
  {
    title: "Cross Country Cyclist",
    company: "St. Paul's School",
    dates: "June 2011 - August 2011",
    description: "Raised $100,000 from students, alumni, and parents for Ride2Recovery; bicycled 3,438 miles in 44 days",
    location: "Seattle, WA - York, ME",
    link: {
      address: "https://projecthero.org/",
      display: "projecthero.org",
    },
  },
];

export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this.props.getRef(this.experience, `experience`);
  }

  render() {
    const workExperiences = WORK_EXPERIENCES.map((e) => {
      return <ExperienceItem data={ e } key={ e.title } />;
    });

    const education = EDUCATION.map((e) => {
      return <ExperienceItem data={ e } key={ e.title } />;
    });

    const leadership = LEADERSHIP.map((e) => {
      return <ExperienceItem data={ e } key={ e.title } />;
    });

    return (
      <ExperienceContainer
        id="experience"
        innerRef={(node) => { this.experience = node; }}
      >
        <TextWrapper>
          <HeaderText>
            Experience
          </HeaderText>
          <SubHeader>
            Work
          </SubHeader>
          { workExperiences }
          <HorizontalLine />
          <SubHeader>
            Education
          </SubHeader>
          { education }
          <HorizontalLine />
          <SubHeader>
            Leadership
          </SubHeader>
          { leadership }
          <HorizontalLine />
        </TextWrapper>
      </ExperienceContainer>
    );
  }
}

Experience.propTypes = {
  getRef: PropTypes.func,
};

