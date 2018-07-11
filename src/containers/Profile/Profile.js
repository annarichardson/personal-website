/**
 * Profile.js
 * Written by: Anna Richardson
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HeaderText from 'components/HeaderText';
import SectionWrap from 'components/SectionWrap';

import profile from 'assets/profile.jpg';

import {
  ProfileContainer,
  Wrapper,
  SectionContainer,
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
        <SectionWrap>
          <HeaderText>
            Profile
          </HeaderText>
          <Wrapper>
            <SectionContainer>
              <SubHeader>
                About Me
              </SubHeader>
              <Content>
                {'I am a developer, puzzle-seeker and classical history lover. \
                When I’m not building cool stuff, you can find me exploring \
                the outdoors skiing, rock climbing, or bicycling. \
                Want to work together? I’d love to hear from you.'}
              </Content>
            </SectionContainer>
            <SectionContainer style={ { textAlign: 'center' } }>
              <ProfileImage height={ 200 } width={ 200 } src={ profile } alt="profile image" />
            </SectionContainer>
            <SectionContainer>
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
            </SectionContainer>
          </Wrapper>
        </SectionWrap>
      </ProfileContainer>
    );
  }
}

Profile.propTypes = {
  getRef: PropTypes.func,
};

