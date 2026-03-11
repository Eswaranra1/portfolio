import express from 'express';
import { submitContact } from '../controllers/contactController.js';
import { contactValidation, validate } from '../middleware/validateContact.js';

const router = express.Router();

router.post('/', contactValidation, validate, submitContact);

export default router;
