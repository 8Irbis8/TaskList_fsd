import React, { useRef } from 'react';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';

export const FocusTracker: React.FC = () => {
  const firstInputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);
  const focusTransitionCountRef = useRef<number>(0);

  const handleFocusFirst = () => {
    firstInputRef.current?.focus();
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    // Проверяем, что фокус перешел с другого элемента (не начальная установка)
    if (event.relatedTarget) {
      focusTransitionCountRef.current += 1;
      console.log(`Переход фокуса №${focusTransitionCountRef.current}`);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Focus Tracker
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
          <TextField
            label="Первое поле"
            variant="outlined"
            inputRef={firstInputRef}
            onFocus={handleFocus}
            fullWidth
          />
          
          <TextField
            label="Второе поле"
            variant="outlined"
            inputRef={secondInputRef}
            onFocus={handleFocus}
            fullWidth
          />
        </Box>

        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleFocusFirst}
          sx={{ mb: 2 }}
        >
          Сфокусировать на первом
        </Button>

        <Box sx={{ mt: 2, p: 2, backgroundColor: 'grey.100', borderRadius: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Нажимайте на поля ввода или кнопку для перехода фокуса
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Откройте консоль браузера чтобы увидеть счетчик переходов
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

