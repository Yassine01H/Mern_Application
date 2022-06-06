import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {loadVoitures} from "../../Redux/actions/voituresAction"
import AfficheVoitures from "./AfficheVoitures"
const ListVoitures=()=>{

 const dispatch = useDispatch();

 useEffect(() => {
 dispatch(loadVoitures());
 });


 return(

 <div><AfficheVoitures/></div>
 )
}
export default ListVoitures 