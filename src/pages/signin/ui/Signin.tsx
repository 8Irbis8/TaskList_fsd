import React, { useState } from 'react';
import { Container, CssBaseline, Box, Alert, Snackbar } from '@mui/material';
import { SignInForm, type SignInFormData } from 'features/signin';

export const SignInPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'error';
  }>({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleSignIn = async (data: SignInFormData) => {
    setIsLoading(true);
    
    try {
      // Имитация API запроса
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Данные регистрации:', {
        username: data.username,
        email: data.email,
        password: data.password,
      });
      
      setSnackbar({
        open: true,
        message: 'Регистрация успешна!',
        severity: 'success',
      });
    } catch (error) {
      console.error('Ошибка регистрации:', error);
      setSnackbar({
        open: true,
        message: 'Произошла ошибка при регистрации',
        severity: 'error',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            minHeight: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            py: 3,
          }}
        >
          <SignInForm 
            onSubmit={handleSignIn}
            isLoading={isLoading}
          />
        </Box>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};