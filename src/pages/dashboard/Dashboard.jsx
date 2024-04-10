import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  styled,
  ThemeProvider,
  CssBaseline,
  Box,
  Container,
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Avatar,
} from "@mui/material";
import { toggleLogin } from "../../rtk/reducer/loginReducer";
import { Copyright, Booking, AddSenctuaryDetails } from "../../components";
import { toast } from "react-toastify";
import style from "./dashboard.module.css";
import theme from "../../theme";
import Logo from "../../assets/tatr-logo.png";

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
  backgroundColor: "rgba(157, 178, 191, 0.49)", // Background color with transparency
  backdropFilter: "blur(21px) saturate(200%)", // Backdrop filter effect
  WebkitBackdropFilter: "blur(21px) saturate(200%)", // For Safari
  borderRadius: "12px", // Border radius
  border: "1px solid rgba(255, 255, 255, 0.125)", // Border
}));

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.login.isLogin);
  const [showBooking, setShowBooking] = useState(true);

  const logOut = () => {
    dispatch(toggleLogin());
    toast.success("Logout successfully");
  };

  useEffect(() => {
    if (!isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate]);

  const handleShowBooking = () => {
    setShowBooking(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between", // This will move items to the start and end of the toolbar
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
            <IconButton color="inherit" onClick={logOut}>
              <Avatar alt="User Profile" src="/path/to/profile-image.jpg" />
            </IconButton>
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
          <Toolbar />
          <Container
            maxWidth="100"
            sx={{
              p: "30px",
              width: "auto",
              transition: "margin-left 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
            }}
          >
            <div className={style.container}>
              {showBooking ? (
                <Booking />
              ) : (
                <AddSenctuaryDetails onNext={handleShowBooking} />
              )}
              <Copyright sx={{ pt: 4 }} />
            </div>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
