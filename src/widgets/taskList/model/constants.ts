import type { FilterType } from './types';

export const FILTER_TYPES = {
  ALL: 'ALL',
  INCOMPLETE: 'INCOMPLETE',
  COMPLETED: 'COMPLETED',
} as const;

export const FILTER_OPTIONS: { value: FilterType; label: string }[] = [
  { value: FILTER_TYPES.ALL, label: 'Все' },
  { value: FILTER_TYPES.INCOMPLETE, label: 'Незавершенные' },
  { value: FILTER_TYPES.COMPLETED, label: 'Завершенные' },
];
