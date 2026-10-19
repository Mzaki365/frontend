/**
 * Storelistener — Centralized Design System & MUI Theme Configuration
 * File: src/theme/theme.config.js
 * 
 * Defines consistent tokens for colors, typography, layout spacing,
 * and MUI component defaults tailored for an enterprise SaaS monitoring product.
 */

import { createTheme } from '@mui/material/styles';

/**
 * 1. Palette Tokens
 * Centralized color definitions. Strict adherence to professional SaaS guidelines.
 * Dedicated 'ai' slot avoids polluting primary/secondary semantic channels.
 */
export const paletteTokens = {
  primary: {
    main: '#4F46E5', // Royal Indigo 600
    light: '#6366F1', // Indigo 500
    dark: '#3730A3', // Indigo 800
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#0EA5E9', // Sky Cyan 500
    light: '#38BDF8', // Sky 400
    dark: '#0284C7', // Sky 600
    contrastText: '#FFFFFF',
  },
  // Custom dedicated AI accent slot
  ai: {
    main: '#8B5CF6', // Purple 500
    light: '#A78BFA', // Purple 400
    dark: '#6D28D9', // Purple 700
    contrastText: '#FFFFFF',
    subtleBg: '#F5F3FF', // Purple 50
    subtleBorder: '#DDD6FE', // Purple 200
  },
  success: {
    main: '#10B981', // Emerald 500
    light: '#34D399', // Emerald 400
    dark: '#059669', // Emerald 600
    contrastText: '#FFFFFF',
    subtleBg: '#ECFDF5',
    subtleBorder: '#A7F3D0',
  },
  warning: {
    main: '#F59E0B', // Amber 500
    light: '#FBBF24', // Amber 400
    dark: '#D97706', // Amber 600
    contrastText: '#FFFFFF',
    subtleBg: '#FFFBEB',
    subtleBorder: '#FDE68A',
  },
  error: {
    main: '#EF4444', // Red 500
    light: '#F87171', // Red 400
    dark: '#DC2626', // Red 600
    contrastText: '#FFFFFF',
    subtleBg: '#FEF2F2',
    subtleBorder: '#FECACA',
  },
  background: {
    default: '#F8FAFC', // Slate 50
    paper: '#FFFFFF',
  },
  text: {
    primary: '#0F172A', // Slate 900
    secondary: '#475569', // Slate 600
    disabled: '#94A3B8', // Slate 400
  },
  divider: '#E2E8F0', // Slate 200
};

/**
 * 2. Layout & Spacing Constants (8px-based rhythm)
 */
export const layoutTokens = {
  spacingBase: 8,
  pagePadding: { xs: 2, sm: 3, md: 4 }, // 16px, 24px, 32px
  maxContentWidth: 1440,
  sidebarWidth: 260,
  headerHeight: 64,
  cardPadding: 24,
  borderRadius: 12,
  controlHeight: 40,
};

/**
 * 3. Typography Definitions
 * Plus Jakarta Sans modern SaaS typography with clean fallbacks.
 */
export const typographyTokens = {
  fontFamily: [
    '"Plus Jakarta Sans"',
    'Inter',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    'sans-serif',
  ].join(','),
  h1: {
    fontSize: '2rem', // 32px
    fontWeight: 700,
    lineHeight: 1.25,
    letterSpacing: '-0.025em',
    color: paletteTokens.text.primary,
  },
  h2: {
    fontSize: '1.75rem', // 28px
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: '-0.02em',
    color: paletteTokens.text.primary,
  },
  h3: {
    fontSize: '1.5rem', // 24px
    fontWeight: 600,
    lineHeight: 1.35,
    letterSpacing: '-0.015em',
    color: paletteTokens.text.primary,
  },
  h4: {
    fontSize: '1.25rem', // 20px
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: '-0.01em',
    color: paletteTokens.text.primary,
  },
  h5: {
    fontSize: '1.125rem', // 18px
    fontWeight: 600,
    lineHeight: 1.45,
    letterSpacing: '-0.005em',
    color: paletteTokens.text.primary,
  },
  h6: {
    fontSize: '1rem', // 16px
    fontWeight: 600,
    lineHeight: 1.5,
    color: paletteTokens.text.primary,
  },
  subtitle1: {
    fontSize: '1rem', // 16px
    fontWeight: 500,
    lineHeight: 1.5,
    color: paletteTokens.text.primary,
  },
  subtitle2: {
    fontSize: '0.875rem', // 14px
    fontWeight: 500,
    lineHeight: 1.5,
    color: paletteTokens.text.secondary,
  },
  body1: {
    fontSize: '0.9375rem', // 15px
    fontWeight: 400,
    lineHeight: 1.6,
    color: paletteTokens.text.primary,
  },
  body2: {
    fontSize: '0.875rem', // 14px
    fontWeight: 400,
    lineHeight: 1.55,
    color: paletteTokens.text.secondary,
  },
  button: {
    fontSize: '0.875rem', // 14px
    fontWeight: 600,
    lineHeight: 1.5,
    textTransform: 'none',
  },
  caption: {
    fontSize: '0.75rem', // 12px
    fontWeight: 400,
    lineHeight: 1.5,
    color: paletteTokens.text.secondary,
  },
  overline: {
    fontSize: '0.6875rem', // 11px
    fontWeight: 600,
    lineHeight: 1.5,
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    color: paletteTokens.text.secondary,
  },
};

/**
 * 4. Master Theme Instance
 */
export const storelistenerTheme = createTheme({
  palette: {
    mode: 'light',
    primary: paletteTokens.primary,
    secondary: paletteTokens.secondary,
    success: paletteTokens.success,
    warning: paletteTokens.warning,
    error: paletteTokens.error,
    background: paletteTokens.background,
    text: paletteTokens.text,
    divider: paletteTokens.divider,
    // Custom AI property safely attached to palette
    ai: paletteTokens.ai,
  },
  typography: typographyTokens,
  shape: {
    borderRadius: layoutTokens.borderRadius,
  },
  spacing: layoutTokens.spacingBase,
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  components: {
    // Buttons
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: layoutTokens.borderRadius,
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '0.875rem',
          padding: '7px 16px',
          transition: 'background-color 150ms ease, border-color 150ms ease, box-shadow 150ms ease',
          '&:focus-visible': {
            outline: `2px solid ${paletteTokens.secondary.main}`,
            outlineOffset: '2px',
          },
        },
        sizeSmall: {
          padding: '5px 12px',
          fontSize: '0.8125rem',
        },
        sizeLarge: {
          padding: '10px 22px',
          fontSize: '0.9375rem',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)',
          color: '#FFFFFF',
          boxShadow: '0 2px 10px rgba(79, 70, 229, 0.25)',
          '&:hover': {
            background: 'linear-gradient(135deg, #4338CA 0%, #4F46E5 100%)',
            boxShadow: '0 4px 14px rgba(79, 70, 229, 0.35)',
          },
        },
        outlinedPrimary: {
          borderColor: 'rgba(79, 70, 229, 0.3)',
          color: '#4F46E5',
          '&:hover': {
            backgroundColor: '#EEF2FF',
            borderColor: '#4F46E5',
          },
        },
      },
    },

    // Icon Button
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: layoutTokens.borderRadius,
          color: paletteTokens.text.secondary,
          transition: 'background-color 150ms ease, color 150ms ease',
          '&:hover': {
            backgroundColor: '#F1F5F9',
            color: paletteTokens.text.primary,
          },
          '&:focus-visible': {
            outline: `2px solid ${paletteTokens.secondary.main}`,
            outlineOffset: '2px',
          },
        },
      },
    },

    // Card & Paper
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: layoutTokens.borderRadius,
          border: '1px solid rgba(226, 232, 240, 0.85)',
          backgroundColor: paletteTokens.background.paper,
          backgroundImage: 'none',
          boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
          transition: 'box-shadow 200ms ease, transform 200ms ease',
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          borderRadius: layoutTokens.borderRadius,
          backgroundImage: 'none',
        },
        outlined: {
          border: `1px solid ${paletteTokens.divider}`,
        },
      },
    },

    // Text Fields & Outlined Input
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: layoutTokens.borderRadius,
          backgroundColor: paletteTokens.background.paper,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: paletteTokens.divider,
            transition: 'border-color 150ms ease, box-shadow 150ms ease',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#CBD5E1',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: paletteTokens.secondary.main,
            borderWidth: '1.5px',
          },
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: paletteTokens.error.main,
          },
        },
        input: {
          padding: '8.5px 14px',
          fontSize: '0.875rem',
        },
      },
    },

    // Select & Menu Items
    MuiSelect: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          borderRadius: 6,
          margin: '2px 4px',
          padding: '6px 12px',
          color: paletteTokens.text.primary,
          '&.Mui-selected': {
            backgroundColor: '#F1F5F9',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: '#E2E8F0',
            },
          },
        },
      },
    },

    // Chips
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 500,
          fontSize: '0.75rem',
          height: 24,
        },
        sizeMedium: {
          height: 28,
          fontSize: '0.8125rem',
        },
      },
    },

    // Tooltip
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
      styleOverrides: {
        tooltip: {
          backgroundColor: paletteTokens.primary.main,
          color: '#FFFFFF',
          fontSize: '0.75rem',
          fontWeight: 500,
          borderRadius: 6,
          padding: '5px 10px',
        },
        arrow: {
          color: paletteTokens.primary.main,
        },
      },
    },

    // Dialog
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 12,
          border: `1px solid ${paletteTokens.divider}`,
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
        },
      },
    },

    // Drawer
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: `1px solid ${paletteTokens.divider}`,
          backgroundColor: paletteTokens.background.paper,
        },
      },
    },

    // AppBar
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: paletteTokens.background.paper,
          color: paletteTokens.text.primary,
          borderBottom: `1px solid ${paletteTokens.divider}`,
        },
      },
    },

    // Table Cells
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${paletteTokens.divider}`,
          fontSize: '0.875rem',
          padding: '12px 16px',
        },
        head: {
          fontWeight: 600,
          color: paletteTokens.text.secondary,
          backgroundColor: paletteTokens.background.default,
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        },
      },
    },

    // Alert
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: layoutTokens.borderRadius,
          fontSize: '0.875rem',
        },
        standardSuccess: {
          backgroundColor: paletteTokens.success.subtleBg,
          color: paletteTokens.success.dark,
          border: `1px solid ${paletteTokens.success.subtleBorder}`,
        },
        standardWarning: {
          backgroundColor: paletteTokens.warning.subtleBg,
          color: paletteTokens.warning.dark,
          border: `1px solid ${paletteTokens.warning.subtleBorder}`,
        },
        standardError: {
          backgroundColor: paletteTokens.error.subtleBg,
          color: paletteTokens.error.dark,
          border: `1px solid ${paletteTokens.error.subtleBorder}`,
        },
        standardInfo: {
          backgroundColor: '#EFF6FF',
          color: paletteTokens.secondary.dark,
          border: '1px solid #BFDBFE',
        },
      },
    },

    // Switch
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 42,
          height: 26,
          padding: 0,
          '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '200ms',
            '&.Mui-checked': {
              transform: 'translateX(16px)',
              color: '#FFFFFF',
              '& + .MuiSwitch-track': {
                backgroundColor: paletteTokens.secondary.main,
                opacity: 1,
                border: 0,
              },
            },
          },
          '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
          },
          '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: '#CBD5E1',
            opacity: 1,
          },
        },
      },
    },

    // Checkbox
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#94A3B8',
          borderRadius: 4,
          padding: 6,
          '&.Mui-checked': {
            color: paletteTokens.secondary.main,
          },
          '&:focus-visible': {
            outline: `2px solid ${paletteTokens.secondary.main}`,
            outlineOffset: '2px',
          },
        },
      },
    },

    // Form Control Label
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: '0.875rem',
          color: paletteTokens.text.primary,
        },
      },
    },
  },
});

export default storelistenerTheme;
