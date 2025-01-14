import { z } from 'zod';

export const UserDtoSchema = z.object({
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
  email: z.string().email(),
  password: z.string().min(6),
  url: z.string().url(),
});

export type UserDto = z.infer<typeof UserDtoSchema>;