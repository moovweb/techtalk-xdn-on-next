import { CssBaseline } from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({});

export default function MyApp({ Component, pageProps }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Component {...pageProps} />
      </main>
    </MuiThemeProvider>
  );
}
