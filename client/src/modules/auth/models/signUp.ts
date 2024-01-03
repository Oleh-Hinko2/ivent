export interface SignUpLegalPersonData {
  name: string;
  address: string;
  email: string;
  phone: string;
  representativeName: string;
  representativeSurname: string;
  password: string;
  newPassword: string;
  showPassword: boolean;
  showNewPassword: boolean;
}

export interface SignUpNaturalPersonData {
  name: string;
  surname: string;
  email: string;
  phone: string;
  password: string;
  newPassword: string;
  showPassword: boolean;
  showNewPassword: boolean;
}

export enum PersonType {
  natural = "natural",
  legal = "legal",
}

export enum Roles {
  admin = "admin",
  user = "user",
  company = "company",
}

export interface UserData {
  name: string;
  surname: string;
  email: string;
  phone: string;
  role: Roles;
}
