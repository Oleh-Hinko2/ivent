import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Wrapper = styled(Box)`
  height: 100vh;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  height: calc(100% - 70px);
  flex-grow: 1;
  flex-direction: column;
`;
