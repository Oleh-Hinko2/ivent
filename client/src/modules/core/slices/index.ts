import { sliceAnnouncements } from "../../admin/announcements";
import { sliceUsers } from "../../admin/users";
import { sliceAuth } from "../../auth/slices";
import { sliceFilters } from "../../filters";
import { sliceListing } from "../../listing/slices";

export const rootReducer = {
  auth: sliceAuth.reducer,
  listing: sliceListing.reducer,
  announcements: sliceAnnouncements.reducer,
  users: sliceUsers.reducer,
  filters: sliceFilters.reducer,
};
