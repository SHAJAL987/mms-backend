/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDatabaseType } from '../config/app.config';

export function getFileType(): any {
  const database = getDatabaseType();

  switch (database) {
    case 'postgres':
      return 'bytea';
    case 'mssql':
      return 'varbinary';
    case 'mysql':
      return 'blob';
    case 'mariadb':
      return 'blob';
    case 'oracle':
      return 'blob';
    default:
      return 'bytea';
  }
}
