import {useIntl} from '@context';

import {z} from 'zod';

export const useValidations = () => {
  const {intl} = useIntl();
  const loginSchema = z.object({
    email: z
      .string()
      .email({message: intl.formatMessage({id: 'form-errors.invalidEmail'})}),
    password: z
      .string()
      .nonempty(intl.formatMessage({id: 'form-errors.passwordRequired'})),
  });

  const changePasswordSchema = z
    .object({
      currentPassword: z
        .string()
        .min(8, intl.formatMessage({id: 'form-errors.currentPasswordMin'})),
      password: z
        .string()
        .min(8, intl.formatMessage({id: 'form-errors.passwordMin'})),
      confirmPassword: z
        .string()
        .min(8, intl.formatMessage({id: 'form-errors.confirmPasswordMin'})),
    })
    .refine(data => data.password === data.confirmPassword, {
      message: intl.formatMessage({id: 'form-errors.password-not-match'}),
      path: ['confirmPassword'],
    });

  return {loginSchema, changePasswordSchema};
};
