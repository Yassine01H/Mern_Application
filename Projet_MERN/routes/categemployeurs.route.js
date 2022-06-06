import express from 'express';
const router = express.Router();
import { getcategemployeur, getcategemployeurID, createcategemployeur, updateCategemployeur, deleteCategemployeur } from '../controllers/categemployeurs.controller.js';
/**
* @route GET /api/auteurs
* @desc Get All auteurs
* @access Public
*/
router.get('/', getcategemployeur);
/**
* @route POST /api/auteurs
* @desc Ajouter un auteur
* @access Public
*/
router.post('/', createcategemployeur);
/**
* @route GET /api/auteurs/:id
* @desc Renvoyer un auteur
* @access Public
*/
router.get('/:id', getcategemployeurID);
/**
* @route PUT /api/auteurs/:id
* @desc Modifier un auteur
* @access Public
*/
router.put('/:id', updateCategemployeur);
/**
* @route DELETE /api/auteurs/:id
* @desc Supprimer un auteur
* @access Public
*/
router.delete('/:id', deleteCategemployeur);
export default router;