export const Colors = {
  light: {
    background: '#ffffff',
    secondaryBackground: '#f3f3f3',
    headingTitle: '#000',
    description: '#fafafa',
    primaryButton: '#1FE0BA',
    disabled: '#1FE0BA' + 'FF',
  },
  dark: {
    background: '#000',
    secondaryBackground: '#f3f3f3',
    headingTitle: '#fff',
    description: '#f1faf1',
    primaryButton: '#E01F45',
    disabled: '#1FE0BA' + 'FF',
  },
};

export type ThemeColors = typeof Colors.light; // Define a type for theme colors.
