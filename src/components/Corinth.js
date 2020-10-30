import { Grid, Container, Paper, Box } from '@material-ui/core';
import Listing from './Listing';
import  ancient2 from '../ancient2.JPG';
import cutout from '../cutout.jpg';
import cutout2 from '../cutout2.jpg';
import Copyright from './Copyright';

const Corinth = () => {
    return ( 
    <Container maxWidth="lg" style={{textAlign: 'center', color: 'white'}}>
        <br></br>
        <br></br>
        <h1 style={{ fontFamily: 'Arial Black', color: 'white', padding: '20px'}}>Coins of Corinth</h1>
    <Grid container spacing={3}>
      <Grid item xs={6} md={4} lg={5} style={{margin: 'auto'}}>
        <Paper >
          <Listing title='first coin' image={ ancient2} description='interesting info here'/>
        </Paper>
      </Grid>
      <Grid item xs={6} md={4} lg={5} style={{margin: 'auto'}}>
        <Paper >
          <Listing title='first coin' image={ ancient2} description='interesting info here'/>
        </Paper>
      </Grid>
      <Grid item xs={6} md={4} lg={5} style={{margin: 'auto'}}>
        <Paper >
          <Listing title='first coin' image={ ancient2} description='interesting info here'/>
        </Paper>
      </Grid>
      <Grid item xs={6} md={4} lg={5} style={{margin: 'auto'}}>
        <Paper >
          <Listing title='first coin' image={ ancient2} description='interesting info here'/>
        </Paper>
      </Grid>
      <Grid item xs={6} md={4} lg={5} style={{margin: 'auto'}}>
        <Paper >
          <Listing title='first coin' image={ ancient2} description='interesting info here'/>
        </Paper>
      </Grid>
      <Grid item xs={6} md={4} lg={5} style={{margin: 'auto'}}>
        <Paper >
          <Listing title='first coin' image={ ancient2} description='interesting info here'/>
        </Paper>
      </Grid>
    </Grid>
    <Box mt={8}>
        <Copyright />
      </Box>
  </Container>);
  }

  export default Corinth;