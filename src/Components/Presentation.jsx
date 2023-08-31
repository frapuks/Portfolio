import { Devices, ImportExport, SelfImprovement } from "@mui/icons-material";
import { Avatar, Box, Card, CardContent, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import ListSkills from "../Data/Skills.json"

const Presentation = () => {
  const icons = {
    ImportExport : <ImportExport/>,
    Devices: <Devices/>,
    SelfImprovement: <SelfImprovement/>
  }

  return (
    <Box component="section" bgcolor="primary.main" color="primary.contrastText" paddingTop={10} paddingBottom={10}>
      <Container>
        <Stack alignItems="center" spacing={3}>
          <Typography variant="h4" fontWeight="bold" textAlign="center">Je suis François, bienvenue chez moi.</Typography>
          <Typography variant="body1" textAlign="center">Depuis trois ans, je forge une expertise technique en tant que développeur fullstack. Je supervise l'intégralité de mes projets, depuis la phase de conception jusqu'au déploiement, en passant par l'étape cruciale de développement.</Typography>
          <Typography variant="body1" textAlign="center">En parallèle, ma pratique du sport en compétition m'a doté de compétences interpersonnelles que j'intègre pleinement dans mon travail.</Typography>
          <Paper elevation={3}>
            <Card>
              <CardContent>
                <Stack direction="row">
                  <Grid container direction="row" alignItems="center" spacing={4}>

                    {ListSkills.map(skill =>
                      <Grid item xs={12} md={4} key={skill.text}>
                      <Stack spacing={3} textAlign="center">
                        <Stack alignItems="center" spacing={1}>
                          <Avatar sx={{ bgcolor: "orange" }}>{icons[skill.icon]}</Avatar>
                          <Typography variant="h6" fontWeight="bold">{skill.title}</Typography>
                          <Typography>{skill.text}</Typography>
                        </Stack>
                        <Box>
                          <Typography fontWeight="bold">LANGAGES</Typography>
                          <Typography>{skill.languages}</Typography>
                        </Box>
                        <Box>
                          <Typography fontWeight="bold">OUTILS</Typography>
                          {skill.tools.map(tool =>
                            <Typography>{tool}</Typography>
                          )}
                        </Box>
                      </Stack>
                    </Grid>
                    )}

                  </Grid>
                </Stack>
              </CardContent>
            </Card>
          </Paper>
        </Stack>
      </Container>
    </Box>
  )
}

export default Presentation;