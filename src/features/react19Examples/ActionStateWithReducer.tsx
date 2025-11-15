import { useActionState, type JSX } from 'react';
import { TextField, Button, Box } from '@mui/material';

type State = {
  name: string;
  email: string;
  dirty: boolean;
  submitting: boolean;
  success: boolean;
};

type Action = 
  | { type: 'SET_FIELD'; field: string; value: string }
  | { type: 'SUBMIT_START' }
  | { type: 'SUBMIT_SUCCESS' }
  | { type: 'RESET' };

const initialState: State = {
  name: '',
  email: '',
  dirty: false,
  submitting: false,
  success: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value, dirty: true };
    case 'SUBMIT_START':
      return { ...state, submitting: true, success: false };
    case 'SUBMIT_SUCCESS':
      return { ...state, submitting: false, success: true };
    case 'RESET':
      return { ...initialState };
    default:
      return state;
  }
};

const ActionStateWithReducer = (): JSX.Element => {
  const [state, submitAction] = useActionState<State, FormData>(
    async (prevState: State, formData: FormData): Promise<State> => {
      const newState = reducer(prevState, { type: 'SUBMIT_START' });
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form data:', {
        name: formData.get('name'),
        email: formData.get('email'),
      });
      
      return reducer(newState, { type: 'RESET' });
    },
    initialState
  );


  return (
    <Box component="form" action={submitAction} sx={{ maxWidth: 400, margin: '0 auto' }}>
      <TextField
        name="name"
        label="Name"
        fullWidth
        margin="normal"
        slotProps={{
          htmlInput: {
            defaultValue: '',
          },
        }}
        required
      />
      <TextField
        name="email"
        label="Email"
        type="email"
        fullWidth
        margin="normal"
        slotProps={{
          htmlInput: {
            defaultValue: '',
          },
        }}
        required
      />
      <Button 
        type="submit" 
        variant="contained" 
        disabled={state.submitting}
        fullWidth
        sx={{ mt: 2 }}
      >
        {state.submitting ? 'Submitting...' : 'Submit'}
      </Button>
    </Box>
  );
};

export default ActionStateWithReducer;