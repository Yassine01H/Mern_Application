import express from 'express';
const router = express.Router();
import { getEmployeurs, getEmployeurByID, createEmployeur, updateEmployeur, deleteEmployeur } from'../controllers/employeurs.controller.js';
import {auth} from "../middleware/auth.js"
/**
 * @route GET /api/livres
 * @desc Get All livres
 * @access Public
 */
router.get('/', getEmployeurs);
/**
 * @route POST /api/livres
 * @desc Ajouter un livre
 * @access Public
 */
router.post('/', createEmployeur);
/**
 * @route GET /api/livres/:id
 * @desc Renvoyer un livre
 * @access Public
 */
router.get('/:id', getEmployeurByID);
/**
 * @route PUT /api/livres/:id
 * @desc Modifier un livre
 * @access Public
 */
router.put('/:id', updateEmployeur);
/**
 * @route DELETE /api/livres/:id
 * @desc Supprimer un livre
 * @access Public
 */
router.delete('/:id', deleteEmployeur);
export default router; 