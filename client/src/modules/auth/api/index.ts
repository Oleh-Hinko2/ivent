import { BASE_ADMIN_CONNECTION, BASE_REQUEST_HEADERS } from "../../core/axios";
import { SignInData } from "../models";

export const createNewNaturalPerson = async (data: FormData) => {
  return await BASE_ADMIN_CONNECTION.post(`/user/create/natural-person`, data, {
    headers: {
      ...BASE_REQUEST_HEADERS,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

export const createNewLegalPerson = async (data: FormData) => {
  return await BASE_ADMIN_CONNECTION.post(`/user/create/legal-person`, data, {
    headers: {
      ...BASE_REQUEST_HEADERS,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

export const logIn = async (data: SignInData) => {
  return await BASE_ADMIN_CONNECTION.post(`/auth/login`, data);
};
