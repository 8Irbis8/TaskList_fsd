
import { z } from 'zod';
import type {validationSchema} from '../model/validator'
export type FormValues = z.infer<typeof validationSchema>;