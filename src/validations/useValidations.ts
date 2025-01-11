import {z} from 'zod';

export const useValidations = () => {
  const loginSchema = z.object({
    email: z.string().email({message: 'Invalid Email'}),
    password: z.string().nonempty('Password required'),
  });

  const changePasswordSchema = z
    .object({
      currentPassword: z
        .string()
        .min(8, 'Password should be atleast 8 characters'),
      password: z.string().min(8, 'Password should be atleast 8 characters'),
      confirmPassword: z
        .string()
        .min(8, 'Password should be atleast 8 characters'),
    })
    .refine(data => data.password === data.confirmPassword, {
      message: "Password doesn't match",
      path: ['confirmPassword'],
    });

  return {loginSchema, changePasswordSchema};
};
