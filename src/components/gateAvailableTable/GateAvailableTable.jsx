import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSelector, useDispatch } from "react-redux";
import { setBookingDate } from "../../rtk/reducer/userBookingDataReducer";

export default function GateAvailableTable({
  setShowSearchAvailability,
  setShowAddBookingDetails,
}) {
  const dispatch = useDispatch();

  // Access the state from the Redux store
  const userBookingData = useSelector((state) => state.userBookingData);
  const { gate, startDate } = userBookingData;

  // Convert startDate to a JavaScript Date object
  const startDateObject = new Date(startDate);

  // Calculate the next day
  const nextDayDate = new Date(startDateObject);
  nextDayDate.setDate(startDateObject.getDate() + 1);

  // Function to format the date as 'DD/MM/YYYY'
  const formatDate = (date) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        backgroundColor: "rgba(157, 178, 191, 0.1)",
        backdropFilter: "blur(21px) saturate(200%)",
        WebkitBackdropFilter: "blur(21px) saturate(200%)",
        borderRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.5)", // Increased border visibility
      }}
    >
      <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                rowSpan={2}
                sx={{
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  fontWeight: "bold",
                }}
              >
                Gate
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  fontWeight: "bold",
                }}
              >
                {formatDate(startDateObject)}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  fontWeight: "bold",
                }}
              >
                {formatDate(nextDayDate)}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  fontWeight: "bold",
                }}
              >
                {formatDate(new Date(nextDayDate.getTime() + 86400000))}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                align="center"
                sx={{
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  fontWeight: "bold",
                }}
              >
                Morning
              </TableCell>

              <TableCell
                align="center"
                sx={{
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  fontWeight: "bold",
                }}
              >
                Morning
              </TableCell>

              <TableCell
                align="center"
                sx={{
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  fontWeight: "bold",
                }}
              >
                Morning
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                align="center"
                sx={{ border: "1px solid rgba(255, 255, 255, 0.5)" }}
              >
                {gate}
              </TableCell>
              <TableCell
                cursor={gate === "No Gate Selected" ? "default" : "pointer"}
                align="center"
                sx={{
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  cursor: gate === "No Gate Selected" ? "default" : "pointer",
                }}
                onClick={() => {
                  if (gate !== "No Gate Selected") {
                    setShowAddBookingDetails(true);
                    setShowSearchAvailability(false);
                    dispatch(setBookingDate(formatDate(startDateObject))); // Dispatch setDate with startDate
                  }
                }}
              >
                {gate === "No Gate Selected" ? "_" : 4}
              </TableCell>
              <TableCell
                cursor={gate === "No Gate Selected" ? "default" : "pointer"}
                align="center"
                sx={{
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  cursor: gate === "No Gate Selected" ? "default" : "pointer",
                }}
                onClick={() => {
                  if (gate !== "No Gate Selected") {
                    setShowAddBookingDetails(true);
                    setShowSearchAvailability(false);
                    dispatch(setBookingDate(formatDate(nextDayDate))); // Dispatch setDate with nextDayDate
                  }
                }}
              >
                {gate === "No Gate Selected" ? "_" : 4}
              </TableCell>
              <TableCell
                cursor={gate === "No Gate Selected" ? "default" : "pointer"}
                align="center"
                sx={{
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  cursor: gate === "No Gate Selected" ? "default" : "pointer",
                }}
                onClick={() => {
                  if (gate !== "No Gate Selected") {
                    setShowAddBookingDetails(true);
                    setShowSearchAvailability(false);
                    dispatch(
                      setBookingDate(
                        formatDate(new Date(nextDayDate.getTime() + 86400000))
                      )
                    ); // Dispatch setDate with nextNextDayDate
                  }
                }}
              >
                {gate === "No Gate Selected" ? "_" : 4}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
