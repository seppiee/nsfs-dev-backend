export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_PROD_NAME', 'nsfs-db-production'),
      user: env('DATABASE_PROD_USERNAME'),
      password: env('DATABASE_PROD_PASSWORD'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});