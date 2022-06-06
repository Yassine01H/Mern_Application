import {GET_MARQUEVOITURES} from "../types"
import {MarqueVoitureService} from "../../services/MarqueVoiture-Service"
export const loadMarqueVoitures=()=>{
 return (dispatch)=>{
 MarqueVoitureService.fetchMarqueVoitures()
 .then(res=>{
 dispatch({type:GET_MARQUEVOITURES,
 payload:res.data})

 }).catch((error)=>console.log(error));

 }
}