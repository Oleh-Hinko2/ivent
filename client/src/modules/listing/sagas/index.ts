import { call, put, takeLatest } from "redux-saga/effects";
import { getListingList } from "../api";

import { getListingsAction, setListingsAction } from "../slices";

export function* getListings() {
  try {
    const { data } = yield call(getListingList);
    yield put(setListingsAction(data));
  } catch (error: any) {
    console.error(error);
  }
}

export function* watchListing() {
  yield takeLatest(getListingsAction.type, getListings);
}
