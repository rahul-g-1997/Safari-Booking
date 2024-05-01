// import { CircularProgress, Typography } from "@mui/material";
// import Box from "@mui/material/Box";

// export default function CircularIndeterminate() {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh", // Center the loader vertically
//       }}
//     >
//       <Box sx={{ textAlign: "center" }}>
//         <CircularProgress size={60} thickness={4} style={{ color: "white" }} />
//         <Typography variant="h6" mt={2} color="white">
//           Loading...
//         </Typography>
//       </Box>
//     </Box>
//   );
// }

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import running_tiger from "../../assets/running_tiger.gif";
export default function JumpingTigerLoader() {
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
        {/* Replace this div with your jumping tiger animation */}
        <div style={{ width: "150px", height: "100px" }}>
          <img
            src={running_tiger} // Replace with your tiger animation
            alt="Jumping Tiger"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <Typography variant="h6" mt={0} color="white">
          Loading...
        </Typography>
      </Box>
    </Box>
  );
}

