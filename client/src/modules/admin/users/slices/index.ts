import {
  SliceCaseReducers,
  createSlice,
  Slice,
  PayloadAction,
  CaseReducer,
} from "@reduxjs/toolkit";
import { GetQueriesData } from "../../../core/models";
import { defaultState } from "../constants";

import { User, UsersData } from "../models";

interface SliceUsersReducer extends SliceCaseReducers<UsersData> {
  getUsersAction: CaseReducer<UsersData, PayloadAction<GetQueriesData>>;
  setUserListAction: CaseReducer<UsersData, PayloadAction<User[]>>;
}

const noStateChange = (state: UsersData) => state;

export const sliceUsers: Slice<UsersData, SliceUsersReducer> = createSlice({
  initialState: defaultState,
  name: "users",
  reducers: {
    getUsersAction: noStateChange,
    setUserListAction: (state, action) => {
      return {
        ...state,
        list: action.payload.items,
        totalItems: action.payload.totalItems,
      };
    },

    getAdminDataAction: noStateChange,
  },
});

export const { getUsersAction, setUserListAction } = sliceUsers.actions;
