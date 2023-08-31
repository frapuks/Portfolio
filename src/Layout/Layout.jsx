import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@mui/material";
import '@fontsource/roboto/400.css';

const Layout = () => {
  return (
      <Box sx={{minHeight:"100vh", fontFamily:"roboto"}}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </Box>
  );
};

export default Layout;