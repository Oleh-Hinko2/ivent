import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { Button } from "@mui/material";

import {
  CancelButtonWrapper,
  CheckEmailDescription,
  CheckEmailSubTitle,
  CheckEmailTitle,
  CheckEmailContentWrapper,
  CheckEmailDescriptionWrapper,
  CheckEmailWrapper,
  TryAnotherEmailButton,
} from "./CheckEmailRoute.style";

import { LoginHeader } from "../../components";
import { sendEmailAction } from "../../slices";

const CheckEmail: React.FC = () => {
  const dispatch = useDispatch();

  //selectors
  const email = "";

  //handlers
  const handleClearEmailData = useCallback(
    () =>
      dispatch(
        sendEmailAction({ isSuccessSendEmail: false, currentEmail: "" })
      ),
    []
  );
  const handleCancelClick = useCallback(() => {
    handleClearEmailData();
    // history.push(routeLogin)
  }, []);
  const handleAnotherEmailClick = useCallback(() => {
    handleClearEmailData();
    // history.push(routeForgotPassword)
  }, []);

  return (
    <CheckEmailWrapper
      container
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CheckEmailContentWrapper>
        <LoginHeader />
        <CheckEmailDescriptionWrapper
          container
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          {/* <CommonIcon type={IconType.checkEmail} /> */}
          <CheckEmailTitle>Check your email</CheckEmailTitle>
          <CheckEmailSubTitle>
            We have sent a password recovery link to {email}
          </CheckEmailSubTitle>
          <CheckEmailDescription>
            Did not receive the email? Check your spam filter or{" "}
            <TryAnotherEmailButton onClick={handleAnotherEmailClick}>
              try another email address
            </TryAnotherEmailButton>
          </CheckEmailDescription>
          <CancelButtonWrapper>
            <Button onClick={handleCancelClick} fullWidth>
              'Cancel'
            </Button>
          </CancelButtonWrapper>
        </CheckEmailDescriptionWrapper>
      </CheckEmailContentWrapper>
    </CheckEmailWrapper>
  );
};

export default CheckEmail;
