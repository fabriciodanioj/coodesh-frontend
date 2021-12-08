import yup from '~/libs/yup';

export const forgotPassword = yup.object().shape({
  email: yup.string().email().required().label('E-mail'),
});

export const updateProfileSchema = yup.object().shape({
  email: yup.string().email().required().label('E-mail'),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email().required().label('E-mail'),
  password: yup.string().required().label('Senha'),
});

export const recoverySchema = yup.object().shape({
  password: yup.string().required().label('Senha'),
  password_confirmation: yup
    .string()
    .required()
    .oneOf([yup.ref('password'), null], 'Senhas devem ser iguais')
    .label('Confirmar Senha'),
});

export const updatePasswordSchema = yup.object().shape({
  current: yup.string().required().label('Senha Atual'),
  password: yup.string().required().label('Nova Senha'),
  password_confirmation: yup
    .string()
    .required()
    .oneOf([yup.ref('password'), null], 'Senhas devem ser iguais')
    .label('Confirmar Nova Senha'),
});
