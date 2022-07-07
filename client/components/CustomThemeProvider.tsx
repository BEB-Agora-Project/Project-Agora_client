import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import useDarkMode from "../hooks/useDarkMode";
import { useSelector } from "../store";
import { darkTheme, lightTheme } from "../styles/theme";

interface Props {
  children: React.ReactNode;
}

const CustomThemeProvider: React.FC<Props> = ({ children }) => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const { setDarkMode } = useDarkMode();

  useEffect(() => {
    if (window.localStorage.getItem("isDarkMode") === "false") return;
    if (window.localStorage.getItem("isDarkMode") === "true") {
      setDarkMode(true);
      return;
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, [setDarkMode]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
