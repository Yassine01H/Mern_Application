import mongoose from 'mongoose';
import Voiture from '../models/Voiture.model.js';
export const getVoiture = async (req, res) => {
 try {

 /*const cat = await Voiture.find().populate('');
 res.status(200).json(cat);*/

 const cat = await Voiture.find().populate('marquevoitures_id');
 res.status(200).json(cat);

 
 } catch (error) {
 res.status(404).json({ message: error.message });
 }
}

export const getVoitureByID = async (req, res) => {
 try {
 const liv = await Voiture.findById(req.params.id).populate('');
 res.status(200).json(liv);
 } catch (error) {
 res.status(404).json({ message: error.message });
 }
}
export const createVoiture = async (req, res) => {
 const {
image,nom,prix,date,kms,localite,couleur,energie,boitevitesse,marquevoitures_id} =
req.body;

 const newVoiture = new Voiture({
image:image,nom:nom,prix:prix,date:date,kms:kms,localite:localite,couleur:couleur,energie:energie,boitevitesse:boitevitesse,marquevoitures_id:marquevoitures_id})
 try {
 await newVoiture.save();
 res.status(201).json(newVoiture );
 } catch (error) {
 res.status(409).json({ message: error.message });
 }
}
export const updateVoiture= async (req, res) => {
 const { id } = req.params;
 const {
image,nom,prix,date,kms,localite,couleur,energie,boitevitesse,marquevoitures_id } =
req.body;
 if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de voiture avec un id: ${id}`);
 const Voit1 = {
    image:image,nom:nom,prix:prix,date:date,kms:kms,localite:localite,couleur:couleur,energie:energie,boitevitesse:boitevitesse,marquevoitures_id:marquevoitures_id
};
 await Voiture.findByIdAndUpdate(id, Voit1);
 res.json(Voit1);
}
export const deleteVoiture = async (req, res) => {
 const { id } = req.params;
 if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de Voiture avec l'ID: ${id}`);
 await Voiture.findByIdAndDelete(id);
 res.json({ message: "Voiture supprimé avec succès." });
} 
