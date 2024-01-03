import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Wrapper = styled(Box)`
  height: 100vh;
`;

export const Main = styled.main`
  width: calc(100% - 250px);
  display: flex;
  height: calc(100% - 70px);
  margin-left: 250px;
  flex-grow: 1;
  flex-direction: column;
  padding: 20px;
`;
