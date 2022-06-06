import Axios from "../Axios/Api";
const VOITURE_API="/voiture"
 const fetchVoitures=async()=> {
 return await Axios.get(VOITURE_API);
 }
 const fetchVoitureById=async(VoitureId)=> {
 return await Axios.get(VOITURE_API + '/' + VoitureId);
 }
 const deleteVoiture=async(VoitureId) =>{
 return await Axios.delete(VOITURE_API + '/' + VoitureId);
 }
 const addVoiture=async(Voiture)=> {
 return await Axios.post(VOITURE_API, Voiture);

 }
 const editVoiture=(Voiture) =>{
 return Axios.put(VOITURE_API + '/' + Voiture._id, Voiture);

 }

 export const VoitureService = {
fetchVoitures,
fetchVoitureById,
deleteVoiture,
addVoiture,
editVoiture
 } 
