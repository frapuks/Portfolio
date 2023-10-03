import { Avatar, Box, Container, Stack, Typography } from "@mui/material";

const Intro = () => {

  return (
    <Box component="section" paddingTop={10} color="text.primary">
      <Container>
        <Stack alignItems="center" spacing={3}>
          <Typography variant="h2" fontWeight="bold" textAlign="center">Développeur web | fullstack | mobile</Typography>
          <Typography variant="h5" textAlign="center">Je m'éclate à créer des projets front et back, du design au déploiement.</Typography>
          <Box component="img" alt="devices" src="/moi.webp" sx={{ width: "35rem", maxWidth: "90%" }}/>
        </Stack>
      </Container>
    </Box>
  )
}

export default Intro;