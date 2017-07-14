'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:  '191.52.51.28',

  // Server port
  port:   8100,

  // MongoDB connection options
  mongo: {
    uri:  'mongodb://localhost/sitebraz'
  },

  seedDB: false
};
