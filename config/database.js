
module.exports = ({ env }) => {
  return {
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'jc-strapi-dev.c19d2aywvrnd.us-east-1.rds.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', process.env.DATABASE_PASSWORD),
      ssl: env.bool('DATABASE_SSL', false),      
    },
  },
}
}
