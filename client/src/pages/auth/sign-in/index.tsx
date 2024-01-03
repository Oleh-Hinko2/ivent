import React, { ReactElement, useCallback } from "react";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Button, IconButton, InputAdornment } from "@mui/material";
import { useFormik } from "formik";

import {
  ForgotBtn,
  ForgotButtonWrapper,
  InputEmailWrapper,
  InputPasswordWrapper,
  LoginFormContainer,
  LoginFormTitle,
  LoginFormWrapper,
  LoginWrapper,
} from "./SignIn.module";
import { BasicLayout, Input } from "../../../modules/shared";
import { useAuthFacade } from "../../../modules/auth";
import { useRouter } from "next/router";
import { logInSchema } from "../../../modules/auth/schemas";

const SignInRoute = () => {
  const { signIn, user } = useAuthFacade();
  const { push, locale } = useRouter();

  if (user) {
    push("/");
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      showPass: false,
    },
    onSubmit: signIn,
    validationSchema: logInSchema,
    validateOnBlur: true,
    validateOnChange: true,
  });

  const handleClickShowPassword = useCallback(() => {
    formik.setFieldValue("showPass", !formik.values.showPass);
  }, [formik.values.showPass]);

  return (
    <LoginWrapper
      container
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <LoginFormContainer>
        <LoginFormWrapper>
          <form onSubmit={formik.handleSubmit}>
            <LoginFormTitle>Вхід</LoginFormTitle>
            <InputEmailWrapper>
              <Input
                placeholder="Email"
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
            <InputPasswordWrapper>
              <Input
                placeholder="Password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type={formik.values.showPass ? "text" : "password"}
                startAdornment={
                  <InputAdornment position="start"></InputAdornment>
                }
                adornment={
                  <InputAdornment position="end">
                    <IconButton
                      id="showPass"
                      name="showPass"
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {formik.values.showPass ? (
                        <RemoveRedEyeIcon fontSize="small" />
                      ) : (
                        <VisibilityOffIcon fontSize="small" />
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
            </InputPasswordWrapper>
            <ForgotButtonWrapper>
              <ForgotBtn href="/auth/forgot-password" locale={locale}>
                Забули пароль?
              </ForgotBtn>
            </ForgotButtonWrapper>
            <Button type="submit" disabled={!formik.isValid}>
              Увійти
            </Button>
          </form>
        </LoginFormWrapper>
      </LoginFormContainer>
    </LoginWrapper>
  );
};

export default SignInRoute;

SignInRoute.getLayout = function getLayout(page: ReactElement) {
  return <BasicLayout>{page}</BasicLayout>;
};
