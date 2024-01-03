import React, { useCallback, useEffect } from "react";

import { useDispatch } from "react-redux";

import PersonIcon from "@mui/icons-material/Person";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Button, IconButton, InputAdornment } from "@mui/material";
import { useFormik } from "formik";

import {
  ResetFormContainer,
  ResetPasswordFormTitle,
  ResetPasswordFormWrapper,
  ResetPasswordWrapper,
  CancelButtonWrapper,
  InputWrapper,
} from "./ResetPasswordRoute.style";

import { CommonInput } from "../../../shared";
import { LoginHeader } from "../../components";
import {
  isSuccessResetPasswordAction,
  resetPasswordAction,
} from "../../slices";
import { resetPasswordSchema } from "../../tools";

const ResetPasswordRoute: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  //selectors
  const isSuccessSendEmail = false;

  //effects
  useEffect(() => {
    if (isSuccessSendEmail) {
      // history.push(routeLogin)
      dispatch(
        isSuccessResetPasswordAction({
          isSuccessResetPassword: false,
        })
      );
    }
  }, [isSuccessSendEmail]);

  //handlers
  // eslint-disable-next-line
  const submitHandler = (values: any) => {
    dispatch(
      resetPasswordAction({
        code: "",
        newPassword: values.newPassword,
      })
    );
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      newPassword: "",
      showPassword: false,
      showNewPassword: false,
    },
    onSubmit: submitHandler,
    validationSchema: resetPasswordSchema,
    validateOnBlur: true,
    validateOnChange: true,
  });
  const handleCancelClick = () => {
    console.log("cancel");
  };

  const handleClickShowPassword = useCallback(() => {
    formik.setFieldValue("showPassword", !formik.values.showPassword);
  }, [formik.values.showPassword]);

  const handleClickShowNewPassword = useCallback(() => {
    formik.setFieldValue("showNewPassword", !formik.values.showNewPassword);
  }, [formik.values.showNewPassword]);

  return (
    <ResetPasswordWrapper
      container
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <ResetFormContainer>
        <LoginHeader />
        <ResetPasswordFormWrapper>
          <form onSubmit={formik.handleSubmit}>
            <ResetPasswordFormTitle>Create new password</ResetPasswordFormTitle>
            <InputWrapper>
              <CommonInput
                placeholder="Enter new password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type={formik.values.showPassword ? "text" : "password"}
                startAdornment={
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                }
                adornment={
                  <InputAdornment position="end">
                    <IconButton
                      id="showCode"
                      name="showCode"
                      aria-label="toggle code visibility"
                      onClick={handleClickShowPassword}
                    >
                      {formik.values.showPassword ? (
                        <RemoveRedEyeIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                errorText={
                  formik.touched.password && formik.errors.password
                    ? formik.errors.password
                    : null
                }
              />
            </InputWrapper>
            <InputWrapper>
              <CommonInput
                placeholder="Renter new password"
                name="newPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type={formik.values.showNewPassword ? "text" : "password"}
                startAdornment={
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                }
                adornment={
                  <InputAdornment position="end">
                    <IconButton
                      id="showPass"
                      name="showPass"
                      aria-label="toggle password visibility"
                      onClick={handleClickShowNewPassword}
                    >
                      {formik.values.showNewPassword ? (
                        <RemoveRedEyeIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                errorText={
                  formik.touched.newPassword && formik.errors.newPassword
                    ? formik.errors.newPassword
                    : null
                }
              />
            </InputWrapper>
            <Button
              type="submit"
              disabled={
                !formik.isValid ||
                !formik.values.password ||
                !formik.values.newPassword
              }
            >
              Reset password
            </Button>
            <CancelButtonWrapper>
              <Button onClick={handleCancelClick} title="Cancel">
                Cancel
              </Button>
            </CancelButtonWrapper>
          </form>
        </ResetPasswordFormWrapper>
      </ResetFormContainer>
    </ResetPasswordWrapper>
  );
};

export default ResetPasswordRoute;
