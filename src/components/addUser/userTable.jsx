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
  { id: "STAFF_NM", label: "Name" },
  { id: "STAFF_CNTC", label: "Contact" },
  { id: "STAFF_EML", label: "Email" },
  { id: "STAFF_TYPE", label: "User Type" },
  { id: "DTLS", label: "Designation" },
  { id: "ASSIGNED_GATES", label: "Assigned Gate's" },
  { id: "edit", label: "Edit User" },
  { id: "delete", label: "Delete User" },
];
const token = localStorage.getItem("token");

export default function UserTable({ users, setEditUsers, setDeleteUser }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getDesignationFromDTLS = (DTLS) => {
    try {
      const parsedDTLS = JSON.parse(DTLS);
      return parsedDTLS.designation || "";
    } catch (error) {
      console.error("Error parsing DTLS:", error);
      const match = DTLS.match(/\{"designation"\s*:\s*"([^"]+)"\}/);
      return match ? match[1] : "";
    }
  };

  const handleEdit = (user) => {
    console.log(user);
    setEditUsers(user);
  };

  const handleDelete = async (user) => {
    try {
      const staffId = user.STAFFID; // Adjust according to your user object structure
      const response = await adminService.deleteUser(token, staffId);
      if (response.Result === "OK") {
        console.log("User deleted successfully:", response);
        setDeleteUser(user);
        toast.success("User deleted successfully");
      }

      // You can also add any additional handling like updating the UI or notifying the user
    } catch (error) {
      console.error("Error deleting user:", error);
      // Handle the error appropriately, e.g., show an error message to the user
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
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user, index) => (
                <TableRow key={index}>
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
                    {user.STAFF_NM}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      border: "1px solid rgba(255, 255, 255, 0.5)",
                      whiteSpace: "nowrap",
                      padding: "8px",
                    }}
                  >
                    {user.STAFF_CNTC}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      border: "1px solid rgba(255, 255, 255, 0.5)",
                      whiteSpace: "nowrap",
                      padding: "8px",
                    }}
                  >
                    {user.STAFF_EML}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      border: "1px solid rgba(255, 255, 255, 0.5)",
                      whiteSpace: "nowrap",
                      padding: "8px",
                    }}
                  >
                    {user.STAFF_TYPE === "O"
                      ? "Operator"
                      : user.STAFF_TYPE === "M"
                      ? "Manager"
                      : user.STAFF_TYPE}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      border: "1px solid rgba(255, 255, 255, 0.5)",
                      whiteSpace: "nowrap",
                      padding: "8px",
                    }}
                  >
                    {getDesignationFromDTLS(user.DTLS)}
                  </TableCell>

                  <TableCell
                    align="left"
                    sx={{
                      border: "1px solid rgba(255, 255, 255, 0.5)",
                      whiteSpace: "nowrap",
                      padding: "8px",
                    }}
                  >
                    {user.GATE_NM.reduce((acc, curr, index) => {
                      if (index % 4 === 0 && index !== 0) {
                        return [...acc, ",", <br key={index} />, curr];
                      } else if (index !== 0) {
                        return [...acc, ", ", curr];
                      } else {
                        return [...acc, curr];
                      }
                    }, [])}
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
                      onClick={() => handleEdit(user)}
                      sx={{ padding: "4px" }}
                    >
                      <EditIcon />
                    </IconButton>
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
                      onClick={() => handleDelete(user)}
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
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
