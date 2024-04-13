import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  styled,
  ThemeProvider,
  CssBaseline,
  Box,
  Container,
  Drawer as MuiDrawer,
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Avatar,
  Divider,
  ListItemButton,
  List,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { toggleLogin } from "../../rtk/reducer/loginReducer";
import {
  Copyright,
  Booking,
  AddSenctuaryDetails,
  SenctuaryDetails,
  BookingHistory,
} from "../../components";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import HistoryIcon from "@mui/icons-material/History";
import { toast } from "react-toastify";
import style from "./dashboard.module.css";
import theme from "../../theme";
import Logo from "../../assets/tatr-logo.png";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: "rgba(157, 178, 191, 0.49)",
  backdropFilter: "blur(21px) saturate(200%)",
  WebkitBackdropFilter: "blur(21px) saturate(200%)",
  borderRadius: "12px",
  border: "1px solid rgba(255, 255, 255, 0.125)",
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    backgroundColor: "rgba(157, 178, 191, 0.49)", // Adding background properties
    backdropFilter: "blur(21px) saturate(200%)",
    WebkitBackdropFilter: "blur(21px) saturate(200%)",
    borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.125)",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.login.isLogin);
  const [showAddSenctuaryDetails, setShowAddSenctuaryDetails] = useState(true);
  const [showBooking, setShowBooking] = useState(false);
  const [showSenctuaryDetails, setShowSenctuaryDetails] = useState(false);
  const [showBookingDiv, setShowBookingDiv] = useState(true);
  const [showBookingHistory, setShowBookingHistory] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const logOut = () => {
    dispatch(toggleLogin());
    toast.success("Logout successfully");
  };

  useEffect(() => {
    if (!isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>

            <div style={{ display: "flex", alignItems: "center" }}>
              {/* Replace Typography with img tag for logo */}
              <img
                src={Logo}
                alt="Logo"
                style={{ maxWidth: "100px", height: "auto" }}
              />
            </div>

            <div style={{ marginLeft: "auto" }}>
              {/* This div positions Avatar to the right */}
              <IconButton color="inherit" onClick={logOut}>
                <Avatar alt="User Profile" src="/path/to/profile-image.jpg" />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <ListItemButton
              onClick={() => {
                setShowBookingDiv(true);
                setShowBookingHistory(false);
              }}
            >
              <ListItemIcon>
                <EventAvailableIcon />
              </ListItemIcon>
              <ListItemText primary="Booking" />
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                setShowBookingDiv(false);
                setShowBookingHistory(true);
              }}
            >
              <ListItemIcon>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText primary="Booking History" />
            </ListItemButton>
            <ListItemButton onClick={logOut}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Log Out" />
            </ListItemButton>
          </List>
        </Drawer>

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
            {showBookingDiv && (
              <div className={style.container}>
                {showAddSenctuaryDetails && (
                  <AddSenctuaryDetails
                    setShowAddSenctuaryDetails={setShowAddSenctuaryDetails}
                    setShowBooking={setShowBooking}
                  />
                )}
                {showBooking && (
                  <Booking
                    setShowBooking={setShowBooking}
                    setShowSenctuaryDetails={setShowSenctuaryDetails}
                  />
                )}
                {showSenctuaryDetails && <SenctuaryDetails />}
                <Copyright sx={{ pt: 4 }} />
              </div>
            )}
            {showBookingHistory && (
              <div className={style.container}>
                <BookingHistory />
              </div>
            )}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
