import { Request, Response } from 'express';
import { StudentServices } from './student.service';
// import studentValidationSchema from './student.validation';
import { z } from 'zod';

const createStudent = async (req: Request, res: Response) => {
  try {
    //createing a schema  validation using ZOD
    const studentValidationSchema = z.object({
      id: z.setting(),
      name: z.object({
        firstName: z
          .string()
          .max(2, {
            message:
              'First Name max length is 20 characters || not more then 20 characters',
          }),
      }),
    });

    const { student: studentData } = req.body;

    //data validation with using Joi validation
    // const { error, value } = studentValidationSchema.validate(studentData);

    // will call service function to send this data to the server
    const result = await StudentServices.createStudentIntoDB(studentData);

    // console.log({ error }, { value });
    if (error) {
      res.status(500).json({
        success: false,
        message: 'something went wrong',
        error,
      });
    }

    // send response kore dite pari
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Students are retrived successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Students is retrived successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
