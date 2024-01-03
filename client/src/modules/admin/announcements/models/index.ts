export interface Announcement {
  _id: string;
  name: string;
  description: string;
  watch_number: number;
  price: number;
  images: string[];
}

export interface AnnouncementsData {
  list: Announcement[];
  totalItems: number;
}
