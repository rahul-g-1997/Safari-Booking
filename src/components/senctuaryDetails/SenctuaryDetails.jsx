import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const SquareIcon = ({ backgroundColor }) => {
  return (
    <div
      style={{
        width: "20px",
        height: "20px",
        backgroundColor: backgroundColor,
        marginRight: "8px",
        borderRadius: "4px",
      }}
    ></div>
  );
};
SquareIcon.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};
export default function SanctuaryDetails() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            label="Eco-Tourist-Places"
            select
            variant="outlined"
          >
            <MenuItem value={10}>Option 1</MenuItem>
            <MenuItem value={20}>Option 2</MenuItem>
            <MenuItem value={30}>Option 3</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField fullWidth label="Zone" select variant="outlined">
            <MenuItem value={10}>Option 1</MenuItem>
            <MenuItem value={20}>Option 2</MenuItem>
            <MenuItem value={30}>Option 3</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField fullWidth label="Select-Vehicle" select variant="outlined">
            <MenuItem value={10}>Option 1</MenuItem>
            <MenuItem value={20}>Option 2</MenuItem>
            <MenuItem value={30}>Option 3</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} md={2}>
          <TextField
            fullWidth
            label="Date of Booking"
            type="date"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} md={1}>
          <Button fullWidth variant="contained">
            Search
          </Button>
        </Grid>
      </Grid>
      <Grid container justifyContent="flex-end" spacing={1} mt={2}>
        <Grid item>
          <SquareIcon backgroundColor="green" />
        </Grid>
        <Grid item>Avalable</Grid>
        <Grid item>
          <SquareIcon backgroundColor="red" />
        </Grid>
        <Grid item>Booked</Grid>
        <Grid item>
          <SquareIcon backgroundColor="purple" />
        </Grid>
        <Grid item>Holiday</Grid>
      </Grid>
    </Box>
  );
}
