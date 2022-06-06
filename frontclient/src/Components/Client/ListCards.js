import React, { useEffect } from "react"; 
import { useDispatch } from "react-redux"; 
import {loadVoitures} from "../../Redux/actions/voituresAction"
import AfficheCards from "./AfficheCards"
const ListCards=()=>{ 
 
 const dispatch = useDispatch(); 
 
 useEffect(() => { 
 dispatch(loadVoitures()); 
 }); 
 
 
 return( 
 
 <div><AfficheCards/></div>
 ) 
} 
export default ListCards 