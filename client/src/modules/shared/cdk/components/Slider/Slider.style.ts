import Slider from 'react-slick'

import { Box } from '@mui/system'

import styled from 'styled-components'

export const SlickSlider = styled(Slider)`
  &.slick-slider {
    height: 100%;
  }

  & .slick-list,
  .slick-track {
    height: 100%;
  }

  & .slick-dots {
    bottom: 10px;
  }

  & .slick-prev {
    left: 5px;
  }

  & .slick-next {
    right: 5px;
  }

  & .slick-arrow {
    z-index: 999;
  }

  & .slick-slide > div {
    height: 100%;
  }
`
export const SlickSliderItem = styled(Box)`
  width: 100%;
  height: 100%;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
