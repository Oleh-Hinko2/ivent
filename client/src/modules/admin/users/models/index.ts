export interface User {
  _id: string;
  name: string;
  description: string;
}

export interface UsersData {
  list: User[];
  totalItems: number;
}
