const colors = {
  dark: "#17161a",
  incognito: "#333",
  white: "#fff",
  background_white: "#f5f5f7",
  background_dark: "#292729",
  primary: "#ffa01b",
  primary_burger: "#ff9f1b",
  green: "green",
  success: "#60bd4f",
  red: "#e25549",
  redSecondary: "#c4151c",
  blue: "#51a7e1",
  greyLight: "#e4e5e9",
  greyMedium: "#a7a8ad",
  greySemiDark: "#93a2b1",
  greyDark: "#6f737e",
  greyBlue: "#747b91",
  loginLine: "#f56a2c",
};

const spacing = {
  xxs: "4px",
  xs: "8px",
  sm: "12px",
  md: "20px",
  lg: "32px",
  xl: "52px",
  xxl: "84px",
};

const fonts = {
  XXXS: "8px",
  XXS: "10px",
  XS: "12px",
  SM: "15px",
  P0: "16px",
  P1: "18px",
  P2: "20px",
  P3: "24px",
  P4: "36px",
  P5: "48px",
  P6: "60px",
};

const fontFamilies = {
  boldFont: "AmaticSC-Bold",
  regularFont: "AmaticSC-Regular",
  stylish: `"Amatic SC" , cursive`,
};
const gridUnit = 8;
const borderRadius = {
  subtle: 1,
  round: "5px",
  extraRound: "15px",
  circle: "50%",
};
const shadows = {
  subtle: "0px -6px 8px -2px rgba(0, 0, 0, 0.1)",
  medium: "-8px 8px 20px 0px rgb(0 0 0 / 20%)",
  strong: "0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset",
  orangeHighlight: "0 0 8px 0 rgb(255 154 35 / 100%)",
};
const weights = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  heavy: 800,
};

const devices = (breakpoint, content) => {
  if (breakpoint === "mobile-xs") {
    return `@media only screen and (max-width: 414px) {
      ${content}
    }`;
  }
  if (breakpoint === "mobile") {
    return `@media (min-width: 415px)and (max-width: 768px) {
      ${content}
    }`;
  }

  if (breakpoint === "tablet") {
    return `@media (min-width: 769px) and (max-width: 991px) {
      ${content}
    }`;
  }

  if (breakpoint === "tablet-up") {
    return `@media only screen and (min-width: 769px) {
      ${content}
    }`;
  }

  if (breakpoint === "desktop") {
    return `@media only screen and (min-width: 992px) {
      ${content}
    }`;
  }

  return "";
};

export const theme = {
  colors,
  fonts,
  fontFamilies,
  gridUnit,
  borderRadius,
  shadows,
  weights,
  spacing,
  devices,
};
