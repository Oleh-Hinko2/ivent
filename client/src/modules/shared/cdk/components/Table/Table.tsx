import React from "react";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Pagination } from "../../../../core/models";
import { FilterStatus, FilterTypes } from "../../../../filters";

// import { LicenseInfo } from "@mui/x-data-grid-pro";

export interface ColumnDataProps {
  _id: string;
  id: string;
  name?: string;
  description?: string;
  watch_number?: number | null;
  author_id?: string;
  announcements?: number;
  type?: string | FilterTypes | null;
  status?: FilterStatus;
}

declare interface CustomTableProps {
  columns: GridColDef[];
  data: ColumnDataProps[];
  totalItems: number;
  pagination: Pagination;
  onPageChange: (page: number) => void;
}

// LicenseInfo.setLicenseKey(
//   "c058f7350a58aa6234374ed3a6239638T1JERVI6TVVJLTEyMyxFWFBJUlk9MTcwMTg2OTgyMjA5OCxLRVlWRVJTSU9OPTE="
// );

const CustomTable: React.FC<CustomTableProps> = ({
  columns,
  data,
  totalItems,
  pagination,
  onPageChange,
}) => {
  return (
    <DataGrid
      rows={data}
      columns={columns}
      pagination
      paginationMode="server"
      rowCount={totalItems}
      onPaginationModelChange={({ page }) => onPageChange(page)}
      initialState={{
        pagination: {
          paginationModel: {
            page: pagination.page,
            pageSize: pagination.rowsPerPage,
          },
        },
      }}
      pageSizeOptions={[5, 10]}
    />
  );
};

export default CustomTable;
