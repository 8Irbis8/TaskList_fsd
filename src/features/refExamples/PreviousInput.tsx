import React, { useState, useEffect, useRef } from 'react';
import { TextField, Box, Typography, Paper } from '@mui/material';

export const PreviousInput: React.FC = () => {
  const [currentValue, setCurrentValue] = useState<string>('');
  const previousValueRef = useRef<string>('');

  useEffect(() => {
    // Обновляем ref при каждом изменении currentValue
    previousValueRef.current = currentValue;
  }, [currentValue]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Previous Input
        </Typography>

        <TextField
          label="Введите текст"
          variant="outlined"
          value={currentValue}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 3 }}
        />

        <Box sx={{ mt: 2, p: 2, backgroundColor: 'grey.100', borderRadius: 1 }}>
          <Typography variant="body1" gutterBottom>
            Текущее значение: {currentValue || '-'}
          </Typography>
          <Typography variant="body1">
            Предыдущее значение: {previousValueRef.current || '-'}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};
