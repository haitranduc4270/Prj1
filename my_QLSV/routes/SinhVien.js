var express = require('express');
var router = express.Router();
let studentController = require('../controllers/StudentController')

/* GET home page. */
router.get('/',studentController.getStudents);
router.post('/', studentController.postStudent);
router.put('/:MSSV', studentController.putStudent);
router.delete('/:MSSV', studentController.deleteStudent);
router.get('/:MSSV', studentController.getStudent);




module.exports = router;
