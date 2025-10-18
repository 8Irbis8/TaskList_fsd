import React, { useState, useRef } from 'react';
import { TextField, Box, Typography, Paper } from '@mui/material';

export const DebouncedLogger: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const timeoutRef = useRef<number | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    // Очищаем предыдущий таймер
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Устанавливаем новый таймер
    timeoutRef.current = setTimeout(() => {
      console.log(`Debounced value: ${value}`);
    
    }, 1000);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Debounced Logger
        </Typography>

        <TextField
          label="Введите текст"
          variant="outlined"
          value={inputValue}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 3 }}
        />

        <Box sx={{ mt: 2, p: 2, backgroundColor: 'grey.100', borderRadius: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Текущее значение: {inputValue || '-'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Значение в консоли появится через 1 секунду после остановки ввода
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

