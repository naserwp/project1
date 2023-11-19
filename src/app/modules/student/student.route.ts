import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

//will call controller function

router.post('/create-student', StudentControllers.createStudent);
// route theke > controler > theke > service > theke > query kore model data insert kore dibe.
router.get('/', StudentControllers.getAllStudents);

router.get('/:studentId', StudentControllers.getSingleStudent);

export const StudentRoutes = router;
