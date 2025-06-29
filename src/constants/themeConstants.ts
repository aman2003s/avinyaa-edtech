export const THEME_COLORS = {
  light: {
    primary: '#3B82F6',
    primaryHover: '#2563EB',
    secondary: '#6B7280',
    background: '#FFFFFF',
    surface: '#F9FAFB',
    border: '#E5E7EB',
    borderHover: '#D1D5DB',
    text: {
      primary: '#1F2937',
      secondary: '#6B7280',
      muted: '#9CA3AF',
    },
    card: {
      background: '#FFFFFF',
      border: '#E5E7EB',
    },
    button: {
      primary: '#3B82F6',
      primaryHover: '#2563EB',
      secondary: '#6B7280',
      danger: '#EF4444',
      dangerHover: '#DC2626',
    },
  },
  dark: {
    primary: '#3B82F6',
    primaryHover: '#2563EB',
    secondary: '#9CA3AF',
    background: '#374151',
    surface: '#4B5563',
    border: '#6B7280',
    borderHover: '#9CA3AF',
    text: {
      primary: '#E5E7EB',
      secondary: '#9CA3AF',
      muted: '#6B7280',
    },
    card: {
      background: '#374151',
      border: '#4B5563',
    },
    button: {
      primary: '#3B82F6',
      primaryHover: '#2563EB',
      secondary: '#9CA3AF',
      danger: '#EF4444',
      dangerHover: '#DC2626',
    },
  },
} as const;

export const SIDEBAR_COLORS = {
  light: {
    background: 'linear-gradient(to bottom, rgb(166,127,41), rgb(166,127,30))',
    frostedGlass: 'rgba(255, 255, 255, 0.05)',
    border: 'rgba(255, 255, 255, 0.25)',
    icon: {
      active: '#92400E',
      inactive: 'white',
    },
  },
  dark: {
    background: 'linear-gradient(to bottom, #374151, #4B5563)',
    frostedGlass: 'rgba(255, 255, 255, 0.05)',
    border: 'rgba(255, 255, 255, 0.15)',
    icon: {
      active: '#374151',
      inactive: 'white',
    },
  },
} as const; 