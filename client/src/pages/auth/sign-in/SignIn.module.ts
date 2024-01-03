import { Grid, Typography } from "@mui/material";
import styled from "styled-components";
import Link from "next/link";

interface LoginFormTitleProps {
  error?: string;
}

export const LoginWrapper = styled(Grid)`
  height: 100vh;
`;

export const LoginFormWrapper = styled(Grid)`
  margin-top: 40px;
`;

export const LoginFormContainer = styled(Grid)`
  border: 1px solid #edebe5;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  width: 500px;
  min-height: 440px;
  padding: 40px 50px 56px;
`;

export const LoginFormTitle = styled(Typography)<LoginFormTitleProps>`
  && {
    font-weight: 500;
    color: black;
    font-size: 1.25rem;
    margin-bottom: ${(props) => (!!props.error ? "8px" : "24px")};
  }
`;

export const InputEmailWrapper = styled(Grid)`
  margin-bottom: 20px;
`;

export const InputPasswordWrapper = styled(Grid)`
  margin-bottom: 4px;
`;

export const ForgotButtonWrapper = styled(Grid)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const ForgotBtn = styled(Link)`
  && {
    text-decoration: none;
    color: black;
    cursor: pointer;
    display: block;
    margin-bottom: 40px;
    font-size: 0.75rem;
    color: black;
  }
`;

export const ErrorWrapper = styled(Typography)`
  && {
    color: ${(props) => props.theme.colors.error};
    font-size: 0.75rem;
    margin-bottom: 24px;
  }
`;
