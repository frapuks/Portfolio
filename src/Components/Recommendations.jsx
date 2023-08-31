import { Avatar, Box, Container, Divider, Link, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from "@mui/material";
import ListRecommendations from "../Data/Recommendations.json"


const Recommendations = () => {

  return (
    <Box component="section" bgcolor="primary.main" color="primary.contrastText" paddingTop={10} paddingBottom={10}>
      <Container>
        <Stack alignItems="center" spacing={3}>
          <Typography variant="h4" fontWeight="bold" textAlign="center">Recommandations</Typography>
          <Typography variant="body1" textAlign="center">Ils parlent de moi mieux que je ne le ferais jamais.</Typography>

          <List sx={{ width: '100%', bgcolor: 'background.paper', color:"#000" }}>

            {ListRecommendations.map(recommendation =>
              <>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar><Avatar src={recommendation.image}/></ListItemAvatar>
                  <ListItemText primary={recommendation.title} secondary={
                    <>
                      <Link href={recommendation.url} target="blank" underline="hover">{recommendation.name}</Link>
                      <Typography component="span"> — {recommendation.text}</Typography>
                    </>
                    }
                    />
                </ListItem>
                {ListRecommendations.indexOf(recommendation) != ListRecommendations.length -1 && <Divider variant="inset" component="li"/>}
              </>
            )}


          </List>

        </Stack>
      </Container>
    </Box>
  )
}

export default Recommendations;