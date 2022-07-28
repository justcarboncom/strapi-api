'use strict';

/**
 * popular-post service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::popular-post.popular-post');
