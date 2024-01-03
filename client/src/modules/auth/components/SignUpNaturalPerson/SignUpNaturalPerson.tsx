import React from "react";

import { useFormik } from "formik";

import { Box, Button, IconButton, InputAdornment } from "@mui/material";
import { Input } from "../../../shared";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { SignUpNaturalPersonData } from "../../models";
import { createNaturalPersonSchema } from "../../schemas";

interface SignUpNaturalPersonProps {
  onSubmit: (data: SignUpNaturalPersonData) => void;
}

const SignUpNaturalPerson = ({ onSubmit }: SignUpNaturalPersonProps) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      phone: "",
      password: "",
      newPassword: "",
      showPassword: false,
      showNewPassword: false,
    },
    onSubmit: onSubmit,
    validationSchema: createNaturalPersonSchema,
    validateOnBlur: true,
    validateOnChange: true,
  });

  const handleClickShowPassword = () => {
    formik.setFieldValue("showPassword", !formik.values.showPassword);
  };

  const handleClickShowNewPassword = () => {
    formik.setFieldValue("showNewPassword", !formik.values.showNewPassword);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box display="flex">
        <Input
          label="Імя"
          placeholder="Введіть імя"
          type="text"
          name="name"
          style={{ width: 300 }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorText={
            formik.touched.name && formik.errors.name
              ? formik.errors.name
              : null
          }
        />
        <Input
          label="Прізвище"
          placeholder="Введіть прізвище"
          type="text"
          name="surname"
          style={{ width: 300 }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorText={
            formik.touched.surname && formik.errors.surname
              ? formik.errors.surname
              : null
          }
        />
      </Box>
      <Box display="flex">
        <Input
          placeholder="Введіть електронну адресу"
          label="Електронна адреса"
          type="email"
          name="email"
          style={{ width: 300 }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorText={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : null
          }
        />
        <Input
          label="Телефон"
          placeholder="Введіть телефон"
          type="phone"
          name="phone"
          style={{ width: 300 }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorText={
            formik.touched.phone && formik.errors.phone
              ? formik.errors.phone
              : null
          }
        />
      </Box>
      <Box display="flex">
        <Input
          label="Пароль"
          placeholder="Введіть пароль"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{ width: 300 }}
          type={formik.values.showPassword ? "text" : "password"}
          adornment={
            <InputAdornment position="end">
              <IconButton
                id="showCode"
                name="showCode"
                aria-label="toggle code visibility"
                onClick={handleClickShowPassword}
              >
                {formik.values.showPassword ? (
                  <VisibilityIcon fontSize="small" color="info" />
                ) : (
                  <VisibilityOffIcon fontSize="small" color="info" />
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
        <Input
          label="Підтвердження пароля"
          placeholder="Введіть підтвердження пароля"
          name="newPassword"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{ width: 300 }}
          type={formik.values.showNewPassword ? "text" : "password"}
          adornment={
            <InputAdornment position="end">
              <IconButton
                id="showPass"
                name="showPass"
                aria-label="toggle password visibility"
                onClick={handleClickShowNewPassword}
              >
                {formik.values.showNewPassword ? (
                  <VisibilityIcon fontSize="small" color="info" />
                ) : (
                  <VisibilityOffIcon fontSize="small" color="info" />
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
      </Box>
      <Box>
        <Button type="submit" variant="contained">
          Зареєструватись
        </Button>
      </Box>
    </form>
  );
};

export default SignUpNaturalPerson;
