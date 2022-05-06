'use strict';

/**
 * test-block router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::test-block.test-block');
