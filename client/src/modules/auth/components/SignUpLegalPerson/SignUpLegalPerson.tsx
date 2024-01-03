import React from "react";

import { useFormik } from "formik";

import { Box, Button, IconButton, InputAdornment } from "@mui/material";
import { Input } from "../../../shared";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { SignUpLegalPersonData } from "../../models";
import { createLegalPersonSchema } from "../../schemas";

interface SignUpLegalPersonProps {
  onSubmit: (data: SignUpLegalPersonData) => void;
}

const SignUpLegalPerson = ({ onSubmit }: SignUpLegalPersonProps) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      email: "",
      phone: "",
      representativeName: "",
      representativeSurname: "",
      password: "",
      newPassword: "",
      showPassword: false,
      showNewPassword: false,
    },
    onSubmit: onSubmit,
    validationSchema: createLegalPersonSchema,
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
          label="Назва компанії"
          placeholder="Введіть назву компанію"
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
          label="Адреса компанії"
          placeholder="Введіть адресу компанії"
          type="text"
          name="address"
          style={{ width: 300 }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorText={
            formik.touched.address && formik.errors.address
              ? formik.errors.address
              : null
          }
        />
      </Box>
      <Box display="flex">
        <Input
          label="Електронна адреса"
          placeholder="Введіть електронну адресу"
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
          placeholder="Введіть контактний телефон"
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
          label="Імя представника"
          placeholder="Введіть імя представника"
          type="text"
          name="representativeName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorText={
            formik.touched.representativeName &&
            formik.errors.representativeName
              ? formik.errors.representativeName
              : null
          }
          style={{ width: 300 }}
        />
        <Input
          label="Прізвище представника"
          placeholder="Введіть прізвище представника"
          type="text"
          name="representativeSurname"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorText={
            formik.touched.representativeSurname &&
            formik.errors.representativeSurname
              ? formik.errors.representativeSurname
              : null
          }
          style={{ width: 300 }}
        />
      </Box>
      <Box display="flex">
        <Input
          label="Пароль"
          placeholder="Введіть пароль"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type={formik.values.showPassword ? "text" : "password"}
          style={{ width: 300 }}
          adornment={
            <InputAdornment position="end">
              <IconButton
                id="showCode"
                name="showCode"
                aria-label="toggle code visibility"
                onClick={handleClickShowPassword}
              >
                {formik.values.showPassword ? (
                  <VisibilityIcon fontSize="small" />
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
        <Input
          label="Підтвердження пароля"
          placeholder="Введіть підтвердження пароля"
          name="newPassword"
          style={{ width: 300 }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
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

export default SignUpLegalPerson;
