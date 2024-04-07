'use strict';

/**
 * checking controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::checking.checking');
