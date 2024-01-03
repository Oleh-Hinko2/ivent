import {
  SliceCaseReducers,
  createSlice,
  Slice,
  PayloadAction,
  CaseReducer,
} from "@reduxjs/toolkit";
import { GetQueriesData } from "../../core/models";
import { defaultState } from "../constants";

import {
  ConfirmModalType,
  CreateFilter,
  DefaultFilter,
  DeleteFilter,
  Filter,
  FiltersData,
  Mode,
  UpdateFilter,
  UpdateFilterStatus,
} from "../models";

interface ToggleOpenModal {
  open: boolean;
}

interface ToggleOpenCreateModal extends ToggleOpenModal {
  mode: Mode;
}

interface SliceFiltersReducer extends SliceCaseReducers<FiltersData> {
  getFiltersAction: CaseReducer<FiltersData, PayloadAction<GetQueriesData>>;
  createFilterAction: CaseReducer<FiltersData, PayloadAction<CreateFilter>>;
  updateFilterAction: CaseReducer<FiltersData, PayloadAction<UpdateFilter>>;
  updateFilterStatusAction: CaseReducer<
    FiltersData,
    PayloadAction<UpdateFilterStatus>
  >;
  deleteFilterAction: CaseReducer<FiltersData, PayloadAction<DeleteFilter>>;
  setFilterListAction: CaseReducer<FiltersData, PayloadAction<Filter[]>>;
  setFilterAction: CaseReducer<
    FiltersData,
    PayloadAction<Filter | DefaultFilter>
  >;
  setConfirmModalTypeAction: CaseReducer<
    FiltersData,
    PayloadAction<ConfirmModalType>
  >;
  toggleOpenCreteModalAction: CaseReducer<
    FiltersData,
    PayloadAction<ToggleOpenCreateModal>
  >;
  toggleOpenConfirmModalAction: CaseReducer<
    FiltersData,
    PayloadAction<ToggleOpenModal>
  >;
}

const noStateChange = (state: FiltersData) => state;

export const sliceFilters: Slice<FiltersData, SliceFiltersReducer> =
  createSlice({
    initialState: defaultState,
    name: "filters",
    reducers: {
      getFiltersAction: noStateChange,
      createFilterAction: noStateChange,
      deleteFilterAction: noStateChange,
      updateFilterAction: noStateChange,
      updateFilterStatusAction: noStateChange,
      toggleOpenCreteModalAction: (state, action) => {
        return {
          ...state,
          openCreateModal: action.payload.open,
          mode: action.payload.mode,
        };
      },
      toggleOpenConfirmModalAction: (state, action) => {
        return {
          ...state,
          openConfirmModal: action.payload.open,
        };
      },
      setFilterListAction: (state, action) => {
        return {
          ...state,
          list: action.payload.items,
          totalItems: action.payload.totalItems,
        };
      },
      setFilterAction: (state, action) => {
        return {
          ...state,
          currentFilter: action.payload,
        };
      },
      setConfirmModalTypeAction: (state, action) => {
        return {
          ...state,
          confirmModalType: action.payload,
        };
      },
    },
  });

export const {
  getFiltersAction,
  createFilterAction,
  deleteFilterAction,
  setFilterListAction,
  updateFilterAction,
  updateFilterStatusAction,
  toggleOpenConfirmModalAction,
  toggleOpenCreteModalAction,
  setFilterAction,
  setConfirmModalTypeAction,
} = sliceFilters.actions;
