import {
  SliceCaseReducers,
  createSlice,
  Slice,
  PayloadAction,
  CaseReducer,
} from "@reduxjs/toolkit";
import { defaultState } from "../constants";

import {
  SignInData,
  AuthData,
  PersonType,
  SignUpLegalPersonData,
  SignUpNaturalPersonData,
  UserData,
} from "../models";

interface SliceAuthReducer extends SliceCaseReducers<AuthData> {
  signInAction: CaseReducer<AuthData, PayloadAction<SignInData>>;
  setUserAction: CaseReducer<AuthData, PayloadAction<UserData>>;
  clearUserAction: CaseReducer;
  forgotPasswordAction: CaseReducer<AuthData, PayloadAction<SignInData>>;
  setPersonTypeAction: CaseReducer<AuthData, PayloadAction<PersonType>>;
  createNaturalPersonAction: CaseReducer<
    AuthData,
    PayloadAction<SignUpNaturalPersonData>
  >;
  createLegalPersonAction: CaseReducer<
    AuthData,
    PayloadAction<SignUpLegalPersonData>
  >;
}

const noStateChange = (state: AuthData) => state;

export const sliceAuth: Slice<AuthData, SliceAuthReducer> = createSlice({
  initialState: defaultState,
  name: "auth",
  reducers: {
    signInAction: noStateChange,
    forgotPasswordAction: noStateChange,
    setUserAction: (state, action) => ({
      ...state,
      user: action.payload,
    }),
    setPersonTypeAction: (state, action) => ({
      ...state,
      personType: action.payload,
    }),
    clearUserAction: () => defaultState,
    createNaturalPersonAction: noStateChange,
    createLegalPersonAction: noStateChange,
  },
});

export const {
  signInAction,
  setUserAction,
  clearUserAction,
  forgotPasswordAction,
  setPersonTypeAction,
  createNaturalPersonAction,
  createLegalPersonAction,
} = sliceAuth.actions;
