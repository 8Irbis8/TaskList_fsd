import { useState } from 'react';
import { Tabs, Tab, Container } from '@mui/material';
import TabPanel from 'shared/ui/TabPanel/TabPanel';
import type { Example } from '../model/types';

interface ExamplesTabsProps {
  examples: Example[];
}

export const ExamplesTabs: React.FC<ExamplesTabsProps> = ({ examples }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <Container maxWidth="lg">
      <Tabs value={currentTab} onChange={handleTabChange} centered>
        {examples.map((example, index) => (
          <Tab key={index} label={example.title} />
        ))}
      </Tabs>

      {examples.map((example, index) => (
        <TabPanel key={index} value={currentTab} index={index}>
          {example.component}
        </TabPanel>
      ))}
    </Container>
  );
};