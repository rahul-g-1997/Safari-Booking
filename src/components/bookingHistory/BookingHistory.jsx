import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import PageviewOutlinedIcon from "@mui/icons-material/PageviewOutlined";
import GetAppOutlinedIcon from "@mui/icons-material/GetAppOutlined"; // Import the Download icon

// Define hardcoded table headers
const headers = [
  { label: "Sr. No.", id: "srNo" },
  { label: "Booking ID", id: "bookingId" },
  { label: "Booking Date", id: "bookingDate" },
  { label: "Sanctuary", id: "sanctuary" },
  { label: "Zone", id: "zone" },
  { label: "Gate", id: "gate" },
  { label: "Safari Date", id: "safariDate" },
  { label: "Person", id: "person" },
  { label: "Children", id: "children" },
  { label: "Camera", id: "camera" },
  { label: "Booking amount", id: "bookingAmount" },
  { label: "Booking Status", id: "bookingStatus" },
  { label: "View", id: "view" },
  { label: "Download pass", id: "downloadPass" }, // Updated label and id
];

// JSON data
const jsonData = [
  {
    srNo: 1,
    bookingId: "ABC123",
    bookingDate: "2022-01-01",
    sanctuary: "Sanctuary 1",
    zone: "Zone A",
    gate: "Gate 1",
    safariDate: "2022-01-05",
    bookingStatus: "Upcoming",
    person: 5,
    children: 2,
    camera: 3,
    bookingAmount: "$150",
  },
  {
    srNo: 2,
    bookingId: "DEF456",
    bookingDate: "2022-02-10",
    sanctuary: "Sanctuary 2",
    zone: "Zone B",
    gate: "Gate 2",
    safariDate: "2022-03-20",
    bookingStatus: "Completed",
    person: 6,
    children: 1,
    camera: 2,
    bookingAmount: "$200",
  },
  {
    srNo: 3,
    bookingId: "GHI789",
    bookingDate: "2022-04-15",
    sanctuary: "Sanctuary 3",
    zone: "Zone C",
    gate: "Gate 3",
    safariDate: "2022-05-25",
    bookingStatus: "Cancelled",
    person: 4,
    children: 3,
    camera: 4,
    bookingAmount: "$180",
  },
  // Add more JSON data objects as needed
];

export default function BookingHistory() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8); // Set initial rowsPerPage to 8

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleViewSummary = (row) => {
    // Logic to view summary and print it out
    console.log("Viewing summary for booking ID:", row.bookingId);
  };

  
  const handleDownloadPass = (row) => {
    // Logic to view summary and print it out
    console.log("Downlod pass for booking ID:", row.bookingId);
  };

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        backgroundColor: "rgba(157, 178, 191, 0.49)",
        backdropFilter: "blur(21px) saturate(200%)",
        WebkitBackdropFilter: "blur(21px) saturate(200%)",
        borderRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.125)",
      }}
    >
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableCell key={header.id}>{header.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {jsonData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  {headers.map((header) => (
                    <TableCell key={header.id} align="center">
                      {header.id === "view" ? (
                        <PageviewOutlinedIcon
                          variant="contained"
                          color="primary"
                          onClick={() => handleViewSummary(row)}
                        />
                      ) : header.id === "downloadPass" ? ( // Check if it's the Download Pass column
                        <GetAppOutlinedIcon
                          variant="contained"
                            color="primary"
                            
                          onClick={() => handleDownloadPass(row)}
                        />
                      ) : (
                        row[header.id]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[2, 25, 50]}
        component="div"
        count={jsonData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
