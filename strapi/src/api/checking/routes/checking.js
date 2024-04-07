'use strict';

/**
 * checking router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::checking.checking');
