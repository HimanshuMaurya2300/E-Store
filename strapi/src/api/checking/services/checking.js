'use strict';

/**
 * checking service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::checking.checking');
