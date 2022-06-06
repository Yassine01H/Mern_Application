import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {addVoiture} from "../../Redux/actions/voituresAction";
import {loadMarqueVoitures} from "../../Redux/actions/marquesvoitureAction";
import {useDispatch, useSelector} from "react-redux";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { FilePond,registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)
const AjoutMarquevoiture=()=>{
    
   const [files, setFiles] = useState("")
   const [nom, setNom] = useState("");    
   const [prix, setPrix] = useState("");
   const [kms, setkms] = useState("");
   const [localite, setlocalite] = useState("");
   const [couleur, setcouleur] = useState("");
   const [energie, setenergie] = useState("");
   const [boitevitesse, setboitevitesse] = useState("");
   const [marquevoitures_id, setmarquevoitures_id] = useState("");
   const dispatch = useDispatch();
   const navigate = useNavigate(); 
   useEffect(() => {
      dispatch(loadMarqueVoitures());
      },[dispatch]);
   const marquevoitures = useSelector((state)=>state.allmarquevoitures.marquevoitures);
   const handleSubmit = async(event)=> {
      event.preventDefault();
      const liv={
         image : files[0].file.name,
         nom:nom,
         prix:prix,
         kms:kms,
         localite:localite,
         couleur:couleur,
         energie:energie,
         boitevitesse:boitevitesse,
         marquevoitures_id:marquevoitures_id,
      };
      dispatch(addVoiture(liv));
      navigate("/ListVoitures");
      }

      return (

         <div className="container">
        
         <form style={{ marginLeft: 8}}>
         <div>
         <Button variant="contained"
        onClick={(event)=>handleSubmit(event)}>Ajout</Button>
         </div>
         <FormControl> 
               <TextField
                variant="outlined"
                label="nom"
                value={nom}
                onChange={e => setNom(e.target.value)}
                required />

<TextField
                variant="outlined"
                type="Number"
                label="kms"
                value={kms}
                onChange={e => setkms(e.target.value)}
                />


                <TextField
                variant="outlined"
                type="Number"
                label="Prix"
                value={prix}
                onChange={e => setPrix(e.target.value)}
                />
                
                <TextField
                variant="outlined"
                type="text"
                label="localite"
                value={localite}
                onChange={e => setlocalite(e.target.value)}
                />      

                <TextField
                variant="outlined"
                type="text"
                label="couleur"
                value={couleur}
                onChange={e => setcouleur(e.target.value)}
                /> 

                <TextField
                variant="outlined"
                type="text"
                label="energie"
                value={energie}
                onChange={e => setenergie(e.target.value)}
                /> 

                <TextField
                variant="outlined"
                type="text"
                label="boitevitesse"
                value={boitevitesse}
                onChange={e => setboitevitesse(e.target.value)}
                /> 
                <TextField
                  variant="outlined"
                  select
                  label="Spécialité"
                  value={marquevoitures_id}
                  helperText="Sélectionner une spécialité"
                  onChange={e => setmarquevoitures_id(e.target.value)}
                  >
                  {
                  marquevoitures ?
                  marquevoitures.map((spec)=>
                  <MenuItem key={spec._id}
                  value={spec._id}>{spec.nom}</MenuItem>
                  )
                  :null
                  }
                  </TextField>
                  </FormControl> 
                  </form>
                  <h4>Télécharger Image</h4>
                  <FormControl>
                  <div style={{width:300, height:50}}>
                  <FilePond
                  files={files}
                  allowMultiple={false}
                  onupdatefiles={setFiles}
                  labelIdle='<span class="filepond--label-action">Browse
                 One</span>'
                  />
                  </div>
                  </FormControl>
                  </div>
                  );} 
export default AjoutMarquevoiture