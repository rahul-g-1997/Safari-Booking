import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.font"
      align="center"
      margin={1}
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
