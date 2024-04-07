import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Navbar } from "./components";
import { useSelector } from "react-redux";
import bgimg from "./assets/backgroundimg.jpg";
  import "react-toastify/dist/ReactToastify.css";
  import { ToastContainer } from "react-toastify";


// import { ToastContainer } from "react-toastify";

const Layout = () => {
  const isLogin = useSelector((state) => state.login.isLogin);

  return (
    <div
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container style={{ margin: 0, padding: 0 }}>
        <Box style={{ width: "100vw", height: "100vh" }}>
          {!isLogin && <Navbar />}
          <ToastContainer theme="dark" />
          <Outlet />
        </Box>
      </Container>
    </div>
  );
};

export default Layout;
