import { CookieOutlined } from "@mui/icons-material";
import { Button, Container, Stack } from "@mui/material";

const Header = () => {

  return (
    <Container>
      <Stack component="header" direction="row" justifyContent="space-between">
        <CookieOutlined fontSize="large"/>
        <Button href="#contact" variant="outlined">Contacter</Button>
      </Stack>
    </Container>
  )
}

export default Header;