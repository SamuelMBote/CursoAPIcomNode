const express = require('express');
const router = express.Router();
const controller = require('../controllers/order-controller');

router.get('/', controller.get);
router.get('/:number', controller.getByNumber);
router.post('/', controller.post);
router.put('/:number', controller.put);
router.delete('/:number', controller.delete);

module.exports = router;
