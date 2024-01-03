import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { GetQueriesData } from "../../../core/models";
import { getAnnouncementList } from "../api";

import { getAnnouncementsAction, setAnnouncementsAction } from "../slices";

export function* getAnnouncements(action: PayloadAction<GetQueriesData>) {
  try {
    const { data } = yield call(getAnnouncementList, action.payload);

    yield put(setAnnouncementsAction(data));
  } catch (error: any) {
    console.error(error);
  }
}

export function* watchAnnouncements() {
  yield takeLatest(getAnnouncementsAction.type, getAnnouncements);
}
