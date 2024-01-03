import React, { BaseSyntheticEvent, memo } from "react";

import { TextareaWrapper } from "./TextArea.module";

import { ErrorWrapper } from "../Input/Input.style";
import { BaseTextFieldProps, Typography } from "@mui/material";
import { capitalizeFirstLetter } from "../../utils";

interface TextareaProps {
  placeholder?: string;
  value?: string;
  name?: string;
  rows?: number;
  maxRows?: number;
  onChange?: (e: BaseSyntheticEvent) => void;
  errorText?: string | null;
  label?: string;
}

export const TextArea: React.FC<TextareaProps & BaseTextFieldProps> = memo(
  ({
    placeholder,
    value,
    name,
    rows = 2,
    onChange,
    onBlur,
    errorText,
    label,
    ...props
  }) => {
    return (
      <>
        {label && <Typography variant="body1">{label}</Typography>}
        <TextareaWrapper
          placeholder={placeholder}
          name={name}
          multiline
          rows={rows}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          variant="filled"
          {...props}
        />
        {errorText ? (
          <ErrorWrapper>{capitalizeFirstLetter(errorText)}</ErrorWrapper>
        ) : null}
      </>
    );
  }
);

export default TextArea;
