import React, { useState, useEffect } from "react";
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
  List,
  Divider,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import EventNoteIcon from "@mui/icons-material/EventNote";
import LogoutIcon from "@mui/icons-material/Logout";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import { toggleLogin } from "../../rtk/reducer/loginReducer";
import { Copyright, Booking, SenctuaryDetails } from "../../components";
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
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  backgroundColor: "rgba(157, 178, 191, 0.49)", // Background color with transparency
  backdropFilter: "blur(21px) saturate(200%)", // Backdrop filter effect
  "-webkit-backdrop-filter": "blur(21px) saturate(200%)", // For Safari
  borderRadius: "12px", // Border radius
  border: "1px solid rgba(255, 255, 255, 0.125)", // Border
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
    backgroundColor: "rgba(157, 178, 191, 0.49)", // Background color with transparency
    backdropFilter: "blur(21px) saturate(200%)", // Backdrop filter effect
    "-webkit-backdrop-filter": "blur(21px) saturate(200%)", // For Safari
    borderRadius: "12px", // Border radius
    border: "1px solid rgba(255, 255, 255, 0.125)", // Border
  },
}));

export default function Dashboard() {
  const [showFormview, setShowFormview] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(true);
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.login.isLogin);
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
              display: "flex",
              justifyContent: "space-between", // This will move items to the start and end of the toolbar
              pr: "24px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
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
              {/* Replace Typography with img tag for logo */}
              <img
                src={Logo}
                alt="Logo"
                style={{ maxWidth: "100px", height: "auto" }}
              />
            </div>
            <IconButton color="inherit">
              <Avatar alt="User Profile" src="/path/to/profile-image.jpg" />
            </IconButton>
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
                setShowCreateForm(false);
                setShowFormview(true);
              }}
            >
              <ListItemIcon>
                <EventNoteIcon />
              </ListItemIcon>
              <ListItemText primary="Senctuary Details" />
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                setShowCreateForm(true);
                setShowFormview(false);
              }}
            >
              <ListItemIcon>
                <EditCalendarIcon />
              </ListItemIcon>
              <ListItemText primary="Booking" />
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
            maxWidth="xl"
            sx={{
              p: "30px",
              width: "auto",
              transition: "margin-left 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
            }}
          >
            <div className={style.container}>
              {showCreateForm && <Booking />}
              {showFormview && <SenctuaryDetails />}
              <Copyright sx={{ pt: 4 }} />
            </div>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
