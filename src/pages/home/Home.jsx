import { Container, Grid } from "@mui/material";
import { SignIn } from "../../components";
export default function Home() {
  return (
    <Container
      maxWidth="xl"
      sx={{ marginTop: 3 }}
      style={{
        backgroundImage: 'url("../../assets/backgroundimg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid container spacing={3} paddingTop={10}>
        <Grid item xs={6}>
          <SignIn />
        </Grid>
      </Grid>
    </Container>
  );
}
