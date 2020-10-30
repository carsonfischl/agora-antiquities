import { Grid, Container, Paper, Box } from '@material-ui/core';
import Listing from './Listing';
import modern1 from '../modern1.JPG';
import Copyright from './Copyright';

const German = () => {
    return ( 
    <Container maxWidth="lg" style={{textAlign: 'center', color: 'white'}}>
        <br></br>
        <br></br>
        <h1 style={{ fontFamily: 'Arial Black', color: 'white', padding: '20px'}}>Coins of Early Modern German States</h1>
    <Grid container spacing={3}>
      <Grid item xs={6} md={4} lg={5} style={{margin: 'auto'}}>
        <Paper >
          <Listing title='first coin' image={ modern1} description='interesting info here'/>
        </Paper>
      </Grid>
      <Grid item xs={6} md={4} lg={5} style={{margin: 'auto'}}>
        <Paper >
          <Listing title='first coin' image={ modern1} description='interesting info here'/>
        </Paper>
      </Grid>
      <Grid item xs={6} md={4} lg={5} style={{margin: 'auto'}}>
        <Paper >
          <Listing title='first coin' image={ modern1} description='interesting info here'/>
        </Paper>
      </Grid>
      <Grid item xs={6} md={4} lg={5} style={{margin: 'auto'}}>
        <Paper >
          <Listing title='first coin' image={ modern1} description='interesting info here'/>
        </Paper>
      </Grid>
      <Grid item xs={6} md={4} lg={5} style={{margin: 'auto'}}>
        <Paper >
          <Listing title='first coin' image={ modern1} description='interesting info here'/>
        </Paper>
      </Grid>
      <Grid item xs={6} md={4} lg={5} style={{margin: 'auto'}}>
        <Paper >
          <Listing title='first coin' image={ modern1} description='interesting info here'/>
        </Paper>
      </Grid>
    </Grid>
    <Box mt={8}>
        <Copyright />
      </Box>
  </Container>);
  }

  export default German;