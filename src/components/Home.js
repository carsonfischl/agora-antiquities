import { Grid, Container, Paper, Box } from '@material-ui/core'
import Copyright from './Copyright';
import centImg from '../frontpageCutout.png'
import centImg2 from '../frontpageCutout2.png'
import centImg3 from '../frontpageCutout3.png'
import amph from '../amph.png'

const Home = () => {
    return (
    <Container maxWidth="lg" style={{textAlign: 'center', color: 'white', height: '100%', padding: '20px', fontFamily: 'Parisienne'}}>
        <h1 style={{fontSize:'6rem'}}><img src={amph} style={{padding:'40px', width:'15%'}}/>Agora Antiquities<img src={amph} style={{padding:'40px', width:'15%'}}/></h1> 
        <div id="image-container">
          <img src={centImg} style={{width:'30%', height: '20%'}}/>
          <img src={centImg2} style={{width:'30%', height: '25%'}}/>
          <img src={centImg3} style={{width:'30%', height: '20%'}}/>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2>Specializing in Ancient and Early Modern Numismatics</h2>
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