import { theme } from '../theme';

export const colors = {
  default: {
    color: '#707070',
    border: '#eeeeee',
    background: 'transparent',
  },
  primary: {
    color: '#fff',
    border: theme.colors.primary,
    background: theme.colors.primary,
  },
  secondary: {
    color: '#fff',
    border: theme.colors.secondary,
    background: theme.colors.secondary,
  },
  success: {
    color: '#fff',
    border: theme.colors.success,
    background: theme.colors.success,
  },
  danger: {
    color: '#fff',
    border: theme.colors.error,
    background: theme.colors.error,
  },
};

export const sizes = {
  default: {
    fontSize: '100%',
    padding: '12px 25px',
    fontWeight: 'bolder',
  },
  small: {
    fontSize: '85%',
    padding: '6px 15px',
    fontWeight: 'normal',
  },
  large: {
    fontSize: '120%',
    padding: '14px 30px',
    fontWeight: 'bolder',
  },
};

export default {
  borderRadius: '5px',
  margin: '0 5px 10px 0',
};
