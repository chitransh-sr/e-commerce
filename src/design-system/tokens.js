/**
 * Bannoji-inspired Design System - Design Tokens
 * Body: Instrument Sans | Headings: Instrument Serif
 * Cream #F5E9D7 / Burgundy #7A1E2B / Gold #C9A24C / Blush #F2D6CE
 */

export const colors = {
  primary: {
    50: '#FBF4E9',
    100: '#F5E9D7',
    200: '#EADCC3',
    300: '#DCC5A3',
    400: '#C9A24C',
    500: '#7A1E2B',
    600: '#6A1925',
    700: '#5E141F',
    800: '#4A0F18',
    900: '#360B12',
    DEFAULT: '#7A1E2B',
  },
  secondary: {
    50: '#FBF4E9',
    100: '#F5E9D7',
    200: '#F2D6CE',
    300: '#E8C4B8',
    400: '#D9A08D',
    500: '#C9A24C',
    600: '#A98436',
    700: '#86652A',
    DEFAULT: '#F2D6CE',
  },
  accent: {
    50: '#FBF4E9',
    100: '#F6EDB8',
    200: '#EEDC8E',
    300: '#E2C765',
    400: '#D4B252',
    500: '#C9A24C',
    600: '#A98436',
    700: '#86652A',
    DEFAULT: '#C9A24C',
  },
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    DEFAULT: '#16a34a',
  },
  danger: {
    50: '#fef2f2',
    100: '#fee2e2',
    500: '#ef4444',
    600: '#8B0000',
    700: '#7A1E2B',
    DEFAULT: '#8B0000',
  },
  gray: {
    50: '#FBF4E9',
    100: '#F5E9D7',
    200: '#E8D9C4',
    300: '#D4C2A6',
    400: '#9C8C72',
    500: '#6B6257',
    600: '#4B453C',
    700: '#37332C',
    800: '#1F1F1F',
    900: '#1F1F1F',
    950: '#141414',
  },
  background: {
    light: '#F5E9D7',
    dark: '#1F1F1F',
    paper: '#FFFFFF',
    paperDark: '#2A2024',
    blush: '#F2D6CE',
    creamDark: '#EFE0C8',
  },
  text: {
    primary: '#1F1F1F',
    primaryDark: '#F5E9D7',
    secondary: '#5C554B',
    secondaryDark: '#CBBFA9',
    disabled: '#A89B85',
    disabledDark: '#7A7264',
    heading: '#7A1E2B',
    headingDark: '#E8CFC0',
  },
  border: {
    light: '#E8D9C4',
    dark: 'rgba(245, 233, 215, 0.14)',
    paper: '#E8D9C4',
    paperDark: 'rgba(245, 233, 215, 0.14)',
  },
  gradients: {
    primary: '#7A1E2B',
    primaryDark: '#7A1E2B',
    accent: '#C9A24C',
    secondary: '#F2D6CE',
    warm: '#7A1E2B',
    cool: '#F2D6CE',
    success: '#16a34a',
    violet: '#7A1E2B',
    amber: '#C9A24C',
    glassLight: 'rgba(255, 255, 255, 0.7)',
    glassDark: 'rgba(31, 31, 31, 0.75)',
    heroOverlay: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
  },
};

export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.75rem',
  '4xl': '2rem',
  '5xl': '3rem',
  '6xl': '5rem',
  '7xl': '3.5rem',
  '8xl': '4rem',
};

export const borderRadius = {
  sm: '0.375rem',
  md: '0.5rem',
  lg: '0.8rem',
  xl: '1rem',
  '2xl': '1.25rem',
  '3xl': '1.5rem',
  pills: '100px',
  full: '9999px',
};

export const shadows = {
  xs: '0 1px 3px rgba(31,31,31,0.06)',
  sm: '0 2px 8px rgba(31,31,31,0.06)',
  md: '0 4px 14px -2px rgba(31,31,31,0.08)',
  lg: '0 10px 30px -10px rgba(31,31,31,0.10)',
  xl: '0 15px 40px -10px rgba(31,31,31,0.12)',
  '2xl': '0 25px 60px -15px rgba(31,31,31,0.16)',
  popover: '0px 4px 20px rgba(31,31,31,0.15)',
  primary: '0 4px 14px rgba(122,30,43,0.28)',
  primaryHover: '0 8px 24px rgba(122,30,43,0.38)',
  primaryDark: '0 8px 24px rgba(122,30,43,0.30)',
  primaryDarkHover: '0 12px 30px rgba(122,30,43,0.42)',
  accent: '0 4px 14px rgba(201,162,76,0.35)',
  accentHover: '0 8px 24px rgba(201,162,76,0.45)',
};

export const transitions = {
  fast: '150ms ease-in-out',
  standard: '200ms ease-in-out',
  emphasis: '250ms ease-in-out',
  spring: 'all 0.35s cubic-bezier(0.34, 1.3, 0.64, 1)',
  cardHover: 'all 0.25s ease-in-out',
};

export const typography = {
  fontFamily: {
    primary: '"Instrument Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    secondary: '"Instrument Serif", Georgia, serif',
    body: '"Instrument Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    heading: '"Instrument Serif", Georgia, serif',
    accent: '"Instrument Serif", Georgia, serif',
  },
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1.4' }],
    sm: ['0.875rem', { lineHeight: '1.4' }],
    base: ['1rem', { lineHeight: '1.4' }],
    lg: ['1.125rem', { lineHeight: '1.4' }],
    xl: ['1.25rem', { lineHeight: '1.25' }],
    '2xl': ['1.5rem', { lineHeight: '1.25' }],
    '3xl': ['2rem', { lineHeight: '1.1' }],
    '4xl': ['clamp(2.25rem, 4.8vw, 3rem)', { lineHeight: '1.1' }],
    '5xl': ['clamp(3rem, 7.2vw, 4.5rem)', { lineHeight: '1.1' }],
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
};

export const breakpoints = {
  xs: '375px',
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1200px',
  '2xl': '1400px',
};

export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1010,
  fixed: 1020,
  modal: 1030,
  popover: 1040,
  tooltip: 1050,
  toast: 9999,
  confetti: 99999,
};

export const glassMorphism = {
  light: {
    background: 'rgba(255, 255, 255, 0.7)',
    border: '1px solid #E8D9C4',
    boxShadow: '0 4px 30px rgba(31,31,31,0.06)',
  },
  dark: {
    background: 'rgba(31, 31, 31, 0.75)',
    border: '1px solid rgba(245,233,215,0.12)',
    boxShadow: '0 4px 30px rgba(0,0,0,0.3)',
  },
};

export const effects = {
  glow: {
    primary: '0 0 15px rgba(122,30,43,0.25)',
    secondary: '0 0 15px rgba(201,162,76,0.35)',
    amber: '0 0 15px rgba(201,162,76,0.4)',
  },
};

export const components = {
  button: {
    primary: `
      background: #7A1E2B;
      color: #F5E9D7;
      border: none;
      padding: 16px 24px;
      border-radius: 100px;
      font-family: "Instrument Sans", sans-serif;
      font-weight: 400;
      font-size: 0.875rem;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: 200ms ease-in-out;
      box-shadow: 0 4px 14px rgba(122,30,43,0.28);
      &:hover { background: #C9A24C; color: #1F1F1F; transform: translateY(-1px); }
      &:active { transform: scale(0.98); }
      &:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
    `,
    secondary: `
      background: transparent;
      color: #7A1E2B;
      border: 1px solid #7A1E2B;
      padding: 16px 24px;
      border-radius: 100px;
      font-family: "Instrument Sans", sans-serif;
      font-weight: 400;
      cursor: pointer;
      &:hover { background: #7A1E2B; color: #F5E9D7; }
    `,
  },
  card: {
    base: `
      background: #FFFFFF;
      border-radius: 1rem;
      border: 1px solid #E8D9C4;
      box-shadow: 0 2px 8px rgba(31,31,31,0.06);
      overflow: hidden;
    `,
  },
  input: {
    base: `
      width: 100%;
      padding: 0.8rem;
      border: 1px solid #E8D9C4;
      border-radius: 8px;
      font-size: 0.95rem;
      background: #FFFFFF;
      color: #1F1F1F;
      font-family: "Instrument Sans", sans-serif;
      &:focus { outline: none; border-color: #7A1E2B; box-shadow: 0 0 0 2px rgba(122,30,43,0.12); }
    `,
  },
};

export default {
  colors,
  spacing,
  borderRadius,
  shadows,
  transitions,
  typography,
  breakpoints,
  zIndex,
  glassMorphism,
  effects,
  components,
};
