import './App.css';
import {Box,Stack} from '@mui/material'
import {useState} from 'react'
import logo from './images/bg.jpg'
import Form from './components/Form';
import Information from './components/Information';
function App() {
  const [result,setResult]=useState({})
  return (
   <Stack direction="row" p={0} sx={{ml:50,mt:15,display:'flex', position:  "sticky",top:0}}>
    <Box
        component="img" 
        sx={{
          width:'27%',
          height:'85%',
          borderRadius:'20px 0 0 20px',
          backgroundSize: 'cover',
          maxWidth: { xs: 350, md: 250 },
          
        }}
        alt="Image not found"
        src={logo}
      />
      
      <Stack direction="column" sx={{ position:  "sticky",paddingTop: 0,top:0}}>
        <Box sx={{position:'sticky'}}>
          <Form setResult={setResult} />
          <Information result={result}/>
          </Box>
      </Stack>
    </Stack>
  );
  }

export default App;
