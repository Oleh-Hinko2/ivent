import { AnnouncementsData } from "../../admin/announcements";
import { UsersData } from "../../admin/users";
import { AuthData } from "../../auth/models";
import { FiltersData } from "../../filters";

export interface State {
  announcements: AnnouncementsData;
  users: UsersData;
  filters: FiltersData;
  auth: AuthData;
}
