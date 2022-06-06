import Axios from "../Axios/Api";
const MarqueVoiture_API="/marquevoiture"
 const fetchMarqueVoitures=async()=> {
 return await Axios.get(MarqueVoiture_API);
 }

 export const MarqueVoitureService = {
fetchMarqueVoitures
 }