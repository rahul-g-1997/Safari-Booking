import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const columns = [
  { field: "serialNumber", headerName: "Sr No.", flex: 0.2 },
  { field: "DATE_FROM", headerName: "Date From", flex: 1 },
  { field: "DATE_TO", headerName: "Date To", flex: 1 },
  { field: "REMARK", headerName: "Remark", flex: 1 },
  {
    field: "action",
    headerName: "Action",
    flex: 0,
    sortable: false,
    renderCell: (params) => (
      <IconButton
        color="primary"
        aria-label="delete"
        onClick={() => params.row.handleDelete(params.row.id)}
      >
        <DeleteIcon />
      </IconButton>
    ),
  },
];

export default function HolidayRecordsTable({
  holidayRecords,
  deleteHolidays,
}) {
  const rows = holidayRecords.map((record) => {
    const id = record.HLDYSID; // Using HLDYSID as ID
    return {
      id: id,
      serialNumber: id, // Assuming HLDYSID is a unique identifier
      DATE_FROM: record.DATE_FROM,
      DATE_TO: record.DATE_FROM === record.DATE_TO ? "_" : record.DATE_TO,
      REMARK: record.REMARK,
      handleDelete: () => {
        deleteHolidays(id);
      },
    };
  });

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5, 10, 25]}
      checkboxSelection={false}
      disableSelectionOnClick
    />
  );
}
