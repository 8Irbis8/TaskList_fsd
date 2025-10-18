import { useActionState } from "react";
import type {FC} from 'react';
import styles from './SubscriptionWizard.module.css';

const submitAction = async (prevState: { step: number, email: string}, formData: FormData) => {
  const email = formData.get('email') as string;
  const step = prevState?.step || 1;

  if (step === 1) {
    if (!email || !email.includes('@')) {
      return { error: 'Пожалуйста, введите корректный email', step: 1 };
    }
    await new Promise(r => setTimeout(r, 1000));
    return { email, step: 2, error: '' };
  }

  await new Promise(r => setTimeout(r, 1000));
  return { success: true, email: prevState.email };
}

export const SubscriptionWizard: FC = () => {
  const [state, submit, pending] = useActionState(submitAction, null);

  if (state?.success) {
    return (
       <div className={styles.container}>
          <div className={styles.successContainer}>
            <div className={styles.successIcon}>✓</div>
            <h2 className={styles.successTitle}>Подписка оформлена!</h2>
            <p className={styles.successText}>На {state.email} отправлено подтверждение</p>
          </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      
      <div className={styles.card}>
        <h2 className={styles.title}>
          {state?.step === 2 ? 'Подтверждение подписки' : 'Подписка на рассылку'}
        </h2>
        
        <form action={submit} className={styles.form}>
          {state?.step === 2 ? (
            <>
              <p className={styles.confirmText}>
                Вы подписываетесь на рассылку для <strong>{state.email}</strong>
              </p>
              <input type="hidden" name="email" value={state.email} />
              <button 
                className={`${styles.button} ${styles.primaryButton} ${pending ? styles.buttonDisabled : ''}`}
                disabled={pending}
              >
                {pending ? '⏳ Подтверждаем...' : '✅ Подтвердить подписку'}
              </button>
            </>
          ) : (
            <>
              <input 
                name="email" 
                type="email" 
                placeholder="your@email.com"
                className={`${styles.input} ${state?.error ? styles.inputError : ''}`}
                disabled={pending}
              />
              <button 
                className={`${styles.button} ${styles.primaryButton} ${pending ? styles.buttonDisabled : ''}`}
                disabled={pending}
              >
                {pending ? '⏳ Отправляем...' : '➡️ Продолжить'}
              </button>
            </>
          )}
          
          {state?.error && (
            <div className={styles.error}>{state.error}</div>
          )}
        </form>
      </div>
    </div>
  );
}