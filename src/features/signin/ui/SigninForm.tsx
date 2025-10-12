import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  Button,
  Paper,
  Typography,
  CircularProgress,
  Divider
} from '@mui/material';

import type { SignInFormData } from '../model/types';
import { validationSchema } from '../model/validator';
import { TextField } from 'shared/ui/TextField/TextField';
import { SocialLinks } from './SocialLinks';

export interface SignInFormProps {
  onSubmit: (data: SignInFormData) => void;
  isLoading?: boolean;
}

export const SignInForm: React.FC<SignInFormProps> = ({
  onSubmit,
  isLoading = false,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(validationSchema),
    mode: 'onChange',
    defaultValues: {
      socialLinks: [{ url: '' }], // Одно поле по умолчанию
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'socialLinks',
  });

  const addSocialLink = () => {
    append({ url: '' });
  };

  const removeSocialLink = (index: number) => {
    remove(index);
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, maxWidth: 500, width: '100%' }}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: 'flex', flexDirection: 'column' }}
      >
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Регистрация
        </Typography>
        
        {/* Основные поля */}
        <TextField
          label="Имя пользователя"
          type="text"
          error={errors.username?.message}
          registration={register('username')}
          placeholder="Введите имя пользователя"
        />
        
        <TextField
          label="Email"
          type="email"
          error={errors.email?.message}
          registration={register('email')}
          placeholder="Введите email"
        />
        
        <TextField
          label="Пароль"
          type="password"
          error={errors.password?.message}
          registration={register('password')}
          placeholder="Введите пароль"
        />
        
        <TextField
          label="Подтверждение пароля"
          type="password"
          error={errors.confirmPassword?.message}
          registration={register('confirmPassword')}
          placeholder="Повторите пароль"
        />

        <Divider sx={{ my: 3 }} />

        {/* Социальные ссылки */}
        <SocialLinks 
          control={control}
          register={register}
          errors={errors}
        />


        {/* Кнопка отправки */}
        <Button
          type="submit"
          disabled={isLoading}
          variant="contained"
          size="large"
          sx={{ mt: 3 }}
          startIcon={isLoading ? <CircularProgress size={20} /> : null}
        >
          {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
        </Button>
      </Box>
    </Paper>
  );
};