import { z } from 'zod';
import bcrypt from 'bcrypt';

export const updateUserSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8).optional(),
  avatarUrl: z.string().url().optional(),
  phone: z.string().optional(),
  // add other fields from UpdateUserRequest if needed
});
