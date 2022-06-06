import mongoose from "mongoose"
var EmployeurSchema = mongoose.Schema({
 image : String,
 nom: String,
 prenom: String,
 email: String,
 telephone: String,
 salaire: String,
 prime: String,
 categemployeurs_id: [{
 type: mongoose.Schema.Types.ObjectId,
 ref: 'categemployeurs '
 }]
})
const Employeurs = mongoose.model('Employeurs', EmployeurSchema);
export default Employeurs