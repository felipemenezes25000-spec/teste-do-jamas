/**
 * Tema das telas do médico – claro (light)
 * #0040b8, Plus Jakarta Sans
 */

export const colors = {
  primary: '#0040b8',
  primaryDark: '#003088',
  primaryLight: '#2563eb',
  primaryGhost: 'rgba(0, 64, 184, 0.12)',
  secondary: '#10B981',
  secondaryDark: '#059669',
  accent: '#8B5CF6',
  accentSoft: '#EDE9FE',
  background: '#F8FAFC',
  surface: '#FFFFFF',
  surfaceSecondary: '#F1F5F9',
  text: '#0F172A',
  textSecondary: '#475569',
  textMuted: '#64748B',
  border: '#E2E8F0',
  borderLight: '#F1F5F9',
  error: '#EF4444',
  errorLight: '#FEE2E2',
  warning: '#F59E0B',
  warningLight: '#FEF3C7',
  success: '#10B981',
  successLight: '#D1FAE5',
  info: '#3B82F6',
  infoLight: '#DBEAFE',
  white: '#FFFFFF',
  black: '#0F172A',
  statusSubmitted: '#F59E0B',
  statusInReview: '#3B82F6',
  statusApproved: '#10B981',
  statusPaid: '#10B981',
  statusSigned: '#8B5CF6',
  statusDelivered: '#10B981',
  statusRejected: '#EF4444',
  statusCancelled: '#6B7280',
  statusSearching: '#F59E0B',
  statusConsultationReady: '#3B82F6',
  statusInConsultation: '#3B82F6',
  statusFinished: '#10B981',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const borderRadius = {
  xs: 6,
  sm: 10,
  md: 12,
  lg: 14,
  xl: 18,
  pill: 26,
  card: 12,
  full: 9999,
};

export const shadows = {
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
  },
  cardLg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 5,
  },
  button: {
    shadowColor: '#0040b8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 4,
  },
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 1,
  },
};

export const gradients = {
  doctorHeader: ['#003088', '#0040b8', '#2563eb'] as const,
  primary: ['#0040b8', '#003088'] as unknown as string[],
  secondary: ['#10B981', '#059669'] as unknown as string[],
};

export const typography = {
  fontFamily: {
    regular: 'PlusJakartaSans_400Regular',
    medium: 'PlusJakartaSans_500Medium',
    semibold: 'PlusJakartaSans_600SemiBold',
    bold: 'PlusJakartaSans_700Bold',
  },
};
