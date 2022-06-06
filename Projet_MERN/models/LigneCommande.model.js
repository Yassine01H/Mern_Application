import mongoose from "mongoose"
var ligneCommandeSchema = mongoose.Schema({
 quantitecommandee: Number,
 totligne: Number,
 refvoiture: {
 type: mongoose.Schema.Types.ObjectId,
 ref: 'Voiture'
 },
 refcommande: {
 type: mongoose.Schema.Types.ObjectId,
 ref: 'Commande'
 },
})
const LigneCommande = mongoose.model('LigneCommande', ligneCommandeSchema);
export default LigneCommande 