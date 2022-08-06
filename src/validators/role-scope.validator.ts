import { body } from 'express-validator';

export const roleScopeValidation = [body('roleScopeCode').not().isEmpty().withMessage('Role Scope Must Not be null')];
