import { CookieOutlined, GitHub, LinkedIn, Mail } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";

const Footer = () => {

  return (
    <Box component="footer" bgcolor="primary.dark" sx={{position:'sticky', top:"100%"}} paddingTop={10} paddingBottom={10}>
      <Stack alignItems="center" spacing={3}>
        <CookieOutlined fontSize="large"/>
        <Typography variant="body2" fontStyle="italic" textAlign="center">"Vous pouvez vous entraîner à tirer 8 heures par jour, mais si votre technique n’est pas bonne, alors vous devenez juste très bon pour mal tirer." Michael Jordan</Typography>
        <Stack direction="row">
          <IconButton href="https://github.com/frapuks" target="blank"><GitHub fontSize="large"/></IconButton>
          <IconButton href="https://www.linkedin.com/in/francois-grunert/" target="blank"><LinkedIn fontSize="large"/></IconButton>
          <IconButton href="mailto:francoisgrunert@gmail.com"><Mail fontSize="large"/></IconButton>
        </Stack>
        <Typography variant="overline">Frapuks | 2023</Typography>
      </Stack>
    </Box>
  )
}

export default Footer;