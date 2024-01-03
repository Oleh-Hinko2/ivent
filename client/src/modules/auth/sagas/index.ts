import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { prepareFormData } from "../../shared/utils";
import { createNewLegalPerson, createNewNaturalPerson, logIn } from "../api";
import {
  SignInData,
  SignUpLegalPersonData,
  SignUpNaturalPersonData,
} from "../models";
import {
  createLegalPersonAction,
  createNaturalPersonAction,
  setUserAction,
  signInAction,
} from "../slices";

export function* createNaturalPerson(
  action: PayloadAction<SignUpNaturalPersonData>
) {
  try {
    const formData = prepareFormData(action.payload) as FormData;

    const { data } = yield call(createNewNaturalPerson, formData);

    yield put(setUserAction(data));
  } catch (error: any) {
    console.error(error);
  }
}

export function* createLegalPerson(
  action: PayloadAction<SignUpLegalPersonData>
) {
  try {
    const formData = prepareFormData(action.payload) as FormData;

    const { data } = yield call(createNewLegalPerson, formData);

    yield put(setUserAction(data));
  } catch (error: any) {
    console.error(error);
  }
}

export function* signIn(action: PayloadAction<SignInData>) {
  try {
    yield call(logIn, action.payload);
  } catch (error: any) {
    console.error(error);
  }
}

export function* watchAuth() {
  yield takeLatest(createNaturalPersonAction.type, createNaturalPerson);
  yield takeLatest(createLegalPersonAction.type, createLegalPerson);
  yield takeLatest(signInAction.type, signIn);
}
