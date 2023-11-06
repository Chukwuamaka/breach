const buttonTheme = {
  baseStyle: {
    fontWeight: 'medium',
    borderRadius: 8
  },
  variants: {
    outline: {
      color: 'brand.grey.900',
      borderColor: 'brand.grey.300',
    },
  },
  sizes: {
    md: {
      fontSize: '1rem',
      px: 6,
    },
    sm: {
      fontSize: '0.875rem',
      px: 4,
    }
  },
  defaultProps: {
    colorScheme: 'brand.purple',
  },
}

export default buttonTheme;