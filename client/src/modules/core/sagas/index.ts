import { all } from "redux-saga/effects";
import { watchAnnouncements } from "../../admin/announcements";
import { watchUsers } from "../../admin/users";
import { watchAuth } from "../../auth";
import { watchFilters } from "../../filters";
import { watchListing } from "../../listing";

export function* rootSaga() {
  yield all([
    watchListing(),
    watchAnnouncements(),
    watchUsers(),
    watchFilters(),
    watchAuth(),
  ]);
}
