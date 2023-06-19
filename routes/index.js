import express from 'express';
import AppController from '../controllers/AppController';

const router = express.Router();

// the get Routes is here
router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);

module.exports = router;
