import { Grid, Container, Paper, Box } from '@material-ui/core';
import Listing from './Listing';
import Copyright from './Copyright';

const Medieval = () => {
    return ( 
        <Container maxWidth="lg" style={{textAlign: 'center'}}>
            <br></br>
            <br></br>
            <h1 style={{ fontFamily: 'Arial Black', color: 'white', padding: '20px'}}>Medieval Coins</h1>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper >
            <h3>first item</h3>
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper >
              <h3>second item</h3>
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper >
              
            </Paper>
          </Grid>
        </Grid>
        <Box mt={8}>
        <Copyright />
      </Box>
      </Container>);
  }

  export default Medieval;