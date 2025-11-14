import React, { useState } from 'react';
import { Tabs, Tab, Container } from '@mui/material';
import { WebSocketLogger } from 'features/refExamples/WebSocketLogger';
import { ClickTimer, PreviousInput, FocusTracker, DebouncedLogger } from 'features/refExamples';
import TabPanel from 'shared/ui/TabPanel/TabPanel';


interface Assignment {
  title: string;
  component: React.ReactNode;
}

const assignments: Assignment[] = [
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
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <Container maxWidth="lg">
        <Tabs value={currentTab} onChange={handleTabChange} centered>
          {assignments.map((assignment, index) => (
            <Tab key={index} label={assignment.title} />
          ))}
        </Tabs>

      {assignments.map((assignment, index) => (
        <TabPanel key={index} value={currentTab} index={index}>
          {assignment.component}
        </TabPanel>
      ))}
    </Container>
  );
};
