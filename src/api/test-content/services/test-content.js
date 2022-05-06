'use strict';

/**
 * test-content service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-content.test-content');
