'use strict';

/**
 * test-content router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::test-content.test-content');
