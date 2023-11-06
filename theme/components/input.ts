const inputTheme = {
  baseStyle: {
    field: {
      _placeholder: {
        color: 'brand.grey.400',
      },
      letterSpacing: -0.16,
      color: 'brand.grey.900',
      fontWeight: 'normal'
    }
  },
  variants: {
    outline: {
      field: {
        border: '1px solid',
        borderColor: 'brand.grey.200',
        borderRadius: 8,
        _hover: {
          borderColor: 'brand.grey.600',
        },
        _focusVisible: {
          borderColor: 'brand.purple.600',
          boxShadow: '0 0 0 1px #8311F9'
        },
      },
    },
  },
}

export default inputTheme;