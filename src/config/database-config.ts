import { Knex } from 'knex'
import { env } from '../env'

export class DatabaseConfig implements Knex.Config {
  client?: string | typeof Knex.Client = ''
  migrations?: Knex.MigratorConfig = {}
  useNullAsDefault?: boolean = true
  connection?: Knex.Sqlite3ConnectionConfig | string =
    {} as Knex.Sqlite3ConnectionConfig

  constructor() {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL env not found')
    }

    this.client = env.DATABASE_CLIENT
    this.useNullAsDefault = true
    this.connection =
      env.DATABASE_CLIENT === 'sqlite'
        ? {
            filename: env.DATABASE_URL,
          }
        : env.DATABASE_URL
    this.migrations.extension = 'ts'
    this.migrations.directory = './db/migrations'
  }
}

export const databaseConfig = new DatabaseConfig()
