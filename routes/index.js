import express from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';

const router = express.Router();

// the get Routes is here
router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);

// the post Routes is here
router.post('/users', UsersController.postNew);

module.exports = router;
