import SlickSlider from "react-slick";

import { Box, Button, Typography } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled(Box)`
  width: 100%;
  overflow: hidden;
  left: 0;
  height: 100%;
  position: sticky;
  height: 75px;
  margin-bottom: 10px;
  text-align: center;
`;

export const SliderItem = styled(Button)`
  && {
    display: flex;
    flex-direction: column;
    width: auto;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    background: none;
    border: none;
    color: white;
    min-width: auto;
    text-transform: capitalize;
    padding: 0;
  }
`;

export const SliderItemTitle = styled(Typography)`
  && {
    color: black;
  }
`;

export const SliderItemIconWrapper = styled(Box)`
  margin-bottom: 10px;

  svg {
    color: black;
  }
`;

export const Slider = styled(SlickSlider)`
  &.slick-slider {
    height: 100%;
  }

  & .slick-list {
    height: 100%;
  }

  & .slick-track {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .slick-prev {
    left: 5px;
  }

  & .slick-next {
    right: 5px;
  }

  & .slick-arrow {
    z-index: 999;
    background: none;
  }

  & .slick-slide > div {
    height: 100%;
  }
`;
