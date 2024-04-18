import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import PropTypes from "prop-types";
import {
  Button,
  Typography,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Grid,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  MenuItem,
  Select,
  InputLabel,
  Paper,
  FormControl,
} from "@mui/material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
  /* Glassmorphism card effect */
  backgroundColor: "transparent",
  borderRadius: "12px",
  border: "1px solid rgba(255, 255, 255, 0.125)",
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "transparent",
  backdropFilter: "blur(7px) saturate(200%)",
  flexDirection: "row",
  justifyContent: "space-between", // Aligns content to the start and end of the flex container
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function Booking({ setShowBooking, setShowSenctuaryDetails }) {
  const [expanded, setExpanded] = React.useState("panel1");
  const [numberOfPersons, setNumberOfPersons] = useState("");
  const [hasCamera, setHasCamera] = useState("");
  const [numberOfCameras, setNumberOfCameras] = useState("");
  const entryFees = 4000;
  const [formData, setFormData] = useState([]);
  const [cameraFormData, setCameraFormData] = useState([]);

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // Function to generate rows for the first table based on the number of persons
  const generateTourismDetailsRows = () => {
    const handleInputChange = (index, fieldName, value) => {
      const updatedFormData = [...formData];
      updatedFormData[index] = {
        ...updatedFormData[index],
        [fieldName]: value,
      };
      setFormData(updatedFormData);
    };

    const rows = [];
    for (let i = 0; i < parseInt(numberOfPersons); i++) {
      rows.push(
        <TableRow key={i}>
          <TableCell>
            <TextField
              label="Name"
              variant="standard"
              size="small"
              fullWidth
              value={formData[i]?.name || ""}
              onChange={(e) => handleInputChange(i, "name", e.target.value)}
            />
          </TableCell>
          <TableCell>
            <TextField
              select
              label="Gender"
              variant="standard"
              size="small"
              fullWidth
              value={formData[i]?.gender || ""}
              onChange={(e) => handleInputChange(i, "gender", e.target.value)}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </TextField>
          </TableCell>
          <TableCell>
            <TextField
              label="Age"
              type="number"
              variant="standard"
              size="small"
              fullWidth
              value={formData[i]?.age || ""}
              onChange={(e) => handleInputChange(i, "age", e.target.value)}
            />
          </TableCell>
          <TableCell>
            <TextField
              select
              label="Country"
              variant="standard"
              size="small"
              fullWidth
              value={formData[i]?.country || ""}
              onChange={(e) => handleInputChange(i, "country", e.target.value)}
            >
              <MenuItem value="usa">USA</MenuItem>
              <MenuItem value="uk">UK</MenuItem>
              {/* Add other country options */}
            </TextField>
          </TableCell>
          <TableCell>
            <TextField
              select
              label="Identity Type"
              variant="standard"
              size="small"
              fullWidth
              value={formData[i]?.identityType || ""}
              onChange={(e) =>
                handleInputChange(i, "identityType", e.target.value)
              }
            >
              <MenuItem value="passport">Passport</MenuItem>
              <MenuItem value="idCard">ID Card</MenuItem>
              {/* Add other identity type options */}
            </TextField>
          </TableCell>
          <TableCell>
            <TextField
              label="Identity Number"
              variant="standard"
              size="small"
              fullWidth
              value={formData[i]?.identityNumber || ""}
              onChange={(e) =>
                handleInputChange(i, "identityNumber", e.target.value)
              }
            />
          </TableCell>
        </TableRow>
      );
    }
    return rows;
  };

  // Function to generate rows for camera details
  const generateCameraDetailsRows = () => {
    const handleCameraInputChange = (index, fieldName, value) => {
      const updatedCameraFormData = [...cameraFormData];
      updatedCameraFormData[index] = {
        ...updatedCameraFormData[index],
        [fieldName]: value,
      };
      setCameraFormData(updatedCameraFormData);
    };

    const cameraRows = [];
    for (let i = 0; i < parseInt(numberOfCameras); i++) {
      cameraRows.push(
        <TableRow key={i}>
          <TableCell>
            <TextField
              select
              label={`Camera ${i + 1} Name`}
              variant="standard"
              size="small"
              fullWidth
              style={{ width: "40%" }}
              value={cameraFormData[i]?.cameraName || ""}
              onChange={(e) =>
                handleCameraInputChange(i, "cameraName", e.target.value)
              }
            >
              <MenuItem value="Point & Shoot Camera/DSLR/Mirrorless camera with lens">
                Point & Shoot Camera/DSLR/Mirrorless camera with lens
              </MenuItem>
              <MenuItem value="Video camera (non-Professional & non Commercial use), Handy cam">
                Video camera (non-Professional & non Commercial use), Handy cam
              </MenuItem>
            </TextField>
          </TableCell>
        </TableRow>
      );
    }
    return cameraRows;
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid container spacing={2} m={1}>
          <Grid item xs={12} sm={4}>
            <Paper
              style={{
                backgroundColor: "#e0e0e0",
                borderRadius: 8,
                padding: 10,
              }}
            >
              Eco Tourist places: Tadoba Andheri Tigrt Reserv (Core)
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper
              style={{
                backgroundColor: "#e0e0e0",
                borderRadius: 8,
                padding: 10,
              }}
            >
              Zone: Navegaon Zone (Core)
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper
              style={{
                backgroundColor: "#e0e0e0",
                borderRadius: 8,
                padding: 10,
              }}
            >
              Gate: Navegaon Gate (Core)
            </Paper>
          </Grid>

          {/* Second row with three fields */}
          <Grid item xs={12} sm={4}>
            <Paper
              style={{
                backgroundColor: "#e0e0e0",
                borderRadius: 8,
                padding: 10,
              }}
            >
              Date of Booking: 21/06/2024 (fri)
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper
              style={{
                backgroundColor: "#e0e0e0",
                borderRadius: 8,
                padding: 10,
              }}
            >
              Slot: Mornig Time:
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper
              style={{
                backgroundColor: "#e0e0e0",
                borderRadius: 8,
                padding: 10,
              }}
            >
              Vehicle Name: Gypsy
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} md={2}>
          <FormControl fullWidth variant="outlined" size="small">
            <InputLabel id="number-of-persons-label">
              Number of Persons
            </InputLabel>
            <Select
              labelId="number-of-persons-label"
              id="number-of-persons-select"
              value={numberOfPersons}
              onChange={handleInputChange(setNumberOfPersons)}
              label="Number of Persons"
            >
              {[1, 2, 3, 4, 5, 6].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Typography
            variant="body1"
            gutterBottom
            style={{ marginRight: "8px" }}
          >
            Do you have Camera ?
          </Typography>
          <RadioGroup
            aria-label="Do you have Camera ?"
            name="hasCamera"
            value={hasCamera}
            onChange={handleInputChange(setHasCamera)}
            style={{ display: "flex", flexDirection: "row" }}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </Grid>
        {hasCamera === "yes" && (
          <Grid item xs={12} md={2}>
            <FormControl fullWidth variant="outlined" size="small">
              <InputLabel id="number-of-cameras-label">
                Number of Cameras
              </InputLabel>
              <Select
                labelId="number-of-cameras-label"
                id="number-of-cameras-select"
                value={numberOfCameras}
                onChange={handleInputChange(setNumberOfCameras)}
                label="Number of Cameras"
              >
                {[1, 2, 3, 4, 5, 6].map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        )}
        <Grid item xs={12} md={2}>
          <Grid item xs={12}>
            <Typography variant="body1">Entry Fees: {entryFees}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid mt={2}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Eco-tourism details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid>
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead sx={{ backgroundColor: "white" }}>
                    <TableRow>
                      <TableCell>Tourist name</TableCell>
                      <TableCell>Gender</TableCell>
                      <TableCell>Age</TableCell>
                      <TableCell>Country</TableCell>
                      <TableCell>Identity type</TableCell>
                      <TableCell>Identity number</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>{generateTourismDetailsRows()}</TableBody>
                </Table>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead sx={{ backgroundColor: "white" }}>
                    <Typography>children (Max 2 allowed )</Typography>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <TextField
                          label="1st children Name"
                          variant="standard"
                          size="small"
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          label="1st children Age"
                          type="number"
                          variant="standard"
                          size="small"
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          label="2nd children Name"
                          variant="standard"
                          size="small"
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          label="2nd children Age"
                          type="number"
                          variant="standard"
                          size="small"
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography>Camera details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid>
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableBody>{generateCameraDetailsRows()}</TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Correspondence details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid>
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <TextField
                          label="Address"
                          variant="standard"
                          size="small"
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          label="Number"
                          type="number"
                          variant="standard"
                          size="small"
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid container justifyContent="flex-end" mt={3} spacing={2}>
        {/* <Grid item xs={12} md={1}>
          <Button fullWidth variant="contained" onClick={handleShowBooking}>
            Back
          </Button>
        </Grid> */}
        <Grid item xs={12} md={2}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => (
              setShowBooking(false), setShowSenctuaryDetails(true)
            )}
          >
            Conform Details
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

// Add PropTypes validation
Booking.propTypes = {
  setShowSenctuaryDetails: PropTypes.func.isRequired,
  setShowBooking: PropTypes.func.isRequired,
};
