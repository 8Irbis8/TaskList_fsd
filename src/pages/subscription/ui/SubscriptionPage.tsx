
import { SubscriptionWizard } from 'features/subscription';
import styles from './SubscriptionPage.module.css';

export const SubscriptionPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <SubscriptionWizard />
    </div>
  );
};