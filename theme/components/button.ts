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
    solid: {
      color: 'white',
      bg: 'brand.purple.600',
      _hover: {
        bg: 'brand.purple.700'
      },
      _loading: {
        bg: 'brand.grey.300'
      },
      _disabled: {
        bg: 'brand.grey.300'
      }
    }
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
}

export default buttonTheme;