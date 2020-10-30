import { Grid, Container, Paper, Box } from '@material-ui/core'
import Copyright from './Copyright';
import centImg from '../frontpageCutout.png'

const Home = () => {
    return (
    <Container maxWidth="lg" style={{textAlign: 'center', color: 'white', height: '100%', padding: '20px', fontFamily: 'Arial Black'}}>
        <br></br>
        <br></br>
        <br></br>
        <h1>Agora Antiquities</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <img src={centImg} style={{width:'30%', height: '20%'}}/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    );
  }

  export default Home;