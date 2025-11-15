import { useActionState, type JSX } from 'react';
import { TextField, Button, Box } from '@mui/material';

type State = {
  status: 'idle' | 'saving' | 'success';
};

const FormWithAsyncSave = (): JSX.Element => {
  const [state, submitAction, isPending] = useActionState<State, FormData>(
    async (prevState: State, formData: FormData): Promise<State> => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Saved:', formData.get('input'));
      return { status: 'success' };
    },
    { status: 'idle' }
  );

  return (
    <Box component="form" action={submitAction} sx={{ maxWidth: 400, margin: '0 auto' }}>
      <TextField
        name="input"
        label="Input field"
        fullWidth
        margin="normal"
        required
      />
      <Button 
        type="submit" 
        variant="contained" 
        disabled={isPending}
        fullWidth
        sx={{ mt: 2 }}
      >
        {isPending ? 'Saving...' : state.status === 'success' ? 'Saved!' : 'Save'}
      </Button>
    </Box>
  );
};

export default FormWithAsyncSave;