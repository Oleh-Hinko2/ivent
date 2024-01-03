import {
  GridActionsCellItem,
  GridColDef,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import type { ReactElement } from "react";
import { AdminLayout, ConfirmModal, Table } from "../../../modules/shared";
import React, { useEffect } from "react";
import { useFiltersFacade } from "../../../modules/filters/facade";
import { Button, Box, Typography } from "@mui/material";
import {
  ConfirmModalType,
  CreateModal,
  FilterStatus,
} from "../../../modules/filters";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Image from "next/image";

interface ServerSideProps {
  locale: string;
}

export const getServerSideProps = async ({ locale }: ServerSideProps) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["confirmModal"], null, [
        "en-US",
        "no",
      ])),
    },
  };
};

const AdminFilters = () => {
  const {
    data,
    totalItems,
    mode,

    changeTablePage,

    fetchFilters,

    pagination,

    openCreateModal,
    onOpenCreateModal,
    onCloseCreateModal,

    openConfirmModal,
    onConfirmModal,
    confirmModalType,
    onCloseConfirmModal,
    onOpenConfirmModal,

    currentFilter,
    setCurrentFilter,

    onActionModal,
  } = useFiltersFacade();

  useEffect(() => {
    fetchFilters({ page: pagination.page });
  }, []);

  const columns: GridColDef[] = [
    { field: "name", headerName: "Імя", width: 200 },
    { field: "description", headerName: "Опис", width: 350 },
    {
      field: "status",
      headerName: "Статус",
      width: 200,
    },
    {
      field: "icon",
      headerName: "Іконка",
      width: 200,
      renderCell: ({ value }) => {
        return (
          <Image
            src={`http:/localhost:3001/${value}`}
            alt={`icon`}
            width="30"
            height="30"
          />
        );
      },
    },
    {
      field: "actions",
      type: "actions",
      headerName: "",
      width: 100,
      getActions: ({ row }) => {
        return [
          <GridActionsCellItem
            icon={
              row.status === FilterStatus.active ? (
                <VisibilityIcon />
              ) : (
                <VisibilityOffIcon />
              )
            }
            label="visible"
            className="textPrimary"
            onClick={() => {
              setCurrentFilter(row);
              onOpenConfirmModal(
                row.status === FilterStatus.active
                  ? ConfirmModalType.inactiveFilter
                  : ConfirmModalType.activeFilter
              );
            }}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={() => {
              setCurrentFilter(row);
              onOpenCreateModal("edit");
            }}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => {
              setCurrentFilter(row);
              onOpenConfirmModal(ConfirmModalType.deleteFilter);
            }}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Фільтри</Typography>
        <Button onClick={() => onOpenCreateModal("create")}>
          Створити фільтер
        </Button>
      </Box>

      <Table
        data={data.map((item) => ({ id: item._id, ...item }))}
        columns={columns}
        onPageChange={changeTablePage}
        pagination={pagination}
        totalItems={totalItems}
      />

      {openCreateModal && (
        <CreateModal
          open={openCreateModal}
          onClose={onCloseCreateModal}
          onSubmit={onActionModal}
          currentFilter={currentFilter}
          mode={mode}
        />
      )}

      <ConfirmModal
        open={openConfirmModal}
        onClose={onCloseConfirmModal}
        onConfirm={onConfirmModal}
        type={confirmModalType}
      />
    </Box>
  );
};

export default AdminFilters;

AdminFilters.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
