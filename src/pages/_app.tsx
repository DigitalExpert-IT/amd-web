import type { AppProps } from 'next/app'
import i18n from "../locales";
import { ChakraProvider } from '@chakra-ui/react'
import { I18nextProvider } from "react-i18next";
import theme from 'theme';
import Fonts from 'theme/foundations/fonts';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18n} defaultNS={"translation"}>
      <Fonts />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </I18nextProvider>
  )
}
