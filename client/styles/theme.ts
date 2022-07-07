import palette from "./palette";

export const lightTheme = {
  mode: "light",
  primary: palette.gray[600],
  primaryVariant: palette.gray[700],
  primaryDimmed: palette.gray[500],
  primaryLight: palette.gray[50],
  secondary: palette.green[600],
  secondaryVariant: palette.green[700],
  error: palette.red[500],
  errorVariant: palette.red[600],
  success: palette.green[500],
  successVariant: palette.green[600],
  backgroundColor: "white",
};

export const darkTheme = {
  mode: "dark",
  primary: palette.gray[600],
  primaryVariant: palette.gray[700],
  primaryDimmed: palette.gray[500],
  primaryLight: palette.gray[50],
  secondary: palette.green[600],
  secondaryVariant: palette.green[700],
  error: palette.red[500],
  errorVariant: palette.red[600],
  success: palette.green[500],
  successVariant: palette.green[600],
  backgroundColor: palette.gray[900],
};

export const theme = {
  primary: palette.gray[600],
  primaryVariant: palette.gray[700],
  primaryDimmed: palette.gray[500],
  primaryLight: palette.gray[50],
  secondary: palette.green[600],
  secondaryVariant: palette.green[700],
  error: palette.red[500],
  errorVariant: palette.red[600],
  success: palette.green[500],
  successVariant: palette.green[600],

  elevation1:
    "rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px",
  elevation2:
    "rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",

  elevation3:
    "rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px",

  elevation4:
    "rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px",
  elevation6:
    "rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px",
  elevation8:
    "rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px",
  elevation12:
    "rgb(0 0 0 / 20%) 0px 7px 8px -4px, rgb(0 0 0 / 14%) 0px 12px 17px 2px, rgb(0 0 0 / 12%) 0px 5px 22px 4px",
  elevation16:
    "rgb(0 0 0 / 20%) 0px 8px 10px -5px, rgb(0 0 0 / 14%) 0px 16px 24px 2px, rgb(0 0 0 / 12%) 0px 6px 30px 5px",
  elevation24:
    "rgb(0 0 0 / 20%) 0px 11px 15px -7px, rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px",

  media: {
    tablet: "37.5rem", // 600px
    labtop: "77.5rem", // 1200px
    desktop: "90rem", // 1440px
  },
};
