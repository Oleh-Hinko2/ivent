import * as yup from "yup";
import YupPassword from "yup-password";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

YupPassword(yup);

export const _email = yup
  .string()
  .email("Введіть коректний електронний адрес")
  .required("Електронний адрес є обовязковим");

const _password = yup
  .string()
  .password()
  .minSymbols(0)
  .required("Пароль є обовязковим");

export const createNaturalPersonSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required("Імя є обовязковим")
    .min(2, "Імя має бути не менше ніж 2 символів")
    .max(30, "Імя має бути не більше ніж 30 символів"),
  surname: yup
    .string()
    .trim()
    .required("Прізвище є обовязковим")
    .min(2, "Прізвище має бути не менше ніж 2 символів")
    .max(30, "Прізвище має бути не більше ніж 30 символів"),
  email: yup
    .string()
    .email("Введіть коректну електронну адресу")
    .required("Електронна адреса є обовязковою"),
  phone: yup.string().matches(phoneRegExp, "Введіть коректний телефон"),
  password: _password,
  newPassword: yup
    .string()
    .required("")
    .oneOf([yup.ref("password"), ""], "Паролі не збігається"),
});

export const createLegalPersonSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required("Назва компанії є обовязковим")
    .min(2, "Назва компанії має бути не менше ніж 2 символів")
    .max(30, "Назва компанії має бути не більше ніж 30 символів"),
  address: yup
    .string()
    .trim()
    .required("Адреса компанії є обовязковим")
    .min(2, "Адреса компанії має бути не менше ніж 2 символів")
    .max(250, "Адреса компанії має бути не більше ніж 150 символів"),
  email: yup
    .string()
    .email("Введіть коректну електронну адресу")
    .required("Електронна адреса є обовязковою"),
  phone: yup.string().matches(phoneRegExp, "Введіть коректний телефон"),
  representativeName: yup
    .string()
    .trim()
    .required("Імя представника є обовязковим")
    .min(2, "Імя представникаї має бути не менше ніж 2 символів")
    .max(30, "Імя представника має бути не більше ніж 30 символів"),
  representativeSurname: yup
    .string()
    .trim()
    .required("Прізвище представника є обовязковим")
    .min(2, "Прізвище представника має бути не менше ніж 2 символів")
    .max(30, "Прізвище представника має бути не більше ніж 30 символів"),
  password: _password,
  newPassword: yup
    .string()
    .required("")
    .oneOf([yup.ref("password"), ""], "Паролі не збігається"),
});

export const logInSchema = yup.object({
  email: _email,
  password: _password,
});

export const resetPasswordSchema = yup.object({
  password: _password,
  newPassword: yup
    .string()
    .required("New password is required")
    .oneOf([yup.ref("password"), ""], "Password doesn’t match"),
});
