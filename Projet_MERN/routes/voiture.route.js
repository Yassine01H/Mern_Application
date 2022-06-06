import express from 'express';
import {auth} from "../middleware/auth.js"
const router = express.Router();
import { getVoiture, getVoitureByID, createVoiture, updateVoiture, deleteVoiture } from'../controllers/voiture.controller.js';
/**
 * @route GET /api/livres
 * @desc Get All livres
 * @access Public
 */
router.get('/',getVoiture); 
/**
 * @route POST /api/livres
 * @desc Ajouter un livre
 * @access Public
 */
 router.post('/', createVoiture);
 /**
  * @route GET /api/livres/:id
  * @desc Renvoyer un livre
  * @access Public
  */
 router.get('/:id', getVoitureByID);
 /**
  * @route PUT /api/livres/:id
  * @desc Modifier un livre
  * @access Public
  */
 router.put('/:id', updateVoiture);
 /**
  * @route DELETE /api/livres/:id
  * @desc Supprimer un livre
  * @access Public
  */
 router.delete('/:id', deleteVoiture);
 export default router;
