import React from 'react';
import { useFieldArray } from 'react-hook-form';
import { Box, Button, IconButton } from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';
import type { UseFormRegister, Control, FieldErrors } from 'react-hook-form';
import type { SignInFormData } from '../model/types';
import { TextField } from 'shared/ui/TextField/TextField';


export interface SocialLinksProps {
  control: Control<SignInFormData>;
  register: UseFormRegister<SignInFormData>;
  errors: FieldErrors<SignInFormData>;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  control,
  register,
  errors,
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'socialLinks',
  });

  return (
    <Box sx={{ mb: 2 }}>
      {fields.map((field, index) => (
        <Box key={field.id} sx={{ display: 'flex', gap: 1, alignItems: 'flex-start', mb: 2 }}>
          <TextField
            label="Социальная ссылка"
            type="url"
            error={errors.socialLinks?.[index]?.url?.message}
            registration={register(`socialLinks.${index}.url` as const)}
            placeholder="https://github.com/username"
            sx={{ flex: 1 }}
          />
          <IconButton
            onClick={() => remove(index)}
            disabled={fields.length === 1}
            color="error"
            sx={{ mt: 2 }}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ))}

      <Button
        type="button"
        onClick={() => append({ url: '' })}
        variant="outlined"
        startIcon={<AddIcon />}
      >
        Добавить ссылку
      </Button>
    </Box>
  );
};