import {COLORS} from './';

export const ButtonsType = {
  primary: {
    backgroundColor: COLORS['green-400'],
    color: 'white-100',
    borderColor: 'none',
  },

  secondary: {
    backgroundColor: COLORS['green-100'],
    color: 'green-100',
    borderColor: 'none',
  },

  tertiary: {
    backgroundColor: COLORS['white-100'],
    color: 'green-400',
    borderColor: COLORS['green-400'],
  },

  disabled: {
    backgroundColor: COLORS['gray-300'],
    color: 'gray-500',
    iconColor: 'gray-500',
    borderColor: 'none',
  },

  special: {
    backgroundColor: COLORS['error-300'],
    color: COLORS['error-100'],
    borderColor: 'none',
    iconColor: 'white-100',
  },

  link: {
    backgroundColor: COLORS['green-400'],
    color: COLORS['green-400'],
    borderColor: 'none',
  },

  icon: {
    backgroundColor: 'transparent',
    color: 'transparent',
    borderColor: COLORS['green-200'],
  },

  iconButton: {
    backgroundColor: COLORS['green-400'],
    color: COLORS['green-400'],
    borderColor: 'none',
  },
};
