import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { AdminLayout, Table } from "../../../modules/shared";
import type { ReactElement } from "react";
import { useAnnouncementsFacade } from "../../../modules/admin/announcements/facade";

const columns: GridColDef[] = [
  { field: "name", headerName: "Назва", width: 150 },
  { field: "description", headerName: "Опис", width: 200 },
  {
    field: "watch_number",
    headerName: "К-сть переглядів",
    type: "number",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "author_id",
    headerName: "Автор",
    width: 120,
    align: "center",
    headerAlign: "center",
    valueGetter: (params: GridValueGetterParams) => {
      return `${params.row?.user_id?.name}`;
    },
  },
];

const AdminAnnouncements = () => {
  const { data, totalItems, changeTablePage, fetchAnnouncements, pagination } =
    useAnnouncementsFacade();

  useEffect(() => {
    fetchAnnouncements({ page: pagination.page });
  }, []);

  return (
    <Box>
      <Table
        data={data.map((item) => ({ id: item._id, ...item }))}
        columns={columns}
        onPageChange={changeTablePage}
        pagination={pagination}
        totalItems={totalItems}
      />
    </Box>
  );
};

export default AdminAnnouncements;

AdminAnnouncements.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
