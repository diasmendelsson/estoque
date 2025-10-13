import pg from 'pg';
import { Pool } from 'pg';

const globalForPg = globalThis;

let pulo;

if(!globalForPg.pgPool){
    globalForPg.pgPool = new Pool({
        user: process.env.DB_USER,
        host: String(process.env.DB_HOST || ''),
        database: process.env.DB_NAME,
        password: String( process.env.DB_PASSWORD || ''),
        port: String(process.env.DB_PORT || ''),
    });
}

pulo = globalForPg.pgPool;

export default pulo;