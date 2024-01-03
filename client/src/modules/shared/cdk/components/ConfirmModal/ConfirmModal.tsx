import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import { ConfirmModalType } from "../../../../filters";

interface ConfirmModal {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  type: ConfirmModalType;
}

const ConfirmModal = ({ open, onClose, onConfirm, type }: ConfirmModal) => {
  const { t } = useTranslation("confirmModal");

  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 435 } }}
      maxWidth="xs"
      open={open}
      onClose={onClose}
    >
      <DialogTitle>{t(`${type}.title`)}</DialogTitle>
      <DialogContent dividers>{t(`${type}.description`)}</DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose}>
          Скасувати
        </Button>
        <Button onClick={onConfirm}>{t(`${type}.confirmBtn`)}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmModal;
