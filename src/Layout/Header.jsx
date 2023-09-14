import { CookieOutlined } from "@mui/icons-material";
import { Button, Container, IconButton, Stack } from "@mui/material";

const Header = () => {

  return (
    <Container>
      <Stack component="header" direction="row" justifyContent="space-between">
        <Button href="/" color="inherit" startIcon={<CookieOutlined fontSize="large"/>}>Francois Grunert</Button>
        <Button href="#contact" variant="outlined">Contacter</Button>
      </Stack>
    </Container>
  )
}

export default Header;