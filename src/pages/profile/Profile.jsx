import { useState, useEffect } from "react";
import { Avatar, Button, Grid, TextField, Typography } from "@mui/material";
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

  useEffect(() => {
    // Fetch user data when the component mounts
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    // Simulate fetching user data from backend
    // Replace this with actual logic to fetch user data from your backend
    const mockUserData = {
      username: "exampleUser",
      email: "example@example.com",
      mobile: "1234567890",
      newPassword: "",
      confirmNewPassword: "",
    };
    setUserData(mockUserData);
  };

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
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size="small"
                label="Username"
                name="username"
                value={userData.username}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size="small"
                label="Email"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size="small"
                label="Mobile"
                name="mobile"
                value={userData.mobile}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size="small"
                type="password"
                label="New Password"
                name="newPassword"
                value={userData.newPassword}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size="small"
                type="password"
                label="Confirm New Password"
                name="confirmNewPassword"
                value={userData.confirmNewPassword}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2}>
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
