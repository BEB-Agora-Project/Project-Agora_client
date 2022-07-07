import type { AppProps } from "next/app";
import CustomThemeProvider from "../components/CustomThemeProvider";
import { wrapper } from "../store";
import GlobalStyle from "../styles/GlobalStyle";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </CustomThemeProvider>
  );
};

export default wrapper.withRedux(App);
