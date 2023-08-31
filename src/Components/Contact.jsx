import { Download, LocationOn, Mail, Send, Smartphone } from "@mui/icons-material";
import { Box, Button, Container, Divider, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";

const Contact = () => {

  return (
    <Box component="section" id="contact" paddingTop={10} paddingBottom={10} color="text.primary">
      <Container>
        <Stack alignItems="center" spacing={3}>
          <Typography variant="h4" fontWeight="bold" textAlign="center">Intéressé par mon profil ?</Typography>
          <Typography variant="body1" textAlign="center">Je suis ouvert aux opportunités dont vous disposez.</Typography>
          <List>
            <ListItem>
              <ListItemIcon><Smartphone/></ListItemIcon>
              <ListItemText primary="06 40 95 59 23"/>
            </ListItem>
            <Divider/>
            <ListItem>
              <ListItemIcon><Mail/></ListItemIcon>
              <ListItemText primary="francoisgrunert@gmail.com"/>
            </ListItem>
            <Divider/>
            <ListItem>
              <ListItemIcon><LocationOn/></ListItemIcon>
              <ListItemText primary="Colmar (Alsace)"/>
            </ListItem>
          </List>
          <Button variant="outlined" startIcon={<Download />} href="/francoisGrunert.pdf" download="francoisGrunert.pdf">Mon CV</Button>
          <Button variant="contained" startIcon={<Send />} href="mailto:francoisgrunert@gmail.com">Ecrivez moi</Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default Contact;