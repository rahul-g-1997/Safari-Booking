import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  MenuItem,
  Select,
  Checkbox,
  FormControl,
  InputLabel,
} from "@mui/material";
import { toast } from "react-toastify";
import { MuiTelInput } from "mui-tel-input";
import admin from "../../services/admin";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../../rtk/reducer/loaderReducer";
import UserTable from "./userTable";

export default function AddUser() {
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    designation: "",
    email: "",
    mobileNo: "",
    password: "",
    userType: "",
    selectedGates: [],
  });

  const [gates, setGates] = useState([]);
  const [users, setUsers] = useState([]);
  const [editUsers, setEditUsers] = useState(null);
  const [deleteUsers, setDeleteUser] = useState(null);
  const [initialSelectedGates, setInitialSelectedGates] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMobileChange = (value) => {
    setFormData({ ...formData, mobileNo: value });
  };

  const handleSelectGates = (selectedGates) => {
    setFormData({ ...formData, selectedGates: [...selectedGates] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dtls = JSON.stringify({
      designation: formData.designation,
    });

    // Find newly added gates
    const newSelectedGates = formData.selectedGates.filter(
      (gate) =>
        !initialSelectedGates.some(
          (initialGate) => initialGate.GATEID === gate.GATEID
        )
    );
    const newGateIds = newSelectedGates.map((gate) => gate.GATEID).join(",");

    // Find unselected gates
    const unselectedGates = initialSelectedGates.filter(
      (initialGate) =>
        !formData.selectedGates.some(
          (gate) => gate.GATEID === initialGate.GATEID
        )
    );
    const unselectedGateIds = unselectedGates
      .map((gate) => gate.GATEID)
      .join(",");

    if (editUsers) {
      const info = JSON.stringify({
        "staff.cntc": formData.mobileNo.replace(/\s+/g, ""),
        "staff.eml": formData.email,
        "staff.type": formData.userType,
        "staff.nm": `${formData.firstName} ${formData.lastName}`,
        // dtls: dtls,
      });

      const sendUpdateData = {
        token: token,
        act: "updtstaff",
        staffid: editUsers.STAFFID,
        "usr.pwd": formData.password,
        info: info,
      };

      if (newGateIds) {
        sendUpdateData.gateid = newGateIds;
      }

      if (unselectedGateIds) {
        sendUpdateData.unselectedgateid = unselectedGateIds;
      }

      try {
        dispatch(startLoading());
        console.log(sendUpdateData);
        const response = await admin.updateUser(sendUpdateData);
        if (response.Result === "OK") {
          toast.success("User updated successfully");
          resetForm();
        } else {
          toast.warn(response.data.Msg);
          throw new Error(response.data.Msg);
        }
      } catch (error) {
        console.error("Account update error:", error);
        toast.error("Failed to update account.");
      } finally {
        dispatch(stopLoading());
      }
    } else {
      const gateIds = formData.selectedGates
        .map((gate) => gate.GATEID)
        .join(",");
      const sendData = {
        token: token,
        act: "savestaff",
        "staff.type": formData.userType,
        "staff.nm": `${formData.firstName} ${formData.lastName}`,
        "staff.eml": formData.email,
        "staff.cntc": formData.mobileNo.replace(/\s+/g, ""),
        "staff.pwd": formData.password,
        gateid: gateIds,
        dtls: dtls,
      };
      try {
        dispatch(startLoading());
        const response = await admin.addUser(sendData);
        if (response.Result === "OK") {
          toast.success("Registration successful.");
          resetForm();
        } else {
          toast.warn(response.data.Msg);
          throw new Error(response.data.Msg);
        }
      } catch (error) {
        console.error("Account creation error:", error);
        toast.error("Failed to create account.");
      } finally {
        dispatch(stopLoading());
      }
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      designation: "",
      email: "",
      mobileNo: "",
      password: "",
      userType: "",
      selectedGates: [],
    });
    setEditUsers(null);
    setInitialSelectedGates([]);
  };

  useEffect(() => {
    const fetchGates = async () => {
      try {
        const gatesData = await admin.getAllGates(token);
        setGates(gatesData.Records);
      } catch (error) {
        console.error("Error fetching gates:", error);
      }
    };

    const fetchStaff = async () => {
      try {
        const gateUsers = await admin.searchUser(token);
        const usersMap = {};

        gateUsers.Records.forEach((user) => {
          const userId = user.STAFFID;
          if (userId) {
            if (usersMap[userId]) {
              usersMap[userId].GATE_NM.push(user.GATE_NM);
            } else {
              usersMap[userId] = {
                ...user,
                GATE_NM: [user.GATE_NM],
              };
            }
          }
        });

        const aggregatedUsers = Object.values(usersMap);
        setUsers(aggregatedUsers);
      } catch (error) {
        console.error("Error fetching gates:", error);
      }
    };

    fetchGates();
    fetchStaff();
  }, [token, deleteUsers]);

  useEffect(() => {
    if (editUsers) {
      const { STAFF_NM, STAFF_EML, STAFF_CNTC, STAFF_TYPE, DTLS, GATE_NM } =
        editUsers;
      const [firstName, lastName] = STAFF_NM.split(" ");
      const { designation } = JSON.parse(DTLS);

      const selectedGates = gates.filter((gate) =>
        GATE_NM.includes(gate.GATE_NM)
      );

      setFormData({
        firstName: firstName || "",
        lastName: lastName || "",
        designation: designation || "",
        email: STAFF_EML || "",
        mobileNo: STAFF_CNTC || "",
        password: "",
        userType: STAFF_TYPE || "",
        selectedGates: selectedGates,
      });

      setInitialSelectedGates(selectedGates);
    }
  }, [editUsers, gates]);

  return (
    <Box>
      <Grid container spacing={2}>
        {/* Left Side: Form Inputs */}
        <Grid item xs={12}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormControl fullWidth size="small" required>
                  <InputLabel>User Type</InputLabel>
                  <Select
                    name="userType"
                    value={formData.userType}
                    onChange={handleChange}
                    label="User Type"
                    required={true}
                  >
                    <MenuItem value="M">Gate Manager</MenuItem>
                    <MenuItem value="O">Operator</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TextField
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  size="small"
                  fullWidth
                  required={true}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TextField
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TextField
                  label="Designation"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  size="small"
                  fullWidth
                  required={true}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  size="small"
                  fullWidth
                  required={true}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <MuiTelInput
                  required={true}
                  fullWidth
                  defaultCountry="IN"
                  name="mobileNo"
                  label="Mobile Number"
                  id="mobileNo"
                  value={formData.mobileNo}
                  onChange={handleMobileChange}
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  size="small"
                  fullWidth
                  required={true}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormControl fullWidth size="small" required>
                  <InputLabel>Select Gates</InputLabel>
                  <Select
                    name="selectedGates"
                    multiple
                    value={formData.selectedGates}
                    onChange={(e) => handleSelectGates(e.target.value)}
                    label="Select Gates"
                    renderValue={(selected) =>
                      selected.map((gate) => gate.GATE_NM).join(", ")
                    }
                  >
                    {gates.map((gate) => (
                      <MenuItem key={gate.GATEID} value={gate}>
                        <Checkbox
                          checked={formData.selectedGates.some(
                            (selectedGate) =>
                              selectedGate.GATEID === gate.GATEID
                          )}
                        />
                        {gate.GATE_NM}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  {editUsers ? "UPDATE USER" : "Add User"}
                </Button>
              </Grid>

              <Grid item xs={12} sm={6} md={4} lg={3}>
                {editUsers ? (
                  <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => {
                      resetForm();
                      setEditUsers(null);
                    }}
                  >
                    CANCEL
                  </Button>
                ) : (
                  ""
                )}
              </Grid>
            </Grid>
          </form>
        </Grid>

        {/* Bottom: Table of already added operators */}
        <Grid item xs={12}>
          <UserTable
            users={users}
            setEditUsers={setEditUsers}
            setDeleteUser={setDeleteUser}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
