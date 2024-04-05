import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      margin={10}
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://data-engine.co/">
        DataEngine Pvt Ltd
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}