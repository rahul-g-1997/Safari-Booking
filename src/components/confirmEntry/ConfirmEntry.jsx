import { useState, useEffect } from "react";
import {
  TextField,
  MenuItem,
  Grid,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import staffService from "./../../services/staff";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../../rtk/reducer/loaderReducer";

// Columns for DataGrid
const columns = [
  { field: "id", headerName: "Sr.No.", width: 70 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "age", headerName: "Age", type: "number", width: 70 },
  { field: "gender", headerName: "Gender", width: 100 },
  { field: "country", headerName: "Country", width: 100 },
  { field: "identityType", headerName: "Identity Type", width: 130 },
  { field: "identityNumber", headerName: "Identity Number", width: 180 },
];

const ConfirmEntry = () => {
  const dispatch = useDispatch();

  // State variables
  const [gates, setGates] = useState([]);
  const [selectedGate, setSelectedGate] = useState("");
  const [bookingNumbers, setBookingNumbers] = useState([]);
  const [confirmedBookingIds, setConfirmedBookingIds] = useState([]);
  const [finishedBookingIds, setFinishedBookingIds] = useState([]);
  const [selectedBookingNumber, setSelectedBookingNumber] = useState("");
  const [bookingDetailsByNumber, setBookingDetailsByNumber] = useState([]);
  const [gypsyDetails, setGypsyDetails] = useState({});
  const [gypsyno, setGypsyno] = useState("");
  const [ownername, setOwnername] = useState("");
  const [owneradharno, setOwneradharno] = useState("");
  const [ownermobileno, setOwnermobileno] = useState("");
  const [owneraccountno, setOwneraccountno] = useState("");
  const [ownerIFSCcode, setOwnerIFSCcode] = useState("");
  const [ownerbankname, SetOwnerbankname] = useState("");
  const [gypsycharge, setGypsycharge] = useState("");
  const [guideDetails, setGuideDetails] = useState({});
  const [guidName, setGuidName] = useState("");
  const [guidadharno, setGuidadharno] = useState("");
  const [guidmobileno, setGuidmobileno] = useState("");
  const [guidaccountno, setGuidaccountno] = useState("");
  const [guidIFSCcode, setGuidIFSCcode] = useState("");
  const [guidbankname, setGuidbankname] = useState("");
  const [guidecharge, setGuidecharge] = useState("");
  const [gypsyCode, setGypsyCode] = useState("");
  const [guideCode, setGuideCode] = useState("");
  const [showConfirmEntry, setShowConfirmEntry] = useState(true);
  const [showFinishEntry, setShowFinishEntry] = useState(false);
  const token = localStorage.getItem("token");
  const currentDate = new Date().toISOString().split("T")[0]; // Get current date in 'YYYY-MM-DD' format

  // Fetch gates on component mount
  useEffect(() => {
    const fetchGates = async () => {
      try {
        const gatesData = await staffService.getStaffGates(token);
        setGates(gatesData);
      } catch (error) {
        console.error("Error fetching gates:", error);
      }
    };
    fetchGates();
  }, [dispatch, token]);

  // Fetch booking numbers when a gate is selected
  useEffect(() => {
    if (selectedGate) {
      const fetchBookingNumbers = async () => {
        try {
          const bookingData = await staffService.getBookingIdByGateId(
            selectedGate
          );
          const filteredBookingNumbers = bookingData.filter(
            (booking) =>
              !finishedBookingIds.some(
                (finishedBooking) =>
                  finishedBooking.BOOKING_NO === booking.BOOKING_NO
              )
          );
          setBookingNumbers(filteredBookingNumbers);
        } catch (error) {
          console.error("Error fetching booking numbers:", error);
        }
      };
      fetchBookingNumbers();
    } else {
      setBookingNumbers([]); // Clear booking numbers if no gate is selected
    }
  }, [selectedGate, finishedBookingIds]);

  // Fetch booking details when a booking number is selected
  useEffect(() => {
    if (selectedBookingNumber) {
      const fetchBookingDetailsByNumber = async () => {
        try {
          const bookingDetailsByNumber =
            await staffService.getBookingDetailsByNumber(selectedBookingNumber);
          setBookingDetailsByNumber(bookingDetailsByNumber);
        } catch (error) {
          console.error("Error fetching booking details by number:", error);
        }
      };
      fetchBookingDetailsByNumber();
    }
  }, [selectedBookingNumber]);

  const handleGateChange = (event) => {
    setSelectedGate(event.target.value);
    setSelectedBookingNumber(""); // Reset booking number when gate changes
  };

  const handleBookingNumberChange = (event) => {
    setSelectedBookingNumber(event.target.value);
  };

  const getVehicleType = (type) => {
    switch (type) {
      case "g":
        return "Gipsy";
      case "p":
        return "Private";
      default:
        return "";
    }
  };

  // Map tourist details to rows
  const touristDetailsRows = bookingDetailsByNumber[0]?.TOURIST_DTLS
    ? JSON.parse(bookingDetailsByNumber[0].TOURIST_DTLS).map(
        (tourist, index) => ({
          id: index + 1, // Assign a unique ID
          ...tourist,
        })
      )
    : [];

  const cameraDetails = bookingDetailsByNumber[0]?.CAMERA_DTLS
    ? JSON.parse(bookingDetailsByNumber[0].CAMERA_DTLS)
    : { Noofcam: "" };
  const cameraCharges = cameraDetails.Noofcam * 250;

  // Fetch Gypsy details when Gypsy code is entered
  const fetchGypsyDetails = async (gypsyCode) => {
    try {
      const gypsyDetails = await staffService.getAllGypsyDetails(gypsyCode);
      setGypsyDetails(gypsyDetails[0] || {});
    } catch (error) {
      console.error("Error fetching Gypsy details:", error);
    }
  };

  // Fetch Guide details when Guide code is entered
  const fetchGuideDetails = async (guideCode) => {
    try {
      const guideDetails = await staffService.getAllGuideDetails(guideCode);
      setGuideDetails(guideDetails[0] || {});
      console.log(guideDetails);
    } catch (error) {
      console.error("Error fetching Guide details:", error);
    }
  };

  const handleGypsyCodeChange = (event) => {
    const gypsyCode = event.target.value;
    setGypsyCode(gypsyCode);
    fetchGypsyDetails(gypsyCode);
  };

  const handleGuideCodeChange = (event) => {
    const guideCode = event.target.value;
    setGuideCode(guideCode);
    fetchGuideDetails(guideCode);
  };
  const TATR_Fees =
    bookingDetailsByNumber[0]?.TOT_AMT -
    cameraCharges -
    (gypsyDetails.RATE || gypsycharge) -
    (guideDetails.RATE || guidecharge);

  // Handle confirming entry
  const handleConfirmEntry = async () => {
    dispatch(startLoading());
    if (
      Object.keys(gypsyDetails).length !== 0 &&
      Object.keys(guideDetails).length !== 0
    ) {
      try {
        const response = await staffService.confirmEntry(
          selectedBookingNumber,
          gypsyCode,
          guideCode,
          token
        );
        console.log("Entry confirmed successfully:", response);
        toast.success("Entry confirmed successfully");
        fetchData();
      } catch (error) {
        console.error("Error confirming entry:", error);
        toast.error("Error confirming entry:");
      } finally {
        dispatch(stopLoading());
      }
    } else if (Object.keys(gypsyDetails).length !== 0) {
      console.error("Guide details are missing.");
      try {
        const requestData = {
          act: "cnfmentry",
          "booking.no": selectedBookingNumber,
          "gypsy.cd": gypsyCode,
          token,
          date: currentDate,
          guidenewentry: "yes",
          "guide.nm": guidName,
          "guide.cd": guideCode,
          "gate.nm": "Gate 1",
          "guide.dtls": JSON.stringify({
            Mobile: guidmobileno,
            aadharno: guidadharno,
          }),
          "gbank.dtls": JSON.stringify({
            accountno: guidaccountno,
            BankName: guidbankname,
            IFSC: guidIFSCcode,
          }),
          ground: "1",
          grate: guidecharge,
        };
        console.log(requestData);
        const response = await staffService.confirmEntryWithDetails(
          requestData
        );
        console.log("Entry confirmed successfully:", response);
        toast.success("Entry confirmed successfully");
        fetchData();
      } catch (error) {
        console.error("Error confirming entry:", error);
        toast.error("Error confirming entry");
      } finally {
        dispatch(stopLoading());
      }
    } else if (Object.keys(guideDetails).length !== 0) {
      console.error("Gypsy details are missing.");
      try {
        const requestData = {
          act: "cnfmentry",
          gpsynewentry: "yes",
          "booking.no": selectedBookingNumber,
          "gypsy.cd": gypsyCode,
          token,
          "owner.nm": ownername,
          "gpsy.no": gypsyno,
          "gate.nm": "Gate 1",
          "owner.dtls": JSON.stringify({
            Mobile: ownermobileno,
            aadharno: owneradharno,
          }),
          "bank.dtls": JSON.stringify({
            accountno: owneraccountno,
            bankname: ownerbankname,
            IFSCcode: ownerIFSCcode,
          }),
          round: "1",
          rate: gypsycharge,
          date: currentDate,
          "guide.cd": guideCode,
        };

        const response = await staffService.confirmEntryWithDetails(
          requestData
        );
        console.log("Entry confirmed successfully:", response);
        toast.success("Entry confirmed successfully");
        fetchData();
      } catch (error) {
        console.error("Error confirming entry:", error);
        toast.error("Error confirming entry");
      } finally {
        dispatch(stopLoading());
      }
    } else {
      try {
        const requestData = {
          act: "cnfmentry",
          gpsynewentry: "yes",
          "booking.no": selectedBookingNumber,
          "gypsy.cd": gypsyCode,
          token,
          "owner.nm": ownername,
          "gpsy.no": gypsyno,
          "gate.nm": "Gate 1",
          "owner.dtls": JSON.stringify({
            Mobile: ownermobileno,
            aadharno: owneradharno,
          }),
          "bank.dtls": JSON.stringify({
            accountno: owneraccountno,
            bankname: ownerbankname,
            IFSCcode: ownerIFSCcode,
          }),
          round: "1",
          rate: gypsycharge,
          date: currentDate,
          guidenewentry: "yes",
          "guide.nm": guidName,
          "guide.cd": guideCode,
          "guide.dtls": JSON.stringify({
            Mobile: guidmobileno,
            aadharno: guidadharno,
          }),
          "gbank.dtls": JSON.stringify({
            accountno: guidaccountno,
            BankName: guidbankname,
            IFSC: guidIFSCcode,
          }),
          ground: "1",
          grate: guidecharge,
        };
        console.log(requestData);
        const response = await staffService.confirmEntryWithDetails(
          requestData
        );
        console.log("Entry confirmed successfully:", response);
        toast.success("Entry confirmed successfully");
        fetchData();
      } catch (error) {
        console.error("Error confirming entry:", error);
        toast.error("Error confirming entry");
      } finally {
        dispatch(stopLoading());
      }
    }
  };

  const getCurrentDateTimeFormatted = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const date = now.getDate().toString().padStart(2, "0");
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
  };

  // Handle finishing entry
  const handleFinishedBooking = async () => {
    dispatch(startLoading());
    try {
      const endTime = getCurrentDateTimeFormatted(); // Get the current date and time formatted as YYYY-MM-DD HH:mm:ss
      const result = await staffService.endBookingTime(
        selectedBookingNumber,
        endTime,
        token
      );
      console.log("Booking time ended successfully:", result);
      toast.success("Booking time ended successfully");
      fetchData();
      // Perform any additional actions needed after successfully ending the booking time
    } catch (error) {
      console.error("Error in handleFinishedBooking:", error);
      toast.error("Error in handleFinishedBooking:");
      // Handle the error appropriately in your application
    } finally {
      dispatch(stopLoading());
    }
  };

  // Fetch conformed booking numbers when a gate is selected
  useEffect(() => {
    const fetchConfirmedBookingIds = async () => {
      try {
        const bookingData = await staffService.getConfirmedBookingIds();
        const filteredConfirmedBookingIds = bookingData.filter(
          (confirmedBooking) =>
            !finishedBookingIds.some(
              (finishedBooking) =>
                finishedBooking.BOOKING_NO === confirmedBooking.BOOKING_NO
            )
        );
        setConfirmedBookingIds(filteredConfirmedBookingIds);
      } catch (error) {
        console.error("Error fetching Confirmed booking numbers:", error);
      }
    };
    fetchConfirmedBookingIds();
  }, [finishedBookingIds]);

  // Fetch finished booking numbers when a gate is selected
  useEffect(() => {
    const fetchFinishedBookingIds = async () => {
      try {
        const bookingData = await staffService.getFinishedBookingIds();
        setFinishedBookingIds(bookingData);
      } catch (error) {
        console.error("Error fetching Confirmed booking numbers:", error);
      }
    };
    fetchFinishedBookingIds();
  });

  useEffect(() => {
    if (selectedBookingNumber) {
      // Check if the selected booking number matches any confirmed booking ID
      const isConfirmedBooking = confirmedBookingIds.some(
        (confirmedBooking) =>
          confirmedBooking.BOOKING_NO === selectedBookingNumber
      );
      if (isConfirmedBooking) {
        setShowConfirmEntry(false);
        setShowFinishEntry(true);
      } else {
        setShowConfirmEntry(true);
        setShowFinishEntry(false);
      }
    } else {
      // If no booking number is selected, reset both states
      setShowConfirmEntry(true);
      setShowFinishEntry(true);
    }
  }, [selectedBookingNumber, confirmedBookingIds]);

  const fetchData = async () => {
    try {
      // Fetch gates
      const gatesData = await staffService.getStaffGates(token);
      setGates(gatesData);
      setBookingDetailsByNumber([]);
      // Fetch confirmed booking IDs
      const confirmedBookingData = await staffService.getConfirmedBookingIds();
      const filteredConfirmedBookingIds = confirmedBookingData.filter(
        (confirmedBooking) =>
          !finishedBookingIds.some(
            (finishedBooking) =>
              finishedBooking.BOOKING_NO === confirmedBooking.BOOKING_NO
          )
      );
      setConfirmedBookingIds(filteredConfirmedBookingIds);

      // Fetch finished booking IDs
      const finishedBookingData = await staffService.getFinishedBookingIds();
      setFinishedBookingIds(finishedBookingData);

      // Any other data fetching logic...
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

 

  return (
    <Box>
      <Grid container spacing={2}>
        {/* Left Side: Form Inputs */}
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              {/* Select Gate */}
              <TextField
                select
                fullWidth
                margin="normal"
                label="Select Gate"
                size="small"
                value={selectedGate}
                onChange={handleGateChange}
                variant="outlined"
              >
                {gates
                  .filter((gate) => gate.GATEID)
                  .map((gate) => (
                    <MenuItem key={gate.GATEID} value={gate.GATEID}>
                      {gate.GATE_NM}
                    </MenuItem>
                  ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              {/* Select Booking Number */}
              <TextField
                select
                fullWidth
                margin="normal"
                label="Select Booking Number"
                size="small"
                value={selectedBookingNumber}
                onChange={handleBookingNumberChange}
                variant="outlined"
                disabled={!selectedGate}
              >
                {bookingNumbers
                  .filter((booking) => booking.BOOKING_NO)
                  .map((booking) => (
                    <MenuItem
                      key={booking.BOOKING_NO}
                      value={booking.BOOKING_NO}
                    >
                      {booking.BOOKING_NO}
                    </MenuItem>
                  ))}
              </TextField>
            </Grid>
          </Grid>
          {selectedBookingNumber && (
            <Grid container spacing={2} mt={0}>
              <Grid item xs={12} sm={12} md={5} lg={4}>
                <Box sx={{ p: 1, border: 1, borderRadius: 2 }}>
                  {/* Seven read-only input fields */}
                  <TextField
                    fullWidth
                    margin="normal"
                    label="User Name"
                    size="small"
                    variant="outlined"
                    value={bookingDetailsByNumber[0]?.ENTRDBY || ""}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Booking Date"
                    size="small"
                    variant="outlined"
                    value={bookingDetailsByNumber[0]?.ENTRDON || ""}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Safari Date"
                    size="small"
                    variant="outlined"
                    value={bookingDetailsByNumber[0]?.SafariDate || ""}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Vehicle Type"
                    size="small"
                    variant="outlined"
                    value={getVehicleType(
                      bookingDetailsByNumber[0]?.VHCLE_TYPE
                    )}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Booking Slot"
                    size="small"
                    variant="outlined"
                    value={bookingDetailsByNumber[0]?.SLOT_NM || ""}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Number of cameras"
                    size="small"
                    variant="outlined"
                    value={cameraDetails.Noofcam}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Payment Status"
                    size="small"
                    variant="outlined"
                    value={bookingDetailsByNumber[0]?.PYMNT_ST || ""}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Paid amount"
                    size="small"
                    variant="outlined"
                    value={bookingDetailsByNumber[0]?.TOT_AMT || ""}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Reference Number"
                    size="small"
                    variant="outlined"
                    value={bookingDetailsByNumber[0]?.REF_NM || ""}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={7} lg={8}>
                <Box sx={{ p: 1, border: 1, borderRadius: 2 }}>
                  <Typography gutterBottom>Tourist Details</Typography>
                  <Grid>
                    <div style={{ width: "100%" }}>
                      <DataGrid
                        rows={touristDetailsRows}
                        columns={columns}
                        initialState={{
                          pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                          },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                      />
                    </div>
                  </Grid>
                  {showConfirmEntry && (
                    <>
                      <Typography gutterBottom p={1}>
                        Gipsy Details
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4} lg={3} mt={-1} mb={-1}>
                          <TextField
                            fullWidth
                            margin="normal"
                            label="Gypsy Code"
                            size="small"
                            variant="outlined"
                            onChange={handleGypsyCodeChange}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={3} mt={-1} mb={-1}>
                          <TextField
                            fullWidth
                            margin="normal"
                            label="Gypsy No."
                            size="small"
                            variant="outlined"
                            value={gypsyDetails?.GPSY_NO || gypsyno}
                            onChange={(e) => setGypsyno(e.target.value)}
                            InputProps={{
                              readOnly: gypsyDetails.length === 0,
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} mt={-1} mb={-1}>
                          <TextField
                            fullWidth
                            margin="normal"
                            label="Owner Name"
                            size="small"
                            variant="outlined"
                            value={gypsyDetails?.OWNER_NM || ownername}
                            onChange={(e) => setOwnername(e.target.value)}
                            InputProps={{
                              readOnly: gypsyDetails.length === 0,
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} mt={-1} mb={-1}>
                          <TextField
                            fullWidth
                            margin="normal"
                            label="Adhar No."
                            size="small"
                            variant="outlined"
                            value={
                              gypsyDetails?.OWNER_DTLS
                                ? JSON.parse(gypsyDetails.OWNER_DTLS)?.aadharno
                                : owneradharno
                            }
                            onChange={(e) => setOwneradharno(e.target.value)}
                            InputProps={{
                              readOnly: gypsyDetails.length === 0,
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} mt={-1} mb={-1}>
                          <TextField
                            fullWidth
                            margin="normal"
                            label="Mobile No."
                            size="small"
                            variant="outlined"
                            value={
                              gypsyDetails?.OWNER_DTLS
                                ? JSON.parse(gypsyDetails.OWNER_DTLS)?.Mobile
                                : ownermobileno
                            }
                            onChange={(e) => setOwnermobileno(e.target.value)}
                            InputProps={{
                              readOnly: gypsyDetails.length === 0,
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} mt={-1} mb={-1}>
                          <TextField
                            fullWidth
                            margin="normal"
                            label="Bank Account Number"
                            size="small"
                            variant="outlined"
                            value={
                              gypsyDetails?.OWNER_DTLS
                                ? JSON.parse(gypsyDetails.BANK_DTLS)?.accountno
                                : owneraccountno
                            }
                            onChange={(e) => setOwneraccountno(e.target.value)}
                            InputProps={{
                              readOnly: gypsyDetails.length === 0,
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} mt={-1} mb={-1}>
                          <TextField
                            fullWidth
                            margin="normal"
                            label="IFSC Code"
                            size="small"
                            variant="outlined"
                            value={
                              gypsyDetails?.OWNER_DTLS
                                ? JSON.parse(gypsyDetails.BANK_DTLS)?.IFSCcode
                                : ownerIFSCcode
                            }
                            onChange={(e) => setOwnerIFSCcode(e.target.value)}
                            InputProps={{
                              readOnly: gypsyDetails.length === 0,
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} mt={-1} mb={-1}>
                          <TextField
                            fullWidth
                            margin="normal"
                            label="Bank Name"
                            size="small"
                            variant="outlined"
                            value={
                              gypsyDetails?.OWNER_DTLS
                                ? JSON.parse(gypsyDetails.BANK_DTLS)?.bankname
                                : ownerbankname
                            }
                            onChange={(e) => SetOwnerbankname(e.target.value)}
                            InputProps={{
                              readOnly: gypsyDetails.length === 0,
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} mt={-1} mb={-1}>
                          <TextField
                            fullWidth
                            margin="normal"
                            label="Gypsy Charge"
                            size="small"
                            variant="outlined"
                            value={gypsyDetails?.RATE || gypsycharge}
                            onChange={(e) => setGypsycharge(e.target.value)}
                            InputProps={{
                              readOnly: gypsyDetails.length === 0,
                            }}
                          />
                        </Grid>
                      </Grid>
                      <Typography gutterBottom p={1}>
                        Guide Details
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4} lg={3} mt={-1} mb={-1}>
                          <TextField
                            fullWidth
                            margin="normal"
                            label="Guide Code"
                            size="small"
                            variant="outlined"
                            onChange={handleGuideCodeChange}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} mt={-1} mb={-1}>
                          <TextField
                            fullWidth
                            margin="normal"
                            label="Guide Name"
                            size="small"
                            variant="outlined"
                            value={guideDetails?.GUIDE_NM || guidName}
                            onChange={(e) => setGuidName(e.target.value)}
                            InputProps={{
                              readOnly: guideDetails.length === 0,
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} mt={-1} mb={-1}>
                          <TextField
                            fullWidth
                            margin="normal"
                            label="Adhar No."
                            size="small"
                            variant="outlined"
                            value={
                              guideDetails?.GUIDE_DTLS
                                ? JSON.parse(guideDetails.GUIDE_DTLS)?.aadharno
                                : guidadharno
                            }
                            onChange={(e) => setGuidadharno(e.target.value)}
                            InputProps={{
                              readOnly: guideDetails.length === 0,
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} mt={-1} mb={-1}>
                          <TextField
                            fullWidth
                            margin="normal"
                            label="Mobile No."
                            size="small"
                            variant="outlined"
                            value={
                              guideDetails?.GUIDE_DTLS
                                ? JSON.parse(guideDetails.GUIDE_DTLS)?.Mobile
                                : guidmobileno
                            }
                            onChange={(e) => setGuidmobileno(e.target.value)}
                            InputProps={{
                              readOnly: guideDetails.length === 0,
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} mt={-1} mb={-1}>
                          <TextField
                            fullWidth
                            margin="normal"
                            label="Bank Account Number"
                            size="small"
                            variant="outlined"
                            value={
                              guideDetails?.BANK_DTLS
                                ? JSON.parse(guideDetails.BANK_DTLS)?.accountno
                                : guidaccountno
                            }
                            onChange={(e) => setGuidaccountno(e.target.value)}
                            InputProps={{
                              readOnly: guideDetails.length === 0,
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} mt={-1} mb={-1}>
                          <TextField
                            fullWidth
                            margin="normal"
                            label="IFSC Code"
                            size="small"
                            variant="outlined"
                            value={
                              guideDetails?.BANK_DTLS
                                ? JSON.parse(guideDetails.BANK_DTLS)?.IFSC
                                : guidIFSCcode
                            }
                            onChange={(e) => setGuidIFSCcode(e.target.value)}
                            InputProps={{
                              readOnly: guideDetails.length === 0,
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} mt={-1} mb={-1}>
                          <TextField
                            fullWidth
                            margin="normal"
                            label="Bank Name"
                            size="small"
                            variant="outlined"
                            value={
                              guideDetails?.BANK_DTLS
                                ? JSON.parse(guideDetails.BANK_DTLS)?.BankName
                                : guidbankname
                            }
                            onChange={(e) => setGuidbankname(e.target.value)}
                            InputProps={{
                              readOnly: guideDetails.length === 0,
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} mt={-1} mb={-1}>
                          <TextField
                            fullWidth
                            margin="normal"
                            label="Guide Charge"
                            size="small"
                            variant="outlined"
                            value={guideDetails?.RATE || guidecharge}
                            onChange={(e) => setGuidecharge(e.target.value)}
                            InputProps={{
                              readOnly: guideDetails.length === 0,
                            }}
                          />
                        </Grid>
                      </Grid>
                      <Typography gutterBottom p={1}>
                        Other Details
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4} lg={3} mt={-1} mb={-1}>
                          <TextField
                            fullWidth
                            margin="normal"
                            label="TATR Fees"
                            size="small"
                            variant="outlined"
                            value={TATR_Fees}
                            InputProps={{
                              readOnly: true,
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} mt={-1}>
                          <TextField
                            fullWidth
                            margin="normal"
                            label="Camera Charges"
                            size="small"
                            variant="outlined"
                            value={cameraCharges}
                            InputProps={{
                              readOnly: true,
                            }}
                          />
                        </Grid>
                      </Grid>
                      <Grid item xs={12} sm={8} md={6} lg={4} mt={-1}>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 1, mb: 2 }}
                          onClick={() => handleConfirmEntry()}
                        >
                          Confirm Entry
                        </Button>
                      </Grid>
                    </>
                  )}
                  {showFinishEntry && (
                    <>
                      <Grid item xs={12} sm={8} md={6} lg={4}>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 1, mb: 2 }}
                          onClick={() => handleFinishedBooking()}
                        >
                          Exit Entry
                        </Button>
                      </Grid>
                    </>
                  )}
                </Box>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ConfirmEntry;
