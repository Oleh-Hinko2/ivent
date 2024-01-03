import React from "react";

import { Box } from "@mui/material";

import * as S from "./Carousel.module";
import { Filter } from "../../models";
import Image from "next/image";

interface FilterCarouselProps {
  filters: Filter[];
}

const FilterCarousel = ({ filters }: FilterCarouselProps) => {
  const settings = {
    speed: 500,
    variableWidth: true,
    infinite: false,
    centerMode: true,
    slidesToShow: 10,
    slidesToScroll: 1,
  };

  const handleSetFilter = (type: string) => {
    console.log(type);
  };

  return (
    <S.Wrapper>
      <S.Slider {...settings}>
        {filters.map((filter) => (
          <Box key={filter._id}>
            <S.SliderItem
              onClick={() => handleSetFilter(filter.name)}
              key={filter._id}
            >
              <S.SliderItemIconWrapper>
                <Image
                  src={`http:/localhost:3001/${filter.icon}`}
                  alt={`${filter.name}-icon`}
                  width="30"
                  height="30"
                />
              </S.SliderItemIconWrapper>
              <S.SliderItemTitle variant="body1">
                {filter.name}
              </S.SliderItemTitle>
            </S.SliderItem>
          </Box>
        ))}
      </S.Slider>
    </S.Wrapper>
  );
};

export default FilterCarousel;
