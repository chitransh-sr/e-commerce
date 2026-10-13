/**
 * ShopNow Premium Design System - Design Tokens
 * Generated from DESIGN-SYSTEM Master (Premium E-commerce)
 */

export const colors = {
  // Primary Palette
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    DEFAULT: '#2563eb',
  },
  secondary: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d93',
    DEFAULT: '#7c3aed',
  },
  accent: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    DEFAULT: '#f59e0b',
  },
  // Semantic Colors
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    DEFAULT: '#10b981',
  },
  danger: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    DEFAULT: '#ef4444',
  },
  // Neutral Colors
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712',
  },
  // Background Colors
  background: {
    light: '#f8fafc',
    dark: '#0f172a',
    paper: '#ffffff',
    paperDark: '#1e293b',
  },
  // Text Colors
  text: {
    primary: '#0f172a',
    primaryDark: '#f1f5f9',
    secondary: '#475569',
    secondaryDark: '#94a3b8',
    disabled: '#94a3b8',
    disabledDark: '#64748b',
  },
  // Border Colors
  border: {
    light: 'rgba(226, 232, 240, 0.8)',
    dark: 'rgba(255, 255, 255, 0.08)',
    paper: 'rgba(226, 232, 240, 0.9)',
    paperDark: 'rgba(255, 255, 255, 0.12)',
  },
  // Gradients
  gradients: {
    primary: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
    primaryDark: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    accent: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    secondary: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
    warm: 'linear-gradient(135deg, #ec4899 0%, #dc2626 100%)',
    cool: 'linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%)',
    success: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    violet: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
    amber: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
    glassLight: 'rgba(255, 255, 255, 0.7)',
    glassDark: 'rgba(15, 23, 42, 0.75)',
  },
};

export const spacing = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '0.75rem',   // 12px
  lg: '1rem',      // 16px
  xl: '1.25rem',   // 20px
  '2xl': '1.5rem', // 24px
  '3xl': '1.75rem',// 28px
  '4xl': '2rem',   // 32px
  '5xl': '2.5rem', // 40px
  '6xl': '3rem',   // 48px
  '7xl': '3.5rem', // 56px
  '8xl': '4rem',   // 64px
  '9xl': '5rem',   // 80px
  '10xl': '6rem',  // 96px
};

export const borderRadius = {
  sm: '0.375rem',   // 6px
  md: '0.625rem',   // 10px
  lg: '0.875rem',   // 14px
  xl: '1.125rem',   // 18px
  '2xl': '1.375rem',// 22px
  '3xl': '1.75rem', // 28px
  '4xl': '2rem',    // 32px
  '5xl': '2.5rem',  // 40px
  '6xl': '3rem',    // 48px
  full: '9999px',
};

export const shadows = {
  xs: '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)',
  sm: '0 2px 8px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.04)',
  md: '0 4px 14px -2px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.03)',
  lg: '0 10px 30px -10px rgba(0, 0, 0, 0.08), 0 4px 14px rgba(0, 0, 0, 0.04)',
  xl: '0 15px 40px -10px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.05)',
  '2xl': '0 25px 60px -15px rgba(0, 0, 0, 0.15), 0 8px 30px rgba(0, 0, 0, 0.08)',
  '3xl': '0 35px 70px -20px rgba(0, 0, 0, 0.2), 0 12px 40px rgba(0, 0, 0, 0.1)',
  // Primary glow variants
  primary: '0 4px 14px rgba(37, 99, 235, 0.35)',
  primaryHover: '0 8px 24px rgba(37, 99, 235, 0.5)',
  primaryDark: '0 8px 24px rgba(99, 102, 241, 0.35)',
  primaryDarkHover: '0 12px 30px rgba(99, 102, 241, 0.5)',
  // Accent glow
  accent: '0 4px 14px rgba(245, 158, 11, 0.35)',
  accentHover: '0 8px 24px rgba(245, 158, 11, 0.5)',
};

export const transitions = {
  fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  standard: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  emphasis: '350ms cubic-bezier(0.16, 1, 0.3, 1)',
  // Spring-based for premium feel
  spring: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
  cardHover: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
};

export const typography = {
  fontFamily: {
    primary: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
    secondary: "'Playfair Display', Georgia, serif",
  },
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem', { lineHeight: '1.6' }],
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '1.2' }],
    '3xl': ['1.875rem', { lineHeight: '1.3' }],
    '4xl': ['2.25rem', { lineHeight: '1.2' }],
    '5xl': ['3rem', { lineHeight: '1.1' }],
    '6xl': ['3.75rem', { lineHeight: '1' }],
    '7xl': ['4.5rem', { lineHeight: '1' }],
    '8xl': ['6rem', { lineHeight: '1' }],
    '9xl': ['8rem', { lineHeight: '1' }],
  },
  fontWeight: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
};

export const breakpoints = {
  xs: '375px',    // Small phone
  sm: '480px',    // Large phone
  md: '768px',    // Tablet
  lg: '1024px',   // Small laptop
  xl: '1200px',   // Large laptop
  '2xl': '1400px', // Desktop
  '3xl': '1600px', // Large desktop
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
    border: '1px solid rgba(226, 232, 240, 0.8)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.04)',
  },
  dark: {
    background: 'rgba(15, 23, 42, 0.75)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
  },
};

export const effects = {
  shimmer: `relative
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
      animation: shimmer 1.5s infinite;
    }
    @keyframes shimmer {
      100% { left: 100%; }
    }`,
  pulse: `
    animation: pulse 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }
  `,
  glow: {
    primary: `
      0 0 15px rgba(37, 99, 235, 0.4),
      0 0 30px rgba(37, 99, 235, 0.2)
    `,
    secondary: `
      0 0 15px rgba(124, 59, 230, 0.4),
      0 0 30px rgba(124, 59, 230, 0.2)
    `,
    amber: `
      0 0 15px rgba(245, 158, 11, 0.4),
      0 0 30px rgba(245, 158, 11, 0.2)
    `,
  },
};

export const components = {
  button: {
    primary: `
      background: ${colors.gradients.primary};
      color: white;
      border: none;
      padding: 0.75rem 1.75rem;
      border-radius: ${borderRadius.xl};
      font-weight: 600;
      font-size: 0.95rem;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: ${transitions.emphasis};
      box-shadow: ${shadows.primary};
      
      &:hover {
        transform: translateY(-2px) scale(1.02);
        box-shadow: ${shadows.primaryHover};
      }
      
      &:active {
        transform: scale(0.96);
      }
      
      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
      }
    `,
    secondary: `
      background: transparent;
      color: ${colors.primary[600]};
      border: 1.5px solid ${colors.primary[300]};
      padding: 0.75rem 1.5rem;
      border-radius: ${borderRadius.xl};
      font-weight: 600;
      font-size: 0.95rem;
      cursor: pointer;
      transition: ${transitions.standard};
      
      &:hover {
        background: ${colors.primary[50]};
        border-color: ${colors.primary[400]};
      }
    `,
    ghost: `
      background: transparent;
      color: ${colors.text.secondary};
      border: none;
      padding: 0.5rem 1rem;
      border-radius: ${borderRadius.md};
      font-weight: 600;
      font-size: 0.9rem;
      cursor: pointer;
      transition: ${transitions.fast};
      
      &:hover {
        background: ${colors.gray[100]};
      }
    `,
    icon: `
      width: 40px;
      height: 40px;
      border-radius: ${borderRadius.full};
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      cursor: pointer;
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      
      &:hover {
        background: ${colors.primary[50]};
        color: ${colors.primary[600]};
        transform: scale(1.1);
      }
    `,
  },
  card: {
    base: `
      background: ${colors.background.paper};
      border-radius: ${borderRadius.xl};
      border: 1px solid ${colors.border.light};
      box-shadow: ${shadows.sm};
      transition: ${transitions.cardHover};
      overflow: hidden;
    `,
    glass: `
      background: ${colors.colors?.glassLight || colors.background.paper};
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid ${colors.border.light};
      border-radius: ${borderRadius.xl};
      box-shadow: ${shadows.lg};
      transition: ${transitions.cardHover};
      
      [data-theme="dark"] & {
        background: ${colors.colors?.glassDark || colors.background.paperDark};
        border-color: ${colors.border.dark};
        box-shadow: ${shadows.xl};
      }
    `,
    interactive: `
      &:hover {
        transform: translateY(-4px);
        box-shadow: ${shadows.xl};
        border-color: ${colors.primary[300]};
      }
      
      [data-theme="dark"] & {
        &:hover {
          box-shadow: 0 24px 45px -12px rgba(0, 0, 0, 0.5);
          border-color: ${colors.primary[500]};
        }
      }
    `,
  },
  input: {
    base: `
      width: 100%;
      padding: 0.75rem 1rem 0.75rem 2.75rem;
      border: 1.5px solid ${colors.border.light};
      border-radius: ${borderRadius.lg};
      font-size: 0.95rem;
      background: transparent;
      color: ${colors.text.primary};
      transition: ${transitions.standard};
      
      &::placeholder {
        color: ${colors.text.disabled};
      }
      
      &:focus {
        outline: none;
        border-color: ${colors.primary[400]};
        box-shadow: 0 0 0 3px ${colors.primary[100]};
      }
      
      [data-theme="dark"] & {
        border-color: ${colors.border.dark};
        color: ${colors.text.primaryDark};
        background: rgba(30, 41, 59, 0.8);
        
        &:focus {
          box-shadow: 0 0 0 3px ${colors.primary[900]};
        }
      }
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
