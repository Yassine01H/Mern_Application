import {GET_VOITURES,DELETE_VOITURE,ADD_VOITURE,GET_SINGLE_VOITURE,UPDATE_VOITURE} from '../types'
const initialState={
 voitures:[],
 voiture:{}

};
const voituresReducers =(state=initialState,action)=>{
 switch(action.type){
 case GET_VOITURES:
 return{
 ...state,
 voitures:action.payload,

 };
 case ADD_VOITURE:
 return{
 ...state,
 voitures : [...state.voitures, action.payload],
 voiture:action.payload
 };
 case DELETE_VOITURE:
 return{
 ...state,
 voitures: state.voitures.filter(voiture=> voiture._id !==
action.payload)
 };
 case UPDATE_VOITURE:
 return {
 ...state,
 voitures:state.voitures.map(voiture => voiture._id ===
action.payload._id ? (voiture = action.payload) : voiture)
 };
 case GET_SINGLE_VOITURE:
 return { ...state,
 voiture:action.payload };
 default: return state
 }
}
export default voituresReducers