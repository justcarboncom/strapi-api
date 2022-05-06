'use strict';

/**
 *  test-content controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::test-content.test-content');
