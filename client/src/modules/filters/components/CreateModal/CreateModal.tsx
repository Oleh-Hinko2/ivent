import { Box, Button, Dialog, Typography } from "@mui/material";
import { useFormik } from "formik";
import { Input, Textarea, UploadIcon } from "../../../shared";
import { CreateFilter, DefaultFilter, Filter, Mode } from "../../models";
import { createFilterSchema } from "../../schemas";

interface CreateModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: CreateFilter) => void;
  currentFilter: Filter | DefaultFilter;
  mode: Mode;
}

const CreateModal = ({
  open,
  onClose,
  onSubmit,
  currentFilter,
  mode,
}: CreateModalProps) => {
  const formik = useFormik({
    initialValues: currentFilter,
    onSubmit: onSubmit,
    validationSchema: createFilterSchema,
    validateOnBlur: true,
    validateOnChange: true,
  });

  const handleFileUpload = (file: File) => {
    formik.setFieldValue("icon", file);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": { width: "80%", maxHeight: 435, padding: "50px" },
      }}
    >
      <Typography variant="h6">
        {mode === "create" ? "Новий фільтер" : "Редагування фільтра"}
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ width: "100%" }}>
          <Input
            label="Назва фільтра"
            placeholder="Введіть назва фільтру"
            type="text"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            errorText={
              formik.touched.name && formik.errors.name
                ? formik.errors.name
                : null
            }
          />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Textarea
            label="Опис фільтра"
            placeholder="Введіть опис фільтру"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
            onBlur={formik.handleBlur}
            errorText={
              formik.touched.description && formik.errors.description
                ? formik.errors.description
                : null
            }
          />
        </Box>
        <Box sx={{ width: "100%" }}>
          <UploadIcon
            label="Завантажити іконку"
            onFileUpload={handleFileUpload}
          />
        </Box>
        <Button onClick={onClose}>Скасувати</Button>
        <Button type="submit">
          {mode === "create" ? "Створити" : "Рдагувати"}
        </Button>
      </form>
    </Dialog>
  );
};

export default CreateModal;
