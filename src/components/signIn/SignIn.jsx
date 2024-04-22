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
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin } from "../../rtk/reducer/loginReducer";
import { useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function SignIn({ toggleForm, toggleForgotPassword }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.user);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []); // This effect runs only once after the initial render

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const enteredEmail = data.get("email");
    const enteredPassword = data.get("password");

    if (!enteredEmail || !enteredPassword) {
      toast.error("Email and password are required.");
      return;
    }

    const user = users.find((user) => user.email === enteredEmail);
    const userCaptcha = data.get("user_captcha_input");

    if (!user) {
      toast.error("User does not exist. Please sign up.");
      return;
    }

    if (user.password !== enteredPassword) {
      toast.error("Invalid password.");
      return;
    }

    if (validateCaptcha(userCaptcha) === true) {
      loadCaptchaEnginge(6);
    } else {
      toast.error("Captcha Does Not Match");
      return;
    }

    dispatch(toggleLogin());
    navigate("/dashboard");
    toast.success("Login successful.");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xs"
        className="card"
        sx={{
          marginTop: 3,
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
