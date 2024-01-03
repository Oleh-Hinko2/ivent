import { Typography } from "@mui/material";
import styled from "styled-components";
import MuiInput from "@mui/material/Input";
interface InputProps {
  error?: boolean;
}

export const InputWrapper = styled(MuiInput)<InputProps>`
  && {
    width: 100%;
    background-color: black;
    font-size: 0.875rem;
    padding: 0 20px;
    height: 40px;
    outline: none;
    border: 1px solid white;
    border-radius: 10px;

    &:after,
    &:before {
      content: none;
    }

    && input {
      color: ${(props) => (props.error ? "red" : "white")};
      outline: none;
    }
  }
`;

export const ErrorWrapper = styled(Typography)`
  && {
    color: red;
    font-size: 0.75rem;
  }
`;
