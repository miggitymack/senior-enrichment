const router = require('express').Router();

const Campus = require('../../db/models/campus');

router.get('/', (req, res, next) => {
  Campus.findAll().then(data => res.send(data));
});

router.get('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId).then(data => res.send(data));
});

router.post('/', (req, res, next) => {
  Campus.create(req.body).then(data => res.send(data));
});

router.put('/:campusId', (req, res, next) => {
  Campus.update(req.body).then(data => res.send(data));
});

router.delete('/:campusId', (req, res, next) => {
  Campus.destroy(req.body).then(data => res.send(data));
});
module.exports = router;
