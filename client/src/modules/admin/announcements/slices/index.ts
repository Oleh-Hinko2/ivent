import {
  SliceCaseReducers,
  createSlice,
  Slice,
  PayloadAction,
  CaseReducer,
} from "@reduxjs/toolkit";
import { GetQueriesData } from "../../../core/models";
import { defaultState } from "../constants";

import { Announcement, AnnouncementsData } from "../models";

interface SliceAnnouncementReducer
  extends SliceCaseReducers<AnnouncementsData> {
  getAnnouncementsAction: CaseReducer<
    AnnouncementsData,
    PayloadAction<GetQueriesData>
  >;
  setAnnouncementsAction: CaseReducer<
    AnnouncementsData,
    PayloadAction<Announcement[]>
  >;
}

const noStateChange = (state: AnnouncementsData) => state;

export const sliceAnnouncements: Slice<
  AnnouncementsData,
  SliceAnnouncementReducer
> = createSlice({
  initialState: defaultState,
  name: "announcements",
  reducers: {
    getAnnouncementsAction: noStateChange,
    setAnnouncementsAction: (state, action) => {
      return {
        ...state,
        list: action.payload.items,
        totalItems: action.payload.totalItems,
      };
    },

    getAdminDataAction: noStateChange,
  },
});

export const { getAnnouncementsAction, setAnnouncementsAction } =
  sliceAnnouncements.actions;
