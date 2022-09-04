import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    bg: "#F9E6DC",
    secondary: "#82B5A5",
    primary: {
      50: "#82B5A5",
      100: "#82C5A5",
      200: "#82D5A5",
      300: "#82E5A5",
    },
    textColor: {
      10: "#000000",
      50: "#111E0F",
      100: "#1B2D1A",
      200: "#81A1A4",
      300: "#3D543B",
    },
    quaternary: "#FFFFFF",
  },
  fonts: {
    body: "BioRhyme, sans-serif",
    heading: "BioRhyme, sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        fontFamily: "BioRhyme",
        color: "white",
        backgroundColor: "bg",
      },
      html: {
        scrollBehavior: "smooth",
      },
      "&::-webkit-scrollbar": {
        width: "0.5em",
      },
      "&::-webkit-scrollbar-track": {
        borderRadius: "0px",
        background: "transparent",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "primary.50",
        borderRadius: "2px",
      },
    }),
  },
});

export default theme;
