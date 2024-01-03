import React from "react";
import Image from "next/image";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Typography } from "@mui/material";

import * as S from "./Announcement.module";

import house from "../../../../images/house.webp";
import house2 from "../../../../images/house_2.webp";
import house3 from "../../../../images/house_3.webp";
import house4 from "../../../../images/house_4.webp";
import house5 from "../../../../images/house_5.webp";
import solid from "../../../../images/magnifying-glass-solid.svg";
import * as uuid from "uuid";
import { Slider } from "../../../shared";
import { AnnouncementProps } from "../../models";
import { useTranslation } from "next-i18next";

const Announcement = ({ announcement, locale }: AnnouncementProps) => {
  const { name, description, watch_number, price, images, _id } = announcement;
  const { t } = useTranslation("common");

  const sliderOptions = images?.length
    ? images.map((image, index) => ({
        id: uuid.v4(),
        content: (
          <Image
            src={`http:/localhost:3001/${image}`}
            alt={`slide-${index}`}
            width="200"
            height="200"
          />
        ),
      }))
    : [
        {
          id: "0",
          content: <Image src={house} alt="house" />,
        },
        {
          id: "1",
          content: <Image src={house2} alt="house2" />,
        },
        {
          id: "2",
          content: <Image src={house3} alt="house3" />,
        },
        {
          id: "3",
          content: <Image src={house4} alt="house3" />,
        },
        {
          id: "4",
          content: <Image src={house5} alt="house3" />,
        },
        {
          id: "5",
          content: <Image src={solid} alt="house3" />,
        },
      ];

  return (
    <S.Wrapper href={`/${_id}`} locale={locale}>
      <S.SaveIconWrapper>
        <S.SaveButton>
          <FavoriteBorderIcon />
        </S.SaveButton>
      </S.SaveIconWrapper>
      <S.SliderWrapper>
        <Slider options={sliderOptions} />
      </S.SliderWrapper>
      <S.ContentWrapper>
        <S.Title variant="h6">{name}</S.Title>
        <Typography variant="body1">{description}</Typography>
        <Typography variant="body1">{watch_number}</Typography>
        <Typography variant="body1">
          {t("price")}: {price || 0}
        </Typography>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default Announcement;
