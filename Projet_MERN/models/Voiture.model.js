import mongoose from "mongoose"
var VoitureSchema = mongoose.Schema({
 image: String,
 nom: String,
 prix: String,
 date: String,
 kms: String,
 localite: String,
 couleur: String,
 energie: String,
 boitevitesse: String,
 marquevoitures_id:{
 type: mongoose.Schema.Types.ObjectId,
 ref: 'Marquevoiture'
 }


})
const Voiture = mongoose.model('Voiture', VoitureSchema);
export default Voiture