import { useCallback, useRef, useState } from "react";

export const useFilters = (initialFilters) => {
  const [filters, setFilters] = useState(initialFilters);

  const filtersRef = useRef(initialFilters);

  filtersRef.current = filters;

  const updateFilters = useCallback((partialFilters) => {
    setFilters((currentFilters) => ({ ...currentFilters, ...partialFilters }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(initialFilters);
  }, [initialFilters]);

  const clearFilters = useCallback(() => setFilters({}), []);

  return { updateFilters, resetFilters, filtersRef, clearFilters };
};
