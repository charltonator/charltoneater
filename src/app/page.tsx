import Box from '@mui/material/Box';
import SingleCard from './(components)/SingleCard'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Navbar from './(components)/Navbar';
import PostCard from './(components)/Cards';
import Cards from './(components)/Cards';
export default function Home() {
  return (
    <main>
     
        
         <Navbar />
         {/* <Container
        // maxWidth="lg" // You can adjust the width as needed
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 4, width: '70%' }}
      > */}
        <div style={{width: "80%", justifyContent: 'center', alignItems: 'center', margin: 'auto'}}>
        <Cards/>
      {/* </Container> */}
        </div>
    </main>
  );
}