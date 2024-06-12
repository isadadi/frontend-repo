"use client";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import store from "../store/store";
import theme from "../theme/theme";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};
export default function RootProvider({ children }: Props) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Provider>
  );
}
