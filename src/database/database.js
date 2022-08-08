import knex from 'knex';
import { development } from '../../knexfile';

const config = development;

const db = knex(config);

export default db;