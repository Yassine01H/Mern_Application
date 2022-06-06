import * as React from 'react'; 
import Card from '@mui/material/Card'; 
import CardActions from '@mui/material/CardActions'; 
import CardContent from '@mui/material/CardContent'; 
import CardMedia from '@mui/material/CardMedia'; 
import Button from '@mui/material/Button'; 
import Typography from '@mui/material/Typography'; 
import Grid from '@mui/material/Grid'; 
import {useSelector} from "react-redux"; 
import { useCart } from "react-use-cart"; 
import { Link} from 'react-router-dom'; 
import AppBar from '@mui/material/AppBar'; 
import Toolbar from '@mui/material/Toolbar'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
const AfficheCards=()=>{ 
 
 const { addItem, totalItems } = useCart(); 
 
 const voitures = useSelector((state) =>state.allvoitures.voitures); 
 return( 
 <>
<AppBar position="static" color='info'>
 <Toolbar>
 <Button color="inherit"><Link to="/cart"
style={{"color":"yellow", "textDecoration":"none" , borderRadius: 
'50%'}}>{totalItems}<ShoppingCartIcon fontSize="large" /></Link></Button>
 </Toolbar>
 </AppBar>

 <Grid container spacing={2} columns={15} marginTop={10}>
 {voitures.map((row) => ( 
 <Grid item xs={5} key={row._id}>
 <Card sx={{ maxWidth: 250 }} key={row._id}>
 <CardMedia
 component="img"
 height={230}
 image={"images/"+row.image}
 alt={row.nom}
 />


 <CardContent>
 <Typography gutterBottom variant="h5" component="div">
 {row.nom}
 </Typography>
 <Typography variant="body2" color="text.secondary">
 {row.prix} TND 
 </Typography>

 <Typography variant="body2" color="text.secondary">
 kms :{row.kms}  
 </Typography>

 <Typography variant="body2" color="text.secondary">
 localite :{row.localite}  
 </Typography>

 <Typography variant="body2" color="text.secondary">
 couleur :{row.couleur}  
 </Typography>

 <Typography variant="body2" color="text.secondary">
 {row.marquevoitures_id.nom}
 </Typography>
 </CardContent>
 <CardActions>
 <Button
 variant="contained" color="primary" size="large"
 onClick={() =>{ 
 const target = { price: row.prix,id:row._id}; 
 const returnedTarget = Object.assign(target, row); 
 addItem(returnedTarget)} 
 }
 >
 {row.qtestock<=1? "En rupture de stock": "Ajouter au panier"}
 </Button> 
 
 </CardActions>
 </Card> 
 </Grid>
 ) 
 ) 
 } 
 
 </Grid>
 </> 
 ) 
 } 
export default AfficheCards