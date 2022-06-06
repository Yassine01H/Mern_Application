import mongoose from 'mongoose';
import Categemployeur from '../models/categemployeurs.model.js';

export const getcategemployeur = async (req, res) => {
try {
const cat = await Categemployeur.find();
res.status(200).json(cat);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const getcategemployeurID = async (req, res) => {
try {
const cat = await Categemployeur.findById(req.params.id);
res.status(200).json(cat);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const createcategemployeur = async (req, res) => {
const { titre, description , image} = req.body;
const newCategemployeur = new Categemployeur({ titre:titre, description:description,
image:image })
try {
await newCategemployeur.save();
res.status(201).json(newCategemployeur );
} catch (error) {
res.status(409).json({ message: error.message });
}
}
export const updateCategemployeur= async (req, res) => {
const { id } = req.params;
const { titre , description , image} = req.body;
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de Categemployeur avec un id: ${id}`);
const aut1 = { titre:titre, description:description, image:image, _id: id };
await Categemployeur.findByIdAndUpdate(id, aut1);
res.json(aut1);
}
export const deleteCategemployeur = async (req, res) => {
const { id } = req.params;
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de Categemployeur avec l'ID: ${id}`);
await Categemployeur.findByIdAndDelete(id);
res.json({ message: "Categemployeur supprimé avec succès." });
}