
import { z } from 'zod';

// Схема для одной социальной ссылки
export const socialLinkSchema = z.object({
  url: z.string().min(1, 'Ссылка обязательна').url('Некорректный URL'),
});

export const validationSchema = z.object({
  username: z.string().min(1, 'Имя пользователя обязательно'),
  email: z.string().min(1, 'Email обязателен').email('Некорректный email'),
  password: z.string().min(6, 'Пароль должен содержать минимум 6 символов'),
  confirmPassword: z.string().min(1, 'Подтверждение пароля обязательно'),
  socialLinks: z.array(socialLinkSchema).min(0),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Пароли не совпадают',
  path: ['confirmPassword'],
});

