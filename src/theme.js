import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    font: {
      main: "#27374D",
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
  },
});

export default theme;
