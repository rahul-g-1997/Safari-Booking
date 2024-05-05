import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import "./SignIn.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { login } from "../../rtk/reducer/userReducer";
import { startLoading, stopLoading } from "../../rtk/reducer/loaderReducer";
import { useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { toast } from "react-toastify";
import user from "../../services/user";
import { useEffect, useState } from "react";

export default function SignIn({ toggleForm, toggleForgotPassword }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [captchaValue, setCaptchaValue] = useState("");

  useEffect(() => {
    // Load captcha engine on component mount
    loadCaptchaEnginge(6);
  }, []);

  const handleSignInSuccess = async (token) => {
    try {
      const userData = await user.getUserProfile(token); // Fetch user profile data
      dispatch(login({ token, userData }));
      navigate("/dashboard");
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
        handleSignInSuccess(token); // Fetch user profile data on successful login
      } else {
        throw new Error("User data not available");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Invalid email or password.");
      dispatch(stopLoading());
    }
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
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
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
            >
              <LoadCanvasTemplate />
              <TextField
                style={{ width: "calc(100% - 160px)", margin: "0 8px" }}
                placeholder="Enter Captcha Value"
                id="user_captcha_input"
                name="user_captcha_input"
                variant="outlined"
                value={captchaValue}
                onChange={(e) => setCaptchaValue(e.target.value)}
              />
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
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
              <Grid item>
                <Link href="#" variant="body2" onClick={toggleForgotPassword}>
                  Forgot password?
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
