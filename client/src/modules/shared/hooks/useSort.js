import { useCallback, useRef, useState } from "react";

export const useSort = (initialSort) => {
  const [sort, setSort] = useState(initialSort);

  const sortRef = useRef(initialSort);

  sortRef.current = sort;

  const updateSort = useCallback((partialSort) => {
    setSort(partialSort);
  }, []);

  const resetSort = useCallback(() => {
    setSort(initialSort);
  }, [initialSort]);

  return { updateSort, resetSort, sortRef };
};
