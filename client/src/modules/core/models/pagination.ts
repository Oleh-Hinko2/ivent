export interface Pagination {
  page: number;
  rowsPerPage: number;
}

export interface UpdatePagination {
  page: number;
  rowsPerPage?: number;
}
