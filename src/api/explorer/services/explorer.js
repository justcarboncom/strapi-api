'use strict';

/**
 * explorer service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::explorer.explorer');
