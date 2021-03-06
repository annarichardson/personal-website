/**
 * Contact.styles.js
 * Written by: Anna Richardson
 */

import styled from 'styled-components';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaEnvelopeSquare from 'react-icons/lib/fa/envelope-square';
import FaGithubSquare from 'react-icons/lib/fa/github-square';

import HeaderText from 'components/HeaderText';
import HorizontalLine from 'components/HorizontalLine';
import SectionWrap from 'components/SectionWrap';

import media from 'utils/media';
import { MEDIUM_GREY, PRIMARY_COLOR } from 'root/theme';

const ContactContainer = styled.div`
  background-color: ${MEDIUM_GREY};
  width: 100%;
`;

const SectionContainer = styled(SectionWrap)`
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: felx-start;
  margin: 4rem 0;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const SectionWrapper = styled.div`
  flex-basis: 48%;
  margin: 0 auto;
  ${media.desktop`
    flex-basis: 100%;
  `}
`;

const Header = styled(HeaderText)`
  & h1 {
    color: white;
  }
  & hr {
    border-color: white;
  }
`;

const ContactText = styled.a`
  color: white;
  text-decoration: none;
  margin-left: 0.5rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  vertical-align: middle;
`;

const ContactItem = styled.div`
  margin-bottom: 2rem;
  &:hover {
    & a, & svg {
      color: ${PRIMARY_COLOR};
    }
  }
`;

const Line = styled(HorizontalLine)`
  border-color: white;
`;

const LinkedinIcon = styled(FaLinkedinSquare)`
  color: white;
`;

const EmailIcon = styled(FaEnvelopeSquare)`
  color: white;
`;

const GithubIcon = styled(FaGithubSquare)`
  color: white;
`;

export {
  ContactContainer,
  SectionContainer,
  Wrapper,
  SectionWrapper,
  Header,
  ContactText,
  LinkedinIcon,
  EmailIcon,
  GithubIcon,
  ContactItem,
  Line,
};
