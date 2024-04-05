import { Typography, Container, Grid } from "@mui/material";

const ContactPage = () => {
  return (
    <Container maxWidth="md">
      <Grid paddingTop={7}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          margin={7}
        >
          Contact Us
        </Typography>
      </Grid>
    </Container>
  );
};

export default ContactPage;
