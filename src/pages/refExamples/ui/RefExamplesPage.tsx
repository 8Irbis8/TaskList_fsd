import React from 'react';
import { WebSocketLogger } from 'features/refExamples/WebSocketLogger';
import { ClickTimer, PreviousInput, FocusTracker, DebouncedLogger } from 'features/refExamples';

import { ExamplesTabs, type Example } from 'entities/examples/ExamplesTabs';


const examples: Example[] = [
  {
    title: 'Click Timer',
    component: <ClickTimer />
  },
  {
    title: 'Previous Input',
    component: <PreviousInput />
  },
  {
    title: 'Focus Tracker',
    component: <FocusTracker />
  },
  {
    title: 'Debounced Logger',
    component: <DebouncedLogger />
  },
  {
    title: 'WebSocket Logger',
    component: <WebSocketLogger />
  }
];


export const RefExamplesPage: React.FC = () => {
  return (
   <ExamplesTabs examples={examples} />
  );
};
