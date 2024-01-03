import { BaseSyntheticEvent, useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";

interface UploadIconProps {
  label?: string;
  onFileUpload: (file: File) => void;
}

const UploadIcon = ({ label, onFileUpload }: UploadIconProps) => {
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleFileUpload = (event: BaseSyntheticEvent) => {
    if (!event.target.files) {
      return;
    }

    const file = event.target.files[0];
    onFileUpload(file);

    const reader = new FileReader();

    reader.onloadend = () => {
      setImageUrl(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {label && <Typography variant="body1">{label}</Typography>}
      <Stack direction="row" alignItems="center" spacing={2}>
        <label htmlFor="upload-icon">
          <Button variant="contained" component="span">
            Завантажити
          </Button>
          <input
            id="upload-icon"
            hidden
            accept="image/*"
            type="file"
            onChange={handleFileUpload}
          />
        </label>
        {imageUrl && (
          <img src={imageUrl} alt="Uploaded Image" height="20" width="20" />
        )}
      </Stack>
    </Box>
  );
};

export default UploadIcon;
