import { useSelector } from "react-redux";
import {
  styled,
  ThemeProvider,
  CssBaseline,
  Box,
  AppBar as MuiAppBar,
  Toolbar,
} from "@mui/material";
import theme from "./theme";
import Logo from "./assets/tatr-logo.png";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import bgimg from "./assets/bg_img.png";
import { CircularLoader } from "./components";

const AppBar = styled(MuiAppBar)(() => ({
  backgroundColor: "rgba(157, 178, 191, 0.49)",
  backdropFilter: "blur(21px) saturate(200%)",
  WebkitBackdropFilter: "blur(21px) saturate(200%)",
  borderRadius: "12px",
  border: "1px solid rgba(255, 255, 255, 0.125)",
}));

export default function App() {
  const isLogin = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);
  const isLoading = useSelector((state) => state.loader.isLoading);

  console.log(isLogin);
  console.log(localStorage.getItem("token"));
  console.log(userData);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <CssBaseline />

        <Box component="main" sx={{ flexGrow: 1, position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${bgimg})`,
              // backgroundColor:"green",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {isLoading ? ( // Show loader if isLoading is true
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Add a semi-transparent background
                zIndex: 9999, // Ensure the loader is on top of other content
              }}
            >
              <CircularLoader color="secondary" />
            </Box>
          ) : null}
          {!isLogin && (
            <AppBar position="static">
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
          )}
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              backgroundColor: "transparent",
            }}
          >
            <ToastContainer theme="dark" />
            <Outlet />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
