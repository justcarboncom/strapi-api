module.exports = ({env}) => {
  const bucket = env('AWS_BUCKET_NAME');
  const s3 = `https://${bucket}.s3.amazonaws.com`;
  return [
  'strapi::errors',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            "'unsafe-inline'",
            'data:',
            'blob:',
            'dl.airtable.com',
            s3,
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            s3,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
]};
