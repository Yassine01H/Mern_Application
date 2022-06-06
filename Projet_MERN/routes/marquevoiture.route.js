import express from 'express';
const router = express.Router();
import { getMarquesvoitures, getMarquevoitureByID, createMarquevoiture, updateMarquevoiture, deleteMarquevoiture } from '../controllers/marquevoiture.controller.js';
/**
* @route GET /api/auteurs
* @desc Get All auteurs
* @access Public
*/
router.get('/', getMarquesvoitures);
/**
* @route POST /api/auteurs
* @desc Ajouter un auteur
* @access Public
*/
router.post('/', createMarquevoiture);
/**
* @route GET /api/auteurs/:id
* @desc Renvoyer un auteur
* @access Public
*/
router.get('/:id', getMarquevoitureByID);
/**
* @route PUT /api/auteurs/:id
* @desc Modifier un auteur
* @access Public
*/
router.put('/:id', updateMarquevoiture);
/**
* @route DELETE /api/auteurs/:id
* @desc Supprimer un auteur
* @access Public
*/
router.delete('/:id', deleteMarquevoiture);
export default router;