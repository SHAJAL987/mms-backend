import { body } from 'express-validator';

export const CrateRoleScopeValidation = [
  body('role_scope_code').not().isEmpty().withMessage('Role Scope Must Not be null'),
  body('role_scope_code').isLength({ max: 3 }).withMessage('Role Scope Cannot be Bigger than 3 Char.'),
  body('scope_name').not().isEmpty().withMessage('Scope Name Must not be Null'),
  body('scope_name').isLength({ max: 50 }).withMessage('Scope Name Cannot be Bigger than 50 Char.'),
  body('is_visible').isLength({ max: 1 }).withMessage('Is Vasible Cannot be Bigger than 1'),
  body('status').isLength({ max: 1 }).withMessage('Status Cannot be Bigger than 1'),
  body('create_by').not().isEmpty().withMessage('Create By Cannot be Empty.'),
];

export const UpdateRoleScopeValidation = [
  body('scope_name').isLength({ max: 50 }).withMessage('Scope Name Cannot be Bigger than 50 Char.'),
  body('is_visible').isLength({ max: 1 }).withMessage('Is Vasible Cannot be Bigger than 1'),
  body('status').isLength({ max: 1 }).withMessage('Status Cannot be Bigger than 1'),
];
