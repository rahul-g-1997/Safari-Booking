import { useState, useEffect } from "react";
import { Avatar, Grid, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useSelector } from "react-redux";

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
  const userData = useSelector((state) => state.auth.userData);

  // Local state variables for each field
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");

  useEffect(() => {
    if (userData && userData.Records && userData.Records.length > 0) {
      const userRecord = userData.Records[0];
      setFirstName(userRecord.USR_FNM);
      setLastName(userRecord.USR_LNM);
      setEmail(userRecord.USR_EML);
      setMobile(userRecord.USR_CNTC);
      setDob(userRecord.DOB);
    }
  }, [userData]);

  return (
    <div>
      <div>
        <StyledAvatar />
        <Typography variant="h4" align="center">
          Profile
        </Typography>
        <StyledForm>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size="small"
                label="First Name"
                name="firstName"
                value={firstName}
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size="small"
                label="Last Name"
                name="lastName"
                value={lastName}
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size="small"
                label="Email"
                name="email"
                value={email}
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size="small"
                label="Mobile"
                name="mobile"
                value={mobile}
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size="small"
                label="Date of Birth"
                name="dob"
                value={dob}
                disabled
              />
            </Grid>
            {/* Add more fields for other user details as needed */}
          </Grid>
        </StyledForm>
      </div>
    </div>
  );
}
