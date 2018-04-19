/**
 * ExperienceItem.js
 * Written by: Anna Richardson
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  ItemContainer,
  Header,
  HeaderWrapper,
  BodyWrapper,
  Dates,
  Title,
  Description,
  Location,
  LocationIcon,
  LocationWrapper,
  LinkIcon,
  LinkText,
  LinkWrapper,
} from './ExperienceItem.styles';

export default class ExperienceItem extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { data, className } = this.props;

    const location = data.location
      ? (
        <LocationWrapper>
          <LocationIcon size={ 18 } />
          <Location>
            { data.location }
          </Location>
        </LocationWrapper>
      ) : null;

    const link = data.link
      ? (
        <LinkWrapper>
          <LinkIcon size={ 18 } />
          <LinkText href={ data.link.address } rel="noopener noreferrer" target="_blank">
            { data.link.display }
          </LinkText>
        </LinkWrapper>
      ) : null;

    return (
      <ItemContainer className={ className }>
        <HeaderWrapper>
          <Header>
            { data.company }
          </Header>
          <Dates>
            { data.dates }
          </Dates>
        </HeaderWrapper>
        <BodyWrapper>
          <Title>
            { data.title }
          </Title>
          <Description>
            { data.description }
          </Description>
          { location }
          { link }
        </BodyWrapper>
      </ItemContainer>
    );
  }
}

ExperienceItem.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string,
};

