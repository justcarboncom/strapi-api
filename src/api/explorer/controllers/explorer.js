'use strict';

/**
 *  explorer controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::explorer.explorer');
