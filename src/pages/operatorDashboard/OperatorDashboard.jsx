import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  Typography,
  MenuItem,
  Menu,
  Tooltip,
} from "@mui/material";
import { logout } from "../../rtk/reducer/userReducer";

import { Copyright } from "../../components";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { toast } from "react-toastify";
import style from "./operatorDashboard.module.css";
import theme from "../../theme";
import Logo from "../../assets/tatr-logo.png";
import Profile from "../profile/Profile";
import user from "../../services/user";

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

export default function AdminDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);
  const [open, setOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const isLogin = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);
  const [firstName, setFirstName] = useState("");
  const isLoading = useSelector((state) => state.loader.isLoading);
  useEffect(() => {
    if (userData && userData.Records && userData.Records.length > 0) {
      const userRecord = userData.Records[0];
      setFirstName(userRecord.USR_FNM);
    }
  }, [userData]);

  const logOut = () => {
    user.logout();
    dispatch(logout());
    toast.success("Logout successfully");
  };

  useEffect(() => {
    if (!isLogin) {
      navigate("/");
      user.logout();
    }
  }, [isLogin, navigate]);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
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
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={firstName} src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography
                      textAlign="center"
                      onClick={() => {
                        setShowProfile(true);
                      }}
                    >
                      Profile
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" onClick={() => logOut()}>
                      Logout
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
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
                setShowProfile(true);
              }}
            >
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
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
          {isLoading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              {/* You can replace this with any loading indicator */}
              <Typography variant="h6">Loading...</Typography>
            </Box>
          ) : (
            <>
              {" "}
              <Toolbar />
              <Container
                maxWidth="100"
                sx={{
                  p: "30px",
                  width: "auto",
                  transition:
                    "margin-left 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
                }}
              >
                <div className={style.container}>
                  <Copyright sx={{ pt: 4 }} />
                </div>

                {showProfile && (
                  <div className={style.container}>
                    <Profile />
                  </div>
                )}
              </Container>
            </>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
