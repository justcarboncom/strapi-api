'use strict';

/**
 * explorer router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::explorer.explorer');
