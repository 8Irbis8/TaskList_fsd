import type { socialLinkSchema, validationSchema } from "./validator";
import { z } from 'zod';

export type SignInFormData = z.infer<typeof validationSchema>;
export type SocialLink = z.infer<typeof socialLinkSchema>;