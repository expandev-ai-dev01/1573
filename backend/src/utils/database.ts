import sql from 'mssql';
import { config } from '@/config';

/**
 * @summary Database connection pool
 */
let pool: sql.ConnectionPool | null = null;

/**
 * @summary Expected return types for database operations
 */
export enum ExpectedReturn {
  Single = 'Single',
  Multiple = 'Multiple',
  Multi = 'Multi',
}

/**
 * @interface IRecordSet
 * @description Generic record set interface
 */
export interface IRecordSet<T> extends Array<T> {}

/**
 * @summary Gets or creates database connection pool
 * @returns {Promise<sql.ConnectionPool>} Database connection pool
 */
export async function getPool(): Promise<sql.ConnectionPool> {
  if (!pool) {
    pool = await sql.connect({
      server: config.database.host,
      port: config.database.port,
      user: config.database.user,
      password: config.database.password,
      database: config.database.database,
      options: config.database.options,
    });
  }
  return pool;
}

/**
 * @summary Executes database stored procedure
 *
 * @param routine Stored procedure name
 * @param parameters Procedure parameters
 * @param expectedReturn Expected return type
 * @returns Database operation result
 */
export async function dbRequest(
  routine: string,
  parameters: Record<string, any>,
  expectedReturn: ExpectedReturn
): Promise<any> {
  const pool = await getPool();
  const request = pool.request();

  for (const [key, value] of Object.entries(parameters)) {
    request.input(key, value);
  }

  const result = await request.execute(routine);

  switch (expectedReturn) {
    case ExpectedReturn.Single:
      return result.recordset[0];
    case ExpectedReturn.Multiple:
      return result.recordset;
    case ExpectedReturn.Multi:
      return result.recordsets;
    default:
      return result.recordset;
  }
}

/**
 * @summary Closes database connection pool
 */
export async function closePool(): Promise<void> {
  if (pool) {
    await pool.close();
    pool = null;
  }
}
