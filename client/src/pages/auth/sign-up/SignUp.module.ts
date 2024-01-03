import { Grid, Typography } from "@mui/material";
import styled from "styled-components";

interface TitleProps {
  error?: string;
}

export const Wrapper = styled(Grid)`
  height: calc(100vh - 70px);
`;

export const FormWrapper = styled(Grid)`
  margin-top: 40px;
`;

export const Title = styled(Typography)<TitleProps>`
  && {
    font-weight: 500;
    color: black;
    font-size: 1.25rem;
    margin-bottom: ${(props) => (!!props.error ? "8px" : "24px")};
  }
`;
