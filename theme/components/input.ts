const inputTheme = {
  baseStyle: {
    field: {
      _placeholder: {
        color: 'brand.gray.400',
      },
      letterSpacing: -0.16,
      color: 'brand.gray.900',
      fontWeight: 'normal'
    }
  },
  variants: {
    outline: {
      field: {
        border: '1px solid',
        borderColor: 'brand.gray.200',
        borderRadius: 8,
        _hover: {
          borderColor: 'brand.gray.400',
        },
        _focusVisible: {
          borderColor: 'brand.purple.200',
          boxShadow: '0 0 0 1px #CF94FF'
        },
      },
    },
  },
}

export default inputTheme;