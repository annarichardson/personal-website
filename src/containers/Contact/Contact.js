/**
 * Contact.js
 * Written by: Anna Richardson
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  ContactContainer,
  SectionContainer,
  Wrapper,
  SectionWrapper,
  Header,
  LinkedinIcon,
  ContactText,
  EmailIcon,
  GithubIcon,
  ContactItem,
  Line,
} from './Contact.styles';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this.props.getRef(this.contact, `contact`);
  }

  render() {
    return (
      <ContactContainer
        id="contact"
        innerRef={(node) => { this.contact = node; }}
      >
        <SectionContainer>
          <Header>
            Contact
          </Header>
          <Wrapper>
            <SectionWrapper>
              <ContactItem>
                <LinkedinIcon size={ 30 } />
                <ContactText href="https://www.linkedin.com/in/annachristinerichardson/" >
                  linkedin.com/in/annachristinerichardson
                </ContactText>
              </ContactItem>
              <ContactItem>
                <GithubIcon size={ 30 } />
                <ContactText href="https://github.com/annarichardson" >
                  github.com/annarichardson
                </ContactText>
              </ContactItem>
            </SectionWrapper>
            <SectionWrapper>
              <ContactItem>
                <EmailIcon size={ 30 } />
                <ContactText href="mailto:arichardson524@gmail.com" >
                  arichardson524@gmail.com
                </ContactText>
              </ContactItem>
            </SectionWrapper>
          </Wrapper>
          <Line />
        </SectionContainer>
      </ContactContainer>
    );
  }
}

Contact.propTypes = {
  getRef: PropTypes.func,
};

