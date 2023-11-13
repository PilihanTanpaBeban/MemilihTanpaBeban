import { createTheme } from "@mantine/core";

export const theme = createTheme({
  breakpoints: {
    sm:"600px",
    md:"1200px",
    lg:"1400px"
  },
  colors: {
    blue: [
      "#e6f2ff",
      "#cfe2ff",
      "#a0c1fc",
      "#6d9ff7",
      "#4282f3", //use
      "#266ff1",
      "#1366f1",
      "#0056d7",
      "#004cc2",
      "#0042ac",
    ],
    darkblue: [
      "#eff2fb",
      "#dbe2f1",
      "#b3c2e4",
      "#88a0d8",
      "#6583ce",
      "#4f71c8",
      "#4468c7",
      "#3658b0",
      "#2d4e9e",
      "#172E60", //use
    ],
  },
  fontFamily: '"Montserrat", sans-serif'
});
