import React, { ReactElement, useEffect } from "react";

import { useDispatch } from "react-redux";

import { Button, InputAdornment } from "@mui/material";
import { useFormik } from "formik";

import {
  InputEmailWrapper,
  ForgotPasswordFormContainer,
  ForgotPasswordFormTitle,
  ForgotPasswordFormWrapper,
  ForgotPasswordWrapper,
  ForgotPasswordFormSubtitle,
  CancelButtonWrapper,
} from "./ForgotPassword.module";
import { BasicLayout, Input } from "../../../modules/shared";
import { LoginData } from "../../../modules/auth/models";
import { forgotPasswordAction } from "../../../modules/auth/slices";
import { forgotPasswordSchema } from "../../../modules/auth/tools";

const ForgotPasswordRoute = () => {
  const dispatch = useDispatch();

  //selectors
  const isSuccessSendEmail = false;

  //effects
  useEffect(() => {
    if (isSuccessSendEmail) {
      // history.push(routeCheckEmail)
    }
  }, [isSuccessSendEmail]);

  //handlers
  const submitHandler = (values: LoginData) => {
    dispatch(forgotPasswordAction(values));
  };
  const handleCancelClick = () => {
    console.log("cancel");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: submitHandler,
    validationSchema: forgotPasswordSchema,
    validateOnBlur: true,
    validateOnChange: true,
  });

  return (
    <ForgotPasswordWrapper
      container
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <ForgotPasswordFormContainer>
        <ForgotPasswordFormWrapper>
          <form onSubmit={formik.handleSubmit}>
            <ForgotPasswordFormTitle>Reset password</ForgotPasswordFormTitle>
            <ForgotPasswordFormSubtitle>
              Enter the email associated with your account
            </ForgotPasswordFormSubtitle>
            <InputEmailWrapper>
              <Input
                placeholder="Enter your email"
                type="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                startAdornment={
                  <InputAdornment position="start"></InputAdornment>
                }
                errorText={
                  formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : null
                }
              />
            </InputEmailWrapper>
            <Button disabled={!formik.isValid}>Send</Button>
            <CancelButtonWrapper>
              <Button onClick={handleCancelClick}>Cancel</Button>
            </CancelButtonWrapper>
          </form>
        </ForgotPasswordFormWrapper>
      </ForgotPasswordFormContainer>
    </ForgotPasswordWrapper>
  );
};

export default ForgotPasswordRoute;

ForgotPasswordRoute.getLayout = function getLayout(page: ReactElement) {
  return <BasicLayout>{page}</BasicLayout>;
};
