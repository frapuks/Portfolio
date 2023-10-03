import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab } from "@mui/material";

// this button refer Box with id="home" into Layout/Layout.jsx
const BackToTopButton = () => {

  return (
    <Fab color="primary" sx={{position:"fixed", bottom:"1rem", right:"1rem"}} href="#home">
      <KeyboardArrowUp/>
    </Fab>
  )
}

export default BackToTopButton;