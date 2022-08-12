import knex from "knex";
import { attachPaginate } from 'knex-paginate';
import { development } from "../../knexfile";

const config = development;

const db = knex(config);

attachPaginate();

export default db;
