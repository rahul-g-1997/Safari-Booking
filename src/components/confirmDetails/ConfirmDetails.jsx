import { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Checkbox,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableContainer,
  Table,
} from "@mui/material";

export default function ConfirmDetails() {
  const [openDialog, setOpenDialog] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    // Check if the checkbox is not already checked
    if (!termsChecked) {
      setTermsChecked(event.target.checked);
      handleOpenDialog();
    } else {
      // If already checked, just uncheck it
      setTermsChecked(false);
    }
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleAgreeButtonClick = () => {
    handleCloseDialog();
    // Do something when the user agrees
  };

  const handleDisagreeButtonClick = () => {
    setTermsChecked(false); // Uncheck the checkbox
    handleCloseDialog();
    // Do something when the user disagrees
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom item xs={12} textAlign="center">
        Sanctuary Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Paper
            style={{ backgroundColor: "#e0e0e0", borderRadius: 8, padding: 10 }}
          >
            Sanctuary: Tadoba Andheri Tigrt Reserv (Core)
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper
            style={{ backgroundColor: "#e0e0e0", borderRadius: 8, padding: 10 }}
          >
            Zone: Navegaon Zone (Core)
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper
            style={{ backgroundColor: "#e0e0e0", borderRadius: 8, padding: 10 }}
          >
            Gate: Navegaon Gate (Core)
          </Paper>
        </Grid>

        {/* Second row with three fields */}
        <Grid item xs={12} sm={4}>
          <Paper
            style={{ backgroundColor: "#e0e0e0", borderRadius: 8, padding: 10 }}
          >
            Date of Booking: 21/06/2024 (fri)
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper
            style={{ backgroundColor: "#e0e0e0", borderRadius: 8, padding: 10 }}
          >
            Slot: Mornig Time:
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper
            style={{ backgroundColor: "#e0e0e0", borderRadius: 8, padding: 10 }}
          >
            Vehicle Name: Gypsy
          </Paper>
        </Grid>
      </Grid>
      <Grid container justifyContent="flex-end" mt={3}>
        <Grid item xs={12} sm={4}>
          <Typography gutterBottom item xs={12} textAlign="center">
            Booking Type: Regular
          </Typography>

          <Typography gutterBottom item xs={12} textAlign="center">
            <Typography>
              Current Available:
              <span style={{ fontWeight: "bold", color: "green" }}> 06</span>
            </Typography>
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={2}>
          Total Person: 6
          <Paper
            style={{
              backgroundColor: "#e0e0e0",
              borderRadius: 8,
              padding: 10,
              width: "100%",
              marginTop: 10,
            }}
          >
            Entry Fee: 4000
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          Total Camera: 3
          <Paper
            style={{
              backgroundColor: "#e0e0e0",
              borderRadius: 8,
              padding: 10,
              width: "100%",
              marginTop: 10,
            }}
          >
            Charges: 750
          </Paper>
        </Grid>
      </Grid>
      <Grid></Grid>

      <Grid container mt={3}>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            <Checkbox
              checked={termsChecked}
              onChange={handleCheckboxChange}
              color="primary"
            />
            I have read and agree to the Terms and Conditions
          </Typography>

          <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle>Terms and Conditions</DialogTitle>
            <DialogContent>
              <Grid>
                <ul>
                  <li>
                    I/We will not enter any protected forest area with fire
                    arms/explosives/Alcohol
                  </li>
                  <li>
                    I/We will ensure that the vehicle driver does not enter
                    prohibited roads, does not blow horn or play the radio music
                    and violate other park rules.
                  </li>
                  <li>
                    I / We shall abide by the park rules and the conditions in
                    the entry permit apart from the rules/regulations made under
                    the Wildlife Protection Act-1972.
                  </li>
                  <li>
                    I/We also hereby indemnify the Maharashtra Forest Department
                    and its officials against any claims for compensation by
                    our-self/myself or others, in the event of any injury or
                    death to our-self/myself during the park excursions.
                  </li>
                </ul>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDisagreeButtonClick} color="primary">
                Disagree
              </Button>
              <Button onClick={handleAgreeButtonClick} color="primary">
                Agree
              </Button>
            </DialogActions>
          </Dialog>
          <Grid>
            <ul>
              <li>
                I/We will not enter any protected forest area with fire
                arms/explosives/Alcohol
              </li>
              <li>
                I/We will ensure that the vehicle driver does not enter
                prohibited roads, does not blow horn or play the radio music and
                violate other park rules.
              </li>
              <li>
                I / We shall abide by the park rules and the conditions in the
                entry permit apart from the rules/regulations made under the
                Wildlife Protection Act-1972.
              </li>
              <li>
                I/We also hereby indemnify the Maharashtra Forest Department and
                its officials against any claims for compensation by
                our-self/myself or others, in the event of any injury or death
                to our-self/myself during the park excursions.
              </li>
            </ul>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Sr. No.</TableCell>
                    <TableCell align="right">Cancellation Date</TableCell>
                    <TableCell align="right">Rate of Deduction</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">1</TableCell>
                    <TableCell align="right">
                      3 to 1 day before the date of excursion
                    </TableCell>
                    <TableCell align="right">
                      100% of the reservation amount.
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">2</TableCell>
                    <TableCell align="right">
                      15 to 4 day before the date of excursion
                    </TableCell>
                    <TableCell align="right">
                      80% of the reservation amount.
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">3</TableCell>
                    <TableCell align="right">
                      59 to 16 day before the date of excursion
                    </TableCell>
                    <TableCell align="right">
                      50% of the reservation amount.
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">4</TableCell>
                    <TableCell align="right">
                      120 to 60 day before the date of excursion
                    </TableCell>
                    <TableCell align="right">
                      100% of the reservation amount.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        mt={2}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography>Total Amount: 4750 </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Pay
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
