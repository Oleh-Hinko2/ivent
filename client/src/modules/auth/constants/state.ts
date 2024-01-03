import { AuthData, PersonType } from "../models";

export const defaultState: AuthData = {
  token: "",
  personType: PersonType.natural,
  user: null,
};
