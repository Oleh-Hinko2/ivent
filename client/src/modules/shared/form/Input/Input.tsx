import React from "react";

import { Box, InputBaseProps, Typography } from "@mui/material";

import { ErrorWrapper, InputWrapper } from "./Input.style";
import { capitalizeFirstLetter } from "../../utils";

interface InputProps {
  placeholder?: string;
  type?: string;
  value?: string;
  name?: string;
  adornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
  errorText?: string | null;
  autoComplete?: string;
  label?: string;
}

export const Input: React.FC<InputProps & InputBaseProps> = ({
  placeholder,
  type,
  value,
  name,
  adornment,
  startAdornment,
  errorText,
  autoComplete = "of",
  label = "",
  ...props
}) => {
  return (
    <Box display="flex" flexDirection="column">
      {label && <Typography variant="body1">{label}</Typography>}
      <InputWrapper
        placeholder={placeholder}
        value={value}
        type={type}
        name={name}
        startAdornment={startAdornment}
        endAdornment={adornment}
        error={!!errorText}
        autoComplete={autoComplete}
        {...props}
      />
      {errorText ? (
        <ErrorWrapper>{capitalizeFirstLetter(errorText)}</ErrorWrapper>
      ) : null}
    </Box>
  );
};

export default Input;
