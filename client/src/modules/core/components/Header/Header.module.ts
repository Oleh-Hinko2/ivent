import { Box, Button } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled.header`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  position: sticky;
  top: 0;
  left: 0;
  background: black;
  z-index: 999;
`;

export const LogoWrapper = styled(Box)``;

export const UserWrapper = styled(Box)``;

export const UserButton = styled(Button)`
  && {
    border-radius: 15px;
    border: 1px solid white;
    padding: 4px 10px;
  }
`;
