import { GitHub } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import ListProjects from "../Data/Projects.json"

const Projects = () => {

  return (
    <Box component="section" paddingTop={10} paddingBottom={10} color="text.primary">
      <Container>
        <Stack alignItems="center" spacing={3}>
          <Typography variant="h4" fontWeight="bold" textAlign="center">Mes projets</Typography>
          <Typography variant="body1" textAlign="center">
            Voici une sélection des projets sur lesquels j'ai travaillé. Vous en voulez plus ?
            <IconButton href="https://github.com/frapuks" target="blank"><GitHub/></IconButton>
          </Typography>
          
          <Grid container direction="row" justifyContent="space-evenly" alignItems="center" spacing={2}>

            {ListProjects.map(project =>
              <Grid item xs={12} md={4} key={project.title}>
                <Paper elevation={3}>
                  <Card>
                    <CardMedia sx={{ height: 200 }} image={project.image}/>
                    <CardContent>
                      <Typography variant="h5">{project.title}</Typography>
                      <Typography variant="body2" color="text.secondary">{project.text}</Typography>
                    </CardContent>
                    <CardActions>
                      {project.actions.map(action =>
                        <Button variant={action.variant} key={action.label} href={action.url} target="blank" disabled={action.url === "#"}>{action.label}</Button>
                      )}
                    </CardActions>
                  </Card>
                </Paper>
              </Grid>
            )}


          </Grid>
        </Stack>
      </Container>
    </Box>
  )
}

export default Projects;