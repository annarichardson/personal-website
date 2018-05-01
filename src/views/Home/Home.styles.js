/**
 * Home.style.js
 * Written by: Anna Richardson
 */

import styled from 'styled-components';

const HomeContainer = styled.div`
  height: 100%;
`;

const ImageSection = styled.div`
  background-image: url("https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Wallpapers-HD-Forest-PIC-WPC003968.jpg");
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
