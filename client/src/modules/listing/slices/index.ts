import {
  SliceCaseReducers,
  createSlice,
  Slice,
  PayloadAction,
  CaseReducer,
} from "@reduxjs/toolkit";
import { defaultState } from "../constants";

import { Announcement, ListingData } from "../models";

interface SliceListingReducer extends SliceCaseReducers<ListingData> {
  getListingsAction: CaseReducer<ListingData, PayloadAction>;
  setListingsAction: CaseReducer<ListingData, PayloadAction<Announcement[]>>;
}

const noStateChange = (state: ListingData) => state;

export const sliceListing: Slice<ListingData, SliceListingReducer> =
  createSlice({
    initialState: defaultState,
    name: "listing",
    reducers: {
      getListingsAction: noStateChange,
      setListingsAction: (state, action) => {
        return {
          // ...state,
          list: action.payload,
        };
      },

      getAdminDataAction: noStateChange,
    },
  });

export const { getListingsAction, setListingsAction } = sliceListing.actions;
