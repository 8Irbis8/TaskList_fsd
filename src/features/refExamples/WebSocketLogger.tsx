import React, { useEffect, useRef } from 'react';
import { Box, Typography, Paper } from '@mui/material';

export const WebSocketLogger: React.FC = () => {
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    socketRef.current = new WebSocket('wss://echo.websocket.org');

    const handleMessage = (event: MessageEvent) => {
      console.log('WebSocket сообщение:', event.data);
    };

    const handleOpen = () => {
      console.log('WebSocket соединение установлено');
    };


    const handleError = (error: Event) => {
      console.error('WebSocket ошибка:', error);
    };

 
    socketRef.current.addEventListener('open', handleOpen);
    socketRef.current.addEventListener('message', handleMessage);
    socketRef.current.addEventListener('error', handleError);


    return () => {
      if (socketRef.current) {
        socketRef.current.removeEventListener('open', handleOpen);
        socketRef.current.removeEventListener('message', handleMessage);
        socketRef.current.removeEventListener('error', handleError);
        socketRef.current.close();
        console.log('WebSocket соединение закрыто');
      }
    };
  }, []);
  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h5" component="h1" gutterBottom>
          WebSocket Logger
        </Typography>

        <Box sx={{ mt: 2, p: 2, backgroundColor: 'grey.100', borderRadius: 1 }}>
          <Typography variant="body2" color="text.secondary">
            WebSocket соединение установлено с wss://echo.websocket.org
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Откройте консоль браузера чтобы увидеть входящие сообщения
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};
