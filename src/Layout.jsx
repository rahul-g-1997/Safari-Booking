import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Navbar } from "./components";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";


const Layout = () => {
  const isLogin = useSelector((state) => state.login.isLogin);

  return (
    <div>
      <Container style={{ margin: 0, padding: 0 }}>
        <Box style={{ width: "100vw", height: "100vh" }}>
          {!isLogin && <Navbar />}
          <ToastContainer />

          <Outlet />
        </Box>
        
      </Container>
    </div>
  );
};

export default Layout;
