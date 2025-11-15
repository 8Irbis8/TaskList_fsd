import { useOptimistic, useActionState, type JSX } from 'react';
import { TextField, Button, List, ListItem, Typography, Box } from '@mui/material';

type Todo = {
  id: number;
  text: string;
};

type State = {
  todos: Todo[];
};

const TodoListOptimistic = (): JSX.Element => {
  const [state, submitAction, isPending] = useActionState<State, FormData>(
    async (prevState: State, formData: FormData): Promise<State> => {
      const text = formData.get('text') as string;
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newTodo: Todo = {
        id: Date.now(),
        text,
      };
      
      return {
        todos: [...prevState.todos, newTodo]
      };
    },
    { todos: [] }
  );

  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    state.todos,
    (currentTodos: Todo[], newTodo: Todo) => [...currentTodos, newTodo]
  );

  const handleSubmit = async (formData: FormData) => {
    const text = formData.get('text') as string;
    
    const optimisticTodo: Todo = {
      id: Date.now(),
      text,
    };
    
    addOptimisticTodo(optimisticTodo);
    await submitAction(formData);
  };

  return (
    <Box sx={{ maxWidth: 400, margin: '0 auto' }}>
      <form action={handleSubmit}>
        <TextField
          name="text"
          label="New todo"
          fullWidth
          margin="normal"
          required
        />
        <Button 
          type="submit" 
          variant="contained" 
          disabled={isPending}
          fullWidth
        >
          {isPending ? 'Adding...' : 'Add Todo'}
        </Button>
      </form>
      
      <List>
        {optimisticTodos.map(todo => (
          <ListItem key={todo.id}>
            <Typography>{todo.text}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TodoListOptimistic;