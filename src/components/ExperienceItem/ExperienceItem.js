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
  DescriptionItem,
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

    const descriptionItems = (data.description).map((e, i) => {
      return (
        <DescriptionItem key={ i } >
          { e }
        </DescriptionItem>
      );
    });

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
            { descriptionItems }
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

