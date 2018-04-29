/**
 * Profile.js
 * Written by: Anna Richardson
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HeaderText from 'components/HeaderText';

import profile from 'assets/profile.jpg';

import {
  ProfileContainer,
  Wrapper,
  SectionWrapper,
  SubHeader,
  Content,
  ContentHeader,
  ProfileImage,
} from './Profile.styles';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this.props.getRef(this.profile, `profile`);
  }

  render() {
    return (
      <ProfileContainer
        id="profile"
        innerRef={(node) => { this.profile = node; }}
      >
        <HeaderText>
          Profile
        </HeaderText>
        <Wrapper>
          <SectionWrapper>
            <SubHeader>
              About Me
            </SubHeader>
            <Content>
              {'I am a developer, chronic puzzle-seeker and lifelong learner. \
              When I’m not building cool stuff, you can find me exploring the outdoors skiing, \
              rock climbing, or bicycling. Want to work together? I’d love to hear from you.'}
            </Content>
          </SectionWrapper>
          <SectionWrapper style={ { textAlign: 'center' } }>
            <ProfileImage height={ 200 } width={ 200 } src={ profile } alt="profile image" />
          </SectionWrapper>
          <SectionWrapper>
            <SubHeader>
              Details
            </SubHeader>
            <ContentHeader>
              Name:
            </ContentHeader>
            <Content>
              Anna Richardson
            </Content>
            <ContentHeader>
              Current Job Title:
            </ContentHeader>
            <Content>
              Senior Software Engineer
            </Content>
            <ContentHeader>
              Location:
            </ContentHeader>
            <Content>
              Boston, MA
            </Content>
          </SectionWrapper>
        </Wrapper>
      </ProfileContainer>
    );
  }
}

Profile.propTypes = {
  getRef: PropTypes.func,
};

