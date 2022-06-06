import {GET_VOITURES,DELETE_VOITURE,ADD_VOITURE,GET_SINGLE_VOITURE,UPDATE_VOITURE} from '../types'
import {VoitureService} from "../../services/Voiture-Service";



export const loadVoitures=()=>{
 return (dispatch)=>{
 VoitureService.fetchVoitures()
 .then(res=>{
 dispatch({type:GET_VOITURES,payload:res.data})

 }).catch((error)=>console.log(error));

 }
}
export const loadSingleVoiture=(_id)=>{
 return (dispatch)=>{
VoitureService.fetchVoitureById(_id)
 .then((res)=>{
 dispatch({type:GET_SINGLE_VOITURE,
 payload:res.data});
 }).catch((error)=>console.log(error));

 }
}
export const addVoiture=(Voiture)=>{
 return (dispatch)=>{
    VoitureService.addVoiture(Voiture)
 .then((res)=>{
 dispatch({type:ADD_VOITURE,
 payload:res.data})

 }).catch((error)=>console.log(error));

 }
}
export const deleteVoiture=(_id)=>{
 return dispatch=>{
    VoitureService.deleteVoiture(_id)
 .then((res)=>{
 dispatch({type:DELETE_VOITURE,
 payload:_id})
 }).catch((error)=>console.log(error));

 }
}
export const updateVoiture=(Voiture)=>{
 return dispatch=>{
 VoitureService.editVoiture(Voiture)
 .then((res)=>{
 dispatch({type:UPDATE_VOITURE,
 payload:res.data})
 }).catch((error)=>console.log(error));

 }

}
