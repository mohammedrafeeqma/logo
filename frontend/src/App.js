import './App.css';
import { Box} from '@mui/material';
import AddStore from './pages/admin/AddStore';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import EditStore from './pages/admin/EditStore';
import Home from './pages/user/Home';
import AllLogo from './pages/admin/AllLogo';
function App() {
  return (
    <Box className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>} />

        </Route>
        <Route path='/admin/'>
          <Route index element={<AllLogo/>} />
          <Route path='addstore' element={<AddStore/>} />
          <Route path='editstore/:id' element={<EditStore/>} />
        </Route>
      </Routes>
      </BrowserRouter>



      {/* <Stack direction="row" spacing={5} justifyContent="space-between">

      <Typography p={2} bgcolor={'yellow'} flex={1}>hello</Typography>
      <Typography p={2} bgcolor={'green'} flex={4} sx={{color:'red', ml:5}}>Hello world</Typography>
      <Button  startIcon={<Home/>} endIcon={<People/>} sx={{bgcolor:'red',flex:2,p:2,display:{xs:'none',sm:'block'}, "&:hover":{bgcolor:'green'}}} variant="contained">click me</Button>
      </Stack> */}
    </Box>
  );
}

export default App;
