import { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import adminService from "../../services/admin";
import { toast } from "react-toastify";

const headers = [
  { id: "SR_NO", label: "Sr. No" },
  { id: "SLOT_NM", label: "Slot Name" },
  { id: "TIMING", label: "Timing" },
  { id: "CAPACITY", label: "Capacity" },
  { id: "ACTIONS", label: "Actions" },
];
const token = localStorage.getItem("token");

export default function SlotsTable({ slots }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleEdit = (slot) => {
    console.log(slot);
    // Add your edit functionality here
  };

  const handleDelete = async (slot) => {
    try {
      const slotId = slot.SLOTID;
      const response = await adminService.deleteSlot(token, slotId);
      if (response.Result === "OK") {
        console.log("Slot deleted successfully:", response);
        // Add your delete functionality here
        toast.success("Slot deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting slot:", error);
      toast.error("Error deleting slot");
    }
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
            {slots
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((slot, index) => (
                <TableRow key={slot.SLOTID}>
                  <TableCell
                    align="center"
                    sx={{
                      border: "1px solid rgba(255, 255, 255, 0.5)",
                      whiteSpace: "nowrap",
                      padding: "8px",
                    }}
                  >
                    {page * rowsPerPage + index + 1}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      border: "1px solid rgba(255, 255, 255, 0.5)",
                      whiteSpace: "nowrap",
                      padding: "8px",
                    }}
                  >
                    {slot.SLOT_NM}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      border: "1px solid rgba(255, 255, 255, 0.5)",
                      whiteSpace: "nowrap",
                      padding: "8px",
                    }}
                  >
                    {slot.TIMING}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      border: "1px solid rgba(255, 255, 255, 0.5)",
                      whiteSpace: "nowrap",
                      padding: "8px",
                    }}
                  >
                    {slot.CAPACITY}
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{
                      border: "1px solid rgba(255, 255, 255, 0.5)",
                      whiteSpace: "nowrap",
                      padding: "8px",
                    }}
                  >
                    <IconButton
                      onClick={() => handleEdit(slot)}
                      sx={{ padding: "4px" }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => handleDelete(slot)}
                      sx={{ padding: "4px" }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={slots.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
