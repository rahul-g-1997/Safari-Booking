import { Container, Grid } from "@mui/material";
import { ForgotPassword, SignIn, SignUp } from "../../components";
import bgimg from "../../assets/backgroundimg.jpg";
import { useState } from "react";

export default function Home() {
  const [showSignIn, setShowSignIn] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const toggleSignIn = () => {
    setShowSignIn(true);
    setShowSignUp(false);
    setShowForgotPassword(false);
  };

  const toggleSignUp = () => {
    setShowSignIn(false);
    setShowSignUp(true);
    setShowForgotPassword(false);
  };

  const toggleForgotPassword = () => {
    setShowSignIn(false);
    setShowSignUp(false);
    setShowForgotPassword(true);
  };

  return (
    <Container
      maxWidth="xl"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid item xs={false} sm={4} md={7}></Grid>
        <Grid item xs={12} sm={8} md={5} elevation={6}>
          {showSignIn && <SignIn toggleForm={toggleSignUp} />}
          {showSignUp && <SignUp toggleForm={toggleSignIn} />}
          {showForgotPassword && (
            <ForgotPassword toggleForgotPassword={toggleForgotPassword} />
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
