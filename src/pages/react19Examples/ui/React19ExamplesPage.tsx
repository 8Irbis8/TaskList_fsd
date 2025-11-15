import React from 'react';
import FormWithAsyncSave from 'features/react19Examples/FormWithAsyncSave';
import TodoListOptimistic from 'features/react19Examples/ToDoListOptimistic';
import ActionStateWithReducer from 'features/react19Examples/ActionStateWithReducer';
import { ExamplesTabs } from 'entities/examples/ExamplesTabs/ExamplesTabs';


interface Examples {
  title: string;
  component: React.ReactNode;
}

const examples: Examples[] = [
  {
    title: 'Form With Async Save',
    component: <FormWithAsyncSave />
  },
  {
    title: 'To Do List Optimistic',
    component: <TodoListOptimistic />
  },
  {
    title: 'Action State With Reducer',
    component: <ActionStateWithReducer />
  },
];


export const React19ExamplesPage: React.FC = () => {
  return (
     <ExamplesTabs examples={examples} />
  );
};
