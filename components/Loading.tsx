import { Box, BoxProps, Spinner, SpinnerProps } from "@chakra-ui/react";

interface LoadingProps extends SpinnerProps {
  containerProps?: BoxProps;
}

export default function Loading({ containerProps, ...spinnerProps }: LoadingProps) {
  return (
    <Box {...containerProps}>
      <Spinner color='brand.purple.600' size='lg' {...spinnerProps} />
    </Box>
  )
}
