import { ConfirmModalType, FiltersData } from "../models";

export const defaultState: FiltersData = {
  list: [],
  totalItems: 0,
  openCreateModal: false,
  openConfirmModal: false,
  confirmModalType: ConfirmModalType.deleteFilter,
  currentFilter: {
    _id: "",
    name: "",
    description: "",
    type: null,
  },
  mode: "create",
};
