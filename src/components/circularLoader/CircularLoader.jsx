import { CircularProgress, Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function CircularIndeterminate() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Center the loader vertically
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <CircularProgress color="secondary" size={60} thickness={4} />
        <Typography variant="h6" mt={2} color="text.secondary">
          Loading...
        </Typography>
      </Box>
    </Box>
  );
}
