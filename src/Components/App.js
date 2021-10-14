import React from "react";
import GlobalStyles from "./GlobalStyles";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import theme from "./Theme";

function App({messageRepository}) {
  return (
    <ThemeProvider theme={theme}>
      <Router messageRepository={messageRepository}/>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
