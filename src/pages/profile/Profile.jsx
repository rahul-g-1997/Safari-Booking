import { useState } from "react";
import {
  Avatar,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";



const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: theme.spacing(7),
  height: theme.spacing(7),
  margin: "auto",
}));

const StyledForm = styled("form")(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

export default function Profile() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    mobile: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted data:", userData);
    // You can add your logic here to send data to backend for updating user information
  };

  return (
    <div>
      <div>
        <StyledAvatar />
        <Typography variant="h4" align="center">
          Profile
        </Typography>
        <StyledForm onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Username"
                name="username"
                value={userData.username}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Mobile"
                name="mobile"
                value={userData.mobile}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="password"
                label="New Password"
                name="newPassword"
                value={userData.newPassword}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="password"
                label="Confirm New Password"
                name="confirmNewPassword"
                value={userData.confirmNewPassword}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </StyledForm>
      </div>
    </div>
  );
}
