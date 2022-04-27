'use strict';

/**
 * our-quality service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::our-quality.our-quality');
