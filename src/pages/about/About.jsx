import { Typography, Container, Grid } from "@mui/material";

export default function About() {
  return (
    // Container for About section with maximum width set to "md"
    <Container maxWidth="md" sx={{ marginTop: 3 }}>
      {/* Grid container with spacing between items */}
      <Grid container spacing={3} paddingTop={10}>
        {/* Grid item for the heading */}
        <Grid item xs={12}>
          {/* Typography for the heading */}
          <Typography
            variant="h4"
            align="center"
            gutterBottom
          >
            About
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
