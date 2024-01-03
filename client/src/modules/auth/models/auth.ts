import { PersonType, UserData } from "./signUp";
export interface AuthData {
  token?: string;
  personType: PersonType;
  user: UserData | null;
}
