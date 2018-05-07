/**
 * ExperienceItem.styles.js
 * Written by: Anna Richardson
 */

import styled from 'styled-components';

import FaMapMarker from 'react-icons/lib/fa/map-marker';
import FaExternalLink from 'react-icons/lib/fa/external-link';

import media from 'utils/media';
import { MEDIUM_GREY, PRIMARY_COLOR } from 'root/theme';

const Header = styled.h3`
  margin-top: 0;
  font-family: 'Open Sans', sans-serif;
  color: ${MEDIUM_GREY};
  margin-bottom: 0.5rem;
`;

const Dates = styled.p`
  font-family: 'Open Sans', sans-serif;
  color: ${MEDIUM_GREY};
  font-weight: 200;
  margin-top: 0;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const HeaderWrapper = styled.div`
  flex-basis: 30%;
  ${media.desktop`
    flex-basis: 100%;
  `}
`;

const BodyWrapper = styled.div`
  flex-basis: 70%;
  ${media.desktop`
    flex-basis: 100%;
  `}
`;

const Title = styled.h3`
  margin-top: 0;
  font-family: 'Open Sans', sans-serif;
  color: ${MEDIUM_GREY};
  margin-bottom: 0.5rem;
`;

const Description = styled.ul`
  font-family: 'Open Sans', sans-serif;
  color: ${MEDIUM_GREY};
  font-weight: 200;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  margin-top: 0;
  list-style-type: none;
  padding: 0;
`;

const DescriptionItem = styled.li`
`;

const Location = styled.p`
  color: ${PRIMARY_COLOR};
  font-family: 'Open Sans', sans-serif;
  display: inline-block;
  margin: 0;
  vertical-align: middle;
  font-size: 0.9rem;
`;

const LocationIcon = styled(FaMapMarker)`
  color: ${PRIMARY_COLOR};
  margin-left: -0.2rem;
`;

const LocationWrapper = styled.div`
  display: inline-block;
  margin-right: 1.5rem;
  margin-bottom: 0.5rem;
`;

const LinkIcon = styled(FaExternalLink)`
  color: ${PRIMARY_COLOR};
`;

const LinkText = styled.a`
  color: ${PRIMARY_COLOR};
  font-family: 'Open Sans', sans-serif;
  font-size: 0.9rem;
  text-decoration: none;
  margin-left: 0.25rem;
`;

const LinkWrapper = styled.div`
  display: inline-block;
`;

export {
  Header,
  Dates,
  ItemContainer,
  HeaderWrapper,
  BodyWrapper,
  Title,
  Description,
  DescriptionItem,
  Location,
  LocationIcon,
  LocationWrapper,
  LinkIcon,
  LinkText,
  LinkWrapper,
};
