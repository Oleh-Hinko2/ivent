import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { GetQueriesData } from "../../core/models";
import { prepareFormData } from "../../shared/utils";
import {
  createNewFilter,
  deleteFilterById,
  getFilterList,
  updateFilterById,
  updateFilterStatusById,
} from "../api";
import { defaultState } from "../constants";
import {
  ConfirmModalType,
  CreateFilter,
  DeleteFilter,
  UpdateFilter,
  UpdateFilterStatus,
} from "../models";

import {
  createFilterAction,
  deleteFilterAction,
  getFiltersAction,
  setConfirmModalTypeAction,
  setFilterAction,
  setFilterListAction,
  toggleOpenConfirmModalAction,
  toggleOpenCreteModalAction,
  updateFilterAction,
  updateFilterStatusAction,
} from "../slices";

export function* getFilters(action: PayloadAction<GetQueriesData>) {
  try {
    const { data } = yield call(getFilterList, action.payload);
    yield put(setFilterListAction(data));
  } catch (error: any) {
    console.error(error);
  }
}

export function* createFilter(action: PayloadAction<CreateFilter>) {
  try {
    const formData = prepareFormData(action.payload) as FormData;

    yield call(createNewFilter, formData);
    yield put(getFiltersAction({ count: 5, offset: 0 }));
    yield put(toggleOpenCreteModalAction({ open: false, mode: "create" }));
  } catch (error: any) {
    console.error(error);
  }
}

export function* deleteFilter(action: PayloadAction<DeleteFilter>) {
  try {
    yield call(deleteFilterById, action.payload);
    yield put(getFiltersAction({ count: 5, offset: 0 }));
    yield put(toggleOpenConfirmModalAction({ open: false }));
    yield put(setFilterAction(defaultState.currentFilter));
  } catch (error: any) {
    console.error(error);
  }
}

export function* updateFilter(action: PayloadAction<UpdateFilter>) {
  try {
    yield call(updateFilterById, action.payload);
    yield put(getFiltersAction({ count: 5, offset: 0 }));
    yield put(toggleOpenCreteModalAction({ open: false, mode: "create" }));
    yield put(setFilterAction(defaultState.currentFilter));
  } catch (error: any) {
    console.error(error);
  }
}

export function* updateFilterStatus(action: PayloadAction<UpdateFilterStatus>) {
  try {
    yield call(updateFilterStatusById, action.payload);
    yield put(getFiltersAction({ count: 5, offset: 0 }));
    yield put(setConfirmModalTypeAction(ConfirmModalType.deleteFilter));
    yield put(toggleOpenConfirmModalAction({ open: false }));
  } catch (error: any) {
    console.error(error);
  }
}

export function* watchFilters() {
  yield takeLatest(getFiltersAction.type, getFilters);
  yield takeLatest(createFilterAction.type, createFilter);
  yield takeLatest(deleteFilterAction.type, deleteFilter);
  yield takeLatest(updateFilterAction.type, updateFilter);
  yield takeLatest(updateFilterStatusAction.type, updateFilterStatus);
}
