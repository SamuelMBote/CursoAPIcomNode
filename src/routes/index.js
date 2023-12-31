const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    title: 'Node Store API',
    version: '0.0.1',
  });
});

router.post('/', (req, res, next) => {
  res.status(200).send(req.body);
});

router.put('/:id', (req, res, next) => {
  let id = req.params.id;
  req.body.id = id;
  res.status(200).send(req.body);
});

router.delete('/:id', (req, res, next) => {
  let id = req.params.id;
  req.body.id = id;
  res.status(200).send(req.body);
});

module.exports = router;
