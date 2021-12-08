import yup from '~/libs/yup';

export const updateUserSchema = yup.object().shape({
  name: yup.string().required().label('Nome'),
});

export const createUserSchema = yup.object().shape({
  name: yup.string().required().label('Nome'),
  email: yup.string().email().required().label('E-mail'),
  password: yup.string().required().min(6).label('Senha'),
  password_confirmation: yup
    .string()
    .required()
    .oneOf([yup.ref('password'), null], 'Senhas devem ser iguais')
    .label('Confirmar Senha'),
});
