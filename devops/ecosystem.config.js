module.exports = {
    apps: [
      {
        name: 'strapi-api',
        cwd: '/home/ubuntu/strapi-api',
        script: 'npm',
        args: 'start',
        env: {
          NODE_ENV: 'production',
          DATABASE_HOST: 'jc-strapi-dev.c19d2aywvrnd.us-east-1.rds.amazonaws.com',
          DATABASE_PORT: '5432',
          DATABASE_NAME: 'justcarbon-api-strapi',
          DATABASE_USERNAME: 'postgres',
          DATABASE_PASSWORD: '',
          AWS_ACCESS_KEY_ID: 'AKIAU4SXE33E3IWJVGFA',
          AWS_ACCESS_SECRET: '',
          AWS_REGION: 'us-east-1',
          AWS_BUCKET_NAME: 'strapi-dev-storage',
        },
      },
    ],
  };