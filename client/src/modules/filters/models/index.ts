import { FilterTypes } from "../constants/types";
export enum FilterStatus {
  pending = "pending",
  active = "active",
  inactive = "inactive",
  deleted = "deleted",
}

export interface Filter {
  _id: string;
  name: string;
  description: string;
  icon: string;
  status: FilterStatus;
  type: FilterTypes | null;
}

export interface DefaultFilter {
  _id: string;
  description: string;
  name: string;
  type: FilterTypes | null;
}

export interface FiltersData {
  list: Filter[];
  totalItems: number;
  openCreateModal: boolean;
  openConfirmModal: boolean;
  currentFilter: DefaultFilter | Filter;
  mode: Mode;
  confirmModalType: ConfirmModalType;
}

export interface CreateFilter {
  name: string;
  description: string;
  icon?: File;
}

export interface UpdateFilter extends CreateFilter {
  _id: string;
}

export interface UpdateFilterStatus {
  id: string;
  status: FilterStatus;
}

export interface DeleteFilter {
  id: string;
}

export type Mode = "edit" | "create";

export enum ConfirmModalType {
  deleteFilter = "deleteFilter",
  activeFilter = "activeFilter",
  inactiveFilter = "inactiveFilter",
}
