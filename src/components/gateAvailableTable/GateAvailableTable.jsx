import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function GateAvailableTable({ setShowAddSenctuaryDetails, setShowBooking }) {
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
                }} // Bold style added
              >
                Gate
              </TableCell>
              <TableCell
                align="center"
                colSpan={2}
                sx={{
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  fontWeight: "bold",
                }} // Bold style added
              >
                29/04/2024 (Tue)
              </TableCell>
              <TableCell
                align="center"
                colSpan={2}
                sx={{
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  fontWeight: "bold",
                }} // Bold style added
              >
                30/04/2024 (Tue)
              </TableCell>
              <TableCell
                align="center"
                colSpan={2}
                sx={{
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  fontWeight: "bold",
                }} // Bold style added
              >
                31/04/2024 (Tue)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                align="center"
                sx={{
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  fontWeight: "bold",
                }} // Bold style added
              >
                Morning
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  fontWeight: "bold",
                }} // Bold style added
              >
                Afternoon
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  fontWeight: "bold",
                }} // Bold style added
              >
                Morning
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  fontWeight: "bold",
                }} // Bold style added
              >
                Afternoon
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  fontWeight: "bold",
                }} // Bold style added
              >
                Morning
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  fontWeight: "bold",
                }} // Bold style added
              >
                Afternoon
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                align="center"
                sx={{ border: "1px solid rgba(255, 255, 255, 0.5)" }}
              >
                Navegaon Gate (Core)
              </TableCell>
              <TableCell
                align="center"
                sx={{ border: "1px solid rgba(255, 255, 255, 0.5)" }}
              >
                Gate Closed
              </TableCell>
              <TableCell
                align="center"
                sx={{ border: "1px solid rgba(255, 255, 255, 0.5)" }}
              >
                Gate Closed
              </TableCell>
              <TableCell
                align="center"
                sx={{ border: "1px solid rgba(255, 255, 255, 0.5)" }}
                onClick={() => (
                  setShowBooking(true), setShowAddSenctuaryDetails(false)
                )}
              >
                4
              </TableCell>
              <TableCell
                align="center"
                sx={{ border: "1px solid rgba(255, 255, 255, 0.5)" }}
              >
                3
              </TableCell>
              <TableCell
                align="center"
                sx={{ border: "1px solid rgba(255, 255, 255, 0.5)" }}
              >
                2
              </TableCell>
              <TableCell
                align="center"
                sx={{ border: "1px solid rgba(255, 255, 255, 0.5)" }}
              >
                1
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
