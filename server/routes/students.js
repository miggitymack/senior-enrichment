const router = require('express').Router();

const Student = require('../../db/models/student');

router.get('/', function(req, res, next) {
  Student.findAll();
});

router.get('/:studentId', function(req, res, next) {
  Student.findById(req.params.studentId);
});

router.post('/', function(req, res, next) {
  Student.create(req.body);
});

router.put('/:studentId', function(req, res, next) {
  Student.update(req.body);
});

router.delete('/:studentId', function(req, res, next) {
  Student.destroy(req.body);
});
module.exports = router;
