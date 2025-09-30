import { FILTER_TYPES } from '../model/constants';
import type { FilterType } from '../model/types';

export const toFilterType = (value: string): FilterType => {
  return FILTER_TYPES[value as FilterType] ? (value as FilterType) : FILTER_TYPES.ALL;
};
