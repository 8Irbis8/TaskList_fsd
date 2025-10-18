import React from 'react';
import { useForm } from 'react-hook-form';
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

  return (
    <Paper elevation={2} sx={{ padding: 3, maxWidth: 500, width: '100%' }}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: 'flex', flexDirection: 'column' }}
      >
       <Typography align={'center'}> Регистрация</Typography>
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

        <Divider sx={{ my: 1 }} />

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
          sx={{ mt: 2 }}
          startIcon={isLoading ? <CircularProgress size={20} /> : null}
        >
          {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
        </Button>
      </Box>
    </Paper>
  );
};