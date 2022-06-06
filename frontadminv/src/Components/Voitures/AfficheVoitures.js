import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import {useDispatch,useSelector} from "react-redux";
import {deleteVoiture} from "../../Redux/actions/voituresAction"
import { Link, useNavigate } from 'react-router-dom';


const AfficheVoitures=()=>{
   
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleDelete=(id)=>{
    if(window.confirm("sipprimer la catégorie O/N")) {
    dispatch(deleteVoiture(id));
    navigate("/ListVoitures"); 
}
} 


 const voitures = useSelector((state) =>state.allvoitures.voitures);
 return(
 <>

<Button variant="contained" color="success" size="medium">
 <Link to={"/AjoutMarquevoiture"}
style={{"textDecoration":"none","color":"white"}}>
 Ajout
 </Link>
 </Button>

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
 Marque Voiture :{row.marquevoitures_id.nom}
 </Typography>
 <Typography variant="body2" color="text.secondary">
 couleur :{row.couleur}
 </Typography>

 <Typography variant="body2" color="text.secondary">
 energie :{row.energie}
 </Typography>

 <Typography variant="body2" color="text.secondary">
 boitevitesse :{row.boitevitesse}
 </Typography>

 <Typography variant="body2" color="text.secondary">
 kms :{row.kms}
 </Typography>


 </CardContent>

 <CardActions>
 <Button size="small">Prix :{row.prix} TND</Button>
 </CardActions>

 <CardActions>
 <Link to={"/editVoiture/" + row._id}
style={{"textDecoration":"none","color":"white"}}> <Button variant="contained"
color="primary" size="small">Modifier</Button></Link>
 <Button variant="contained" color="error" size="small" onClick={()=>handleDelete(row._id)}>Supprimer</Button>
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
export default AfficheVoitures 