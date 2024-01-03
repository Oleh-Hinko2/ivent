import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import type { ReactElement } from "react";
import Box from "@mui/material/Box";
import { AdminLayout, Table } from "../../../modules/shared";
import { useUsersFacade } from "../../../modules/admin/users";
import React, { useEffect } from "react";

const columns: GridColDef[] = [
  { field: "name", headerName: "Імя", width: 150 },
  { field: "description", headerName: "Про себе", width: 200 },
  {
    field: "announcements",
    headerName: "К-сть оголошень",
    type: "number",
    width: 150,
    align: "center",
    headerAlign: "center",
    valueGetter: (params: GridValueGetterParams) => {
      return `${params.row?.announcements?.length}`;
    },
  },
  {
    field: "type",
    headerName: "Тип користувача",
    width: 150,
  },
];

const AdminUsers = () => {
  const { data, totalItems, changeTablePage, fetchUsers, pagination } =
    useUsersFacade();

  useEffect(() => {
    fetchUsers({ page: pagination.page });
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

export default AdminUsers;

AdminUsers.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
