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
import { toast } from "react-toastify";
import user from "../../services/user";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { startLoading, stopLoading } from "../../rtk/reducer/loaderReducer";
import { useDispatch } from "react-redux";

export default function SignUp({ toggleSignIn }) {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    receiveEmails: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if any of the required fields are empty
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "mobileNumber",
      "dob",
      "gender",
      "password",
      "confirmPassword",
    ];
    const emptyFields = requiredFields.filter((field) => !formData[field]);

    if (emptyFields.length > 0) {
      toast.error("All fields are required.");
      return;
    }

    // Check if passwords match
    const passwordsMatch = formData.password === formData.confirmPassword;

    if (!passwordsMatch) {
      toast.error("Passwords do not match.");
      return;
    }

    // Check age
    const dob = new Date(formData.dob);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    if (age < 18) {
      toast.error("You must be at least 18 years old to sign up.");
      return;
    }

    const sendData = {
      act: "register",
      "usr.fnm": formData.firstName,
      "usr.lnm": formData.lastName,
      "usr.eml": formData.email,
      "usr.cntc": formData.mobileNumber,
      dob: formData.dob,
      gender: formData.gender.toUpperCase(), // Assuming the backend requires uppercase gender
      dtls: "{}", // Not sure what this field represents, leaving it as an empty object
      pswd: formData.password,
    };

    try {
      dispatch(startLoading()); // Start loading when sign-in process starts

      const response = await user.createAccount(sendData);

      // Check if the account creation is successful
      if (response.status === "success") {
        toast.success("Account created successfully.");
        toggleSignIn();
      } else {
        throw new Error("Account creation failed.");
      }
    } catch (error) {
      console.error("Account creation error:", error);
      toast.error("Failed to create account.");
    } finally {
      dispatch(stopLoading()); // Stop loading when sign-in is completed
    }

    // Reset form data
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
      dob: "",
      gender: "",
      receiveEmails: false,
    });
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const isEmailEmpty = (email) => {
    return email.trim() === "";
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
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  inputProps={{
                    type: "email",
                    pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
                  }}
                  error={
                    !isEmailEmpty(formData.email) &&
                    !isEmailValid(formData.email)
                  }
                  helperText={
                    !isEmailEmpty(formData.email) &&
                    !isEmailValid(formData.email)
                      ? "Please enter a valid email address"
                      : ""
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="mobileNumber"
                  label="Mobile Number"
                  id="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="dob"
                  label="Date of Birth"
                  type="date"
                  id="dob"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={formData.dob}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  required
                  fullWidth
                  name="gender"
                  label="Gender"
                  id="gender"
                  SelectProps={{
                    native: true,
                  }}
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="" />
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  autoComplete="new-password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleTogglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  onClick={toggleSignIn}
                  variant="body2"
                  sx={{ cursor: "pointer" }}
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

SignUp.propTypes = {
  toggleSignIn: PropTypes.func.isRequired,
};
