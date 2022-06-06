import { combineReducers } from "redux";
import voitureReducer from "./voituresReducer";
import marquevoituresReducer from "./marquevoituresReducer"; 
const rootReducer= combineReducers({
 allvoitures:voitureReducer,
 allmarquevoitures:marquevoituresReducer, 
});
export default rootReducer