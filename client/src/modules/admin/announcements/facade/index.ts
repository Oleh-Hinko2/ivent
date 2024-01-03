import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Pagination, State } from "../../../core/models";
import { usePagination } from "../../../shared/hooks";
import { Announcement } from "../models";
import { getAnnouncementsAction } from "../slices";

interface FetchAnnouncementsParams {
  page: number;
}

interface AnnouncementsFacade {
  data: Announcement[];
  changeTablePage: (page: number) => void;
  fetchAnnouncements: (params: FetchAnnouncementsParams) => void;
  pagination: Pagination;
  totalItems: number;
}

export const useAnnouncementsFacade = (): AnnouncementsFacade => {
  const dispatch = useDispatch();

  const { paginationRef, updatePagination } = usePagination();

  const data = useSelector(
    (state: State): Announcement[] | [] => state.announcements.list
  );
  const totalItems = useSelector(
    (state: State): number => state.announcements.totalItems
  );

  const fetchAnnouncements = ({ page = 0 }: FetchAnnouncementsParams) => {
    dispatch(
      getAnnouncementsAction({
        count: paginationRef.current.rowsPerPage,
        offset: Number(page * paginationRef.current.rowsPerPage),
      })
    );
  };

  const changeTablePage = useCallback((page: number) => {
    fetchAnnouncements({ page });
    updatePagination({ page });
  }, []);

  return {
    data,
    totalItems,
    fetchAnnouncements,

    pagination: paginationRef.current,
    changeTablePage,
  };
};
