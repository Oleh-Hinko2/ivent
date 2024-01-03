import { Filter } from "../../filters";

export interface Announcement {
  _id: string;
  name: string;
  description: string;
  watch_number: number;
  price: number;
  images: string[];
}

export interface ListingData {
  list?: Announcement[];
}

export interface ListingProps {
  data: Announcement[];
  locale: string;
  filters: Filter[];
}

export type AnnouncementProps = {
  announcement: Announcement;
  locale: string;
};
