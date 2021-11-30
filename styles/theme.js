import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  textStyles: {
    pageTitle: {
      fontSize: "48px",
      fontWeight: "bold",
    },
    sectionTitle: {
      fontSize: "24px",
      fontWeight: "bold",
    },
    body: {
      fontSize: "16px",
      fontWeight: "semibold",
    },
    input: {
      fontSize: "12px",
      fontWeight: "semibold",
    },
  },

  colors: {
    primary: "#009688",
    accent: "#94C720",
    warn: "#C70D38",
    default: "#404040",
    grey: "#8D8D8D",
    background: "#F2F2F2",
  },
});

export default theme;
