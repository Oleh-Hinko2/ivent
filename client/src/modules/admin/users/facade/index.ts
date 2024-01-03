import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Pagination, State } from "../../../core/models";
import { usePagination } from "../../../shared/hooks";
import { User } from "../models";
import { getUsersAction } from "../slices";

interface FetchUsersParams {
  page: number;
}

interface UsersFacade {
  data: User[];
  changeTablePage: (page: number) => void;
  fetchUsers: (params: FetchUsersParams) => void;
  pagination: Pagination;
  totalItems: number;
}

export const useUsersFacade = (): UsersFacade => {
  const dispatch = useDispatch();

  const { paginationRef, updatePagination } = usePagination();

  const data = useSelector((state: State): User[] | [] => state.users.list);
  const totalItems = useSelector(
    (state: State): number => state.users.totalItems
  );

  const fetchUsers = ({ page = 0 }: FetchUsersParams) => {
    dispatch(
      getUsersAction({
        count: paginationRef.current.rowsPerPage,
        offset: Number(page * paginationRef.current.rowsPerPage),
      })
    );
  };

  const changeTablePage = useCallback((page: number) => {
    fetchUsers({ page });
    updatePagination({ page });
  }, []);

  return {
    data,
    totalItems,
    fetchUsers,

    pagination: paginationRef.current,
    changeTablePage,
  };
};
