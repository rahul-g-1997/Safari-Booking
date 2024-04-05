import { Container, Grid } from "@mui/material";
import { SignIn } from "../../components";
import bgimg from "../../assets/backgroundimg.jpg";
export default function Home() {
  return (
    <Container
      maxWidth="xl"
      sx={{ marginTop: 3 }}
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingBottom :10
      }}
    >
      <Grid container spacing={3} paddingTop={10} >
        <Grid item xs={6}>
          <SignIn />
        </Grid>
      </Grid>
    </Container>
  );
}
