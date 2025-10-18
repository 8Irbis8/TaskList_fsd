import React, { useRef } from 'react';
import { Button, Box, Typography, Paper } from '@mui/material';

interface ClickData {
  startTime: number | null;
  clickCount: number;
}

export const ClickTimer: React.FC = () => {
  const clickDataRef = useRef<ClickData>({
    startTime: null,
    clickCount: 0,
  });

  const handleClick = () => {
    const currentTime = Date.now();
    const { startTime, clickCount } = clickDataRef.current;
    
    if (!startTime) {
      // Первый клик - устанавливаем время начала
      clickDataRef.current.startTime = currentTime;
      clickDataRef.current.clickCount = 1;
      console.log('Первый клик! Время начала зафиксировано.');
    } else {
      // Последующие клики
      const timeDifference = currentTime - startTime;
      const newClickCount = clickCount + 1;
      
      clickDataRef.current.clickCount = newClickCount;
      
      console.log(`Разница времени: ${timeDifference}мс, Всего кликов: ${newClickCount}`);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Click Timer
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 2 }}>
          Нажмите на кнопку чтобы начать отсчет времени
        </Typography>

        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleClick}
          size="large"
          sx={{ mb: 2 }}
        >
          Кликнуть
        </Button>

        <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
          Откройте консоль браузера чтобы увидеть детальную информацию
        </Typography>
      </Box>
    </Paper>
  );
};
