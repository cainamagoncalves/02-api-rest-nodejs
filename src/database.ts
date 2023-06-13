import { knex as setupKnex } from 'knex'
import databaseConfig from '../knexfile'

export const knex = setupKnex(databaseConfig)
