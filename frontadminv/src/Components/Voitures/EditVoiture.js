import React, { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom"; 
import {loadSingleVoiture,updateVoiture} from "../../Redux/actions/voituresAction";
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
const EditVoiture=()=>{
    const [state, setState] = useState({
        image :"",
        nom:"",
        prix:"",
        kms:"",
        localite:"",
        couleur:"",
        energie:"",
        boitevitesse:"",
        marquevoitures_id:""
    }); 
    const [files, setFiles] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const params = useParams();
    const _id=params._id; 

    useEffect(() => {
        dispatch(loadSingleVoiture(_id));
        dispatch(loadMarqueVoitures());
        setFiles("");
        },[_id,dispatch]);

        const voiture = useSelector((state) => state.allvoitures.voiture);
        const marquevoitures = useSelector((state)=>state.allmarquevoitures.marquevoitures);

        useEffect(()=>{
            setState(voiture);
            setFiles(voiture.image)
            },[voiture]);
        
        const handleSubmit = async(event)=> {
            event.preventDefault(); 
            const liv={ 
                _id:_id, 
                image : files[0].file.name,
                nom:state.nom,
                prix:state.prix,
                kms:state.kms,
                localite:state.localite,
                couleur:state.couleur,
                energie:state.energie,
                boitevitesse:state.boitevitesse,
                marquevoitures_id:state.marquevoitures_id
            }; 
                dispatch(updateVoiture(liv));
                navigate("/ListVoitures"); 
            }

            const handelInputChange=(e)=>{
            const {name,value}=e.target;
            setState({...state,[name]:value});
            }

            const labelmarquevoiture=()=>{
                if( state.marquevoitures_id){
                if( state.marquevoitures_id.nom) return "MarqueVoiture : "+state.marquevoitures_id.nom;
                }
                else return null
                }

                return (
                    <div className="container">

                    <form style={{ marginLeft: 8}}>
                    <div>
                    <Button color="secondary" variant="contained"
                   onClick={(event)=>handleSubmit(event)}>Modifier</Button>
                    </div>
                    <FormControl> 
              
               <TextField
                name="nom"
                variant="outlined"
                label="nom"
                value={state.nom}
                onChange={handelInputChange}
                required 
                />

                <TextField
                name="kms"
                variant="outlined"
                type="Number"
                label="kms"
                value={state.kms}
                onChange={handelInputChange}
                />


                <TextField
                name="prix"
                variant="outlined"
                type="Number"
                label="Prix"
                value={state.prix}
                onChange={handelInputChange}
                />
                
                <TextField
                name="localite"
                variant="outlined"
                type="text"
                label="localite"
                value={state.localite}
                onChange={handelInputChange}
                />      

                <TextField
                name="couleur"
                variant="outlined"
                type="text"
                label="couleur"
                value={state.couleur}
                onChange={handelInputChange}
                /> 

                <TextField
                name="energie"
                variant="outlined"
                type="text"
                label="energie"
                value={state.energie}
                onChange={handelInputChange}
                /> 

                <TextField
                name="boitevitesse"
                variant="outlined"
                type="text"
                label="boitevitesse"
                value={state.boitevitesse}
                onChange={handelInputChange}
                /> 
                <TextField 
                  name="marquevoitures_id"
                  variant="outlined"
                  select
                  label={labelmarquevoiture()}
                  value={state.marquevoitures_id}
                  helperText="Sélectionner une marque voiture"
                  onChange={handelInputChange}
                  style={{ margin: 10}}
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
export default EditVoiture
                 