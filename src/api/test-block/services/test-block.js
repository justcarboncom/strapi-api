'use strict';

/**
 * test-block service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-block.test-block');
