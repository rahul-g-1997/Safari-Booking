import { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import RefreshIcon from "@mui/icons-material/Refresh"; // Import Refresh icon
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { login } from "../../rtk/reducer/userReducer";
import { startLoading, stopLoading } from "../../rtk/reducer/loaderReducer";
import { useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { toast } from "react-toastify";
import user from "../../services/user";
import "./SignIn.css";

export default function SignIn({ toggleForm, toggleForgotPassword }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [captchaValue, setCaptchaValue] = useState("");
  const [captchaKey, setCaptchaKey] = useState(Math.random()); // State to manage CAPTCHA reload

  useEffect(() => {
    loadCaptchaEnginge(6); // Load captcha engine on component mount
  }, [captchaKey]); // Re-run this effect when captchaKey changes

  const handleSignInSuccess = async (token, USR_TYPE) => {
    try {
      const userData = await user.getUserProfile(token); // Fetch user profile data
      dispatch(login({ token, userData }));
      if (USR_TYPE === "U") navigate("/dashboard");
      if (USR_TYPE === "A") navigate("/adminDashboard");
      if (USR_TYPE === "O") navigate("/operatorDashboard");
      if (USR_TYPE === "M") navigate("/managerDashboard");
      toast.success("Login successful.");
      dispatch(stopLoading()); // Stop loading when sign-in is successful
    } catch (error) {
      dispatch(stopLoading()); // Stop loading when sign-in is successful
      console.error("Error fetching user profile:", error);
      toast.error("Error fetching user profile.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(startLoading()); // Start loading when sign-in process starts
    const data = new FormData(event.currentTarget);
    const enteredEmail = data.get("email");
    const enteredPassword = data.get("password");
    const enteredCaptcha = data.get("user_captcha_input");

    if (!enteredEmail || !enteredPassword) {
      toast.error("Email and password are required.");
      dispatch(stopLoading()); // Stop loading if validation fails
      return;
    }

    // Validate captcha
    if (!enteredCaptcha) {
      toast.error("Please enter the captcha.");
      dispatch(stopLoading()); // Stop loading if captcha is not entered
      return;
    }

    if (!validateCaptcha(enteredCaptcha)) {
      toast.error("Captcha Does Not Match");
      setCaptchaValue("");
      dispatch(stopLoading()); // Stop loading if captcha validation fails
      return;
    }

    try {
      // Call the existing login service with credentials
      const response = await user.login({
        act: "login",
        "usr.login": enteredEmail,
        "usr.pwd": enteredPassword,
        app: "tabk",
      });

      // Check if user data is available in the response
      if (response.data && response.data.Record) {
        const { token } = response.data;
        const { USR_TYPE } = response.data.Record;
        handleSignInSuccess(token, USR_TYPE); // Fetch user profile data on successful login
      } else {
        throw new Error("User data not available");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Invalid email or password.");
      dispatch(stopLoading());
    }
  };

  const reloadCaptcha = () => {
    setCaptchaKey(Math.random()); // Change the key to reload the CAPTCHA
    setCaptchaValue(""); // Clear the input field
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xs"
        className="card"
        sx={{
          marginTop: 13,
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            marginBottom: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: ".main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required={true}
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required={true}
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Box
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "8px",
              }}
              className="captcha-container"
            >
              <div style={{ flex: "45%" }}>
                <LoadCanvasTemplateNoReload key={captchaKey} />
              </div>
              <div style={{ flex: "10%" }}>
                <IconButton onClick={reloadCaptcha}>
                  <RefreshIcon />
                </IconButton>
              </div>
              <div style={{ flex: "45%" }}>
                <TextField
                  style={{ width: "100%" }}
                  placeholder="Enter Captcha Value"
                  id="user_captcha_input"
                  name="user_captcha_input"
                  variant="outlined"
                  value={captchaValue}
                  onChange={(e) => setCaptchaValue(e.target.value)}
                />
              </div>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  onClick={toggleForm}
                  variant="body2"
                  sx={{ cursor: "pointer" }}
                >
                  {"Don't have an account? Register"}
                </Link>
              </Grid>
              <Grid item xs sx={{ textAlign: "right" }}>
                <Link
                  variant="body2"
                  sx={{ cursor: "pointer" }}
                  onClick={toggleForgotPassword}
                >
                  {"Forgot credentials?"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

SignIn.propTypes = {
  toggleForm: PropTypes.func.isRequired,
  toggleForgotPassword: PropTypes.func.isRequired,
};
