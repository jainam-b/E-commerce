import {  PgTable, PgColumn } from 'drizzle-orm-pg';
import { Pool } from 'pg';

// Initialize PostgreSQL pool
const pool = new Pool({
  connectionString: ' ',
});

// Initialize Drizzle ORM with PostgreSQL pool
export const db = drizzle(pool);

function drizzle(pool: Pool) {
  throw new Error('Function not implemented.');
}
