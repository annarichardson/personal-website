/**
 * Home.style.js
 * Written by: Anna Richardson
 */

import styled from 'styled-components';
import media from 'utils/media';

const HomeContainer = styled.div`
  height: 100%;
`;

const ImageSection = styled.div`
  background-image: url("https://res.cloudinary.com/hthkr6vbm/image/upload/v1525657773/background.jpg");
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Name = styled.h1`
  margin: 0 auto;
  display: inline-block;
  font-family: 'Open Sans', sans-serif;
  color: white;
  font-size: 3rem;
  padding-bottom: 5px;
  border-bottom: solid white 0.5px;
  font-weight: 600;
  ${media.phone`
    font-size: 2.25rem;
  `}
`;

const LastName = styled.span`
  font-weight: 300;
`;

export {
  ImageSection,
  Name,
  HomeContainer,
  LastName,
};
