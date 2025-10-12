import React from 'react';
import { TextField as MuiTextField} from '@mui/material';
import type { TextFieldProps as MuiTextFieldProps } from '@mui/material';
import type { UseFormRegisterReturn } from 'react-hook-form';

export interface TextFieldProps extends Omit<MuiTextFieldProps, 'error'> {
  registration?: UseFormRegisterReturn;
  error?: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  registration,
  error,
  ...props
}) => {
  return (
    <MuiTextField
      {...registration}
      {...props} 
      error={!!error}
      helperText={error}
      fullWidth
      variant="outlined"
      margin="normal"
    />
  );
};