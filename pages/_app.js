import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";

import Fonts from "../fonts";
import theme from "../theme";

import AppStore from "../stores/AppStore";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <AppStore>
        <Component {...pageProps} />
      </AppStore>
    </ChakraProvider>
  );
}

export default MyApp;
