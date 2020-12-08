import { Grid, Container, Paper, Box } from '@material-ui/core';
import Listing from './Listing';
import  ancient2 from '../ancient2.JPG';
import Copyright from './Copyright';
import amph from '../amph.png'

const German = () => {
    return ( 
      <Container maxWidth="lg" style={{textAlign: 'center', color: 'white'}}>
      <h1 style={{ fontFamily: 'Parisienne', color: 'white', paddingBottom: '20px'}}><img src={amph} style={{padding:'40px', width:'10%'}}/>Coins of Early Modern German States<img src={amph} style={{padding:'40px', width:'10%'}}/></h1>
  <Grid container spacing={3}>
    <Grid item xs={5} md={3} lg={4} style={{margin: 'auto'}}>
      <Paper >
        <Listing title='first coin' image={ ancient2} description='interesting info here'/>
      </Paper>
    </Grid>
    <Grid item xs={5} md={3} lg={4} style={{margin: 'auto'}}>
      <Paper >
        <Listing title='first coin' image={ ancient2} description='interesting info here'/>
      </Paper>
    </Grid>
    <Grid item xs={5} md={3} lg={4} style={{margin: 'auto'}}>
      <Paper >
        <Listing title='first coin' image={ ancient2} description='interesting info here'/>
      </Paper>
    </Grid>
    <br></br>
    <Grid item xs={5} md={3} lg={4} style={{margin: 'auto'}}>
      <Paper >
        <Listing title='first coin' image={ ancient2} description='interesting info here'/>
      </Paper>
    </Grid>
    <Grid item xs={5} md={3} lg={4} style={{margin: 'auto'}}>
      <Paper >
        <Listing title='first coin' image={ ancient2} description='interesting info here'/>
      </Paper>
    </Grid>
    <Grid item xs={5} md={3} lg={4} style={{margin: 'auto'}}>
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

  export default German;