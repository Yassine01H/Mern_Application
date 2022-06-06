import mongoose from 'mongoose';
import Employeur from '../models/Employeurs.model.js';

export const getEmployeurs = async (req, res) => {
 try {
 const cat = await Employeur.find().populate('categemployeurs_id');
 res.status(200).json(cat);
 } catch (error) {
 res.status(404).json({ message: error.message });
 }
}

export const getEmployeurByID = async (req, res) => {
 try {
 const liv = await Employeur.findById(req.params.id).populate('');
 res.status(200).json(liv);
 } catch (error) {
 res.status(404).json({ message: error.message });
 }
}
export const createEmployeur = async (req, res) => {
 const {
image,nom,prenom,email,telephone,salaire,prime,categemployeurs_id } =
req.body;

 const newEmployeur = new Employeur({
image:image,nom:nom,prenom:prenom,email:email,telephone:telephone,salaire:salaire,prime:prime,categemployeurs_id:categemployeurs_id})
 try {
 await newEmployeur.save();
 res.status(201).json(newEmployeur );
 } catch (error) {
 res.status(409).json({ message: error.message });
 }
}
export const updateEmployeur= async (req, res) => {
 const { id } = req.params;
 const {
image,nom,prenom,email,telephone,salaire,prime,categemployeurs_id } =
req.body;
 if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de Employeur avec un id: ${id}`);
 const liv1 = {
image:image,nom:nom,prenom:prenom,email:email,telephone:telephone,salaire:salaire,prime:prime,categemployeurs_id:categemployeurs_id
};
 await Employeur.findByIdAndUpdate(id, liv1);
 res.json(liv1);
}
export const deleteEmployeur = async (req, res) => {
 const { id } = req.params;
 if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de Employeur avec l'ID: ${id}`);
 await Employeur.findByIdAndDelete(id);
 res.json({ message: "Employeur supprimé avec succès." });
} 
