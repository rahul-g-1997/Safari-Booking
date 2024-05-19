import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const headers = [
  { label: "Eco-Tourist-Places", id: "place" },
  { label: "Zones", id: "zone" },
  { label: "Gates", id: "gate" },
];

export default function EcoTouristPlacesTable({ getall }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
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
                <TableCell
                  key={header.id}
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    border: "1px solid rgba(255, 255, 255, 0.5)",
                    whiteSpace: "nowrap",
                    padding: "8px",
                  }}
                >
                  {header.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {getall
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((place, index) => (
                <TableRow key={index}>
                  <TableCell
                    align="left"
                    sx={{
                      border: "1px solid rgba(255, 255, 255, 0.5)",
                      whiteSpace: "nowrap",
                      padding: "8px",
                    }}
                  >
                    {place.PLACE}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      border: "1px solid rgba(255, 255, 255, 0.5)",
                      whiteSpace: "nowrap",
                      padding: "8px",
                    }}
                  >
                    {place.ZONES.map((zone) => (
                      <div key={zone.ZONEID}>{zone.ZONE}</div>
                    ))}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      border: "1px solid rgba(255, 255, 255, 0.5)",
                      whiteSpace: "nowrap",
                      padding: "8px",
                    }}
                  >
                    {place.ZONES.map((zone) =>
                      zone.GATES.map((gate) => (
                        <div key={gate.GATEID}>{gate.GATE_NM}</div>
                      ))
                    )}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={getall.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
