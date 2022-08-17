/* eslint-disable @typescript-eslint/no-unused-vars */
import bcrypt from 'bcrypt';
export function hassPass(password: string) {
  const salt = bcrypt.genSaltSync(10);
  const hashPass = bcrypt.hashSync(password, salt);

  return hashPass;
}
