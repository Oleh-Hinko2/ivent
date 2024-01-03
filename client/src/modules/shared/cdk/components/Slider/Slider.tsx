import React, { ReactElement } from 'react'

import * as S from './Slider.style'

type SliderOptionsType = {
  content: ReactElement
  id: string
}

type SliderPropsType = {
  options: SliderOptionsType[]
}

const Slider = ({ options }: SliderPropsType) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <S.SlickSlider {...settings}>
      {options.map((option) => (
        <S.SlickSliderItem key={option.id}>{option.content}</S.SlickSliderItem>
      ))}
    </S.SlickSlider>
  )
}

export default Slider
