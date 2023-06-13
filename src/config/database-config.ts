import { Knex } from 'knex'
import { env } from '../env'

export class DatabaseConfig implements Knex.Config {
  client?: string | typeof Knex.Client = ''
  migrations?: Knex.MigratorConfig = {}
  useNullAsDefault?: boolean = true
  connection?: Knex.Sqlite3ConnectionConfig = {} as Knex.Sqlite3ConnectionConfig

  constructor() {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL env not found')
    }

    this.client = 'sqlite'
    this.useNullAsDefault = true
    this.connection.filename = env.DATABASE_URL
    this.migrations.extension = 'ts'
    this.migrations.directory = './db/migrations'
  }
}

export const databaseConfig = new DatabaseConfig()
