'use strict';

/**
 * buy-and-burn service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::buy-and-burn.buy-and-burn');
