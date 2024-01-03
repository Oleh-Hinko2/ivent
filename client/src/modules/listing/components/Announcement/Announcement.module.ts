import { Box, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled(Link)`
  background-color: white;
  position: relative;
  color: black;
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
`;

export const SliderWrapper = styled(Box)`
  width: 100%;
  height: 300px;
  overflow: hidden;
`;

export const ContentWrapper = styled(Box)`
  padding: 15px 15px;
`;

export const SaveButton = styled(IconButton)`
  && {
    &:active,
    &:hover {
      background: none;
    }
  }
`;

export const SaveIconWrapper = styled(Box)`
  position: absolute;
  left: 5px;
  top: 5px;
  z-index: 1;

  svg {
    color: black;
    opacity: 0.7;
    transition: all 0.3s;

    &:hover {
      opacity: 1;
    }
  }
`;

export const Title = styled(Typography)`
  && {
    text-align: center;
    margin-bottom: 15px;
  }
`;
