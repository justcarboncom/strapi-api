'use strict';

/**
 * project-developer service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::project-developer.project-developer');
