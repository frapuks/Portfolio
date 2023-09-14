import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab } from "@mui/material";


const BackToTopButton = () => {

  return (
    <Fab color="primary" sx={{position:"fixed", bottom:"1rem", right:"1rem"}} href="#top">
      <KeyboardArrowUp/>
    </Fab>
  )
}

export default BackToTopButton;