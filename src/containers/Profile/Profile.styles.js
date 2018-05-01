/**
 * Profile.styles.js
 * Written by: Anna Richardson
 */

import styled from 'styled-components';

import Image from 'components/Image';
import media from 'utils/media';

import { MEDIUM_GREY, DARK_GREY, PRIMARY_COLOR } from 'root/theme';

const ProfileContainer = styled.div`
`;

const Header = styled.h1`
  margin-top: 0;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  font-size: 3rem;
  font-weight: 300;
  color: ${PRIMARY_COLOR};
`;

const Line = styled.hr`
  border: 0;
  border-top: 2px solid ${DARK_GREY};
  opacity: 0.2;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: felx-start;
  flex-wrap: wrap;
`;

const SectionContainer = styled.div`
  flex-basis: 30%;
  margin: 0 auto;
  ${media.desktop`
    flex-basis: 100%;
  `}
`;

const SubHeader = styled.h2`
  color: ${PRIMARY_COLOR};
  font-family: 'Open Sans', sans-serif;
  margin-top: 0;
  font-weight: 200;
  ${media.desktop`
    text-align: center;
  `}
`;

const Content = styled.p`
  color: ${MEDIUM_GREY};
  font-family: 'Open Sans', sans-serif;
  margin-top: 5px;
  line-height: 1.5;
  font-weight: 200;
  ${media.desktop`
    text-align: center;
  `}
`;

const ProfileImage = styled(Image)`
  border-radius: 50%;
  border: solid 3px ${PRIMARY_COLOR};
  ${media.desktop`
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  `}
`;

const ContentHeader = styled.p`
  color: ${MEDIUM_GREY};
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  margin-bottom: 0;
  ${media.desktop`
    text-align: center;
  `}
`;

export {
  Header,
  ProfileContainer,
  Line,
  Wrapper,
  SectionContainer,
  SubHeader,
  Content,
  ContentHeader,
  ProfileImage,
};
