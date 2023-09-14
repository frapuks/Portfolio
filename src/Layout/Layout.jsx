import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@mui/material";
import '@fontsource/roboto/400.css';
import { BackToTopButton } from "../Components";

const Layout = () => {
  return (
      <Box sx={{minHeight:"100vh", fontFamily:"roboto"}} id="top">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <BackToTopButton />
      </Box>
  );
};

export default Layout;