import {GET_MARQUEVOITURES} from '../types'
const initialState={
 marquevoitures:[]
};
const marquevoituresReducer =(state=initialState,action)=>{
 switch(action.type){
 case GET_MARQUEVOITURES:
 return{
 ...state,
 marquevoitures:action.payload,

 };
 default: return state
 }
}
export default marquevoituresReducer 