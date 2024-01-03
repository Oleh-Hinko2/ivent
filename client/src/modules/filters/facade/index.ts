import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Pagination, State } from "../../core/models";
import { usePagination } from "../../shared/hooks";
import { defaultState } from "../constants";
import {
  ConfirmModalType,
  CreateFilter,
  DefaultFilter,
  Filter,
  FilterStatus,
  Mode,
  UpdateFilter,
} from "../models";
import {
  createFilterAction,
  deleteFilterAction,
  getFiltersAction,
  setConfirmModalTypeAction,
  setFilterAction,
  toggleOpenConfirmModalAction,
  toggleOpenCreteModalAction,
  updateFilterAction,
  updateFilterStatusAction,
} from "../slices";

interface FetchFiltersParams {
  page: number;
}

interface FiltersFacade {
  data: Filter[];
  mode: Mode;
  changeTablePage: (page: number) => void;
  fetchFilters: (params: FetchFiltersParams) => void;
  pagination: Pagination;
  totalItems: number;
  openCreateModal: boolean;
  onOpenCreateModal: (mode: Mode) => void;
  onCloseCreateModal: () => void;
  createNewFilter: (data: CreateFilter) => void;
  openConfirmModal: boolean;
  onOpenConfirmModal: (type: ConfirmModalType) => void;
  onCloseConfirmModal: () => void;
  currentFilter: DefaultFilter | Filter;
  setCurrentFilter: (filter: Filter) => void;
  deleteFilter: () => void;
  updateFilter: (data: UpdateFilter) => void;
  onActionModal: (data: CreateFilter) => void;
  confirmModalType: ConfirmModalType;
  onConfirmModal: () => void;
}

export const useFiltersFacade = (): FiltersFacade => {
  const dispatch = useDispatch();

  const { paginationRef, updatePagination } = usePagination();

  const data = useSelector((state: State): Filter[] | [] => state.filters.list);
  const totalItems = useSelector(
    (state: State): number => state.filters.totalItems
  );
  const openCreateModal = useSelector(
    (state: State): boolean => state.filters.openCreateModal
  );
  const openConfirmModal = useSelector(
    (state: State): boolean => state.filters.openConfirmModal
  );
  const currentFilter = useSelector(
    (state: State): DefaultFilter | Filter => state.filters.currentFilter
  );
  const mode = useSelector((state: State): Mode => state.filters.mode);
  const confirmModalType = useSelector(
    (state: State): ConfirmModalType => state.filters.confirmModalType
  );

  const fetchFilters = ({ page = 0 }: FetchFiltersParams) => {
    dispatch(
      getFiltersAction({
        count: paginationRef.current.rowsPerPage,
        offset: Number(page * paginationRef.current.rowsPerPage),
      })
    );
  };

  const createNewFilter = (data: CreateFilter) => {
    dispatch(createFilterAction(data));
  };

  const deleteFilter = () => {
    if (currentFilter._id) {
      dispatch(deleteFilterAction({ id: currentFilter._id }));
    }
  };

  const updateFilterStatus = useCallback(() => {
    if (
      currentFilter._id &&
      confirmModalType === ConfirmModalType.activeFilter
    ) {
      dispatch(
        updateFilterStatusAction({
          id: currentFilter._id,
          status: FilterStatus.active,
        })
      );
    }

    if (
      currentFilter._id &&
      confirmModalType === ConfirmModalType.inactiveFilter
    ) {
      dispatch(
        updateFilterStatusAction({
          id: currentFilter._id,
          status: FilterStatus.inactive,
        })
      );
    }
  }, [confirmModalType, currentFilter]);

  const updateFilter = (data: UpdateFilter) => {
    if (currentFilter._id) {
      dispatch(updateFilterAction(data));
    }
  };

  const changeTablePage = useCallback((page: number) => {
    fetchFilters({ page });
    updatePagination({ page });
  }, []);

  const onOpenCreateModal = useCallback((mode: Mode) => {
    if (mode == "create") {
      dispatch(setFilterAction(defaultState.currentFilter));
    }
    dispatch(toggleOpenCreteModalAction({ open: true, mode }));
  }, []);

  const onCloseCreateModal = useCallback(() => {
    dispatch(toggleOpenCreteModalAction({ open: false, mode: "create" }));
  }, []);

  const onOpenConfirmModal = useCallback((type: ConfirmModalType) => {
    dispatch(toggleOpenConfirmModalAction({ open: true }));
    dispatch(setConfirmModalTypeAction(type));
  }, []);

  const onConfirmModal = useCallback(() => {
    if (confirmModalType === ConfirmModalType.deleteFilter) {
      return deleteFilter();
    }
    return updateFilterStatus();
  }, [confirmModalType, deleteFilter, updateFilterStatus]);

  const onCloseConfirmModal = useCallback(() => {
    dispatch(toggleOpenConfirmModalAction({ open: false }));
  }, []);

  const setCurrentFilter = useCallback((filter: Filter) => {
    dispatch(setFilterAction(filter));
  }, []);

  const onActionModal = useCallback(
    (data: CreateFilter) => {
      mode === "create"
        ? createNewFilter({
            name: data.name,
            description: data.description,
            icon: data.icon,
          })
        : updateFilter({ _id: currentFilter._id, ...data });
    },
    [mode]
  );

  return {
    data,
    totalItems,
    mode,

    fetchFilters,
    createNewFilter,
    deleteFilter,
    updateFilter,

    pagination: paginationRef.current,
    changeTablePage,

    openCreateModal,
    onOpenCreateModal,
    onCloseCreateModal,

    openConfirmModal,
    confirmModalType,
    onConfirmModal,
    onOpenConfirmModal,
    onCloseConfirmModal,

    currentFilter,
    setCurrentFilter,

    onActionModal,
  };
};
