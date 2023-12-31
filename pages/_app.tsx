import '@/styles/globals.css'
import theme from '@/theme'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} toastOptions={{defaultOptions: { isClosable: true }}}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
