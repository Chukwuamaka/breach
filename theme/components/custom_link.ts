import { defineStyleConfig } from "@chakra-ui/react";

const customLinkTheme = defineStyleConfig({
  baseStyle: {
    whiteSpace: 'nowrap',
    fontWeight: 'medium',
  },

  variants: {
    outline: {
      color: 'brand.grey.900',
      border: '1px solid',
      borderColor: 'brand.grey.300',
      borderRadius: 8,
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      verticalAlign: 'middle',
      _hover: {
        bg: 'brand.grey.200'
      }
    },
    solid: {
      borderRadius: 8,
      color: 'white',
      bg: 'brand.purple.600',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      verticalAlign: 'middle',
      _hover: {
        bg: 'brand.purple.700'
      }
    },
    unstyled: {
      px: 0,
      h: 'max-content',
      color: 'brand.grey.900',
    },
  },

  sizes: {
    md: {
      px: 6,
      h: 10,
      fontSize: '1rem',
    },
    sm: {
      // px: 4,
      // h: 8,
      fontSize: '0.875rem',
    }
  },

  defaultProps: {
    variant: 'unstyled',
    size: 'md',
  }
})

export default customLinkTheme;