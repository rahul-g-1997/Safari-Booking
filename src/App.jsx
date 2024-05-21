import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { stopLoading } from "./rtk/reducer/loaderReducer";

const AppBar = styled(MuiAppBar)(() => ({
  backgroundColor: "rgba(157, 178, 191, 0.49)",
  backdropFilter: "blur(21px) saturate(200%)",
  WebkitBackdropFilter: "blur(21px) saturate(200%)",
  borderRadius: "12px",
  border: "1px solid rgba(255, 255, 255, 0.125)",
}));

const ContainerWithToast = styled(Box)({
  position: "relative",
  zIndex: 1,
});

export default function App() {
  const isLogin = useSelector((state) => state.auth.status);
  const isLoading = useSelector((state) => state.loader.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    // Stop loading after the component has mounted
    dispatch(stopLoading());
  }, []); // Empty dependency array ensures this effect runs only once after initial render

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
        <ToastContainer theme="dark" />
        <Box component="main" sx={{ flexGrow: 1, position: "relative" }}>
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${bgimg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {isLoading ? (
            <Box
              sx={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 9999,
              }}
            >
              <CircularLoader color="secondary" />
            </Box>
          ) : null}
          {!isLogin && (
            <AppBar position="fixed">
              <Toolbar
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  pr: "24px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={Logo}
                    alt="Logo"
                    style={{ maxWidth: "100px", height: "auto" }}
                  />
                </div>
              </Toolbar>
            </AppBar>
          )}
          <ContainerWithToast
            sx={{
              position: "relative",
              zIndex: 1,
              backgroundColor: "transparent",
            }}
          >
            <Outlet />
          </ContainerWithToast>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
