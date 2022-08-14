import { body } from 'express-validator';

export const userCerationValidation = [
  body('user_code').not().isEmpty().withMessage('User Code Cannor be Empty.'),
  body('user_code').isLength({ max: 20 }).withMessage('User Code Cannot be Bigger than 20 Char'),
  body('user_name').not().isEmpty().withMessage('User Name Cannot be Empty.'),
  body('email').not().isEmpty().withMessage('Email Cannot be Empty.'),
  body('email').isEmail().withMessage('Provide Valid Email.'),
  body('mobile_no').not().isMobilePhone('bn-BD').withMessage('Provide Valid Mobile Number.'),
  body('password').not().isEmpty().withMessage('Password Cannot be Empty.'),
  body('user_type').isLength({ max: 3 }).withMessage('User Type Cannot be Bigger than 3 Char.'),
  body('create_by').not().isEmpty().withMessage('Run User Cannot be Empty.'),
];
