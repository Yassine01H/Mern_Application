import { BrowserRouter as Router,Link, Route, Routes } from 'react-router-dom';
import ListVoitures from './Components/Voitures/ListVoitures';
import Login from './Authentification/Login'; 
import AjoutMarquevoiture from './Components/Voitures/AjoutMarquevoiture';
import EditVoiture from './Components/Voitures/EditVoiture';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ListCommandes from './Components/Commandes/ListCommandes';
import Dashboard from './Components/Admin/Dashboard'; 
function App() {
return (
<>
 <Router>
 <Box sx={{ flexGrow: 1 }}>
 <AppBar position="static">
 <Toolbar>
 <IconButton
 size="large"
 edge="start"
 color="inherit"
 aria-label="menu"
 sx={{ mr: 2 }}
 >
 </IconButton>
 <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
 Bibliothèque
 </Typography>
<Link to="/ListVoitures"><Button color="error">Liste des Voitures</Button></Link>
 </Toolbar>
 </AppBar>
 </Box>


 <Routes>
 <Route exact path="/ListVoitures" element={<ListVoitures/>}></Route>
 <Route path="/AjoutMarquevoiture" element={<AjoutMarquevoiture/>}></Route>
 <Route path="/EditVoiture/:_id" element={<EditVoiture/>}></Route>
 <Route path="/" element={<Login/>}></Route>
 <Route path="/listcommandes" element={<ListCommandes/>}></Route>
<Route path="/dashboard" element={<Dashboard/>}></Route>

</Routes>

 </Router>
</>
 );
}
export default App; 