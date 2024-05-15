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
import config from "../../services/config";
import { toast } from "react-toastify";
import { startLoading, stopLoading } from "../../rtk/reducer/loaderReducer";
import { useDispatch } from "react-redux";

export default function ForgotPassword({ toggleSignIn }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [sendOtpMessage, setSendOtpMessage] = useState("");
  const [resetPasswordMessage, setResetPasswordMessage] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const [otpSent, setOtpSent] = useState(false); // Track if OTP has been sent

  const handleSendEmailOtp = async (event) => {
    event.preventDefault();
    try {
      const response = await config.sendOTP(email);

      if (response.Result === "OK") {
        setSendOtpMessage(`A password reset OTP has been sent to ${email}.`);
        setOtpSent(true); // Set OTP sent flag to true
      } else {
        setSendOtpMessage(response.Msg);
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      setSendOtpMessage("Error sending OTP. Please try again.");
    }
  };

  const handleVerifyEmail = async (event) => {
    event.preventDefault();
    try {
      const response = await config.verifyEmail(email, enteredOtp);

      if (response.Result === "OK") {
        setEmailVerified(true);
        setSendOtpMessage(""); // Clear OTP message
        toast.success("Email verified successfully!");
      } else {
        toast.error(response.Msg);
      }
    } catch (error) {
      console.error("Error verifying email:", error);
      toast.error("Error verifying email. Please try again.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (newPassword !== confirmPassword) {
        toast.error("Passwords do not match.");
        return;
      }

      dispatch(startLoading());

      const response = await config.resetPassword(
        email,
        newPassword,
        enteredOtp
      );

      if (response.Result === "OK") {
        setResetPasswordMessage("Reset successful!");
        setConfirmPassword("");
        setNewPassword("");
        setEmail("");
        setEnteredOtp("");
      } else {
        setResetPasswordMessage(response.Msg);
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      setResetPasswordMessage("Error resetting password. Please try again.");
    } finally {
      dispatch(stopLoading());
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ m: 1 }}>
            Forgot Password
          </Typography>
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
              {!emailVerified && (
                <>
                  <Grid item xs={12}>
                    <Button
                      type="button"
                      fullWidth
                      variant="contained"
                      onClick={handleSendEmailOtp}
                    >
                      Get OTP
                    </Button>
                    {sendOtpMessage && (
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        align="center"
                      >
                        {sendOtpMessage}
                      </Typography>
                    )}
                  </Grid>
                </>
              )}
              {otpSent && !emailVerified && (
                <>
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
                  <Grid item xs={12}>
                    <Button
                      type="button"
                      fullWidth
                      variant="contained"
                      onClick={handleVerifyEmail}
                    >
                      Verify Email
                    </Button>
                  </Grid>
                </>
              )}
              {emailVerified && (
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
                  <Grid item xs={12}>
                    <Button
                      type="button"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3 }}
                      onClick={handleSubmit}
                    >
                      Reset Password
                    </Button>
                    {resetPasswordMessage && (
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        align="center"
                      >
                        {resetPasswordMessage}
                      </Typography>
                    )}
                  </Grid>
                </>
              )}
            </Grid>
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
