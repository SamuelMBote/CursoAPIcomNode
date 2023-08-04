const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer-controller');

router.get('/', controller.get);
router.get('/:email', controller.getByEmail);
router.get('/admin/:id', controller.getById);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;
