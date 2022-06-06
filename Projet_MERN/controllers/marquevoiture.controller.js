import mongoose from 'mongoose';
import Marquevoiture from '../models/Marquevoiture.model.js';
export const getMarquesvoitures = async (req, res) => {
try {
const cat = await Marquevoiture.find();
res.status(200).json(cat);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const getMarquevoitureByID = async (req, res) => {
try {
const cat = await Marquevoiture.findById(req.params.id);
res.status(200).json(cat);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const createMarquevoiture = async (req, res) => {
const { nom, description, image} = req.body;
const newMarquevoiture = new Marquevoiture({ nom:nom, description:description,
image:image })
try {
await newMarquevoiture.save();
res.status(201).json(newMarquevoiture );
} catch (error) {
res.status(409).json({ message: error.message });
}
}
export const updateMarquevoiture= async (req, res) => {
const { id } = req.params;
const { nom, description, image} = req.body;
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de marque voiture avec un id: ${id}`);
const aut1 = { nom:nom, description:description, image:image};
await Marquevoiture.findByIdAndUpdate(id, aut1);
res.json(aut1);
}
export const deleteMarquevoiture = async (req, res) => {
const { id } = req.params;
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de marque voiture avec l'ID: ${id}`);
await Marquevoiture.findByIdAndDelete(id);
res.json({ message: "marque voiture supprimé avec succès." });
}