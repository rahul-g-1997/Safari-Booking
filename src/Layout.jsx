import {
  styled,
  ThemeProvider,
  CssBaseline,
  Box,
  Container,
  AppBar as MuiAppBar,
  Toolbar,
} from "@mui/material";
import theme from "./theme";
import Logo from "./assets/tatr-logo.png";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import bgimg from "./assets/backgroundimg.jpg";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  marginTop: 5,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: "100%",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  backgroundColor: "rgba(157, 178, 191, 0.49)",
  backdropFilter: "blur(21px) saturate(200%)",
  WebkitBackdropFilter: "blur(21px) saturate(200%)",
  borderRadius: "12px",
  border: "1px solid rgba(255, 255, 255, 0.125)",
}));

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ display: "flex" }}
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              pr: "24px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* Replace Typography with img tag for logo */}
              <img
                src={Logo}
                alt="Logo"
                style={{ maxWidth: "100px", height: "auto" }}
              />
            </div>
          </Toolbar>
        </AppBar>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            backgroundColor: "transparent",
          }}
        >
          <Container
            maxWidth="100"
            sx={{
              width: "auto",
              transition: "margin-left 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
            }}
          >
            <ToastContainer theme="dark" />
            <Outlet />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
