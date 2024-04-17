import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    font: {
      main: "black",
    },
    primary: {
      main: "#27374D",
    },
    secondary: {
      main: "#9DB2BF",
    },
    background: {
      main: "#DDE6ED",
    },
    error: {
      main: red.A400,
    },
    transparent: {
      backgroundColor: "rgba(157, 178, 191, 0.49)",
      backdropFilter: "blur(21px) saturate(200%)",
      WebkitBackdropFilter: "blur(21px) saturate(200%)",
      borderRadius: "12px",
      border: "1px solid rgba(255, 255, 255, 0.125)",
    },
  },
});

export default theme;
