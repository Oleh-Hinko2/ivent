import { TextField, Typography } from "@mui/material";
import styled from "styled-components";

export const TextareaWrapper = styled(TextField)`
  && {
    width: 100%;
    outline: none;
    box-sizing: border-box;

    & .MuiFilledInput-root {
      background-color: black;
      font-size: 14px;
      color: white;
      padding: 12px 20px;
      &:after,
      &:before {
        content: none;
      }
    }
  }
`;

export const ErrorWrapper = styled(Typography)`
  && {
    color: red;
    font-size: 0.75rem;
  }
`;
