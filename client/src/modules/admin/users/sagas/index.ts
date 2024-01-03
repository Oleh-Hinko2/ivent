import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { GetQueriesData } from "../../../core/models";
import { getUserList } from "../api";

import { getUsersAction, setUserListAction } from "../slices";

export function* getUsers(action: PayloadAction<GetQueriesData>) {
  try {
    const { data } = yield call(getUserList, action.payload);
    yield put(setUserListAction(data));
  } catch (error: any) {
    console.error(error);
  }
}

export function* watchUsers() {
  yield takeLatest(getUsersAction.type, getUsers);
}
