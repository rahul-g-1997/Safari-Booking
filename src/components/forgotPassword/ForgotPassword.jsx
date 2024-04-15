import { useState } from "react";
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
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword, resetUsername } from "../../rtk/reducer/userReducer";
import { setOtp } from "../../rtk/reducer/otpReducer";

export default function ForgotPassword({ toggleSignIn }) {
  const dispatch = useDispatch();
  const otp = useSelector((state) => state.otp);

  const [option, setOption] = useState("password");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newUsername, setNewUsername] = useState("");

  const handleOptionChange = (event) => {
    setOption(event.target.value);
  };

  const handleSendEmailOtp = (event) => {
    event.preventDefault();
    setMessage(`A password reset OTP has been sent to ${email}.`);
    dispatch(setOtp("123")); // Set OTP to default value
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if entered OTP matches the OTP stored in Redux state
    if (enteredOtp === otp.otp) {
      if (option === "password") {
        if (newPassword !== confirmPassword) {
          setMessage("Passwords do not match.");
          return;
        }

        dispatch(resetPassword({ email, newPassword }));
      } else if (option === "username") {
        dispatch(resetUsername({ email, newUsername }));
      }

      setMessage("Reset successful!");
      setNewUsername("");
      setConfirmPassword("");
      setNewPassword("");
      setEmail("");
      setEnteredOtp("");
    } else {
      setMessage("Invalid OTP.");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ m: 1 }}>
            Forgot
          </Typography>
          <div>
            <input
              type="radio"
              value="password"
              checked={option === "password"}
              onChange={handleOptionChange}
            />
            Password
            <input
              type="radio"
              value="username"
              checked={option === "username"}
              onChange={handleOptionChange}
            />
            Username
          </div>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              {option === "password" && (
                <>
                  <Grid item xs={6}>
                    <TextField
                      required
                      fullWidth
                      id="newPassword"
                      label="Enter New Password"
                      type="password"
                      autoComplete="new-password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      required
                      fullWidth
                      id="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      autoComplete="new-password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </Grid>
                </>
              )}
              {option === "username" && (
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="newUsername"
                    label="Enter New Username"
                    name="newUsername"
                    autoComplete="username"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                  />
                </Grid>
              )}
              <Grid item xs={12}>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  onClick={handleSendEmailOtp}
                >
                  Get OTP
                </Button>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="otp"
                  label="Enter OTP"
                  name="otp"
                  autoComplete="otp"
                  value={enteredOtp}
                  onChange={(e) => setEnteredOtp(e.target.value)}
                />
              </Grid>
            </Grid>
            {option === "username" && (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3 }}
              >
                Reset Username
              </Button>
            )}
            {option === "password" && (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3 }}
              >
                Reset Password
              </Button>
            )}
            {message && (
              <Typography variant="body2" color="textSecondary" align="center">
                {message}
              </Typography>
            )}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  onClick={toggleSignIn}
                  variant="body2"
                  sx={{ cursor: "pointer" }}
                >
                  Back to Sign In
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

ForgotPassword.propTypes = {
  toggleSignIn: PropTypes.func.isRequired,
};
