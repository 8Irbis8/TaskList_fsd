import type { FILTER_TYPES } from "../lib/constants";

export type FilterType = typeof FILTER_TYPES[keyof typeof FILTER_TYPES];