/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import { getTempAuthJWTSecret } from '@config/secrets.config';
import jwt from 'jsonwebtoken';

export function token(tokenObj: Object) {
  const loginToken = jwt.sign(tokenObj, getTempAuthJWTSecret(), { expiresIn: 300 });
  return loginToken;
}
