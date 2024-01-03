import { useCallback, useEffect, useRef, useState } from "react";
import { Pagination, UpdatePagination } from "../../core/models";

export const usePagination = (
  initialPagination = {
    page: 0,
    rowsPerPage: 5,
  }
) => {
  const [pagination, setPagination] = useState<Pagination>(initialPagination);

  const paginationRef = useRef(initialPagination);

  useEffect(() => {
    paginationRef.current = pagination;
  }, [pagination]);

  const updatePagination = useCallback(
    (partialPagination: UpdatePagination) => {
      setPagination((currentPagination) => ({
        ...currentPagination,
        ...partialPagination,
      }));
    },
    []
  );

  return {
    paginationRef,
    updatePagination,
  };
};
